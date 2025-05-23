document.querySelector('button').addEventListener('click', async (e) => {
    const btn = e.target;
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    const loaderContent = document.querySelector('.loader-content');
    
    // Подготовка UI
    btn.disabled = true;
    loaderContent.classList.add('hide');
    loader.classList.remove('hide');
    content.classList.add('hide');
    
    try {
        const testResult = await measureSpeed();
        animateResult(testResult);
        
        // Обновление UI после успешного теста
        btn.textContent = 'ЕЩЁ РАЗ';
        loaderContent.classList.remove('hide');
        loaderContent.classList.add('result');
        loader.classList.add('hide');
        content.classList.remove('hide');
    } catch (error) {
        console.error('Speed test failed:', error);
        content.innerHTML = 'Ошибка теста';
        content.classList.remove('hide');
    } finally {
        btn.disabled = false;
    }
});

async function measureSpeed() {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG';
    const cacheBuster = `?nn=${Date.now()}`;
    
    // Получаем реальный размер файла через HEAD-запрос
    const headResponse = await fetch(imageUrl, { method: 'HEAD' });
    const fileSize = parseInt(headResponse.headers.get('content-length')) || 8185374;
    
    const startTime = performance.now();
    await fetch(imageUrl + cacheBuster); // Основной запрос
    const duration = (performance.now() - startTime) / 1000; // в секундах
    
    // Рассчет скорости в Mbps (мегабит в секунду)
    return (fileSize * 8 / duration / 1024 / 1024).toFixed(2);
}

function animateResult(targetSpeed, duration = 2000) {
    const content = document.querySelector('.content');
    const startTime = performance.now();
    const increment = targetSpeed / (duration / 20); // 20ms frame time
    
    const update = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentSpeed = (progress * targetSpeed).toFixed(2);
        
        content.innerHTML = `${currentSpeed}<small>Mbps</small>`;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            content.innerHTML = `${targetSpeed}<small>Mbps</small>`;
        }
    };
    
    requestAnimationFrame(update);
}
