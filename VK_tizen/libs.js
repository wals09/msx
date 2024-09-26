var msf = function(t) {
    function e(i) {
        if (n[i])
            return n[i].exports;
        var s = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(s.exports, s, s.exports, e),
        s.loaded = !0,
        s.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.p = "",
    e(0)
}([function(t, e, n) {
    var i, s = n(1);
    s.version = "{{version}}",
    i = function() {
        return s
    }
    .call(e, n, e, t),
    !(void 0 !== i && (t.exports = i)),
    t.exports = s
}
, function(t, e, n) {
    "use strict";
    var i = n(2)
      , s = (n(9),
    n(10))
      , o = n(15)
      , r = null;
    t.exports.logger = i.logger,
    t.exports.search = function(t) {
        return r || (r = new o),
        t && (r.once("found", function(e) {
            t(null, e)
        }),
        setTimeout(function() {
            r.start()
        }, 0)),
        r
    }
    ,
    t.exports.local = function(t) {
        s.getLocal(t)
    }
    ,
    t.exports.remote = function(t, e) {
        s.getByURI(t, e)
    }
}
, function(t, e, n) {
    t.exports = {
        logger: n(3),
        url: n(4),
        inherits: n(6),
        props: n(7),
        types: n(8),
        queryString: n(5)
    }
}
, function(t, e) {
    "use strict";
    function n(t) {
        return function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(t),
            s.log.apply(s, e)
        }
    }
    for (var i = ["error", "warn", "info", "verbose", "debug", "silly"], s = {
        level: "disabled",
        log: function(t) {
            if ("disabled" !== s.level && i.indexOf(t) <= i.indexOf(s.level)) {
                var e = Array.prototype.slice.call(arguments, 1);
                e.unshift("[MSF:" + t.toUpperCase() + "]"),
                console[t] ? console[t].apply(console, e) : console.log.apply(console, e)
            }
        }
    }, o = 0; o < i.length; o++) {
        var r = i[o];
        s[r] = n(r)
    }
    t.exports = s
}
, function(t, e, n) {
    "use strict";
    var i = n(5)
      , s = {
        isValid: function(t) {
            var e = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
            return !!t.match(e)
        },
        parse: function(t) {
            var e = {}
              , n = document.createElement("a");
            return n.href = t,
            e.href = n.href,
            e.protocol = n.protocol,
            e.hostname = n.hostname,
            e.port = n.port,
            e.pathname = n.pathname,
            e.search = n.search,
            e.hash = n.hash,
            e.host = n.host,
            e.queryString = i.parse(n.search),
            e
        }
    };
    t.exports = s
}
, function(t, e) {
    "use strict";
    /*!
	 query-string
	 Parse and stringify URL query strings
	 https://github.com/sindresorhus/query-string
	 by Sindre Sorhus
	 MIT License
	 */
    var n = {};
    n.parse = function(t) {
        return "string" != typeof t ? {} : (t = t.trim().replace(/^(\?|#)/, ""),
        t ? t.trim().split("&").reduce(function(t, e) {
            var n = e.replace(/\+/g, " ").split("=")
              , i = n[0]
              , s = n[1];
            return i = decodeURIComponent(i),
            s = void 0 === s ? null : decodeURIComponent(s),
            t.hasOwnProperty(i) ? Array.isArray(t[i]) ? t[i].push(s) : t[i] = [t[i], s] : t[i] = s,
            t
        }, {}) : {})
    }
    ,
    n.stringify = function(t) {
        return t ? Object.keys(t).map(function(e) {
            var n = t[e];
            return Array.isArray(n) ? n.map(function(t) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t)
            }).join("&") : encodeURIComponent(e) + "=" + encodeURIComponent(n)
        }).join("&") : ""
    }
    ,
    t.exports = n
}
, function(t, e) {
    "use strict";
    "function" == typeof Object.create ? t.exports = function(t, e) {
        t.super_ = e,
        t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    }
    : t.exports = function(t, e) {
        t.super_ = e;
        var n = function() {};
        n.prototype = e.prototype,
        t.prototype = new n,
        t.prototype.constructor = t
    }
}
, function(t, e) {
    "use strict";
    function n(t, e, n, i) {
        return {
            enumerable: t,
            configurable: e,
            writable: n,
            value: i
        }
    }
    t.exports = {
        readOnly: function(t, e) {
            Array.isArray(e) ? e.forEach(function(e) {
                Object.defineProperty(t, e, n(!0, !0, !1, t[e]))
            }) : Object.defineProperty(t, e, n(!0, !0, !1, t[e]))
        },
        private: function(t, e) {
            Array.isArray(e) ? e.forEach(function(e) {
                Object.defineProperty(t, e, n(!1, !0, !0, t[e]))
            }) : Object.defineProperty(t, e, n(!1, !0, !0, t[e]))
        }
    }
}
, function(t, e) {
    "use strict";
    t.exports = {
        isString: function(t) {
            return "string" == typeof t
        },
        isNull: function(t) {
            return null === t
        },
        isBoolean: function(t) {
            return "boolean" == typeof t
        },
        isNumber: function(t) {
            return "number" == typeof t
        },
        isObject: function(t) {
            return t === Object(t)
        },
        isArray: function(t) {
            return t.constructor === Array
        },
        isFunction: function(t) {
            return "function" == typeof t
        },
        isUndefined: function(t) {
            return "undefined" == typeof t
        }
    }
}
, function(t, e) {
    "use strict";
    function n() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function i(t) {
        return "function" == typeof t
    }
    function s(t) {
        return "number" == typeof t
    }
    function o(t) {
        return "object" == typeof t && null !== t
    }
    function r(t) {
        return void 0 === t
    }
    t.exports = n,
    n.EventEmitter = n,
    n.prototype._disabledEvents = {},
    n.prototype._events = void 0,
    n.prototype._maxListeners = void 0,
    n.defaultMaxListeners = 10,
    n.prototype.setMaxListeners = function(t) {
        if (!s(t) || t < 0 || isNaN(t))
            throw TypeError("n must be a positive number");
        return this._maxListeners = t,
        this
    }
    ,
    n.prototype.emit = function(t) {
        var e, n, s, c, a, l;
        if (this._events || (this._events = {}),
        this._disabledEvents[t])
            return !1;
        if ("error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if (e = arguments[1],
            e instanceof Error)
                throw e;
            throw TypeError('Uncaught, unspecified "error" event.')
        }
        if (n = this._events[t],
        r(n))
            return !1;
        if (i(n))
            switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                for (s = arguments.length,
                c = new Array(s - 1),
                a = 1; a < s; a++)
                    c[a - 1] = arguments[a];
                n.apply(this, c)
            }
        else if (o(n)) {
            for (s = arguments.length,
            c = new Array(s - 1),
            a = 1; a < s; a++)
                c[a - 1] = arguments[a];
            for (l = n.slice(),
            s = l.length,
            a = 0; a < s; a++) {
                var h = l[a].apply(this, c);
                if ("stopEvent" === h)
                    break
            }
        }
        return !0
    }
    ,
    n.prototype.addListener = function(t, e) {
        var s;
        if (!i(e))
            throw TypeError("listener must be a function");
        if (this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e),
        this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
        o(this._events[t]) && !this._events[t].warned) {
            var s;
            s = r(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners,
            s && s > 0 && this._events[t].length > s && (this._events[t].warned = !0,
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length),
            "function" == typeof console.trace && console.trace())
        }
        return this
    }
    ,
    n.prototype.on = function(t, e) {
        n.prototype.addListener.apply(this, arguments)
    }
    ,
    n.prototype.once = function(t, e) {
        function n() {
            this.removeListener(t, n),
            s || (s = !0,
            e.apply(this, arguments))
        }
        if (!i(e))
            throw TypeError("listener must be a function");
        var s = !1;
        return n.listener = e,
        this.on(t, n),
        this
    }
    ,
    n.prototype.removeListener = function(t, e) {
        var n, s, r, c;
        if (!i(e))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[t])
            return this;
        if (n = this._events[t],
        r = n.length,
        s = -1,
        n === e || i(n.listener) && n.listener === e)
            delete this._events[t],
            this._events.removeListener && this.emit("removeListener", t, e);
        else if (o(n)) {
            for (c = r; c-- > 0; )
                if (n[c] === e || n[c].listener && n[c].listener === e) {
                    s = c;
                    break
                }
            if (s < 0)
                return this;
            1 === n.length ? (n.length = 0,
            delete this._events[t]) : n.splice(s, 1),
            this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }
    ,
    n.prototype.off = function(t, e) {
        n.prototype.removeListener.apply(this, arguments)
    }
    ,
    n.prototype.removeAllListeners = function(t) {
        var e, n;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
            this;
        if (0 === arguments.length) {
            for (e in this._events)
                "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (n = this._events[t],
        i(n))
            this.removeListener(t, n);
        else
            for (; n.length; )
                this.removeListener(t, n[n.length - 1]);
        return delete this._events[t],
        this
    }
    ,
    n.prototype.listeners = function(t) {
        var e;
        return e = this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }
    ,
    n.prototype.disableEvent = function(t) {
        t && "string" == typeof t && (this._disabledEvents[t] = !0)
    }
    ,
    n.prototype.enableEvent = function(t) {
        t && "string" == typeof t && delete this._disabledEvents[t]
    }
    ,
    n.listenerCount = function(t, e) {
        var n;
        return n = t._events && t._events[e] ? i(t._events[e]) ? 1 : t._events[e].length : 0
    }
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        this.id = t.id,
        this.name = t.name,
        this.version = t.version,
        this.type = t.type,
        this.uri = t.uri,
        this.device = t.device,
        o.readOnly(this, ["id", "name", "version", "type", "uri", "device"])
    }
    var s = n(2)
      , o = s.props
      , r = n(11)
      , c = n(12);
    i.prototype.application = function(t, e) {
        return new r(this,t,e)
    }
    ,
    i.prototype.channel = function(t) {
        return new c(this,t)
    }
    ,
    i.getLocal = function(t) {
        i.getByURI("http://127.0.0.1:8001/api/v2/", t)
    }
    ,
    i.getByURI = function(t, e) {
        var n = new XMLHttpRequest;
        n.timeout = 5e3,
        n.ontimeout = function() {
            e()
        }
        ,
        n.onload = function() {
            if (200 === this.status)
                try {
                    var t = JSON.parse(this.responseText);
                    e(null, new i(t))
                } catch (t) {
                    e(t)
                }
            else
                e()
        }
        ,
        n.open("get", t, !0),
        n.send()
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function i(t, e, n) {
        if (!r.isObject(t))
            throw new TypeError("service must be of type Service");
        if (!r.isString(e))
            throw new TypeError("id must be a valid string");
        if (!r.isString(n))
            throw new TypeError("channelId must be a valid string");
        this.type = e.match(/(file:\/\/|http(s)?:\/\/)/gim) ? h : l,
        i.super_.call(this, t, n),
        this.id = e,
        this.service = t,
        this.on("clientDisconnect", function(t) {
            t.isHost && this.disconnect()
        }
        .bind(this)),
        this.disableEvent("connect"),
        c.readOnly(this, "id"),
        c.private(this, "type", "service")
    }
    var s = n(2)
      , o = s.logger
      , r = s.types
      , c = s.props
      , a = n(12)
      , l = "applications"
      , h = "webapplication";
    s.inherits(i, a),
    i.prototype.connect = function(t, e) {
        if (!r.isObject(t))
            throw new TypeError("attributes must be a valid object");
        if (!r.isFunction(e))
            throw new TypeError("callback must be a valid function");
        a.prototype.connect.call(this, t, function(t, n) {
            if (t)
                return e(t);
            this.connected = !1;
            var i = function() {
                this.connected = !0,
                e && (o.debug("application.connect->callback", null, n),
                e(null, n)),
                o.debug('application.emit("connect")', n),
                this.enableEvent("connect"),
                this.emit("connect", n),
                this.disableEvent("connect")
            }
            .bind(this);
            this.once("ready", i)
        }
        .bind(this))
    }
    ,
    i.prototype.disconnect = function(t, e) {
        if (r.isFunction(t) && (e = t,
        t = !0),
        r.isUndefined(t) && (t = !0),
        t && this.clients.length <= 2) {
            var n = function(t) {
                a.prototype.disconnect.call(this, e)
            }
            .bind(this);
            "webapplication" === this.type ? this.invoke("ms.webapplication.stop", {
                url: this.id
            }, n) : this.invoke("ms.application.stop", {
                id: this.id
            }, n)
        } else
            a.prototype.disconnect.call(this, e)
    }
    ,
    i.prototype.install = function(t) {
        if (this.type === h)
            return t(new Error("web application cannot be installed"));
        var e, n = new XMLHttpRequest;
        n.timeout = 1e4,
        n.ontimeout = function() {
            e = new Error("Request Timeout"),
            e.code = 408,
            t(e)
        }
        ,
        n.onload = function() {
            200 === this.status ? t(null, !0) : (e = new Error(this.statusText),
            e.code = this.status,
            t(e))
        }
        ,
        n.open("put", this.service.uri + "applications/" + this.id, !0),
        n.send()
    }
    ,
    i.prototype.start = function(t) {
        var e, n = new XMLHttpRequest;
        n.timeout = 1e4,
        n.ontimeout = function() {
            e = new Error("Request Timeout"),
            e.code = 408,
            t(e)
        }
        ,
        n.onload = function() {
            200 === this.status ? t(null, !0) : (e = new Error(this.statusText),
            e.code = this.status,
            t(e))
        }
        ,
        this.type === h ? (n.open("post", this.service.uri + "webapplication/", !0),
        n.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        n.send(JSON.stringify({
            url: this.id
        }))) : (n.open("post", this.service.uri + "applications/" + this.id, !0),
        n.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        n.send(JSON.stringify({})))
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        if (o.debug("new Channel", arguments),
        !r.isObject(t))
            throw new TypeError("service must be of type Service");
        if (!r.isString(e))
            throw new TypeError("uri must be a valid string");
        i.super_.call(this);
        var n = this
          , a = s.url.parse(t.uri);
        this.connected = !1,
        this.clientId = null,
        this.connection = null,
        this.securityMode = !1,
        this.resultHandlers = {},
        this.connectionUrl = "ws://" + a.host + a.pathname + "channels/" + e,
        this.pingTimeout = null,
        this.pingInterval = null,
        this.clients = new h(this),
        Object.defineProperty(this, "isConnected", {
            get: function() {
                return n.connected
            }
        }),
        Object.defineProperty(this, "connectionTimeout", {
            set: function(t) {
                o.debug("updating connection timeout ", t),
                n.pingTimeout = t > 0 ? t : 0,
                this.isConnected && n.startHealthCheck()
            },
            get: function() {
                return n.pingTimeout
            }
        }),
        this.on("connect", this.startHealthCheck),
        this.on("disconnect", this.stopHealthCheck),
        c.readOnly(this, ["clients"]),
        c.private(this, ["connected", "clientId", "connection", "resultHandlers", "connectionUrl", "connectCallback", "pingInterval", "pingTimeout", "lastPingReceived", "securityMode"])
    }
    var s = n(2)
      , o = s.logger
      , r = s.types
      , c = s.props
      , a = n(9)
      , l = n(13)
      , h = n(14)
      , u = "__ping";
    s.inherits(i, a),
    i.prototype.connect = function(t, e) {
        if (o.debug("channel.connect", arguments),
        this.isConnected)
            return console.warn("Channel is already connected.");
        if (r.isFunction(t) && !e ? (e = t,
        t = {}) : t = t || {},
        !r.isObject(t))
            throw new TypeError("attributes must be a valid object");
        if (e && !r.isFunction(e))
            throw new TypeError("callback must be a valid function");
        this.connectCallback = e;
        var n = " ";
        n = this.securityMode ? this.connectionUrl.replace("ws", "wss").replace("8001", "8002") : this.connectionUrl,
        n = n + "?" + s.queryString.stringify(t),
        this.connection && (this.connection.onopen = null,
        this.connection.onerror = null,
        this.connection.onclose = null,
        this.connection.onmessage = null),
        this.connection = new WebSocket(n),
        this.connection.binaryType = "arraybuffer",
        this.connection.onopen = this._onSocketOpen.bind(this),
        this.connection.onerror = this._onSocketError.bind(this),
        this.connection.onclose = this._onSocketClose.bind(this),
        this.connection.onmessage = this._onSocketMessage.bind(this)
    }
    ,
    i.prototype.setSecurityMode = function(t) {
        this.securityMode = t
    }
    ,
    i.prototype.disconnect = function(t) {
        o.debug("channel.disconnect", arguments),
        this.isConnected || console.warn("channel is already disconnected"),
        this.connection.close();
        var e = this;
        setTimeout(function() {
            t && t(null, e)
        }, 0)
    }
    ,
    i.prototype.publish = function(t, e, n, i) {
        if (o.silly("channel.publish", arguments),
        !this.isConnected)
            return console.warn("Channel is not connected.");
        if (n = n || "broadcast",
        e = e || null,
        !r.isString(t))
            throw new TypeError("event must be a valid string");
        if (!r.isString(n) && !r.isArray(n))
            throw new TypeError("targets must be a valid string or array");
        this.invoke("ms.channel.emit", {
            event: t,
            data: e,
            to: n
        }, null, !0, i)
    }
    ,
    i.packMessage = function(t, e) {
        o.debug("channel.packMessage", arguments);
        var n = JSON.stringify(t)
          , i = new Blob([n]).size
          , s = new ArrayBuffer(2)
          , r = new DataView(s);
        return r.setUint16(0, i),
        new Blob([s, n, e])
    }
    ,
    i.unpackMessage = function(t) {
        o.debug("channel.unpackMessage", arguments);
        for (var e = "", n = new DataView(t), i = n.getUint16(0), s = 0; s < i; s++)
            e += String.fromCharCode(n.getUint8(s + 2));
        var r = t.slice(2 + i)
          , c = JSON.parse(e);
        return {
            payload: r,
            message: c
        }
    }
    ,
    i.prototype.invoke = function(t, e, n, s, c) {
        if (o.debug("channel.invoke", arguments),
        !r.isString(t))
            throw new TypeError("method must be a valid string");
        e = e || {};
        var a = {
            method: t,
            params: e
        };
        n && !s && (a.id = Date.now(),
        this.resultHandlers[a.id] = n),
        a = c ? i.packMessage(a, c) : JSON.stringify(a),
        this.connection.send(a)
    }
    ,
    i.prototype._onConnect = function(t) {
        o.silly("channel._onConnect"),
        this.connected = !0,
        this.clientId = t.id,
        t.clients.forEach(function(t) {
            var e = new l(t.id,t.attributes,t.isHost);
            this.clients.push(e)
        }, this),
        this.connectCallback && (o.debug("channel.connect->callback", this.clients.me),
        this.connectCallback(null, this.clients.me),
        this.connectCallback = null),
        o.debug('channel.emit("connect")', this.clients.me),
        this.emit("connect", this.clients.me)
    }
    ,
    i.prototype._onDisconnect = function(t) {
        if (o.silly("channel._onDisconnect"),
        this.connected) {
            var e = this.clients.me;
            this.clients.clear(),
            o.debug('channel.emit("disconnect")', e),
            this.emit("disconnect", e)
        }
        this.connected = !1
    }
    ,
    i.prototype._onClientConnect = function(t) {
        o.silly("channel._onClientConnect");
        var e = new l(t.id,t.attributes,t.isHost);
        this.clients.push(e),
        o.debug('channel.emit("clientConnect")', e),
        this.emit("clientConnect", e)
    }
    ,
    i.prototype._onClientDisconnect = function(t) {
        o.silly("channel._onClientDisconnect");
        var e = this.clients.getById(t.id);
        e ? this.clients.remove(e) : (o.warn("client " + t.id + " could not be found, so it was not removed from the client list"),
        e = new l(t.id,t.attributes,t.isHost)),
        o.debug('channel.emit("clientDisconnect")', e),
        this.emit("clientDisconnect", e)
    }
    ,
    i.prototype._onReady = function(t) {
        o.debug('channel.emit("ready")'),
        this.emit("ready")
    }
    ,
    i.prototype._onUserEvent = function(t) {
        var e = this.clients.getById(t.from)
          , n = t.event
          , i = t.data
          , s = t.payload;
        o.debug('channel.emit("' + n + '")', i, e, s),
        this.emit(n, i, e, s)
    }
    ,
    i.prototype._onSocketOpen = function() {
        o.silly("channel._onSocketOpen");
        var t = {
            method: "ms.webapplication.start",
            params: {
                url: this.id
            }
        }
          , e = {
            method: "ms.application.start",
            params: {
                id: this.id
            }
        };
        "webapplication" === this.type ? this.connection.send(JSON.stringify(t)) : this.connection.send(JSON.stringify(e))
    }
    ,
    i.prototype._onSocketClose = function() {
        o.silly("channel._onSocketClose"),
        this._onDisconnect()
    }
    ,
    i.prototype._onSocketError = function(t) {
        o.silly("channel._onSocketError", t),
        this.emit("error", new Error("WebSocket error"))
    }
    ,
    i.prototype._onSocketMessage = function(t) {
        o.silly("channel._onSocketMessage", t);
        try {
            if ("string" == typeof t.data)
                t = JSON.parse(t.data);
            else {
                var e = i.unpackMessage(t.data);
                t = e.message,
                t.payload = e.payload
            }
        } catch (e) {
            return void o.warn("unable to parse message", t)
        }
        if (t.id && (t.result || t.error)) {
            if (!this.resultHandlers[t.id])
                return void o.warn("unable to find result handler for result message ", t);
            this.resultHandlers[t.id](t.error, t.result)
        } else if (t.event)
            switch (t.event) {
            case "ms.channel.connect":
                this._onConnect(t.data);
                break;
            case "ms.channel.clientConnect":
                this._onClientConnect(t.data);
                break;
            case "ms.channel.clientDisconnect":
                this._onClientDisconnect(t.data);
                break;
            case "ms.channel.ready":
                this._onReady(t.data);
                break;
            default:
                this._onUserEvent(t)
            }
        else
            o.warn("unrecognized message type", t)
    }
    ,
    i.prototype.startHealthCheck = function() {
        if (this.stopHealthCheck(),
        this.pingTimeout > 0) {
            var t = null;
            this.on(u, function(e) {
                t = Date.now(),
                o.debug("ping trip : ", t - e),
                o.debug("updated last ping time : ", t)
            });
            var e = function() {
                var e = Date.now();
                t || (t = e),
                e - t < this.pingTimeout ? (o.debug("sending ping"),
                this.publish(u, e, this.clients.me.id)) : (o.debug("ping timed, out closing connection"),
                this.stopHealthCheck(),
                this.connection && (this.connection.close(),
                this._onDisconnect()))
            }
            .bind(this);
            this.pingInterval = setInterval(e, this.pingTimeout)
        }
    }
    ,
    i.prototype.stopHealthCheck = function() {
        clearInterval(this.pingInterval),
        this.removeAllListeners(u)
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function i(t, e, n, i) {
        if (!o.isString(t))
            throw new TypeError("id must be a valid string");
        if (e && !o.isObject(e))
            throw new TypeError("attributes must be a valid object");
        this.id = t,
        this.attributes = e || {},
        this.isHost = n,
        this.connectTime = i || Date.now(),
        Object.freeze(this.attributes),
        Object.freeze(this)
    }
    var s = n(2)
      , o = s.types;
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        if (!o.isObject(t))
            throw new TypeError("channel must be of type Channel");
        this.channel = t,
        i.super_.call(this)
    }
    var s = n(2)
      , o = s.types;
    s.inherits(i, Array),
    Object.defineProperty(i.prototype, "me", {
        get: function() {
            return this.getById(this.channel.clientId)
        }
    }),
    i.prototype.clear = function() {
        this.length = 0
    }
    ,
    i.prototype.remove = function(t) {
        var e = this.indexOf(t);
        return e !== -1 ? (this.splice(e, 1),
        t) : null
    }
    ,
    i.prototype.getById = function(t) {
        if (!o.isString(t) && !o.isNumber(t))
            throw new TypeError("id must be a valid string or number");
        for (var e = 0; e < this.length; e++)
            if (this[e].id === t)
                return this[e];
        return null
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function i() {
        i.super_.call(this),
        this.discorveryFrame = null,
        this.status = i.STATUS_STOPPED;
        var t = this
          , e = [];
        window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        var n = new window.RTCPeerConnection({
            iceServers: []
        })
          , s = function() {}
          , o = function(t) {
            function n(t, n) {
                e.push(n)
            }
            var i = 0
              , s = ""
              , o = t.split(".");
            for (i = 0; i <= 255; i++)
                s = o[0] + "." + o[1] + "." + o[2] + "." + i,
                window.msf.remote("http://" + s + ":8001/api/v2/", n)
        }
          , r = function() {
            t.onSearchResult(e)
        };
        n.createDataChannel(""),
        n.createOffer(n.setLocalDescription.bind(n), s),
        n.onicecandidate = function(t) {
            if (t && t.candidate && t.candidate.candidate) {
                var e = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(t.candidate.candidate)[1];
                new o(e);
                setTimeout(function() {
                    r()
                }, 3e3),
                n.onicecandidate = s
            }
        }
    }
    var s = n(2)
      , o = (s.props,
    n(9));
    s.inherits(i, o),
    i.STATUS_STOPPED = "stopped",
    i.STATUS_STARTED = "started",
    i.prototype.start = function() {
        if (this.status === i.STATUS_STOPPED) {
            if (this.discoveryFrame)
                this.discoveryFrame.postMessage({
                    method: "discovery.search"
                }, "*");
            else {
                var t = this;
                this.once("ready", function() {
                    t.discoveryFrame.postMessage({
                        method: "discovery.search"
                    }, "*")
                })
            }
            this.onSearchStart()
        } else
            console.warn("a previous search is already in progress")
    }
    ,
    i.prototype.stop = function() {
        this.onSearchStop()
    }
    ,
    i.prototype.onSearchReady = function() {
        this.emit("ready")
    }
    ,
    i.prototype.onSearchResult = function(t) {
        this.status !== i.STATUS_STOPPED && this.emit("found", t),
        this.status = i.STATUS_STOPPED
    }
    ,
    i.prototype.onSearchError = function(t) {
        this.emit("error", t),
        this.status = i.STATUS_STOPPED
    }
    ,
    i.prototype.onSearchStart = function() {
        this.status = i.STATUS_STARTED,
        this.emit("start", this)
    }
    ,
    i.prototype.onSearchStop = function() {
        this.status = i.STATUS_STOPPED,
        this.emit("stop", this)
    }
    ,
    t.exports = i
}
]);
;!function(t, r) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (t = t || self).qrCodeGenerator = r()
}(this, function() {
    "use strict";
    function k(t, r, e, o, n) {
        if (t < 7 && r < 7)
            return !1;
        if (e - 7 <= t && r < 7)
            return !1;
        if (t < 7 && e - 7 <= r)
            return !1;
        if (n) {
            var i = 9;
            e <= 25 && i--;
            var s = (e - 14 - i) / 2 - 1;
            return e <= 25 && s++,
            !(7 + s < t && t < e - 7 - s - 1 && 7 + s < r && r < e - 7 - s - 1) && (0 <= t && t < e && 0 <= r && r < e && o[r][t])
        }
        return o[r] && o[r][t]
    }
    var h = function() {
        return (h = Object.assign || function(t) {
            for (var r, e = 1, o = arguments.length; e < o; e++)
                for (var n in r = arguments[e])
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            return t
        }
        ).apply(this, arguments)
    }
      , f = (N.encodeText = function(t, r) {
        var e = R.makeSegments(t);
        return N.encodeSegments(e, r)
    }
    ,
    N.encodeBinary = function(t, r) {
        var e = R.makeBytes(t);
        return N.encodeSegments([e], r)
    }
    ,
    N.encodeSegments = function(t, r, e, o, n, i) {
        if (void 0 === e && (e = 1),
        void 0 === o && (o = 40),
        void 0 === n && (n = -1),
        void 0 === i && (i = !0),
        !(N.MIN_VERSION <= e && e <= o && o <= N.MAX_VERSION) || n < -1 || 7 < n)
            throw "Invalid value";
        var s, a;
        for (s = e; ; s++) {
            var h = 8 * N.getNumDataCodewords(s, r)
              , f = R.getTotalBits(t, s);
            if (f <= h) {
                a = f;
                break
            }
            if (o <= s)
                throw "Data too long"
        }
        for (var l = 0, u = [N.Ecc.MEDIUM, N.Ecc.QUARTILE, N.Ecc.HIGH]; l < u.length; l++) {
            var d = u[l];
            i && a <= 8 * N.getNumDataCodewords(s, d) && (r = d)
        }
        for (var c = new A, g = 0, p = t; g < p.length; g++) {
            var v = p[g];
            c.appendBits(v.mode.modeBits, 4),
            c.appendBits(v.numChars, v.mode.numCharCountBits(s));
            for (var C = 0, m = v.getData(); C < m.length; C++) {
                var w = m[C];
                c.array.push(w)
            }
        }
        if (c.array.length != a)
            throw "Assertion error";
        var M = 8 * N.getNumDataCodewords(s, r);
        if (c.array.length > M)
            throw "Assertion error";
        if (c.appendBits(0, Math.min(4, M - c.array.length)),
        c.appendBits(0, (8 - c.array.length % 8) % 8),
        c.array.length % 8 != 0)
            throw "Assertion error";
        for (var E = 236; c.array.length < M; E ^= 253)
            c.appendBits(E, 8);
        for (var y = []; 8 * y.length < c.array.length; )
            y.push(0);
        return c.array.forEach(function(t, r) {
            return y[r >>> 3] |= t << 7 - (7 & r)
        }),
        new N(s,r,y,n)
    }
    ,
    N.prototype.getModule = function(t, r) {
        return 0 <= t && t < this.size && 0 <= r && r < this.size && this.modules[r][t]
    }
    ,
    N.prototype.drawCanvas = function(t, r, e) {
        if (t <= 0 || r < 0)
            throw "Value out of range";
        var o = (this.size + 2 * r) * t;
        e.width = o,
        e.height = o;
        for (var n = e.getContext("2d"), i = -r; i < this.size + r; i++)
            for (var s = -r; s < this.size + r; s++)
                n.fillStyle = this.getModule(s, i) ? "#000000" : "#FFFFFF",
                n.fillRect((s + r) * t, (i + r) * t, t, t)
    }
    ,
    N.prototype.toSvgString = function(t) {
        if (t < 0)
            throw "Border must be non-negative";
        for (var r = [], e = 0; e < this.size; e++)
            for (var o = 0; o < this.size; o++)
                this.getModule(o, e) && r.push("M" + (o + t) + "," + (e + t) + "h1v1h-1z");
        return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + (this.size + 2 * t) + " " + (this.size + 2 * t) + '" stroke="none">\n\t<rect width="100%" height="100%" fill="#FFFFFF"/>\n\t<path d="' + r.join(" ") + '" fill="#000000"/>\n</svg>\n'
    }
    ,
    N.prototype.drawFunctionPatterns = function() {
        for (var t = 0; t < this.size; t++)
            this.setFunctionModule(6, t, t % 2 == 0),
            this.setFunctionModule(t, 6, t % 2 == 0);
        this.drawFinderPattern(3, 3),
        this.drawFinderPattern(this.size - 4, 3),
        this.drawFinderPattern(3, this.size - 4);
        var r = this.getAlignmentPatternPositions()
          , e = r.length;
        for (t = 0; t < e; t++)
            for (var o = 0; o < e; o++)
                0 == t && 0 == o || 0 == t && o == e - 1 || t == e - 1 && 0 == o || this.drawAlignmentPattern(r[t], r[o]);
        this.drawFormatBits(0),
        this.drawVersion()
    }
    ,
    N.prototype.drawFormatBits = function(t) {
        for (var r = this.errorCorrectionLevel.formatBits << 3 | t, e = r, o = 0; o < 10; o++)
            e = e << 1 ^ 1335 * (e >>> 9);
        var n = 21522 ^ (r << 10 | e);
        if (n >>> 15 != 0)
            throw "Assertion error";
        for (o = 0; o <= 5; o++)
            this.setFunctionModule(8, o, a(n, o));
        for (this.setFunctionModule(8, 7, a(n, 6)),
        this.setFunctionModule(8, 8, a(n, 7)),
        this.setFunctionModule(7, 8, a(n, 8)),
        o = 9; o < 15; o++)
            this.setFunctionModule(14 - o, 8, a(n, o));
        for (o = 0; o < 8; o++)
            this.setFunctionModule(this.size - 1 - o, 8, a(n, o));
        for (o = 8; o < 15; o++)
            this.setFunctionModule(8, this.size - 15 + o, a(n, o));
        this.setFunctionModule(8, this.size - 8, !0)
    }
    ,
    N.prototype.drawVersion = function() {
        if (!(this.version < 7)) {
            for (var t = this.version, r = 0; r < 12; r++)
                t = t << 1 ^ 7973 * (t >>> 11);
            var e = this.version << 12 | t;
            if (e >>> 18 != 0)
                throw "Assertion error";
            for (r = 0; r < 18; r++) {
                var o = a(e, r)
                  , n = this.size - 11 + r % 3
                  , i = Math.floor(r / 3);
                this.setFunctionModule(n, i, o),
                this.setFunctionModule(i, n, o)
            }
        }
    }
    ,
    N.prototype.drawFinderPattern = function(t, r) {
        for (var e = -4; e <= 4; e++)
            for (var o = -4; o <= 4; o++) {
                var n = Math.max(Math.abs(o), Math.abs(e))
                  , i = t + o
                  , s = r + e;
                0 <= i && i < this.size && 0 <= s && s < this.size && this.setFunctionModule(i, s, 2 != n && 4 != n)
            }
    }
    ,
    N.prototype.drawAlignmentPattern = function(t, r) {
        for (var e = -2; e <= 2; e++)
            for (var o = -2; o <= 2; o++)
                this.setFunctionModule(t + o, r + e, 1 != Math.max(Math.abs(o), Math.abs(e)))
    }
    ,
    N.prototype.setFunctionModule = function(t, r, e) {
        this.modules[r][t] = e,
        this.isFunction[r][t] = !0
    }
    ,
    N.prototype.addEccAndInterleave = function(t) {
        var r = this.version
          , e = this.errorCorrectionLevel;
        if (t.length != N.getNumDataCodewords(r, e))
            throw "Invalid argument";
        for (var o = N.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][r], n = N.ECC_CODEWORDS_PER_BLOCK[e.ordinal][r], i = Math.floor(N.getNumRawDataModules(r) / 8), s = o - i % o, a = Math.floor(i / o), h = [], f = new v(n), l = 0, u = 0; l < o; l++) {
            var d = t.slice(u, u + a - n + (l < s ? 0 : 1));
            u += d.length;
            var c = f.getRemainder(d);
            l < s && d.push(0),
            h.push(d.concat(c))
        }
        var g = [];
        for (l = 0; l < h[0].length; l++)
            for (var p = 0; p < h.length; p++)
                (l != a - n || s <= p) && g.push(h[p][l]);
        if (g.length != i)
            throw "Assertion error";
        return g
    }
    ,
    N.prototype.drawCodewords = function(t) {
        if (t.length != Math.floor(N.getNumRawDataModules(this.version) / 8))
            throw "Invalid argument";
        for (var r = 0, e = this.size - 1; 1 <= e; e -= 2) {
            6 == e && (e = 5);
            for (var o = 0; o < this.size; o++)
                for (var n = 0; n < 2; n++) {
                    var i = e - n
                      , s = 0 == (e + 1 & 2) ? this.size - 1 - o : o;
                    !this.isFunction[s][i] && r < 8 * t.length && (this.modules[s][i] = a(t[r >>> 3], 7 - (7 & r)),
                    r++)
                }
        }
        if (r != 8 * t.length)
            throw "Assertion error"
    }
    ,
    N.prototype.applyMask = function(t) {
        if (t < 0 || 7 < t)
            throw "Mask value out of range";
        for (var r = 0; r < this.size; r++)
            for (var e = 0; e < this.size; e++) {
                var o = void 0;
                switch (t) {
                case 0:
                    o = (e + r) % 2 == 0;
                    break;
                case 1:
                    o = r % 2 == 0;
                    break;
                case 2:
                    o = e % 3 == 0;
                    break;
                case 3:
                    o = (e + r) % 3 == 0;
                    break;
                case 4:
                    o = (Math.floor(e / 3) + Math.floor(r / 2)) % 2 == 0;
                    break;
                case 5:
                    o = e * r % 2 + e * r % 3 == 0;
                    break;
                case 6:
                    o = (e * r % 2 + e * r % 3) % 2 == 0;
                    break;
                case 7:
                    o = ((e + r) % 2 + e * r % 3) % 2 == 0;
                    break;
                default:
                    throw "Assertion error"
                }
                !this.isFunction[r][e] && o && (this.modules[r][e] = !this.modules[r][e])
            }
    }
    ,
    N.prototype.getPenaltyScore = function() {
        for (var t = 0, r = 0; r < this.size; r++) {
            for (var e = [0, 0, 0, 0, 0, 0, 0], o = !1, n = 0, i = 0; i < this.size; i++)
                this.modules[r][i] == o ? 5 == ++n ? t += N.PENALTY_N1 : 5 < n && t++ : (N.addRunToHistory(n, e),
                !o && N.hasFinderLikePattern(e) && (t += N.PENALTY_N3),
                o = this.modules[r][i],
                n = 1);
            N.addRunToHistory(n, e),
            o && N.addRunToHistory(0, e),
            N.hasFinderLikePattern(e) && (t += N.PENALTY_N3)
        }
        for (i = 0; i < this.size; i++) {
            o = !(e = [0, 0, 0, 0, 0, 0, 0]);
            var s = 0;
            for (r = 0; r < this.size; r++)
                this.modules[r][i] == o ? 5 == ++s ? t += N.PENALTY_N1 : 5 < s && t++ : (N.addRunToHistory(s, e),
                !o && N.hasFinderLikePattern(e) && (t += N.PENALTY_N3),
                o = this.modules[r][i],
                s = 1);
            N.addRunToHistory(s, e),
            o && N.addRunToHistory(0, e),
            N.hasFinderLikePattern(e) && (t += N.PENALTY_N3)
        }
        for (r = 0; r < this.size - 1; r++)
            for (i = 0; i < this.size - 1; i++)
                (o = this.modules[r][i]) == this.modules[r][i + 1] && o == this.modules[r + 1][i] && o == this.modules[r + 1][i + 1] && (t += N.PENALTY_N2);
        for (var a = 0, h = 0, f = this.modules; h < f.length; h++)
            for (var l = 0, u = f[h]; l < u.length; l++)
                (o = u[l]) && a++;
        var d = this.size * this.size;
        return t += (Math.ceil(Math.abs(20 * a - 10 * d) / d) - 1) * N.PENALTY_N4
    }
    ,
    N.prototype.getAlignmentPatternPositions = function() {
        if (1 == this.version)
            return [];
        for (var t = Math.floor(this.version / 7) + 2, r = 32 == this.version ? 26 : 2 * Math.ceil((this.size - 13) / (2 * t - 2)), e = [6], o = this.size - 7; e.length < t; o -= r)
            e.splice(1, 0, o);
        return e
    }
    ,
    N.getNumRawDataModules = function(t) {
        if (t < N.MIN_VERSION || N.MAX_VERSION < t)
            throw "Version number out of range";
        var r = (16 * t + 128) * t + 64;
        if (2 <= t) {
            var e = Math.floor(t / 7) + 2;
            r -= (25 * e - 10) * e - 55,
            7 <= t && (r -= 36)
        }
        return r
    }
    ,
    N.getNumDataCodewords = function(t, r) {
        return Math.floor(N.getNumRawDataModules(t) / 8) - N.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t] * N.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t]
    }
    ,
    N.addRunToHistory = function(t, r) {
        r.pop(),
        r.unshift(t)
    }
    ,
    N.hasFinderLikePattern = function(t) {
        var r = t[1];
        return 0 < r && t[2] == r && t[4] == r && t[5] == r && t[3] == 3 * r && Math.max(t[0], t[6]) >= 4 * r
    }
    ,
    N.MIN_VERSION = 1,
    N.MAX_VERSION = 40,
    N.PENALTY_N1 = 3,
    N.PENALTY_N2 = 3,
    N.PENALTY_N3 = 40,
    N.PENALTY_N4 = 10,
    N.ECC_CODEWORDS_PER_BLOCK = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]],
    N.NUM_ERROR_CORRECTION_BLOCKS = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]],
    N);
    function N(t, r, e, o) {
        if (this.version = t,
        this.errorCorrectionLevel = r,
        this.mask = o,
        this.modules = [],
        this.isFunction = [],
        t < N.MIN_VERSION || N.MAX_VERSION < t)
            throw "Version value out of range";
        if (o < -1 || 7 < o)
            throw "Mask value out of range";
        this.size = 4 * t + 17;
        for (var n = [], i = 0; i < this.size; i++)
            n.push(!1);
        for (i = 0; i < this.size; i++)
            this.modules.push(n.slice()),
            this.isFunction.push(n.slice());
        this.drawFunctionPatterns();
        var s = this.addEccAndInterleave(e);
        if (this.drawCodewords(s),
        -1 == o) {
            var a = 1e9;
            for (i = 0; i < 8; i++) {
                this.applyMask(i),
                this.drawFormatBits(i);
                var h = this.getPenaltyScore();
                h < a && (o = i,
                a = h),
                this.applyMask(i)
            }
        }
        if (o < 0 || 7 < o)
            throw "Assertion error";
        this.mask = o,
        this.applyMask(o),
        this.drawFormatBits(o),
        this.isFunction = []
    }
    function a(t, r) {
        return 0 != (t >>> r & 1)
    }
    var R = (i.makeBytes = function(t) {
        for (var r = new A, e = 0, o = t; e < o.length; e++) {
            var n = o[e];
            r.appendBits(n, 8)
        }
        return new i(i.Mode.BYTE,t.length,r.array)
    }
    ,
    i.makeNumeric = function(t) {
        if (!this.NUMERIC_REGEX.test(t))
            throw "String contains non-numeric characters";
        for (var r = new A, e = 0; e < t.length; ) {
            var o = Math.min(t.length - e, 3);
            r.appendBits(parseInt(t.substr(e, o), 10), 3 * o + 1),
            e += o
        }
        return new i(i.Mode.NUMERIC,t.length,r.array)
    }
    ,
    i.makeAlphanumeric = function(t) {
        if (!this.ALPHANUMERIC_REGEX.test(t))
            throw "String contains unencodable characters in alphanumeric mode";
        var r, e = new A;
        for (r = 0; r + 2 <= t.length; r += 2) {
            var o = 45 * i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r));
            o += i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r + 1)),
            e.appendBits(o, 11)
        }
        return r < t.length && e.appendBits(i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)), 6),
        new i(i.Mode.ALPHANUMERIC,t.length,e.array)
    }
    ,
    i.makeSegments = function(t) {
        return "" == t ? [] : this.NUMERIC_REGEX.test(t) ? [i.makeNumeric(t)] : this.ALPHANUMERIC_REGEX.test(t) ? [i.makeAlphanumeric(t)] : [i.makeBytes(i.toUtf8ByteArray(t))]
    }
    ,
    i.makeEci = function(t) {
        var r = new A;
        if (t < 0)
            throw "ECI assignment value out of range";
        if (t < 128)
            r.appendBits(t, 8);
        else if (t < 16384)
            r.appendBits(2, 2),
            r.appendBits(t, 14);
        else {
            if (!(t < 1e6))
                throw "ECI assignment value out of range";
            r.appendBits(6, 3),
            r.appendBits(t, 21)
        }
        return new i(i.Mode.ECI,0,r.array)
    }
    ,
    i.prototype.getData = function() {
        return this.bitData.slice()
    }
    ,
    i.getTotalBits = function(t, r) {
        for (var e = 0, o = 0, n = t; o < n.length; o++) {
            var i = n[o]
              , s = i.mode.numCharCountBits(r);
            if (i.numChars >= 1 << s)
                return 1 / 0;
            e += 4 + s + i.bitData.length
        }
        return e
    }
    ,
    i.toUtf8ByteArray = function(t) {
        t = encodeURI(t);
        for (var r = [], e = 0; e < t.length; e++)
            "%" != t.charAt(e) ? r.push(t.charCodeAt(e)) : (r.push(parseInt(t.substr(e + 1, 2), 16)),
            e += 2);
        return r
    }
    ,
    i.NUMERIC_REGEX = /^[0-9]*$/,
    i.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/,
    i.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",
    i);
    function i(t, r, e) {
        if (this.mode = t,
        this.numChars = r,
        this.bitData = e,
        r < 0)
            throw "Invalid argument";
        this.bitData = e.slice()
    }
    var v = (s.prototype.getRemainder = function(t) {
        for (var o = this.coefficients.map(function(t) {
            return 0
        }), r = function(t) {
            var e = t ^ o.shift();
            o.push(0),
            n.coefficients.forEach(function(t, r) {
                return o[r] ^= s.multiply(t, e)
            })
        }, n = this, e = 0, i = t; e < i.length; e++)
            r(i[e]);
        return o
    }
    ,
    s.multiply = function(t, r) {
        if (t >>> 8 != 0 || r >>> 8 != 0)
            throw "Byte out of range";
        for (var e = 0, o = 7; 0 <= o; o--)
            e = e << 1 ^ 285 * (e >>> 7),
            e ^= (r >>> o & 1) * t;
        if (e >>> 8 != 0)
            throw "Assertion error";
        return e
    }
    ,
    s);
    function s(t) {
        if (this.coefficients = [],
        t < 1 || 255 < t)
            throw "Degree out of range";
        for (var r = this.coefficients, e = 0; e < t - 1; e++)
            r.push(0);
        r.push(1);
        var o = 1;
        for (e = 0; e < t; e++) {
            for (var n = 0; n < r.length; n++)
                r[n] = s.multiply(r[n], o),
                n + 1 < r.length && (r[n] ^= r[n + 1]);
            o = s.multiply(o, 2)
        }
    }
    var t, r, e, o, A = (n.prototype.appendBits = function(t, r) {
        if (r < 0 || 31 < r || t >>> r != 0)
            throw "Value out of range";
        for (var e = r - 1; 0 <= e; e--)
            this.array.push(t >>> e & 1)
    }
    ,
    n);
    function n() {
        this.array = []
    }
    function l(t, r) {
        this.ordinal = t,
        this.formatBits = r
    }
    function u(t, r) {
        this.modeBits = t,
        this.numBitsCharCount = r
    }
    t = f = f || {},
    l.LOW = new l(0,1),
    l.MEDIUM = new l(1,0),
    l.QUARTILE = new l(2,3),
    l.HIGH = new l(3,2),
    r = l,
    t.Ecc = r,
    e = R = R || {},
    u.prototype.numCharCountBits = function(t) {
        return this.numBitsCharCount[Math.floor((t + 7) / 17)]
    }
    ,
    u.NUMERIC = new u(1,[10, 12, 14]),
    u.ALPHANUMERIC = new u(2,[9, 11, 13]),
    u.BYTE = new u(4,[8, 16, 16]),
    u.KANJI = new u(8,[8, 10, 12]),
    u.ECI = new u(7,[0, 0, 0]),
    o = u,
    e.Mode = o;
    return {
        createQR: function(t, r, e, o) {
            if ("string" != typeof t)
                throw new TypeError("Enter text for encoding");
            var n = h(h(h({}, "object" == typeof r && null !== r ? r : {}), "object" == typeof o && null !== o ? o : {}), {
                qrSize: "object" == typeof r && null !== r && "number" == typeof r.qrSize ? r.qrSize : r,
                className: "object" == typeof r && null !== r && "string" == typeof r.className ? r.className : e
            })
              , i = [f.Ecc.LOW, f.Ecc.MEDIUM, f.Ecc.QUARTILE, f.Ecc.HIGH]
              , s = {
                qrSize: "number" == typeof n.qrSize ? n.qrSize : 128,
                className: "string" == typeof n.className ? n.className : e || "",
                isShowLogo: !!n.isShowLogo || !1,
                isShowBackground: !!n.isShowBackground || !1,
                foregroundColor: "string" == typeof n.foregroundColor ? n.foregroundColor : "#000000",
                backgroundColor: "string" == typeof n.backgroundColor ? n.backgroundColor : "#ffffff",
                logoColor: "string" == typeof n.logoColor ? n.logoColor : "#07f",
                suffix: n.suffix ? n.suffix.toString() : "0",
                logoData: "string" == typeof n.logoData ? n.logoData : null,
                ecc: "number" == typeof n.ecc && i[n.ecc] ? n.ecc : 3
            }
              , a = R.makeSegments(t);
            return function(t, r) {
                if ("number" != typeof r.qrSize)
                    throw new Error("Size should be a number");
                if ("string" != typeof r.className)
                    throw new Error("Classname should be a string");
                for (var e, o, n, i, s, a = 12.8, h = 28.6, f = 30.5, l = 84.7776815, u = 69.5, d = 100, c = [], g = 0, p = 0, v = 0, C = 0, m = 0; m < t.size; m++) {
                    for (var w = g = 0; w < t.size; w++) {
                        v = w + g,
                        g += 96,
                        C = m + p;
                        var M, E = (e = w,
                        o = m,
                        n = t.size,
                        i = t.modules,
                        void 0 === (s = r.isShowLogo) && (s = !0),
                        {
                            l: k(e - 1, o, n, i, s),
                            r: k(e + 1, o, n, i, s),
                            t: k(e, o - 1, n, i, s),
                            b: k(e, o + 1, n, i, s),
                            current: k(e, o, n, i, s)
                        }), y = "";
                        E.current ? (y = !(y = y || E.l || E.r || E.t || E.b ? "" : "empty") && E.l && E.r || E.t && E.b ? "rect" : "") || (y += E.l ? "l" : E.r ? "r" : "",
                        y = (y += E.t ? "t" : E.b ? "b" : "") || "empty") : y = !(y = !(y = !(y = !y && E.l && E.t && k(w - 1, m - 1, t.size, t.modules, r.isShowLogo) ? "n_lt" : "") && E.l && E.b && k(w - 1, m + 1, t.size, t.modules, r.isShowLogo) ? "n_lb" : "") && E.r && E.t && k(w + 1, m - 1, t.size, t.modules, r.isShowLogo) ? "n_rt" : "") && E.r && E.b && k(w + 1, m + 1, t.size, t.modules, r.isShowLogo) ? "n_rb" : "",
                        y && (M = '<use xlink:href="#' + y + "-" + r.suffix + '"/>',
                        c.push('<g transform="translate(' + v + "," + C + ')">' + M + "</g>"))
                    }
                    p += 96
                }
                var N = ""
                  , R = (t.size - 21) / 2 * 96 + 672 - 10;
                t.size <= 25 && (N = "scale(0.85)",
                R += 50);
                var A = 96 * (t.size - 7);
                c.push('<use fill-rule="evenodd" transform="translate(0,0)" xlink:href="#point-' + r.suffix + '"/>'),
                c.push('<use fill-rule="evenodd" transform="translate(' + A + ',0)" xlink:href="#point-' + r.suffix + '"/>'),
                c.push('<use fill-rule="evenodd" transform="translate(0,' + A + ')" xlink:href="#point-' + r.suffix + '"/>'),
                r.isShowLogo && (r.logoData ? c.push('\n        <image\n          preserveAspectRatio="xMidYMid slice" clip-path="url(#logo-mask-' + r.suffix + ')"\n          style="width: 750px; height: 750px;" width="750" height="750"\n          transform="translate(' + R + "," + R + ") " + N + '"\n          xlink:href="' + r.logoData + '"\n        />\n      ') : c.push('\n        <use style="width: 750px; height: 750px;" width="750" height="750"\n          fill="none"\n          fill-rule="evenodd"\n          transform="translate(' + R + "," + R + ") " + N + '" xlink:href="#vk_logo-' + r.suffix + '"\n        />\n      '));
                var z = 99 * t.size
                  , x = ""
                  , L = "translate(0,0)";
                if (r.isShowBackground) {
                    var S = (r.qrSize - 40) / r.qrSize
                      , _ = z / r.qrSize * 21;
                    x = '\n      <rect\n        x="0"\n        width="' + z + '"\n        height="' + z + '"\n        rx="' + Math.ceil(z / (r.qrSize / 36)) + '"\n        fill="' + r.backgroundColor + '"\n      />',
                    L = "translate(" + _ + ", " + _ + ") scale(" + S + ")"
                }
                var b = "M0,0 L66,0 C84.7776815,-3.44940413e-15 100,15.2223185 100,34 L100,66 C100," + l + " " + l + "," + d + " 66," + d + " L0," + d + " L0,0 Z"
                  , I = "M0,0 L100,0 L100,66 C100," + l + " " + l + "," + d + " 66," + d + " L0," + d + " L0,0 Z";
                return '\n  <svg\n    version="1.1"\n    viewBox="0 0 ' + z + " " + z + '"\n    width="' + r.qrSize + 'px"\n    height="' + r.qrSize + 'px"\n    ' + (r.className ? 'class="' + r.className + '"' : "") + '\n    xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n  >\n    <defs>\n      <rect id="rect-' + r.suffix + '" width="100" height="100" fill="' + r.foregroundColor + '"/>\n      <path\n        id="empty-' + r.suffix + '"\n        d="M0,' + h + "v42.9C0,87.3," + a + "," + d + "," + h + "," + d + "h42.9c15.9,0," + h + "-" + a + "," + h + "-" + h + "V" + h + "C" + d + ",12.7,87.2,0,71.4,0H" + h + " C" + a + ",0,0," + a + ",0," + h + 'z"\n        fill="' + r.foregroundColor + '"\n      />\n      <path id="b-' + r.suffix + '" d="' + b + '" transform="rotate(-90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="r-' + r.suffix + '" d="' + b + '" transform="rotate(-180 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="l-' + r.suffix + '" d="' + b + '" fill="' + r.foregroundColor + '"/>\n      <path id="t-' + r.suffix + '" d="' + b + '" transform="rotate(90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="l-' + r.suffix + '" d="' + I + '" transform="rotate(-90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="lt-' + r.suffix + '" d="' + I + '" fill="' + r.foregroundColor + '"/>\n      <path id="lb-' + r.suffix + '" d="' + I + '" transform="rotate(-90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="rb-' + r.suffix + '" d="' + I + '" transform="rotate(-180 50 50)" fill="' + r.foregroundColor + '"/>\n      <path id="rt-' + r.suffix + '" d="' + I + '" transform="rotate(90 50 50)" fill="' + r.foregroundColor + '"/>\n      <path\n        id="n_lt-' + r.suffix + '"\n        d="M' + f + ",2V0H0v" + f + "h2C2,14.7,14.8,2," + f + ',2z"\n        fill="' + r.foregroundColor + '"\n      />\n      <path\n        id="n_lb-' + r.suffix + '"\n        d="M2,' + u + "H0V" + d + "h" + f + "v-2C14.7,98,2,85.2,2," + u + 'z"\n        fill="' + r.foregroundColor + '"\n      />\n      <path\n        id="n_rt-' + r.suffix + '"\n        d="M98,' + f + "h2V0H" + u + "v2C85.3,2,98,14.8,98," + f + 'z"\n        fill="' + r.foregroundColor + '"\n      />\n      <path id="n_rb-' + r.suffix + '"\n        d="M' + u + ",98v2H" + d + "V" + u + "h-2C98,85.3,85.2,98," + u + ',98z"\n        fill="' + r.foregroundColor + '"\n      />\n      <path\n        id="point-' + r.suffix + '"\n        fill="' + r.foregroundColor + '"\n        d="M600.001786,457.329333 L600.001786,242.658167 C600.001786,147.372368 587.039517,124.122784 581.464617,118.535383 C575.877216,112.960483 552.627632,99.9982143 457.329333,99.9982143 L242.670667,99.9982143 C147.372368,99.9982143 124.122784,112.960483 118.547883,118.535383 C112.972983,124.122784 99.9982143,147.372368 99.9982143,242.658167 L99.9982143,457.329333 C99.9982143,552.627632 112.972983,575.877216 118.547883,581.464617 C124.122784,587.027017 147.372368,600.001786 242.670667,600.001786 L457.329333,600.001786 C552.627632,600.001786 575.877216,587.027017 581.464617,581.464617 C587.039517,575.877216 600.001786,552.627632 600.001786,457.329333 Z M457.329333,0 C653.338333,0 700,46.6616668 700,242.658167 C700,438.667167 700,261.332833 700,457.329333 C700,653.338333 653.338333,700 457.329333,700 C261.332833,700 438.667167,700 242.670667,700 C46.6616668,700 0,653.338333 0,457.329333 C0,261.332833 0,352.118712 0,242.658167 C0,46.6616668 46.6616668,0 242.670667,0 C438.667167,0 261.332833,0 457.329333,0 Z M395.996667,200 C480.004166,200 500,220.008332 500,303.990835 C500,387.998334 500,312.001666 500,395.996667 C500,479.991668 480.004166,500 395.996667,500 C312.001666,500 387.998334,500 304.003333,500 C220.008332,500 200,479.991668 200,395.996667 C200,312.001666 200,350.906061 200,303.990835 C200,220.008332 220.008332,200 304.003333,200 C387.998334,200 312.001666,200 395.996667,200 Z"\n      />\n      <g id="vk_logo-' + r.suffix + '">\n        <path\n          fill="' + r.logoColor + '"\n          d="M83.3334 363.333C83.3334 231.34 83.3334 165.343 124.338 124.338C165.343 83.3333 231.34              83.3333 363.333 83.3333H386.667C518.66 83.3333 584.657 83.3333 625.662 124.338C666.667 165.343              666.667 231.34 666.667 363.333V386.667C666.667 518.66 666.667 584.657 625.662 625.662C584.657              666.667 518.66 666.667 386.667 666.667H363.333C231.34 666.667 165.343 666.667 124.338 625.662C83.3334              584.657 83.3334 518.66 83.3334 386.667V363.333Z"\n        />\n        <path\n          fill="#FFF"\n          d="M394.907 508.681C263.293 508.681 183.442 417.365 180.313 265.625H246.972C249.05 377.09              299.763 424.323 338.638 434.036V265.625H402.519V361.82C440.016 357.664 479.264 313.909              492.456 265.625H555.333C545.27 325 502.543 368.754 472.353 386.803C502.566 401.395 551.177              439.593 569.926 508.681H500.815C486.222 462.498 450.476 426.728 402.542 421.872V508.681H394.907Z"\n        />\n      </g>\n      <clipPath id="logo-mask-' + r.suffix + '">\n        <rect x="0" y="0" width="750" height="750" />\n      </clipPath>\n    </defs>\n\n    ' + x + '\n\n    <g transform="' + L + '">\n      ' + c.join("\n") + "\n    </g>\n  </svg>"
            }(f.encodeSegments(a, i[s.ecc], 1, 40, -1, !0), s)
        }
    }
});
;/*! @sentry/browser 6.19.6 (20eb6d0) | https://github.com/getsentry/sentry-javascript */
var Sentry = function(t) {
    var n = function(t, r) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        ,
        n(t, r)
    };
    function r(t, r) {
        if ("function" != typeof r && null !== r)
            throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        function e() {
            this.constructor = t
        }
        n(t, r),
        t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype,
        new e)
    }
    var e, i = function() {
        return i = Object.assign || function(t) {
            for (var n, r = 1, e = arguments.length; r < e; r++)
                for (var i in n = arguments[r])
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            return t
        }
        ,
        i.apply(this, arguments)
    };
    function o(t) {
        var n = "function" == typeof Symbol && Symbol.iterator
          , r = n && t[n]
          , e = 0;
        if (r)
            return r.call(t);
        if (t && "number" == typeof t.length)
            return {
                next: function() {
                    return t && e >= t.length && (t = void 0),
                    {
                        value: t && t[e++],
                        done: !t
                    }
                }
            };
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function u(t, n) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r)
            return t;
        var e, i, o = r.call(t), u = [];
        try {
            for (; (void 0 === n || n-- > 0) && !(e = o.next()).done; )
                u.push(e.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                e && !e.done && (r = o.return) && r.call(o)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return u
    }
    function a() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t = t.concat(u(arguments[n]));
        return t
    }
    t.Severity = void 0,
    (e = t.Severity || (t.Severity = {})).Fatal = "fatal",
    e.Error = "error",
    e.Warning = "warning",
    e.Log = "log",
    e.Info = "info",
    e.Debug = "debug",
    e.Critical = "critical";
    var s = {};
    function c() {
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : s
    }
    function f(t, n, r) {
        var e = r || c()
          , i = e.__SENTRY__ = e.__SENTRY__ || {};
        return i[t] || (i[t] = n())
    }
    var h = Object.prototype.toString;
    function v(t) {
        switch (h.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return x(t, Error)
        }
    }
    function d(t, n) {
        return h.call(t) === "[object " + n + "]"
    }
    function l(t) {
        return d(t, "ErrorEvent")
    }
    function y(t) {
        return d(t, "DOMError")
    }
    function p(t) {
        return d(t, "String")
    }
    function m(t) {
        return null === t || "object" != typeof t && "function" != typeof t
    }
    function b(t) {
        return d(t, "Object")
    }
    function w(t) {
        return "undefined" != typeof Event && x(t, Event)
    }
    function g(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }
    function x(t, n) {
        try {
            return t instanceof n
        } catch (t) {
            return !1
        }
    }
    function E(t, n) {
        try {
            for (var r = t, e = [], i = 0, o = 0, u = " > ".length, a = void 0; r && i++ < 5 && !("html" === (a = _(r, n)) || i > 1 && o + e.length * u + a.length >= 80); )
                e.push(a),
                o += a.length,
                r = r.parentNode;
            return e.reverse().join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }
    function _(t, n) {
        var r, e, i, o, u, a = t, s = [];
        if (!a || !a.tagName)
            return "";
        s.push(a.tagName.toLowerCase());
        var c = n && n.length ? n.filter((function(t) {
            return a.getAttribute(t)
        }
        )).map((function(t) {
            return [t, a.getAttribute(t)]
        }
        )) : null;
        if (c && c.length)
            c.forEach((function(t) {
                s.push("[" + t[0] + '="' + t[1] + '"]')
            }
            ));
        else if (a.id && s.push("#" + a.id),
        (r = a.className) && p(r))
            for (e = r.split(/\s+/),
            u = 0; u < e.length; u++)
                s.push("." + e[u]);
        var f = ["type", "name", "title", "alt"];
        for (u = 0; u < f.length; u++)
            i = f[u],
            (o = a.getAttribute(i)) && s.push("[" + i + '="' + o + '"]');
        return s.join("")
    }
    var S = Object.setPrototypeOf || ({
        __proto__: []
    }instanceof Array ? function(t, n) {
        return t.__proto__ = n,
        t
    }
    : function(t, n) {
        for (var r in n)
            Object.prototype.hasOwnProperty.call(t, r) || (t[r] = n[r]);
        return t
    }
    );
    var k = function(t) {
        function n(n) {
            var r = this.constructor
              , e = t.call(this, n) || this;
            return e.message = n,
            e.name = r.prototype.constructor.name,
            S(e, r.prototype),
            e
        }
        return r(n, t),
        n
    }(Error)
      , j = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function O(t, n) {
        void 0 === n && (n = !1);
        var r = t.host
          , e = t.path
          , i = t.pass
          , o = t.port
          , u = t.projectId;
        return t.protocol + "://" + t.publicKey + (n && i ? ":" + i : "") + "@" + r + (o ? ":" + o : "") + "/" + (e ? e + "/" : e) + u
    }
    function T(t) {
        return "user"in t && !("publicKey"in t) && (t.publicKey = t.user),
        {
            user: t.publicKey || "",
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }
    function R(t) {
        return "string" == typeof t ? function(t) {
            var n = j.exec(t);
            if (!n)
                throw new k("Invalid Sentry Dsn: " + t);
            var r = u(n.slice(1), 6)
              , e = r[0]
              , i = r[1]
              , o = r[2]
              , a = void 0 === o ? "" : o
              , s = r[3]
              , c = r[4]
              , f = void 0 === c ? "" : c
              , h = ""
              , v = r[5]
              , d = v.split("/");
            if (d.length > 1 && (h = d.slice(0, -1).join("/"),
            v = d.pop()),
            v) {
                var l = v.match(/^\d+/);
                l && (v = l[0])
            }
            return T({
                host: s,
                pass: a,
                path: h,
                projectId: v,
                port: f,
                protocol: e,
                publicKey: i
            })
        }(t) : T(t)
    }
    var D = ["fatal", "error", "warning", "log", "info", "debug", "critical"]
      , N = (c(),
    ["debug", "info", "warn", "error", "log", "assert"]);
    function q(t) {
        var n = c();
        if (!("console"in n))
            return t();
        var r = n.console
          , e = {};
        N.forEach((function(t) {
            var i = r[t] && r[t].__sentry_original__;
            t in n.console && i && (e[t] = r[t],
            r[t] = i)
        }
        ));
        try {
            return t()
        } finally {
            Object.keys(e).forEach((function(t) {
                r[t] = e[t]
            }
            ))
        }
    }
    function M() {
        var t = {
            enable: function() {
                !0
            },
            disable: function() {
                !1
            }
        };
        return N.forEach((function(n) {
            t[n] = function() {}
        }
        )),
        t
    }
    function I(t, n) {
        return void 0 === n && (n = 0),
        "string" != typeof t || 0 === n || t.length <= n ? t : t.substr(0, n) + "..."
    }
    function A(t, n) {
        if (!Array.isArray(t))
            return "";
        for (var r = [], e = 0; e < t.length; e++) {
            var i = t[e];
            try {
                r.push(String(i))
            } catch (t) {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(n)
    }
    function C(t, n) {
        return !!p(t) && (d(n, "RegExp") ? n.test(t) : "string" == typeof n && -1 !== t.indexOf(n))
    }
    function L(t, n, r) {
        if (n in t) {
            var e = t[n]
              , i = r(e);
            if ("function" == typeof i)
                try {
                    P(i, e)
                } catch (t) {}
            t[n] = i
        }
    }
    function U(t, n, r) {
        Object.defineProperty(t, n, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }
    function P(t, n) {
        var r = n.prototype || {};
        t.prototype = n.prototype = r,
        U(t, "__sentry_original__", n)
    }
    function H(t) {
        return t.__sentry_original__
    }
    function X(t) {
        var n = t;
        if (v(t))
            n = i({
                message: t.message,
                name: t.name,
                stack: t.stack
            }, z(t));
        else if (w(t)) {
            var r = t;
            n = i({
                type: r.type,
                target: F(r.target),
                currentTarget: F(r.currentTarget)
            }, z(r)),
            "undefined" != typeof CustomEvent && x(t, CustomEvent) && (n.detail = r.detail)
        }
        return n
    }
    function F(t) {
        try {
            return n = t,
            "undefined" != typeof Element && x(n, Element) ? E(t) : Object.prototype.toString.call(t)
        } catch (t) {
            return "<unknown>"
        }
        var n
    }
    function z(t) {
        var n = {};
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }
    function B(t, n) {
        void 0 === n && (n = 40);
        var r = Object.keys(X(t));
        if (r.sort(),
        !r.length)
            return "[object has no keys]";
        if (r[0].length >= n)
            return I(r[0], n);
        for (var e = r.length; e > 0; e--) {
            var i = r.slice(0, e).join(", ");
            if (!(i.length > n))
                return e === r.length ? i : I(i, n)
        }
        return ""
    }
    function $(t) {
        var n, r;
        if (b(t)) {
            var e = {};
            try {
                for (var i = o(Object.keys(t)), u = i.next(); !u.done; u = i.next()) {
                    var a = u.value;
                    void 0 !== t[a] && (e[a] = $(t[a]))
                }
            } catch (t) {
                n = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (r = i.return) && r.call(i)
                } finally {
                    if (n)
                        throw n.error
                }
            }
            return e
        }
        return Array.isArray(t) ? t.map($) : t
    }
    M();
    function W(t) {
        if (!t.length)
            return [];
        var n = t
          , r = n[0].function || ""
          , e = n[n.length - 1].function || "";
        return -1 === r.indexOf("captureMessage") && -1 === r.indexOf("captureException") || (n = n.slice(1)),
        -1 !== e.indexOf("sentryWrapped") && (n = n.slice(0, -1)),
        n.slice(0, 50).map((function(t) {
            return i(i({}, t), {
                filename: t.filename || n[0].filename,
                function: t.function || "?"
            })
        }
        )).reverse()
    }
    var J = "<anonymous>";
    function K(t) {
        try {
            return t && "function" == typeof t && t.name || J
        } catch (t) {
            return J
        }
    }
    function G() {
        if (!("fetch"in c()))
            return !1;
        try {
            return new Headers,
            new Request(""),
            new Response,
            !0
        } catch (t) {
            return !1
        }
    }
    function V(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }
    function Q() {
        if (!G())
            return !1;
        try {
            return new Request("_",{
                referrerPolicy: "origin"
            }),
            !0
        } catch (t) {
            return !1
        }
    }
    var Y, Z = c(), tt = {}, nt = {};
    function rt(t) {
        if (!nt[t])
            switch (nt[t] = !0,
            t) {
            case "console":
                !function() {
                    if (!("console"in Z))
                        return;
                    N.forEach((function(t) {
                        t in Z.console && L(Z.console, t, (function(n) {
                            return function() {
                                for (var r = [], e = 0; e < arguments.length; e++)
                                    r[e] = arguments[e];
                                it("console", {
                                    args: r,
                                    level: t
                                }),
                                n && n.apply(Z.console, r)
                            }
                        }
                        ))
                    }
                    ))
                }();
                break;
            case "dom":
                !function() {
                    if (!("document"in Z))
                        return;
                    var t = it.bind(null, "dom")
                      , n = ct(t, !0);
                    Z.document.addEventListener("click", n, !1),
                    Z.document.addEventListener("keypress", n, !1),
                    ["EventTarget", "Node"].forEach((function(n) {
                        var r = Z[n] && Z[n].prototype;
                        r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (L(r, "addEventListener", (function(n) {
                            return function(r, e, i) {
                                if ("click" === r || "keypress" == r)
                                    try {
                                        var o = this
                                          , u = o.__sentry_instrumentation_handlers__ = o.__sentry_instrumentation_handlers__ || {}
                                          , a = u[r] = u[r] || {
                                            refCount: 0
                                        };
                                        if (!a.handler) {
                                            var s = ct(t);
                                            a.handler = s,
                                            n.call(this, r, s, i)
                                        }
                                        a.refCount += 1
                                    } catch (t) {}
                                return n.call(this, r, e, i)
                            }
                        }
                        )),
                        L(r, "removeEventListener", (function(t) {
                            return function(n, r, e) {
                                if ("click" === n || "keypress" == n)
                                    try {
                                        var i = this
                                          , o = i.__sentry_instrumentation_handlers__ || {}
                                          , u = o[n];
                                        u && (u.refCount -= 1,
                                        u.refCount <= 0 && (t.call(this, n, u.handler, e),
                                        u.handler = void 0,
                                        delete o[n]),
                                        0 === Object.keys(o).length && delete i.__sentry_instrumentation_handlers__)
                                    } catch (t) {}
                                return t.call(this, n, r, e)
                            }
                        }
                        )))
                    }
                    ))
                }();
                break;
            case "xhr":
                !function() {
                    if (!("XMLHttpRequest"in Z))
                        return;
                    var t = XMLHttpRequest.prototype;
                    L(t, "open", (function(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++)
                                n[r] = arguments[r];
                            var e = this
                              , i = n[1]
                              , o = e.__sentry_xhr__ = {
                                method: p(n[0]) ? n[0].toUpperCase() : n[0],
                                url: n[1]
                            };
                            p(i) && "POST" === o.method && i.match(/sentry_key/) && (e.__sentry_own_request__ = !0);
                            var u = function() {
                                if (4 === e.readyState) {
                                    try {
                                        o.status_code = e.status
                                    } catch (t) {}
                                    it("xhr", {
                                        args: n,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: e
                                    })
                                }
                            };
                            return "onreadystatechange"in e && "function" == typeof e.onreadystatechange ? L(e, "onreadystatechange", (function(t) {
                                return function() {
                                    for (var n = [], r = 0; r < arguments.length; r++)
                                        n[r] = arguments[r];
                                    return u(),
                                    t.apply(e, n)
                                }
                            }
                            )) : e.addEventListener("readystatechange", u),
                            t.apply(e, n)
                        }
                    }
                    )),
                    L(t, "send", (function(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++)
                                n[r] = arguments[r];
                            return this.__sentry_xhr__ && void 0 !== n[0] && (this.__sentry_xhr__.body = n[0]),
                            it("xhr", {
                                args: n,
                                startTimestamp: Date.now(),
                                xhr: this
                            }),
                            t.apply(this, n)
                        }
                    }
                    ))
                }();
                break;
            case "fetch":
                !function() {
                    if (!function() {
                        if (!G())
                            return !1;
                        var t = c();
                        if (V(t.fetch))
                            return !0;
                        var n = !1
                          , r = t.document;
                        if (r && "function" == typeof r.createElement)
                            try {
                                var e = r.createElement("iframe");
                                e.hidden = !0,
                                r.head.appendChild(e),
                                e.contentWindow && e.contentWindow.fetch && (n = V(e.contentWindow.fetch)),
                                r.head.removeChild(e)
                            } catch (t) {}
                        return n
                    }())
                        return;
                    L(Z, "fetch", (function(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++)
                                n[r] = arguments[r];
                            var e = {
                                args: n,
                                fetchData: {
                                    method: ot(n),
                                    url: ut(n)
                                },
                                startTimestamp: Date.now()
                            };
                            return it("fetch", i({}, e)),
                            t.apply(Z, n).then((function(t) {
                                return it("fetch", i(i({}, e), {
                                    endTimestamp: Date.now(),
                                    response: t
                                })),
                                t
                            }
                            ), (function(t) {
                                throw it("fetch", i(i({}, e), {
                                    endTimestamp: Date.now(),
                                    error: t
                                })),
                                t
                            }
                            ))
                        }
                    }
                    ))
                }();
                break;
            case "history":
                !function() {
                    if (!function() {
                        var t = c()
                          , n = t.chrome
                          , r = n && n.app && n.app.runtime
                          , e = "history"in t && !!t.history.pushState && !!t.history.replaceState;
                        return !r && e
                    }())
                        return;
                    var t = Z.onpopstate;
                    function n(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++)
                                n[r] = arguments[r];
                            var e = n.length > 2 ? n[2] : void 0;
                            if (e) {
                                var i = Y
                                  , o = String(e);
                                Y = o,
                                it("history", {
                                    from: i,
                                    to: o
                                })
                            }
                            return t.apply(this, n)
                        }
                    }
                    Z.onpopstate = function() {
                        for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                        var e = Z.location.href
                          , i = Y;
                        if (Y = e,
                        it("history", {
                            from: i,
                            to: e
                        }),
                        t)
                            try {
                                return t.apply(this, n)
                            } catch (t) {}
                    }
                    ,
                    L(Z.history, "pushState", n),
                    L(Z.history, "replaceState", n)
                }();
                break;
            case "error":
                ft = Z.onerror,
                Z.onerror = function(t, n, r, e, i) {
                    return it("error", {
                        column: e,
                        error: i,
                        line: r,
                        msg: t,
                        url: n
                    }),
                    !!ft && ft.apply(this, arguments)
                }
                ;
                break;
            case "unhandledrejection":
                ht = Z.onunhandledrejection,
                Z.onunhandledrejection = function(t) {
                    return it("unhandledrejection", t),
                    !ht || ht.apply(this, arguments)
                }
                ;
                break;
            default:
                return
            }
    }
    function et(t, n) {
        tt[t] = tt[t] || [],
        tt[t].push(n),
        rt(t)
    }
    function it(t, n) {
        var r, e;
        if (t && tt[t])
            try {
                for (var i = o(tt[t] || []), u = i.next(); !u.done; u = i.next()) {
                    var a = u.value;
                    try {
                        a(n)
                    } catch (t) {}
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (e = i.return) && e.call(i)
                } finally {
                    if (r)
                        throw r.error
                }
            }
    }
    function ot(t) {
        return void 0 === t && (t = []),
        "Request"in Z && x(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }
    function ut(t) {
        return void 0 === t && (t = []),
        "string" == typeof t[0] ? t[0] : "Request"in Z && x(t[0], Request) ? t[0].url : String(t[0])
    }
    var at, st;
    function ct(t, n) {
        return void 0 === n && (n = !1),
        function(r) {
            if (r && st !== r && !function(t) {
                if ("keypress" !== t.type)
                    return !1;
                try {
                    var n = t.target;
                    if (!n || !n.tagName)
                        return !0;
                    if ("INPUT" === n.tagName || "TEXTAREA" === n.tagName || n.isContentEditable)
                        return !1
                } catch (t) {}
                return !0
            }(r)) {
                var e = "keypress" === r.type ? "input" : r.type;
                (void 0 === at || function(t, n) {
                    if (!t)
                        return !0;
                    if (t.type !== n.type)
                        return !0;
                    try {
                        if (t.target !== n.target)
                            return !0
                    } catch (t) {}
                    return !1
                }(st, r)) && (t({
                    event: r,
                    name: e,
                    global: n
                }),
                st = r),
                clearTimeout(at),
                at = Z.setTimeout((function() {
                    at = void 0
                }
                ), 1e3)
            }
        }
    }
    var ft = null;
    var ht = null;
    function vt() {
        var t = c()
          , n = t.crypto || t.msCrypto;
        if (void 0 !== n && n.getRandomValues) {
            var r = new Uint16Array(8);
            n.getRandomValues(r),
            r[3] = 4095 & r[3] | 16384,
            r[4] = 16383 & r[4] | 32768;
            var e = function(t) {
                for (var n = t.toString(16); n.length < 4; )
                    n = "0" + n;
                return n
            };
            return e(r[0]) + e(r[1]) + e(r[2]) + e(r[3]) + e(r[4]) + e(r[5]) + e(r[6]) + e(r[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            var n = 16 * Math.random() | 0;
            return ("x" === t ? n : 3 & n | 8).toString(16)
        }
        ))
    }
    function dt(t) {
        if (!t)
            return {};
        var n = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!n)
            return {};
        var r = n[6] || ""
          , e = n[8] || "";
        return {
            host: n[4],
            path: n[5],
            protocol: n[2],
            relative: n[5] + r + e
        }
    }
    function lt(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }
    function yt(t) {
        var n = t.message
          , r = t.event_id;
        if (n)
            return n;
        var e = lt(t);
        return e ? e.type && e.value ? e.type + ": " + e.value : e.type || e.value || r || "<unknown>" : r || "<unknown>"
    }
    function pt(t, n, r) {
        var e = t.exception = t.exception || {}
          , i = e.values = e.values || []
          , o = i[0] = i[0] || {};
        o.value || (o.value = n || ""),
        o.type || (o.type = r || "Error")
    }
    function mt(t, n) {
        var r = lt(t);
        if (r) {
            var e = r.mechanism;
            if (r.mechanism = i(i(i({}, {
                type: "generic",
                handled: !0
            }), e), n),
            n && "data"in n) {
                var o = i(i({}, e && e.data), n.data);
                r.mechanism.data = o
            }
        }
    }
    function bt(t) {
        if (t && t.__sentry_captured__)
            return !0;
        try {
            U(t, "__sentry_captured__", !0)
        } catch (t) {}
        return !1
    }
    function wt(t, n, r) {
        void 0 === n && (n = 1 / 0),
        void 0 === r && (r = 1 / 0);
        try {
            return xt("", t, n, r)
        } catch (t) {
            return {
                ERROR: "**non-serializable** (" + t + ")"
            }
        }
    }
    function gt(t, n, r) {
        void 0 === n && (n = 3),
        void 0 === r && (r = 102400);
        var e, i = wt(t, n);
        return e = i,
        function(t) {
            return ~-encodeURI(t).split(/%..|./).length
        }(JSON.stringify(e)) > r ? gt(t, n - 1, r) : i
    }
    function xt(t, n, r, e, i) {
        var o, a;
        void 0 === r && (r = 1 / 0),
        void 0 === e && (e = 1 / 0),
        void 0 === i && (o = "function" == typeof WeakSet,
        a = o ? new WeakSet : [],
        i = [function(t) {
            if (o)
                return !!a.has(t) || (a.add(t),
                !1);
            for (var n = 0; n < a.length; n++)
                if (a[n] === t)
                    return !0;
            return a.push(t),
            !1
        }
        , function(t) {
            if (o)
                a.delete(t);
            else
                for (var n = 0; n < a.length; n++)
                    if (a[n] === t) {
                        a.splice(n, 1);
                        break
                    }
        }
        ]);
        var s, c = u(i, 2), f = c[0], h = c[1], d = n;
        if (d && "function" == typeof d.toJSON)
            try {
                return d.toJSON()
            } catch (t) {}
        if (null === n || ["number", "boolean", "string"].includes(typeof n) && ("number" != typeof (s = n) || s == s))
            return n;
        var l = function(t, n) {
            try {
                return "domain" === t && n && "object" == typeof n && n.t ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" != typeof global && n === global ? "[Global]" : "undefined" != typeof window && n === window ? "[Window]" : "undefined" != typeof document && n === document ? "[Document]" : function(t) {
                    return b(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
                }(n) ? "[SyntheticEvent]" : "number" == typeof n && n != n ? "[NaN]" : void 0 === n ? "[undefined]" : "function" == typeof n ? "[Function: " + K(n) + "]" : "symbol" == typeof n ? "[" + String(n) + "]" : "bigint" == typeof n ? "[BigInt: " + String(n) + "]" : "[object " + Object.getPrototypeOf(n).constructor.name + "]"
            } catch (t) {
                return "**non-serializable** (" + t + ")"
            }
        }(t, n);
        if (!l.startsWith("[object "))
            return l;
        if (0 === r)
            return l.replace("object ", "");
        if (f(n))
            return "[Circular ~]";
        var y = Array.isArray(n) ? [] : {}
          , p = 0
          , m = v(n) || w(n) ? X(n) : n;
        for (var g in m)
            if (Object.prototype.hasOwnProperty.call(m, g)) {
                if (p >= e) {
                    y[g] = "[MaxProperties ~]";
                    break
                }
                var x = m[g];
                y[g] = xt(g, x, r - 1, e, i),
                p += 1
            }
        return h(n),
        y
    }
    function Et(t) {
        return new St((function(n) {
            n(t)
        }
        ))
    }
    function _t(t) {
        return new St((function(n, r) {
            r(t)
        }
        ))
    }
    var St = function() {
        function t(t) {
            var n = this;
            this.i = 0,
            this.o = [],
            this.u = function(t) {
                n.h(1, t)
            }
            ,
            this.v = function(t) {
                n.h(2, t)
            }
            ,
            this.h = function(t, r) {
                0 === n.i && (g(r) ? r.then(n.u, n.v) : (n.i = t,
                n.l = r,
                n.p()))
            }
            ,
            this.p = function() {
                if (0 !== n.i) {
                    var t = n.o.slice();
                    n.o = [],
                    t.forEach((function(t) {
                        t[0] || (1 === n.i && t[1](n.l),
                        2 === n.i && t[2](n.l),
                        t[0] = !0)
                    }
                    ))
                }
            }
            ;
            try {
                t(this.u, this.v)
            } catch (t) {
                this.v(t)
            }
        }
        return t.prototype.then = function(n, r) {
            var e = this;
            return new t((function(t, i) {
                e.o.push([!1, function(r) {
                    if (n)
                        try {
                            t(n(r))
                        } catch (t) {
                            i(t)
                        }
                    else
                        t(r)
                }
                , function(n) {
                    if (r)
                        try {
                            t(r(n))
                        } catch (t) {
                            i(t)
                        }
                    else
                        i(n)
                }
                ]),
                e.p()
            }
            ))
        }
        ,
        t.prototype.catch = function(t) {
            return this.then((function(t) {
                return t
            }
            ), t)
        }
        ,
        t.prototype.finally = function(n) {
            var r = this;
            return new t((function(t, e) {
                var i, o;
                return r.then((function(t) {
                    o = !1,
                    i = t,
                    n && n()
                }
                ), (function(t) {
                    o = !0,
                    i = t,
                    n && n()
                }
                )).then((function() {
                    o ? e(i) : t(i)
                }
                ))
            }
            ))
        }
        ,
        t
    }();
    function kt(t) {
        var n = [];
        function r(t) {
            return n.splice(n.indexOf(t), 1)[0]
        }
        return {
            $: n,
            add: function(e) {
                if (!(void 0 === t || n.length < t))
                    return _t(new k("Not adding Promise due to buffer limit reached."));
                var i = e();
                return -1 === n.indexOf(i) && n.push(i),
                i.then((function() {
                    return r(i)
                }
                )).then(null, (function() {
                    return r(i).then(null, (function() {}
                    ))
                }
                )),
                i
            },
            drain: function(t) {
                return new St((function(r, e) {
                    var i = n.length;
                    if (!i)
                        return r(!0);
                    var o = setTimeout((function() {
                        t && t > 0 && r(!1)
                    }
                    ), t);
                    n.forEach((function(t) {
                        Et(t).then((function() {
                            --i || (clearTimeout(o),
                            r(!0))
                        }
                        ), e)
                    }
                    ))
                }
                ))
            }
        }
    }
    function jt(n) {
        return "warn" === n ? t.Severity.Warning : function(t) {
            return -1 !== D.indexOf(t)
        }(n) ? n : t.Severity.Log
    }
    function Ot(t) {
        return t >= 200 && t < 300 ? "success" : 429 === t ? "rate_limit" : t >= 400 && t < 500 ? "invalid" : t >= 500 ? "failed" : "unknown"
    }
    var Tt = {
        nowSeconds: function() {
            return Date.now() / 1e3
        }
    };
    var Rt = function() {
        var t = c().performance;
        if (t && t.now)
            return {
                now: function() {
                    return t.now()
                },
                timeOrigin: Date.now() - t.now()
            }
    }()
      , Dt = void 0 === Rt ? Tt : {
        nowSeconds: function() {
            return (Rt.timeOrigin + Rt.now()) / 1e3
        }
    }
      , Nt = Tt.nowSeconds.bind(Tt)
      , qt = Dt.nowSeconds.bind(Dt);
    function Mt(t, n) {
        return void 0 === n && (n = []),
        [t, n]
    }
    function It(t) {
        var n = u(t, 2)
          , r = n[0]
          , e = n[1]
          , i = JSON.stringify(r);
        return e.reduce((function(t, n) {
            var r = u(n, 2)
              , e = r[0]
              , i = r[1]
              , o = m(i) ? String(i) : JSON.stringify(i);
            return t + "\n" + JSON.stringify(e) + "\n" + o
        }
        ), i)
    }
    !function() {
        var t = c().performance;
        if (t && t.now) {
            var n = 36e5
              , r = t.now()
              , e = Date.now()
              , i = t.timeOrigin ? Math.abs(t.timeOrigin + r - e) : n
              , o = i < n
              , u = t.timing && t.timing.navigationStart
              , a = "number" == typeof u ? Math.abs(u + r - e) : n;
            (o || a < n) && (i <= a && t.timeOrigin)
        }
    }();
    function At(t, n) {
        return t[n] || t.all || 0
    }
    function Ct(t, n, r) {
        return void 0 === r && (r = Date.now()),
        At(t, n) > r
    }
    function Lt(t, n, r) {
        var e, u, a, s;
        void 0 === r && (r = Date.now());
        var c = i({}, t)
          , f = n["x-sentry-rate-limits"]
          , h = n["retry-after"];
        if (f)
            try {
                for (var v = o(f.trim().split(",")), d = v.next(); !d.done; d = v.next()) {
                    var l = d.value.split(":", 2)
                      , y = parseInt(l[0], 10)
                      , p = 1e3 * (isNaN(y) ? 60 : y);
                    if (l[1])
                        try {
                            for (var m = (a = void 0,
                            o(l[1].split(";"))), b = m.next(); !b.done; b = m.next()) {
                                c[b.value] = r + p
                            }
                        } catch (t) {
                            a = {
                                error: t
                            }
                        } finally {
                            try {
                                b && !b.done && (s = m.return) && s.call(m)
                            } finally {
                                if (a)
                                    throw a.error
                            }
                        }
                    else
                        c.all = r + p
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    d && !d.done && (u = v.return) && u.call(v)
                } finally {
                    if (e)
                        throw e.error
                }
            }
        else
            h && (c.all = r + function(t, n) {
                void 0 === n && (n = Date.now());
                var r = parseInt("" + t, 10);
                if (!isNaN(r))
                    return 1e3 * r;
                var e = Date.parse("" + t);
                return isNaN(e) ? 6e4 : e - n
            }(h, r));
        return c
    }
    var Ut = function() {
        function t() {
            this.m = !1,
            this.g = [],
            this._ = [],
            this.S = [],
            this.k = {},
            this.j = {},
            this.O = {},
            this.T = {},
            this.R = {}
        }
        return t.clone = function(n) {
            var r = new t;
            return n && (r.S = a(n.S),
            r.j = i({}, n.j),
            r.O = i({}, n.O),
            r.T = i({}, n.T),
            r.k = n.k,
            r.D = n.D,
            r.N = n.N,
            r.q = n.q,
            r.M = n.M,
            r.I = n.I,
            r._ = a(n._),
            r.A = n.A),
            r
        }
        ,
        t.prototype.addScopeListener = function(t) {
            this.g.push(t)
        }
        ,
        t.prototype.addEventProcessor = function(t) {
            return this._.push(t),
            this
        }
        ,
        t.prototype.setUser = function(t) {
            return this.k = t || {},
            this.q && this.q.update({
                user: t
            }),
            this.C(),
            this
        }
        ,
        t.prototype.getUser = function() {
            return this.k
        }
        ,
        t.prototype.getRequestSession = function() {
            return this.A
        }
        ,
        t.prototype.setRequestSession = function(t) {
            return this.A = t,
            this
        }
        ,
        t.prototype.setTags = function(t) {
            return this.j = i(i({}, this.j), t),
            this.C(),
            this
        }
        ,
        t.prototype.setTag = function(t, n) {
            var r;
            return this.j = i(i({}, this.j), ((r = {})[t] = n,
            r)),
            this.C(),
            this
        }
        ,
        t.prototype.setExtras = function(t) {
            return this.O = i(i({}, this.O), t),
            this.C(),
            this
        }
        ,
        t.prototype.setExtra = function(t, n) {
            var r;
            return this.O = i(i({}, this.O), ((r = {})[t] = n,
            r)),
            this.C(),
            this
        }
        ,
        t.prototype.setFingerprint = function(t) {
            return this.I = t,
            this.C(),
            this
        }
        ,
        t.prototype.setLevel = function(t) {
            return this.D = t,
            this.C(),
            this
        }
        ,
        t.prototype.setTransactionName = function(t) {
            return this.M = t,
            this.C(),
            this
        }
        ,
        t.prototype.setTransaction = function(t) {
            return this.setTransactionName(t)
        }
        ,
        t.prototype.setContext = function(t, n) {
            var r;
            return null === n ? delete this.T[t] : this.T = i(i({}, this.T), ((r = {})[t] = n,
            r)),
            this.C(),
            this
        }
        ,
        t.prototype.setSpan = function(t) {
            return this.N = t,
            this.C(),
            this
        }
        ,
        t.prototype.getSpan = function() {
            return this.N
        }
        ,
        t.prototype.getTransaction = function() {
            var t = this.getSpan();
            return t && t.transaction
        }
        ,
        t.prototype.setSession = function(t) {
            return t ? this.q = t : delete this.q,
            this.C(),
            this
        }
        ,
        t.prototype.getSession = function() {
            return this.q
        }
        ,
        t.prototype.update = function(n) {
            if (!n)
                return this;
            if ("function" == typeof n) {
                var r = n(this);
                return r instanceof t ? r : this
            }
            return n instanceof t ? (this.j = i(i({}, this.j), n.j),
            this.O = i(i({}, this.O), n.O),
            this.T = i(i({}, this.T), n.T),
            n.k && Object.keys(n.k).length && (this.k = n.k),
            n.D && (this.D = n.D),
            n.I && (this.I = n.I),
            n.A && (this.A = n.A)) : b(n) && (n = n,
            this.j = i(i({}, this.j), n.tags),
            this.O = i(i({}, this.O), n.extra),
            this.T = i(i({}, this.T), n.contexts),
            n.user && (this.k = n.user),
            n.level && (this.D = n.level),
            n.fingerprint && (this.I = n.fingerprint),
            n.requestSession && (this.A = n.requestSession)),
            this
        }
        ,
        t.prototype.clear = function() {
            return this.S = [],
            this.j = {},
            this.O = {},
            this.k = {},
            this.T = {},
            this.D = void 0,
            this.M = void 0,
            this.I = void 0,
            this.A = void 0,
            this.N = void 0,
            this.q = void 0,
            this.C(),
            this
        }
        ,
        t.prototype.addBreadcrumb = function(t, n) {
            var r = "number" == typeof n ? Math.min(n, 100) : 100;
            if (r <= 0)
                return this;
            var e = i({
                timestamp: Nt()
            }, t);
            return this.S = a(this.S, [e]).slice(-r),
            this.C(),
            this
        }
        ,
        t.prototype.clearBreadcrumbs = function() {
            return this.S = [],
            this.C(),
            this
        }
        ,
        t.prototype.applyToEvent = function(t, n) {
            if (this.O && Object.keys(this.O).length && (t.extra = i(i({}, this.O), t.extra)),
            this.j && Object.keys(this.j).length && (t.tags = i(i({}, this.j), t.tags)),
            this.k && Object.keys(this.k).length && (t.user = i(i({}, this.k), t.user)),
            this.T && Object.keys(this.T).length && (t.contexts = i(i({}, this.T), t.contexts)),
            this.D && (t.level = this.D),
            this.M && (t.transaction = this.M),
            this.N) {
                t.contexts = i({
                    trace: this.N.getTraceContext()
                }, t.contexts);
                var r = this.N.transaction && this.N.transaction.name;
                r && (t.tags = i({
                    transaction: r
                }, t.tags))
            }
            return this.L(t),
            t.breadcrumbs = a(t.breadcrumbs || [], this.S),
            t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
            t.sdkProcessingMetadata = this.R,
            this.U(a(Pt(), this._), t, n)
        }
        ,
        t.prototype.setSDKProcessingMetadata = function(t) {
            return this.R = i(i({}, this.R), t),
            this
        }
        ,
        t.prototype.U = function(t, n, r, e) {
            var o = this;
            return void 0 === e && (e = 0),
            new St((function(u, a) {
                var s = t[e];
                if (null === n || "function" != typeof s)
                    u(n);
                else {
                    var c = s(i({}, n), r);
                    g(c) ? c.then((function(n) {
                        return o.U(t, n, r, e + 1).then(u)
                    }
                    )).then(null, a) : o.U(t, c, r, e + 1).then(u).then(null, a)
                }
            }
            ))
        }
        ,
        t.prototype.C = function() {
            var t = this;
            this.m || (this.m = !0,
            this.g.forEach((function(n) {
                n(t)
            }
            )),
            this.m = !1)
        }
        ,
        t.prototype.L = function(t) {
            t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [],
            this.I && (t.fingerprint = t.fingerprint.concat(this.I)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
        ,
        t
    }();
    function Pt() {
        return f("globalEventProcessors", (function() {
            return []
        }
        ))
    }
    function Ht(t) {
        Pt().push(t)
    }
    var Xt = function() {
        function t(t) {
            this.errors = 0,
            this.sid = vt(),
            this.duration = 0,
            this.status = "ok",
            this.init = !0,
            this.ignoreDuration = !1;
            var n = qt();
            this.timestamp = n,
            this.started = n,
            t && this.update(t)
        }
        return t.prototype.update = function(t) {
            if (void 0 === t && (t = {}),
            t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address),
            this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)),
            this.timestamp = t.timestamp || qt(),
            t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
            t.sid && (this.sid = 32 === t.sid.length ? t.sid : vt()),
            void 0 !== t.init && (this.init = t.init),
            !this.did && t.did && (this.did = "" + t.did),
            "number" == typeof t.started && (this.started = t.started),
            this.ignoreDuration)
                this.duration = void 0;
            else if ("number" == typeof t.duration)
                this.duration = t.duration;
            else {
                var n = this.timestamp - this.started;
                this.duration = n >= 0 ? n : 0
            }
            t.release && (this.release = t.release),
            t.environment && (this.environment = t.environment),
            !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress),
            !this.userAgent && t.userAgent && (this.userAgent = t.userAgent),
            "number" == typeof t.errors && (this.errors = t.errors),
            t.status && (this.status = t.status)
        }
        ,
        t.prototype.close = function(t) {
            t ? this.update({
                status: t
            }) : "ok" === this.status ? this.update({
                status: "exited"
            }) : this.update()
        }
        ,
        t.prototype.toJSON = function() {
            return $({
                sid: "" + this.sid,
                init: this.init,
                started: new Date(1e3 * this.started).toISOString(),
                timestamp: new Date(1e3 * this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                duration: this.duration,
                attrs: {
                    release: this.release,
                    environment: this.environment,
                    ip_address: this.ipAddress,
                    user_agent: this.userAgent
                }
            })
        }
        ,
        t
    }()
      , Ft = function() {
        function t(t, n, r) {
            void 0 === n && (n = new Ut),
            void 0 === r && (r = 4),
            this.P = r,
            this.H = [{}],
            this.getStackTop().scope = n,
            t && this.bindClient(t)
        }
        return t.prototype.isOlderThan = function(t) {
            return this.P < t
        }
        ,
        t.prototype.bindClient = function(t) {
            this.getStackTop().client = t,
            t && t.setupIntegrations && t.setupIntegrations()
        }
        ,
        t.prototype.pushScope = function() {
            var t = Ut.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }),
            t
        }
        ,
        t.prototype.popScope = function() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop()
        }
        ,
        t.prototype.withScope = function(t) {
            var n = this.pushScope();
            try {
                t(n)
            } finally {
                this.popScope()
            }
        }
        ,
        t.prototype.getClient = function() {
            return this.getStackTop().client
        }
        ,
        t.prototype.getScope = function() {
            return this.getStackTop().scope
        }
        ,
        t.prototype.getStack = function() {
            return this.H
        }
        ,
        t.prototype.getStackTop = function() {
            return this.H[this.H.length - 1]
        }
        ,
        t.prototype.captureException = function(t, n) {
            var r = this.X = n && n.event_id ? n.event_id : vt()
              , e = n;
            if (!n) {
                var o = void 0;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (t) {
                    o = t
                }
                e = {
                    originalException: t,
                    syntheticException: o
                }
            }
            return this.F("captureException", t, i(i({}, e), {
                event_id: r
            })),
            r
        }
        ,
        t.prototype.captureMessage = function(t, n, r) {
            var e = this.X = r && r.event_id ? r.event_id : vt()
              , o = r;
            if (!r) {
                var u = void 0;
                try {
                    throw new Error(t)
                } catch (t) {
                    u = t
                }
                o = {
                    originalException: t,
                    syntheticException: u
                }
            }
            return this.F("captureMessage", t, n, i(i({}, o), {
                event_id: e
            })),
            e
        }
        ,
        t.prototype.captureEvent = function(t, n) {
            var r = n && n.event_id ? n.event_id : vt();
            return "transaction" !== t.type && (this.X = r),
            this.F("captureEvent", t, i(i({}, n), {
                event_id: r
            })),
            r
        }
        ,
        t.prototype.lastEventId = function() {
            return this.X
        }
        ,
        t.prototype.addBreadcrumb = function(t, n) {
            var r = this.getStackTop()
              , e = r.scope
              , o = r.client;
            if (e && o) {
                var u = o.getOptions && o.getOptions() || {}
                  , a = u.beforeBreadcrumb
                  , s = void 0 === a ? null : a
                  , c = u.maxBreadcrumbs
                  , f = void 0 === c ? 100 : c;
                if (!(f <= 0)) {
                    var h = Nt()
                      , v = i({
                        timestamp: h
                    }, t)
                      , d = s ? q((function() {
                        return s(v, n)
                    }
                    )) : v;
                    null !== d && e.addBreadcrumb(d, f)
                }
            }
        }
        ,
        t.prototype.setUser = function(t) {
            var n = this.getScope();
            n && n.setUser(t)
        }
        ,
        t.prototype.setTags = function(t) {
            var n = this.getScope();
            n && n.setTags(t)
        }
        ,
        t.prototype.setExtras = function(t) {
            var n = this.getScope();
            n && n.setExtras(t)
        }
        ,
        t.prototype.setTag = function(t, n) {
            var r = this.getScope();
            r && r.setTag(t, n)
        }
        ,
        t.prototype.setExtra = function(t, n) {
            var r = this.getScope();
            r && r.setExtra(t, n)
        }
        ,
        t.prototype.setContext = function(t, n) {
            var r = this.getScope();
            r && r.setContext(t, n)
        }
        ,
        t.prototype.configureScope = function(t) {
            var n = this.getStackTop()
              , r = n.scope
              , e = n.client;
            r && e && t(r)
        }
        ,
        t.prototype.run = function(t) {
            var n = Bt(this);
            try {
                t(this)
            } finally {
                Bt(n)
            }
        }
        ,
        t.prototype.getIntegration = function(t) {
            var n = this.getClient();
            if (!n)
                return null;
            try {
                return n.getIntegration(t)
            } catch (t) {
                return null
            }
        }
        ,
        t.prototype.startSpan = function(t) {
            return this.B("startSpan", t)
        }
        ,
        t.prototype.startTransaction = function(t, n) {
            return this.B("startTransaction", t, n)
        }
        ,
        t.prototype.traceHeaders = function() {
            return this.B("traceHeaders")
        }
        ,
        t.prototype.captureSession = function(t) {
            if (void 0 === t && (t = !1),
            t)
                return this.endSession();
            this.W()
        }
        ,
        t.prototype.endSession = function() {
            var t = this.getStackTop()
              , n = t && t.scope
              , r = n && n.getSession();
            r && r.close(),
            this.W(),
            n && n.setSession()
        }
        ,
        t.prototype.startSession = function(t) {
            var n = this.getStackTop()
              , r = n.scope
              , e = n.client
              , o = e && e.getOptions() || {}
              , u = o.release
              , a = o.environment
              , s = (c().navigator || {}).userAgent
              , f = new Xt(i(i(i({
                release: u,
                environment: a
            }, r && {
                user: r.getUser()
            }), s && {
                userAgent: s
            }), t));
            if (r) {
                var h = r.getSession && r.getSession();
                h && "ok" === h.status && h.update({
                    status: "exited"
                }),
                this.endSession(),
                r.setSession(f)
            }
            return f
        }
        ,
        t.prototype.W = function() {
            var t = this.getStackTop()
              , n = t.scope
              , r = t.client;
            if (n) {
                var e = n.getSession && n.getSession();
                e && r && r.captureSession && r.captureSession(e)
            }
        }
        ,
        t.prototype.F = function(t) {
            for (var n, r = [], e = 1; e < arguments.length; e++)
                r[e - 1] = arguments[e];
            var i = this.getStackTop()
              , o = i.scope
              , u = i.client;
            u && u[t] && (n = u)[t].apply(n, a(r, [o]))
        }
        ,
        t.prototype.B = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            var e = zt()
              , i = e.__SENTRY__;
            if (i && i.extensions && "function" == typeof i.extensions[t])
                return i.extensions[t].apply(this, n)
        }
        ,
        t
    }();
    function zt() {
        var t = c();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        t
    }
    function Bt(t) {
        var n = zt()
          , r = Wt(n);
        return Jt(n, t),
        r
    }
    function $t() {
        var t, n = zt();
        return (t = n) && t.__SENTRY__ && t.__SENTRY__.hub && !Wt(n).isOlderThan(4) || Jt(n, new Ft),
        Wt(n)
    }
    function Wt(t) {
        return f("hub", (function() {
            return new Ft
        }
        ), t)
    }
    function Jt(t, n) {
        return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = n,
        !0)
    }
    function Kt(t) {
        for (var n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
        var e = $t();
        if (e && e[t])
            return e[t].apply(e, a(n));
        throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
    }
    function captureException(t, n) {
        return Kt("captureException", t, {
            captureContext: n,
            originalException: t,
            syntheticException: new Error("Sentry syntheticException")
        })
    }
    function Gt(t) {
        Kt("withScope", t)
    }
    function Vt(t, n, r) {
        return {
            initDsn: t,
            metadata: n || {},
            dsn: R(t),
            tunnel: r
        }
    }
    function Qt(t) {
        var n = t.protocol ? t.protocol + ":" : ""
          , r = t.port ? ":" + t.port : "";
        return n + "//" + t.host + r + (t.path ? "/" + t.path : "") + "/api/"
    }
    function Yt(t, n) {
        return "" + Qt(t) + t.projectId + "/" + n + "/"
    }
    function Zt(t) {
        return n = {
            sentry_key: t.publicKey,
            sentry_version: "7"
        },
        Object.keys(n).map((function(t) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(n[t])
        }
        )).join("&");
        var n
    }
    function tn(t) {
        return function(t) {
            return Yt(t, "store")
        }(t) + "?" + Zt(t)
    }
    function nn(t, n) {
        return n || function(t) {
            return Yt(t, "envelope")
        }(t) + "?" + Zt(t)
    }
    var rn = [];
    function en(t) {
        return t.reduce((function(t, n) {
            return t.every((function(t) {
                return n.name !== t.name
            }
            )) && t.push(n),
            t
        }
        ), [])
    }
    function on(t) {
        var n = {};
        return function(t) {
            var n = t.defaultIntegrations && a(t.defaultIntegrations) || []
              , r = t.integrations
              , e = a(en(n));
            Array.isArray(r) ? e = a(e.filter((function(t) {
                return r.every((function(n) {
                    return n.name !== t.name
                }
                ))
            }
            )), en(r)) : "function" == typeof r && (e = r(e),
            e = Array.isArray(e) ? e : [e]);
            var i = e.map((function(t) {
                return t.name
            }
            ))
              , o = "Debug";
            return -1 !== i.indexOf(o) && e.push.apply(e, a(e.splice(i.indexOf(o), 1))),
            e
        }(t).forEach((function(t) {
            n[t.name] = t,
            function(t) {
                -1 === rn.indexOf(t.name) && (t.setupOnce(Ht, $t),
                rn.push(t.name))
            }(t)
        }
        )),
        U(n, "initialized", !0),
        n
    }
    var un = function() {
        function t(t, n) {
            this.J = {},
            this.K = 0,
            this.G = new t(n),
            this.V = n,
            n.dsn && (this.Y = R(n.dsn))
        }
        return t.prototype.captureException = function(t, n, r) {
            var e = this;
            if (!bt(t)) {
                var i = n && n.event_id;
                return this.Z(this.tt().eventFromException(t, n).then((function(t) {
                    return e.nt(t, n, r)
                }
                )).then((function(t) {
                    i = t
                }
                ))),
                i
            }
        }
        ,
        t.prototype.captureMessage = function(t, n, r, e) {
            var i = this
              , o = r && r.event_id
              , u = m(t) ? this.tt().eventFromMessage(String(t), n, r) : this.tt().eventFromException(t, r);
            return this.Z(u.then((function(t) {
                return i.nt(t, r, e)
            }
            )).then((function(t) {
                o = t
            }
            ))),
            o
        }
        ,
        t.prototype.captureEvent = function(t, n, r) {
            if (!(n && n.originalException && bt(n.originalException))) {
                var e = n && n.event_id;
                return this.Z(this.nt(t, n, r).then((function(t) {
                    e = t
                }
                ))),
                e
            }
        }
        ,
        t.prototype.captureSession = function(t) {
            this.rt() && ("string" != typeof t.release || (this.et(t),
            t.update({
                init: !1
            })))
        }
        ,
        t.prototype.getDsn = function() {
            return this.Y
        }
        ,
        t.prototype.getOptions = function() {
            return this.V
        }
        ,
        t.prototype.getTransport = function() {
            return this.tt().getTransport()
        }
        ,
        t.prototype.flush = function(t) {
            var n = this;
            return this.it(t).then((function(r) {
                return n.getTransport().close(t).then((function(t) {
                    return r && t
                }
                ))
            }
            ))
        }
        ,
        t.prototype.close = function(t) {
            var n = this;
            return this.flush(t).then((function(t) {
                return n.getOptions().enabled = !1,
                t
            }
            ))
        }
        ,
        t.prototype.setupIntegrations = function() {
            this.rt() && !this.J.initialized && (this.J = on(this.V))
        }
        ,
        t.prototype.getIntegration = function(t) {
            try {
                return this.J[t.id] || null
            } catch (t) {
                return null
            }
        }
        ,
        t.prototype.ot = function(t, n) {
            var r, e, u = !1, a = !1, s = n.exception && n.exception.values;
            if (s) {
                a = !0;
                try {
                    for (var c = o(s), f = c.next(); !f.done; f = c.next()) {
                        var h = f.value.mechanism;
                        if (h && !1 === h.handled) {
                            u = !0;
                            break
                        }
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        f && !f.done && (e = c.return) && e.call(c)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
            }
            var v = "ok" === t.status;
            (v && 0 === t.errors || v && u) && (t.update(i(i({}, u && {
                status: "crashed"
            }), {
                errors: t.errors || Number(a || u)
            })),
            this.captureSession(t))
        }
        ,
        t.prototype.et = function(t) {
            this.tt().sendSession(t)
        }
        ,
        t.prototype.it = function(t) {
            var n = this;
            return new St((function(r) {
                var e = 0
                  , i = setInterval((function() {
                    0 == n.K ? (clearInterval(i),
                    r(!0)) : (e += 1,
                    t && e >= t && (clearInterval(i),
                    r(!1)))
                }
                ), 1)
            }
            ))
        }
        ,
        t.prototype.tt = function() {
            return this.G
        }
        ,
        t.prototype.rt = function() {
            return !1 !== this.getOptions().enabled && void 0 !== this.Y
        }
        ,
        t.prototype.ut = function(t, n, r) {
            var e = this
              , o = this.getOptions()
              , u = o.normalizeDepth
              , a = void 0 === u ? 3 : u
              , s = o.normalizeMaxBreadth
              , c = void 0 === s ? 1e3 : s
              , f = i(i({}, t), {
                event_id: t.event_id || (r && r.event_id ? r.event_id : vt()),
                timestamp: t.timestamp || Nt()
            });
            this.at(f),
            this.st(f);
            var h = n;
            r && r.captureContext && (h = Ut.clone(h).update(r.captureContext));
            var v = Et(f);
            return h && (v = h.applyToEvent(f, r)),
            v.then((function(t) {
                return t && (t.sdkProcessingMetadata = i(i({}, t.sdkProcessingMetadata), {
                    normalizeDepth: wt(a) + " (" + typeof a + ")"
                })),
                "number" == typeof a && a > 0 ? e.ct(t, a, c) : t
            }
            ))
        }
        ,
        t.prototype.ct = function(t, n, r) {
            if (!t)
                return null;
            var e = i(i(i(i(i({}, t), t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map((function(t) {
                    return i(i({}, t), t.data && {
                        data: wt(t.data, n, r)
                    })
                }
                ))
            }), t.user && {
                user: wt(t.user, n, r)
            }), t.contexts && {
                contexts: wt(t.contexts, n, r)
            }), t.extra && {
                extra: wt(t.extra, n, r)
            });
            return t.contexts && t.contexts.trace && (e.contexts.trace = t.contexts.trace),
            e.sdkProcessingMetadata = i(i({}, e.sdkProcessingMetadata), {
                baseClientNormalized: !0
            }),
            e
        }
        ,
        t.prototype.at = function(t) {
            var n = this.getOptions()
              , r = n.environment
              , e = n.release
              , i = n.dist
              , o = n.maxValueLength
              , u = void 0 === o ? 250 : o;
            "environment"in t || (t.environment = "environment"in n ? r : "production"),
            void 0 === t.release && void 0 !== e && (t.release = e),
            void 0 === t.dist && void 0 !== i && (t.dist = i),
            t.message && (t.message = I(t.message, u));
            var a = t.exception && t.exception.values && t.exception.values[0];
            a && a.value && (a.value = I(a.value, u));
            var s = t.request;
            s && s.url && (s.url = I(s.url, u))
        }
        ,
        t.prototype.st = function(t) {
            var n = Object.keys(this.J);
            n.length > 0 && (t.sdk = t.sdk || {},
            t.sdk.integrations = a(t.sdk.integrations || [], n))
        }
        ,
        t.prototype.ft = function(t) {
            this.tt().sendEvent(t)
        }
        ,
        t.prototype.nt = function(t, n, r) {
            return this.ht(t, n, r).then((function(t) {
                return t.event_id
            }
            ), (function(t) {}
            ))
        }
        ,
        t.prototype.ht = function(t, n, r) {
            var e = this
              , i = this.getOptions()
              , o = i.beforeSend
              , u = i.sampleRate
              , a = this.getTransport();
            function s(t, n) {
                a.recordLostEvent && a.recordLostEvent(t, n)
            }
            if (!this.rt())
                return _t(new k("SDK not enabled, will not capture event."));
            var c = "transaction" === t.type;
            return !c && "number" == typeof u && Math.random() > u ? (s("sample_rate", "event"),
            _t(new k("Discarding event because it's not included in the random sample (sampling rate = " + u + ")"))) : this.ut(t, r, n).then((function(r) {
                if (null === r)
                    throw s("event_processor", t.type || "event"),
                    new k("An event processor returned null, will not send event.");
                return n && n.data && !0 === n.data.__sentry__ || c || !o ? r : function(t) {
                    var n = "`beforeSend` method has to return `null` or a valid event.";
                    if (g(t))
                        return t.then((function(t) {
                            if (!b(t) && null !== t)
                                throw new k(n);
                            return t
                        }
                        ), (function(t) {
                            throw new k("beforeSend rejected with " + t)
                        }
                        ));
                    if (!b(t) && null !== t)
                        throw new k(n);
                    return t
                }(o(r, n))
            }
            )).then((function(n) {
                if (null === n)
                    throw s("before_send", t.type || "event"),
                    new k("`beforeSend` returned `null`, will not send event.");
                var i = r && r.getSession && r.getSession();
                return !c && i && e.ot(i, n),
                e.ft(n),
                n
            }
            )).then(null, (function(t) {
                if (t instanceof k)
                    throw t;
                throw e.captureException(t, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: t
                }),
                new k("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
            }
            ))
        }
        ,
        t.prototype.Z = function(t) {
            var n = this;
            this.K += 1,
            t.then((function(t) {
                return n.K -= 1,
                t
            }
            ), (function(t) {
                return n.K -= 1,
                t
            }
            ))
        }
        ,
        t
    }();
    function an(t) {
        if (t.metadata && t.metadata.sdk) {
            var n = t.metadata.sdk;
            return {
                name: n.name,
                version: n.version
            }
        }
    }
    function sn(t, n) {
        return n ? (t.sdk = t.sdk || {},
        t.sdk.name = t.sdk.name || n.name,
        t.sdk.version = t.sdk.version || n.version,
        t.sdk.integrations = a(t.sdk.integrations || [], n.integrations || []),
        t.sdk.packages = a(t.sdk.packages || [], n.packages || []),
        t) : t
    }
    function cn(t, n) {
        var r = an(n)
          , e = "aggregates"in t ? "sessions" : "session";
        return [Mt(i(i({
            sent_at: (new Date).toISOString()
        }, r && {
            sdk: r
        }), !!n.tunnel && {
            dsn: O(n.dsn)
        }), [[{
            type: e
        }, t]]), e]
    }
    var fn = function() {
        function t() {}
        return t.prototype.sendEvent = function(t) {
            return Et({
                reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: "skipped"
            })
        }
        ,
        t.prototype.close = function(t) {
            return Et(!0)
        }
        ,
        t
    }()
      , hn = function() {
        function t(t) {
            this.V = t,
            this.vt = this.dt()
        }
        return t.prototype.eventFromException = function(t, n) {
            throw new k("Backend has to implement `eventFromException` method")
        }
        ,
        t.prototype.eventFromMessage = function(t, n, r) {
            throw new k("Backend has to implement `eventFromMessage` method")
        }
        ,
        t.prototype.sendEvent = function(t) {
            if (this.lt && this.V.dsn && this.V._experiments && this.V._experiments.newTransport) {
                var n = function(t, n) {
                    var r = an(n)
                      , e = t.type || "event"
                      , o = (t.sdkProcessingMetadata || {}).transactionSampling || {}
                      , u = o.method
                      , a = o.rate;
                    return sn(t, n.metadata.sdk),
                    t.tags = t.tags || {},
                    t.extra = t.extra || {},
                    t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized || (t.tags.skippedNormalization = !0,
                    t.extra.normalizeDepth = t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"),
                    delete t.sdkProcessingMetadata,
                    Mt(i(i({
                        event_id: t.event_id,
                        sent_at: (new Date).toISOString()
                    }, r && {
                        sdk: r
                    }), !!n.tunnel && {
                        dsn: O(n.dsn)
                    }), [[{
                        type: e,
                        sample_rates: [{
                            id: u,
                            rate: a
                        }]
                    }, t]])
                }(t, Vt(this.V.dsn, this.V.yt, this.V.tunnel));
                this.lt.send(n).then(null, (function(t) {}
                ))
            } else
                this.vt.sendEvent(t).then(null, (function(t) {}
                ))
        }
        ,
        t.prototype.sendSession = function(t) {
            if (this.vt.sendSession)
                if (this.lt && this.V.dsn && this.V._experiments && this.V._experiments.newTransport) {
                    var n = u(cn(t, Vt(this.V.dsn, this.V.yt, this.V.tunnel)), 1)[0];
                    this.lt.send(n).then(null, (function(t) {}
                    ))
                } else
                    this.vt.sendSession(t).then(null, (function(t) {}
                    ))
        }
        ,
        t.prototype.getTransport = function() {
            return this.vt
        }
        ,
        t.prototype.dt = function() {
            return new fn
        }
        ,
        t
    }();
    function vn(t, n, r) {
        void 0 === r && (r = kt(t.bufferSize || 30));
        var e = {};
        return {
            send: function(t) {
                var i = function(t) {
                    var n = u(t, 2)
                      , r = u(n[1], 1);
                    return u(r[0], 1)[0].type
                }(t)
                  , o = "event" === i ? "error" : i
                  , a = {
                    category: o,
                    body: It(t)
                };
                return Ct(e, o) ? _t({
                    status: "rate_limit",
                    reason: dn(e, o)
                }) : r.add((function() {
                    return n(a).then((function(t) {
                        var n = t.body
                          , r = t.headers
                          , i = t.reason
                          , u = Ot(t.statusCode);
                        return r && (e = Lt(e, r)),
                        "success" === u ? Et({
                            status: u,
                            reason: i
                        }) : _t({
                            status: u,
                            reason: i || n || ("rate_limit" === u ? dn(e, o) : "Unknown transport error")
                        })
                    }
                    ))
                }
                ))
            },
            flush: function(t) {
                return r.drain(t)
            }
        }
    }
    function dn(t, n) {
        return "Too many " + n + " requests, backing off until: " + new Date(At(t, n)).toISOString()
    }
    var ln, yn = "6.19.6", pn = function() {
        function t() {
            this.name = t.id
        }
        return t.prototype.setupOnce = function() {
            ln = Function.prototype.toString,
            Function.prototype.toString = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = H(this) || this;
                return ln.apply(r, t)
            }
        }
        ,
        t.id = "FunctionToString",
        t
    }(), mn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], bn = function() {
        function t(n) {
            void 0 === n && (n = {}),
            this.V = n,
            this.name = t.id
        }
        return t.prototype.setupOnce = function(n, r) {
            n((function(n) {
                var e = r();
                if (e) {
                    var i = e.getIntegration(t);
                    if (i) {
                        var o = e.getClient()
                          , u = o ? o.getOptions() : {}
                          , s = function(t, n) {
                            void 0 === t && (t = {});
                            void 0 === n && (n = {});
                            return {
                                allowUrls: a(t.whitelistUrls || [], t.allowUrls || [], n.whitelistUrls || [], n.allowUrls || []),
                                denyUrls: a(t.blacklistUrls || [], t.denyUrls || [], n.blacklistUrls || [], n.denyUrls || []),
                                ignoreErrors: a(t.ignoreErrors || [], n.ignoreErrors || [], mn),
                                ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                            }
                        }(i.V, u);
                        return function(t, n) {
                            if (n.ignoreInternal && function(t) {
                                try {
                                    return "SentryError" === t.exception.values[0].type
                                } catch (t) {}
                                return !1
                            }(t))
                                return !0;
                            if (function(t, n) {
                                if (!n || !n.length)
                                    return !1;
                                return function(t) {
                                    if (t.message)
                                        return [t.message];
                                    if (t.exception)
                                        try {
                                            var n = t.exception.values && t.exception.values[0] || {}
                                              , r = n.type
                                              , e = void 0 === r ? "" : r
                                              , i = n.value
                                              , o = void 0 === i ? "" : i;
                                            return ["" + o, e + ": " + o]
                                        } catch (t) {
                                            return []
                                        }
                                    return []
                                }(t).some((function(t) {
                                    return n.some((function(n) {
                                        return C(t, n)
                                    }
                                    ))
                                }
                                ))
                            }(t, n.ignoreErrors))
                                return !0;
                            if (function(t, n) {
                                if (!n || !n.length)
                                    return !1;
                                var r = gn(t);
                                return !!r && n.some((function(t) {
                                    return C(r, t)
                                }
                                ))
                            }(t, n.denyUrls))
                                return !0;
                            if (!function(t, n) {
                                if (!n || !n.length)
                                    return !0;
                                var r = gn(t);
                                return !r || n.some((function(t) {
                                    return C(r, t)
                                }
                                ))
                            }(t, n.allowUrls))
                                return !0;
                            return !1
                        }(n, s) ? null : n
                    }
                }
                return n
            }
            ))
        }
        ,
        t.id = "InboundFilters",
        t
    }();
    function wn(t) {
        void 0 === t && (t = []);
        for (var n = t.length - 1; n >= 0; n--) {
            var r = t[n];
            if (r && "<anonymous>" !== r.filename && "[native code]" !== r.filename)
                return r.filename || null
        }
        return null
    }
    function gn(t) {
        try {
            if (t.stacktrace)
                return wn(t.stacktrace.frames);
            var n;
            try {
                n = t.exception.values[0].stacktrace.frames
            } catch (t) {}
            return n ? wn(n) : null
        } catch (t) {
            return null
        }
    }
    var xn = Object.freeze({
        __proto__: null,
        FunctionToString: pn,
        InboundFilters: bn
    })
      , En = "?";
    function _n(t, n, r, e) {
        var i = {
            filename: t,
            function: n,
            in_app: !0
        };
        return void 0 !== r && (i.lineno = r),
        void 0 !== e && (i.colno = e),
        i
    }
    var Sn = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , kn = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , jn = [30, function(t) {
        var n = Sn.exec(t);
        if (n) {
            if (n[2] && 0 === n[2].indexOf("eval")) {
                var r = kn.exec(n[2]);
                r && (n[2] = r[1],
                n[3] = r[2],
                n[4] = r[3])
            }
            var e = u(Cn(n[1] || En, n[2]), 2)
              , i = e[0];
            return _n(e[1], i, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
        }
    }
    ]
      , On = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , Tn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , Rn = [50, function(t) {
        var n, r = On.exec(t);
        if (r) {
            if (r[3] && r[3].indexOf(" > eval") > -1) {
                var e = Tn.exec(r[3]);
                e && (r[1] = r[1] || "eval",
                r[3] = e[1],
                r[4] = e[2],
                r[5] = "")
            }
            var i = r[3]
              , o = r[1] || En;
            return o = (n = u(Cn(o, i), 2))[0],
            _n(i = n[1], o, r[4] ? +r[4] : void 0, r[5] ? +r[5] : void 0)
        }
    }
    ]
      , Dn = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , Nn = [40, function(t) {
        var n = Dn.exec(t);
        return n ? _n(n[2], n[1] || En, +n[3], n[4] ? +n[4] : void 0) : void 0
    }
    ]
      , qn = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i
      , Mn = [10, function(t) {
        var n = qn.exec(t);
        return n ? _n(n[2], n[3] || En, +n[1]) : void 0
    }
    ]
      , In = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i
      , An = [20, function(t) {
        var n = In.exec(t);
        return n ? _n(n[5], n[3] || n[4] || En, +n[1], +n[2]) : void 0
    }
    ]
      , Cn = function(t, n) {
        var r = -1 !== t.indexOf("safari-extension")
          , e = -1 !== t.indexOf("safari-web-extension");
        return r || e ? [-1 !== t.indexOf("@") ? t.split("@")[0] : En, r ? "safari-extension:" + n : "safari-web-extension:" + n] : [t, n]
    };
    function Ln(t) {
        var n = Pn(t)
          , r = {
            type: t && t.name,
            value: Xn(t)
        };
        return n.length && (r.stacktrace = {
            frames: n
        }),
        void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
        r
    }
    function Un(t) {
        return {
            exception: {
                values: [Ln(t)]
            }
        }
    }
    function Pn(t) {
        var n = t.stacktrace || t.stack || ""
          , r = function(t) {
            if (t) {
                if ("number" == typeof t.framesToPop)
                    return t.framesToPop;
                if (Hn.test(t.message))
                    return 1
            }
            return 0
        }(t);
        try {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = t.sort((function(t, n) {
                    return t[0] - n[0]
                }
                )).map((function(t) {
                    return t[1]
                }
                ));
                return function(t, n) {
                    var e, i, u, a;
                    void 0 === n && (n = 0);
                    var s = [];
                    try {
                        for (var c = o(t.split("\n").slice(n)), f = c.next(); !f.done; f = c.next()) {
                            var h = f.value;
                            try {
                                for (var v = (u = void 0,
                                o(r)), d = v.next(); !d.done; d = v.next()) {
                                    var l = (0,
                                    d.value)(h);
                                    if (l) {
                                        s.push(l);
                                        break
                                    }
                                }
                            } catch (t) {
                                u = {
                                    error: t
                                }
                            } finally {
                                try {
                                    d && !d.done && (a = v.return) && a.call(v)
                                } finally {
                                    if (u)
                                        throw u.error
                                }
                            }
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            f && !f.done && (i = c.return) && i.call(c)
                        } finally {
                            if (e)
                                throw e.error
                        }
                    }
                    return W(s)
                }
            }(Mn, An, jn, Nn, Rn)(n, r)
        } catch (t) {}
        return []
    }
    var Hn = /Minified React error #\d+;/i;
    function Xn(t) {
        var n = t && t.message;
        return n ? n.error && "string" == typeof n.error.message ? n.error.message : n : "No error message"
    }
    function Fn(n, r, e) {
        var i = Bn(n, r && r.syntheticException || void 0, e);
        return mt(i),
        i.level = t.Severity.Error,
        r && r.event_id && (i.event_id = r.event_id),
        Et(i)
    }
    function zn(n, r, e, i) {
        void 0 === r && (r = t.Severity.Info);
        var o = $n(n, e && e.syntheticException || void 0, i);
        return o.level = r,
        e && e.event_id && (o.event_id = e.event_id),
        Et(o)
    }
    function Bn(t, n, r, e) {
        var o;
        if (l(t) && t.error)
            return Un(t.error);
        if (y(t) || d(t, "DOMException")) {
            var u = t;
            if ("stack"in t)
                o = Un(t);
            else {
                var a = u.name || (y(u) ? "DOMError" : "DOMException")
                  , s = u.message ? a + ": " + u.message : a;
                pt(o = $n(s, n, r), s)
            }
            return "code"in u && (o.tags = i(i({}, o.tags), {
                "DOMException.code": "" + u.code
            })),
            o
        }
        return v(t) ? Un(t) : b(t) || w(t) ? (o = function(t, n, r) {
            var e = {
                exception: {
                    values: [{
                        type: w(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (r ? "promise rejection" : "exception") + " captured with keys: " + B(t)
                    }]
                },
                extra: {
                    __serialized__: gt(t)
                }
            };
            if (n) {
                var i = Pn(n);
                i.length && (e.stacktrace = {
                    frames: i
                })
            }
            return e
        }(t, n, e),
        mt(o, {
            synthetic: !0
        }),
        o) : (pt(o = $n(t, n, r), "" + t, void 0),
        mt(o, {
            synthetic: !0
        }),
        o)
    }
    function $n(t, n, r) {
        var e = {
            message: t
        };
        if (r && n) {
            var i = Pn(n);
            i.length && (e.stacktrace = {
                frames: i
            })
        }
        return e
    }
    var Wn, Jn = c();
    function Kn() {
        if (Wn)
            return Wn;
        if (V(Jn.fetch))
            return Wn = Jn.fetch.bind(Jn);
        var t = Jn.document
          , n = Jn.fetch;
        if (t && "function" == typeof t.createElement)
            try {
                var r = t.createElement("iframe");
                r.hidden = !0,
                t.head.appendChild(r);
                var e = r.contentWindow;
                e && e.fetch && (n = e.fetch),
                t.head.removeChild(r)
            } catch (t) {}
        return Wn = n.bind(Jn)
    }
    function Gn(t, n) {
        if ("[object Navigator]" === Object.prototype.toString.call(Jn && Jn.navigator) && "function" == typeof Jn.navigator.sendBeacon)
            return Jn.navigator.sendBeacon.bind(Jn.navigator)(t, n);
        if (G()) {
            var r = Kn();
            r(t, {
                body: n,
                method: "POST",
                credentials: "omit",
                keepalive: !0
            }).then(null, (function(t) {
                console.error(t)
            }
            ))
        } else
            ;
    }
    function Vn(t) {
        return "event" === t ? "error" : t
    }
    var Qn = c()
      , Yn = function() {
        function t(t) {
            var n = this;
            this.options = t,
            this.bt = kt(30),
            this.wt = {},
            this.gt = {},
            this.xt = Vt(t.dsn, t.yt, t.tunnel),
            this.url = tn(this.xt.dsn),
            this.options.sendClientReports && Qn.document && Qn.document.addEventListener("visibilitychange", (function() {
                "hidden" === Qn.document.visibilityState && n.Et()
            }
            ))
        }
        return t.prototype.sendEvent = function(t) {
            return this._t(function(t, n) {
                var r, e = an(n), o = t.type || "event", u = "transaction" === o || !!n.tunnel, a = (t.sdkProcessingMetadata || {}).transactionSampling || {}, s = a.method, c = a.rate;
                sn(t, n.metadata.sdk),
                t.tags = t.tags || {},
                t.extra = t.extra || {},
                t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized || (t.tags.skippedNormalization = !0,
                t.extra.normalizeDepth = t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"),
                delete t.sdkProcessingMetadata;
                try {
                    r = JSON.stringify(t)
                } catch (n) {
                    t.tags.JSONStringifyError = !0,
                    t.extra.JSONStringifyError = n;
                    try {
                        r = JSON.stringify(wt(t))
                    } catch (t) {
                        var f = t;
                        r = JSON.stringify({
                            message: "JSON.stringify error after renormalization",
                            extra: {
                                message: f.message,
                                stack: f.stack
                            }
                        })
                    }
                }
                var h = {
                    body: r,
                    type: o,
                    url: u ? nn(n.dsn, n.tunnel) : tn(n.dsn)
                };
                if (u) {
                    var v = Mt(i(i({
                        event_id: t.event_id,
                        sent_at: (new Date).toISOString()
                    }, e && {
                        sdk: e
                    }), !!n.tunnel && {
                        dsn: O(n.dsn)
                    }), [[{
                        type: o,
                        sample_rates: [{
                            id: s,
                            rate: c
                        }]
                    }, h.body]]);
                    h.body = It(v)
                }
                return h
            }(t, this.xt), t)
        }
        ,
        t.prototype.sendSession = function(t) {
            return this._t(function(t, n) {
                var r = u(cn(t, n), 2)
                  , e = r[0]
                  , i = r[1];
                return {
                    body: It(e),
                    type: i,
                    url: nn(n.dsn, n.tunnel)
                }
            }(t, this.xt), t)
        }
        ,
        t.prototype.close = function(t) {
            return this.bt.drain(t)
        }
        ,
        t.prototype.recordLostEvent = function(t, n) {
            var r;
            if (this.options.sendClientReports) {
                var e = Vn(n) + ":" + t;
                this.gt[e] = (null != (r = this.gt[e]) ? r : 0) + 1
            }
        }
        ,
        t.prototype.Et = function() {
            if (this.options.sendClientReports) {
                var t = this.gt;
                if (this.gt = {},
                Object.keys(t).length) {
                    var n, r, e, i = nn(this.xt.dsn, this.xt.tunnel), o = Object.keys(t).map((function(n) {
                        var r = u(n.split(":"), 2)
                          , e = r[0];
                        return {
                            reason: r[1],
                            category: e,
                            quantity: t[n]
                        }
                    }
                    )), a = (n = o,
                    Mt((r = this.xt.tunnel && O(this.xt.dsn)) ? {
                        dsn: r
                    } : {}, [[{
                        type: "client_report"
                    }, {
                        timestamp: e || Nt(),
                        discarded_events: n
                    }]]));
                    try {
                        Gn(i, It(a))
                    } catch (t) {}
                }
            }
        }
        ,
        t.prototype.St = function(t) {
            var n = t.requestType
              , r = t.response
              , e = t.headers
              , i = t.resolve
              , o = t.reject
              , u = Ot(r.status);
            this.wt = Lt(this.wt, e),
            this.kt(n),
            "success" !== u ? o(r) : i({
                status: u
            })
        }
        ,
        t.prototype.jt = function(t) {
            var n = Vn(t);
            return new Date(At(this.wt, n))
        }
        ,
        t.prototype.kt = function(t) {
            var n = Vn(t);
            return Ct(this.wt, n)
        }
        ,
        t
    }()
      , Zn = function(t) {
        function n(n, r) {
            void 0 === r && (r = Kn());
            var e = t.call(this, n) || this;
            return e.Ot = r,
            e
        }
        return r(n, t),
        n.prototype._t = function(t, n) {
            var r = this;
            if (this.kt(t.type))
                return this.recordLostEvent("ratelimit_backoff", t.type),
                Promise.reject({
                    event: n,
                    type: t.type,
                    reason: "Transport for " + t.type + " requests locked till " + this.jt(t.type) + " due to too many requests.",
                    status: 429
                });
            var e = {
                body: t.body,
                method: "POST",
                referrerPolicy: Q() ? "origin" : ""
            };
            return void 0 !== this.options.fetchParameters && Object.assign(e, this.options.fetchParameters),
            void 0 !== this.options.headers && (e.headers = this.options.headers),
            this.bt.add((function() {
                return new St((function(n, i) {
                    r.Ot(t.url, e).then((function(e) {
                        var o = {
                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": e.headers.get("Retry-After")
                        };
                        r.St({
                            requestType: t.type,
                            response: e,
                            headers: o,
                            resolve: n,
                            reject: i
                        })
                    }
                    )).catch(i)
                }
                ))
            }
            )).then(void 0, (function(n) {
                throw n instanceof k ? r.recordLostEvent("queue_overflow", t.type) : r.recordLostEvent("network_error", t.type),
                n
            }
            ))
        }
        ,
        n
    }(Yn)
      , tr = function(t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }
        return r(n, t),
        n.prototype._t = function(t, n) {
            var r = this;
            return this.kt(t.type) ? (this.recordLostEvent("ratelimit_backoff", t.type),
            Promise.reject({
                event: n,
                type: t.type,
                reason: "Transport for " + t.type + " requests locked till " + this.jt(t.type) + " due to too many requests.",
                status: 429
            })) : this.bt.add((function() {
                return new St((function(n, e) {
                    var i = new XMLHttpRequest;
                    for (var o in i.onreadystatechange = function() {
                        if (4 === i.readyState) {
                            var o = {
                                "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": i.getResponseHeader("Retry-After")
                            };
                            r.St({
                                requestType: t.type,
                                response: i,
                                headers: o,
                                resolve: n,
                                reject: e
                            })
                        }
                    }
                    ,
                    i.open("POST", t.url),
                    r.options.headers)
                        Object.prototype.hasOwnProperty.call(r.options.headers, o) && i.setRequestHeader(o, r.options.headers[o]);
                    i.send(t.body)
                }
                ))
            }
            )).then(void 0, (function(n) {
                throw n instanceof k ? r.recordLostEvent("queue_overflow", t.type) : r.recordLostEvent("network_error", t.type),
                n
            }
            ))
        }
        ,
        n
    }(Yn);
    function nr(t, n) {
        return void 0 === n && (n = Kn()),
        vn({
            bufferSize: t.bufferSize
        }, (function(r) {
            var e = i({
                body: r.body,
                method: "POST",
                referrerPolicy: "origin"
            }, t.requestOptions);
            return n(t.url, e).then((function(t) {
                return t.text().then((function(n) {
                    return {
                        body: n,
                        headers: {
                            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": t.headers.get("Retry-After")
                        },
                        reason: t.statusText,
                        statusCode: t.status
                    }
                }
                ))
            }
            ))
        }
        ))
    }
    function rr(t) {
        return vn({
            bufferSize: t.bufferSize
        }, (function(n) {
            return new St((function(r, e) {
                var i = new XMLHttpRequest;
                for (var o in i.onreadystatechange = function() {
                    if (4 === i.readyState) {
                        var t = {
                            body: i.response,
                            headers: {
                                "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": i.getResponseHeader("Retry-After")
                            },
                            reason: i.statusText,
                            statusCode: i.status
                        };
                        r(t)
                    }
                }
                ,
                i.open("POST", t.url),
                t.headers)
                    Object.prototype.hasOwnProperty.call(t.headers, o) && i.setRequestHeader(o, t.headers[o]);
                i.send(n.body)
            }
            ))
        }
        ))
    }
    var er = Object.freeze({
        __proto__: null,
        BaseTransport: Yn,
        FetchTransport: Zn,
        XHRTransport: tr,
        makeNewFetchTransport: nr,
        makeNewXHRTransport: rr
    })
      , ir = function(n) {
        function e() {
            return null !== n && n.apply(this, arguments) || this
        }
        return r(e, n),
        e.prototype.eventFromException = function(t, n) {
            return Fn(t, n, this.V.attachStacktrace)
        }
        ,
        e.prototype.eventFromMessage = function(n, r, e) {
            return void 0 === r && (r = t.Severity.Info),
            zn(n, r, e, this.V.attachStacktrace)
        }
        ,
        e.prototype.dt = function() {
            if (!this.V.dsn)
                return n.prototype.dt.call(this);
            var t = i(i({}, this.V.transportOptions), {
                dsn: this.V.dsn,
                tunnel: this.V.tunnel,
                sendClientReports: this.V.sendClientReports,
                yt: this.V.yt
            })
              , r = Vt(t.dsn, t.yt, t.tunnel)
              , e = nn(r.dsn, r.tunnel);
            if (this.V.transport)
                return new this.V.transport(t);
            if (G()) {
                var o = i({}, t.fetchParameters);
                return this.lt = nr({
                    requestOptions: o,
                    url: e
                }),
                new Zn(t)
            }
            return this.lt = rr({
                url: e,
                headers: t.headers
            }),
            new tr(t)
        }
        ,
        e
    }(hn)
      , or = c()
      , ur = 0;
    function ar() {
        return ur > 0
    }
    function sr() {
        ur += 1,
        setTimeout((function() {
            ur -= 1
        }
        ))
    }
    function cr(t, n, r) {
        if (void 0 === n && (n = {}),
        "function" != typeof t)
            return t;
        try {
            var e = t.__sentry_wrapped__;
            if (e)
                return e;
            if (H(t))
                return t
        } catch (n) {
            return t
        }
        var sentryWrapped = function() {
            var e = Array.prototype.slice.call(arguments);
            try {
                r && "function" == typeof r && r.apply(this, arguments);
                var o = e.map((function(t) {
                    return cr(t, n)
                }
                ));
                return t.apply(this, o)
            } catch (t) {
                throw sr(),
                Gt((function(r) {
                    r.addEventProcessor((function(t) {
                        return n.mechanism && (pt(t, void 0, void 0),
                        mt(t, n.mechanism)),
                        t.extra = i(i({}, t.extra), {
                            arguments: e
                        }),
                        t
                    }
                    )),
                    captureException(t)
                }
                )),
                t
            }
        };
        try {
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (sentryWrapped[o] = t[o])
        } catch (t) {}
        P(sentryWrapped, t),
        U(t, "__sentry_wrapped__", sentryWrapped);
        try {
            Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable && Object.defineProperty(sentryWrapped, "name", {
                get: function() {
                    return t.name
                }
            })
        } catch (t) {}
        return sentryWrapped
    }
    function fr(t) {
        if (void 0 === t && (t = {}),
        or.document && t.eventId && t.dsn) {
            var n = or.document.createElement("script");
            n.async = !0,
            n.src = function(t, n) {
                var r = R(t)
                  , e = Qt(r) + "embed/error-page/"
                  , i = "dsn=" + O(r);
                for (var o in n)
                    if ("dsn" !== o)
                        if ("user" === o) {
                            if (!n.user)
                                continue;
                            n.user.name && (i += "&name=" + encodeURIComponent(n.user.name)),
                            n.user.email && (i += "&email=" + encodeURIComponent(n.user.email))
                        } else
                            i += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(n[o]);
                return e + "?" + i
            }(t.dsn, t),
            t.onLoad && (n.onload = t.onLoad);
            var r = or.document.head || or.document.body;
            r && r.appendChild(n)
        }
    }
    var hr = function() {
        function t(n) {
            this.name = t.id,
            this.Tt = {
                onerror: vr,
                onunhandledrejection: dr
            },
            this.V = i({
                onerror: !0,
                onunhandledrejection: !0
            }, n)
        }
        return t.prototype.setupOnce = function() {
            Error.stackTraceLimit = 50;
            var t = this.V;
            for (var n in t) {
                var r = this.Tt[n];
                r && t[n] && (n,
                r(),
                this.Tt[n] = void 0)
            }
        }
        ,
        t.id = "GlobalHandlers",
        t
    }();
    function vr() {
        et("error", (function(n) {
            var r = u(pr(), 2)
              , e = r[0]
              , i = r[1];
            if (e.getIntegration(hr)) {
                var o = n.msg
                  , a = n.url
                  , s = n.line
                  , c = n.column
                  , f = n.error;
                if (!(ar() || f && f.__sentry_own_request__)) {
                    var h = void 0 === f && p(o) ? function(t, n, r, e) {
                        var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                          , o = l(t) ? t.message : t
                          , u = "Error"
                          , a = o.match(i);
                        a && (u = a[1],
                        o = a[2]);
                        return lr({
                            exception: {
                                values: [{
                                    type: u,
                                    value: o
                                }]
                            }
                        }, n, r, e)
                    }(o, a, s, c) : lr(Bn(f || o, void 0, i, !1), a, s, c);
                    h.level = t.Severity.Error,
                    yr(e, f, h, "onerror")
                }
            }
        }
        ))
    }
    function dr() {
        et("unhandledrejection", (function(n) {
            var r = u(pr(), 2)
              , e = r[0]
              , i = r[1];
            if (e.getIntegration(hr)) {
                var o = n;
                try {
                    "reason"in n ? o = n.reason : "detail"in n && "reason"in n.detail && (o = n.detail.reason)
                } catch (t) {}
                if (ar() || o && o.__sentry_own_request__)
                    return !0;
                var a = m(o) ? {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + String(o)
                        }]
                    }
                } : Bn(o, void 0, i, !0);
                a.level = t.Severity.Error,
                yr(e, o, a, "onunhandledrejection")
            }
        }
        ))
    }
    function lr(t, n, r, e) {
        var i = t.exception = t.exception || {}
          , o = i.values = i.values || []
          , u = o[0] = o[0] || {}
          , a = u.stacktrace = u.stacktrace || {}
          , s = a.frames = a.frames || []
          , f = isNaN(parseInt(e, 10)) ? void 0 : e
          , h = isNaN(parseInt(r, 10)) ? void 0 : r
          , v = p(n) && n.length > 0 ? n : function() {
            var t = c();
            try {
                return t.document.location.href
            } catch (t) {
                return ""
            }
        }();
        return 0 === s.length && s.push({
            colno: f,
            filename: v,
            function: "?",
            in_app: !0,
            lineno: h
        }),
        t
    }
    function yr(t, n, r, e) {
        mt(r, {
            handled: !1,
            type: e
        }),
        t.captureEvent(r, {
            originalException: n
        })
    }
    function pr() {
        var t = $t()
          , n = t.getClient();
        return [t, n && n.getOptions().attachStacktrace]
    }
    var mr = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , br = function() {
        function t(n) {
            this.name = t.id,
            this.V = i({
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0
            }, n)
        }
        return t.prototype.setupOnce = function() {
            var t = c();
            this.V.setTimeout && L(t, "setTimeout", wr),
            this.V.setInterval && L(t, "setInterval", wr),
            this.V.requestAnimationFrame && L(t, "requestAnimationFrame", gr),
            this.V.XMLHttpRequest && "XMLHttpRequest"in t && L(XMLHttpRequest.prototype, "send", xr);
            var n = this.V.eventTarget;
            n && (Array.isArray(n) ? n : mr).forEach(Er)
        }
        ,
        t.id = "TryCatch",
        t
    }();
    function wr(t) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            var e = n[0];
            return n[0] = cr(e, {
                mechanism: {
                    data: {
                        function: K(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }),
            t.apply(this, n)
        }
    }
    function gr(t) {
        return function(n) {
            return t.apply(this, [cr(n, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: K(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }
    function xr(t) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            var e = this
              , i = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return i.forEach((function(t) {
                t in e && "function" == typeof e[t] && L(e, t, (function(n) {
                    var r = {
                        mechanism: {
                            data: {
                                function: t,
                                handler: K(n)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }
                      , e = H(n);
                    return e && (r.mechanism.data.handler = K(e)),
                    cr(n, r)
                }
                ))
            }
            )),
            t.apply(this, n)
        }
    }
    function Er(t) {
        var n = c()
          , r = n[t] && n[t].prototype;
        r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (L(r, "addEventListener", (function(n) {
            return function(r, e, i) {
                try {
                    "function" == typeof e.handleEvent && (e.handleEvent = cr(e.handleEvent.bind(e), {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: K(e),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch (t) {}
                return n.apply(this, [r, cr(e, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: K(e),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), i])
            }
        }
        )),
        L(r, "removeEventListener", (function(t) {
            return function(n, r, e) {
                var i = r;
                try {
                    var o = i && i.__sentry_wrapped__;
                    o && t.call(this, n, o, e)
                } catch (t) {}
                return t.call(this, n, i, e)
            }
        }
        )))
    }
    var _r = function() {
        function t(n) {
            this.name = t.id,
            this.V = i({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            }, n)
        }
        return t.prototype.addSentryBreadcrumb = function(t) {
            this.V.sentry && $t().addBreadcrumb({
                category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                event_id: t.event_id,
                level: t.level,
                message: yt(t)
            }, {
                event: t
            })
        }
        ,
        t.prototype.setupOnce = function() {
            this.V.console && et("console", Sr),
            this.V.dom && et("dom", function(t) {
                function n(n) {
                    var r, e = "object" == typeof t ? t.serializeAttribute : void 0;
                    "string" == typeof e && (e = [e]);
                    try {
                        r = n.event.target ? E(n.event.target, e) : E(n.event, e)
                    } catch (t) {
                        r = "<unknown>"
                    }
                    0 !== r.length && $t().addBreadcrumb({
                        category: "ui." + n.name,
                        message: r
                    }, {
                        event: n.event,
                        name: n.name,
                        global: n.global
                    })
                }
                return n
            }(this.V.dom)),
            this.V.xhr && et("xhr", kr),
            this.V.fetch && et("fetch", jr),
            this.V.history && et("history", Or)
        }
        ,
        t.id = "Breadcrumbs",
        t
    }();
    function Sr(t) {
        var n = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: jt(t.level),
            message: A(t.args, " ")
        };
        if ("assert" === t.level) {
            if (!1 !== t.args[0])
                return;
            n.message = "Assertion failed: " + (A(t.args.slice(1), " ") || "console.assert"),
            n.data.arguments = t.args.slice(1)
        }
        $t().addBreadcrumb(n, {
            input: t.args,
            level: t.level
        })
    }
    function kr(t) {
        if (t.endTimestamp) {
            if (t.xhr.__sentry_own_request__)
                return;
            var n = t.xhr.__sentry_xhr__ || {}
              , r = n.method
              , e = n.url
              , i = n.status_code
              , o = n.body;
            $t().addBreadcrumb({
                category: "xhr",
                data: {
                    method: r,
                    url: e,
                    status_code: i
                },
                type: "http"
            }, {
                xhr: t.xhr,
                input: o
            })
        } else
            ;
    }
    function jr(n) {
        n.endTimestamp && (n.fetchData.url.match(/sentry_key/) && "POST" === n.fetchData.method || (n.error ? $t().addBreadcrumb({
            category: "fetch",
            data: n.fetchData,
            level: t.Severity.Error,
            type: "http"
        }, {
            data: n.error,
            input: n.args
        }) : $t().addBreadcrumb({
            category: "fetch",
            data: i(i({}, n.fetchData), {
                status_code: n.response.status
            }),
            type: "http"
        }, {
            input: n.args,
            response: n.response
        })))
    }
    function Or(t) {
        var n = c()
          , r = t.from
          , e = t.to
          , i = dt(n.location.href)
          , o = dt(r)
          , u = dt(e);
        o.path || (o = i),
        i.protocol === u.protocol && i.host === u.host && (e = u.relative),
        i.protocol === o.protocol && i.host === o.host && (r = o.relative),
        $t().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: e
            }
        })
    }
    var Tr = function() {
        function t(n) {
            void 0 === n && (n = {}),
            this.name = t.id,
            this.Rt = n.key || "cause",
            this.Dt = n.limit || 5
        }
        return t.prototype.setupOnce = function() {
            Ht((function(n, r) {
                var e = $t().getIntegration(t);
                return e ? function(t, n, r, e) {
                    if (!(r.exception && r.exception.values && e && x(e.originalException, Error)))
                        return r;
                    var i = Rr(n, e.originalException, t);
                    return r.exception.values = a(i, r.exception.values),
                    r
                }(e.Rt, e.Dt, n, r) : n
            }
            ))
        }
        ,
        t.id = "LinkedErrors",
        t
    }();
    function Rr(t, n, r, e) {
        if (void 0 === e && (e = []),
        !x(n[r], Error) || e.length + 1 >= t)
            return e;
        var i = Ln(n[r]);
        return Rr(t, n[r], r, a([i], e))
    }
    var Dr = c()
      , Nr = function() {
        function t() {
            this.name = t.id
        }
        return t.prototype.setupOnce = function() {
            Ht((function(n) {
                if ($t().getIntegration(t)) {
                    if (!Dr.navigator && !Dr.location && !Dr.document)
                        return n;
                    var r = n.request && n.request.url || Dr.location && Dr.location.href
                      , e = (Dr.document || {}).referrer
                      , o = (Dr.navigator || {}).userAgent
                      , u = i(i(i({}, n.request && n.request.headers), e && {
                        Referer: e
                    }), o && {
                        "User-Agent": o
                    })
                      , a = i(i({}, r && {
                        url: r
                    }), {
                        headers: u
                    });
                    return i(i({}, n), {
                        request: a
                    })
                }
                return n
            }
            ))
        }
        ,
        t.id = "UserAgent",
        t
    }()
      , qr = function() {
        function t() {
            this.name = t.id
        }
        return t.prototype.setupOnce = function(n, r) {
            n((function(n) {
                var e = r().getIntegration(t);
                if (e) {
                    try {
                        if (function(t, n) {
                            if (!n)
                                return !1;
                            if (function(t, n) {
                                var r = t.message
                                  , e = n.message;
                                if (!r && !e)
                                    return !1;
                                if (r && !e || !r && e)
                                    return !1;
                                if (r !== e)
                                    return !1;
                                if (!Ir(t, n))
                                    return !1;
                                if (!Mr(t, n))
                                    return !1;
                                return !0
                            }(t, n))
                                return !0;
                            if (function(t, n) {
                                var r = Ar(n)
                                  , e = Ar(t);
                                if (!r || !e)
                                    return !1;
                                if (r.type !== e.type || r.value !== e.value)
                                    return !1;
                                if (!Ir(t, n))
                                    return !1;
                                if (!Mr(t, n))
                                    return !1;
                                return !0
                            }(t, n))
                                return !0;
                            return !1
                        }(n, e.Nt))
                            return null
                    } catch (t) {
                        return e.Nt = n
                    }
                    return e.Nt = n
                }
                return n
            }
            ))
        }
        ,
        t.id = "Dedupe",
        t
    }();
    function Mr(t, n) {
        var r = Cr(t)
          , e = Cr(n);
        if (!r && !e)
            return !0;
        if (r && !e || !r && e)
            return !1;
        if (r = r,
        (e = e).length !== r.length)
            return !1;
        for (var i = 0; i < e.length; i++) {
            var o = e[i]
              , u = r[i];
            if (o.filename !== u.filename || o.lineno !== u.lineno || o.colno !== u.colno || o.function !== u.function)
                return !1
        }
        return !0
    }
    function Ir(t, n) {
        var r = t.fingerprint
          , e = n.fingerprint;
        if (!r && !e)
            return !0;
        if (r && !e || !r && e)
            return !1;
        r = r,
        e = e;
        try {
            return !(r.join("") !== e.join(""))
        } catch (t) {
            return !1
        }
    }
    function Ar(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }
    function Cr(t) {
        var n = t.exception;
        if (n)
            try {
                return n.values[0].stacktrace.frames
            } catch (t) {
                return
            }
        else if (t.stacktrace)
            return t.stacktrace.frames
    }
    var Lr = Object.freeze({
        __proto__: null,
        GlobalHandlers: hr,
        TryCatch: br,
        Breadcrumbs: _r,
        LinkedErrors: Tr,
        UserAgent: Nr,
        Dedupe: qr
    })
      , Ur = function(t) {
        function n(n) {
            void 0 === n && (n = {});
            return n.yt = n.yt || {},
            n.yt.sdk = n.yt.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: "npm:@sentry/browser",
                    version: yn
                }],
                version: yn
            },
            t.call(this, ir, n) || this
        }
        return r(n, t),
        n.prototype.showReportDialog = function(t) {
            void 0 === t && (t = {}),
            c().document && this.rt() && fr(i(i({}, t), {
                dsn: t.dsn || this.getDsn()
            }))
        }
        ,
        n.prototype.ut = function(n, r, e) {
            return n.platform = n.platform || "javascript",
            t.prototype.ut.call(this, n, r, e)
        }
        ,
        n.prototype.ft = function(n) {
            var r = this.getIntegration(_r);
            r && r.addSentryBreadcrumb(n),
            t.prototype.ft.call(this, n)
        }
        ,
        n
    }(un)
      , Pr = [new bn, new pn, new br, new _r, new hr, new Tr, new qr, new Nr];
    function Hr(t) {
        t.startSession({
            ignoreDuration: !0
        }),
        t.captureSession()
    }
    var Xr = {}
      , Fr = c();
    Fr.Sentry && Fr.Sentry.Integrations && (Xr = Fr.Sentry.Integrations);
    var zr = i(i(i({}, Xr), xn), Lr);
    return t.BrowserClient = Ur,
    t.Hub = Ft,
    t.Integrations = zr,
    t.SDK_NAME = "sentry.javascript.browser",
    t.SDK_VERSION = yn,
    t.Scope = Ut,
    t.Session = Xt,
    t.Transports = er,
    t.addBreadcrumb = function(t) {
        Kt("addBreadcrumb", t)
    }
    ,
    t.addGlobalEventProcessor = Ht,
    t.captureEvent = function(t) {
        return Kt("captureEvent", t)
    }
    ,
    t.captureException = captureException,
    t.captureMessage = function(t, n) {
        var r = new Error(t);
        return Kt("captureMessage", t, "string" == typeof n ? n : void 0, i({
            originalException: t,
            syntheticException: r
        }, "string" != typeof n ? {
            captureContext: n
        } : void 0))
    }
    ,
    t.close = function(t) {
        var n = $t().getClient();
        return n ? n.close(t) : Et(!1)
    }
    ,
    t.configureScope = function(t) {
        Kt("configureScope", t)
    }
    ,
    t.defaultIntegrations = Pr,
    t.eventFromException = Fn,
    t.eventFromMessage = zn,
    t.flush = function(t) {
        var n = $t().getClient();
        return n ? n.flush(t) : Et(!1)
    }
    ,
    t.forceLoad = function() {}
    ,
    t.getCurrentHub = $t,
    t.getHubFromCarrier = Wt,
    t.init = function(t) {
        if (void 0 === t && (t = {}),
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = Pr),
        void 0 === t.release) {
            var n = c();
            n.SENTRY_RELEASE && n.SENTRY_RELEASE.id && (t.release = n.SENTRY_RELEASE.id)
        }
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
        void 0 === t.sendClientReports && (t.sendClientReports = !0),
        function(t, n) {
            !0 === n.debug && console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
            var r = $t()
              , e = r.getScope();
            e && e.update(n.initialScope);
            var i = new t(n);
            r.bindClient(i)
        }(Ur, t),
        t.autoSessionTracking && function() {
            if (void 0 === c().document)
                return;
            var t = $t();
            if (!t.captureSession)
                return;
            Hr(t),
            et("history", (function(t) {
                var n = t.from
                  , r = t.to;
                void 0 !== n && n !== r && Hr($t())
            }
            ))
        }()
    }
    ,
    t.injectReportDialog = fr,
    t.lastEventId = function() {
        return $t().lastEventId()
    }
    ,
    t.makeMain = Bt,
    t.onLoad = function(t) {
        t()
    }
    ,
    t.setContext = function(t, n) {
        Kt("setContext", t, n)
    }
    ,
    t.setExtra = function(t, n) {
        Kt("setExtra", t, n)
    }
    ,
    t.setExtras = function(t) {
        Kt("setExtras", t)
    }
    ,
    t.setTag = function(t, n) {
        Kt("setTag", t, n)
    }
    ,
    t.setTags = function(t) {
        Kt("setTags", t)
    }
    ,
    t.setUser = function(t) {
        Kt("setUser", t)
    }
    ,
    t.showReportDialog = function(t) {
        void 0 === t && (t = {});
        var n = $t()
          , r = n.getScope();
        r && (t.user = i(i({}, r.getUser()), t.user)),
        t.eventId || (t.eventId = n.lastEventId());
        var e = n.getClient();
        e && e.showReportDialog(t)
    }
    ,
    t.startTransaction = function(t, n) {
        return Kt("startTransaction", i({}, t), n)
    }
    ,
    t.withScope = Gt,
    t.wrap = function(t) {
        return cr(t)()
    }
    ,
    t
}({});
//# sourceMappingURL=bundle.min.js.map
