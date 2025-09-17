(function () { 
    'use strict' 
    
    Lampa.Platform.tv() 
    
    function log() { 
        var args = Array.prototype.slice.call(arguments) 
        console.log.apply(console, ["Torr"].concat(args)) 
    } 
    
    function fetchWithXHR(url, callback, errorCallback) { 
        var xhr = new XMLHttpRequest() 
        xhr.open('GET', url, true) 
        xhr.onload = function() { 
            if (xhr.status >= 200 && xhr.status < 300) { 
                callback(xhr.responseText) 
            } else { 
                errorCallback(xhr.statusText) 
            } 
        } 
        xhr.onerror = function() { 
            errorCallback("Ошибка сети") 
        } 
        xhr.send() 
    }
    
    // Функция для закрытия TorrServer
    function closeTorrServer() {
        log("Closing TorrServer...")
        try {
            webOS.service.request("luna://com.webos.applicationManager", {
                method: "close",
                parameters: {
                    id: "torrserv.matrix.app"
                },
                onSuccess: function (inResponse) {
                    log("Server:", "TorrServer closed successfully")
                },
                onFailure: function (inError) {
                    log("Server:", "Failed to close TorrServer")
                    log("Server:", "[" + inError.errorCode + "]", inError.errorText)
                }
            })
        } catch (error) {
            log("Error closing TorrServer:", error.message)
        }
    }
    
    // Регистрируем обработчики закрытия приложения
    function registerAppCloseHandlers() {
        // Обработчик для закрытия браузера/приложения
        window.addEventListener('beforeunload', function(e) {
            closeTorrServer()
        })
        
        window.addEventListener('unload', function() {
            closeTorrServer()
        })
        
        // Обработчик для WebOS
        if (typeof webOS !== 'undefined') {
            try {
                // Слушаем события закрытия приложения
                webOS.service.request("luna://com.webos.service.applicationManager", {
                    method: "addAppCloseStatusListener",
                    parameters: {},
                    onSuccess: function(inResponse) {
                        log("App close listener registered")
                    },
                    onFailure: function(inError) {
                        log("Failed to register app close listener")
                    }
                })
                
                // Также слушаем события запуска других приложений (когда пользователь уходит из Лампы)
                webOS.service.request("luna://com.webos.service.applicationManager", {
                    method: "addLaunchListener",
                    parameters: {},
                    onSuccess: function(inResponse) {
                        log("Launch listener registered")
                    },
                    onFailure: function(inError) {
                        log("Failed to register launch listener")
                    }
                })
            } catch (error) {
                log("Error registering listeners:", error.message)
            }
        }
        
        // Интеграция с Lampa - слушаем события выхода
        if (typeof Lampa !== 'undefined') {
            // Попробуем несколько возможных событий выхода
            if (Lampa.Listeners && Lampa.Listeners.add) {
                Lampa.Listeners.add('app_exit', closeTorrServer)
                Lampa.Listeners.add('exit', closeTorrServer)
                Lampa.Listeners.add('close', closeTorrServer)
            }
            
            // Если есть метод для подписки на события
            if (Lampa.on && typeof Lampa.on === 'function') {
                Lampa.on('exit', closeTorrServer)
                Lampa.on('app_close', closeTorrServer)
            }
        }
    }
    
    log("Start torr.js") 
    
    // Регистрируем обработчики закрытия
    registerAppCloseHandlers()
    
    // Проверяем статус TorrServer и запускаем если нужно
    fetchWithXHR(
        "http://localhost:8090",
        function(responseText) { 
            log("Server is up") 
        },
        function(error) { 
            log("Server is down!") 
            log("Error:", error) 
            try { 
                webOS.service.request("luna://com.webos.applicationManager", { 
                    method: "launch", 
                    parameters: { 
                        id: "torrserv.matrix.app" 
                    }, 
                    onSuccess: function (inResponse) { 
                        log("Server:", "TorrServer launched successfully") 
                    }, 
                    onFailure: function (inError) { 
                        log("Server:", "Failed to launch TorrServer") 
                        log("Server:", "[" + inError.errorCode + "]", inError.errorText) 
                    }
                }) 
            } catch (error) { 
                log("Error launching TorrServer:", error.message) 
            } 
        } 
    )
    
    // Дополнительная защита - периодическая проверка статуса
    var checkInterval = setInterval(function() {
        fetchWithXHR(
            "http://localhost:8090",
            function(responseText) { 
                // Сервер работает, всё OK
            },
            function(error) { 
                log("TorrServer stopped working, trying to relaunch...")
                try { 
                    webOS.service.request("luna://com.webos.applicationManager", { 
                        method: "launch", 
                        parameters: { 
                            id: "torrserv.matrix.app" 
                        }
                    }) 
                } catch (error) { 
                    log("Error relaunching TorrServer:", error.message) 
                }
            } 
        )
    }, 30000) // Проверяем каждые 30 секунд
    
    // Останавливаем проверку при закрытии
    window.addEventListener('beforeunload', function() {
        clearInterval(checkInterval)
    })

})()