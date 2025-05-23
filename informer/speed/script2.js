// DOM элементы
const speedTestBtn = document.querySelector('button');
const loader = document.querySelector('.loader');
const content = document.querySelector('.content');
const loaderContent = document.querySelector('.loader-content');
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
loader.appendChild(progressBar);

// Конфигурация теста
const TEST_CONFIG = {
  download: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG',
    fileSize: 8185374 // fallback размер в байтах
  },
  upload: {
    url: 'https://httpbin.org/post',
    testData: new Blob([new ArrayBuffer(5000000)]) // 5MB тестовых данных
  },
  ping: {
    url: 'https://httpbin.org/get',
    trials: 3
  }
};

// Стили для прогресс-бара
const progressStyle = document.createElement('style');
progressStyle.textContent = `
  .progress-bar {
    width: 0%;
    height: 4px;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    transition: width 0.3s ease;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
  }
`;
document.head.appendChild(progressStyle);

// Основная функция
speedTestBtn.addEventListener('click', async (e) => {
  const btn = e.target;
  btn.disabled = true;
  resetUI();
  
  try {
    // Тест Ping
    content.innerHTML = 'Измерение ping...';
    const ping = await testPing();
    
    // Тест Download
    content.innerHTML = 'Тест скорости загрузки...';
    const downloadSpeed = await testDownload((progress) => {
      progressBar.style.width = `${progress * 100}%`;
    });
    
    // Тест Upload
    content.innerHTML = 'Тест скорости отдачи...';
    const uploadSpeed = await testUpload((progress) => {
      progressBar.style.width = `${progress * 100}%`;
    });
    
    // Показ результатов
    showResults(ping, downloadSpeed, uploadSpeed);
    btn.textContent = 'ЕЩЁ РАЗ';
    
  } catch (error) {
    console.error('Speed test failed:', error);
    content.innerHTML = 'Ошибка теста';
  } finally {
    btn.disabled = false;
    loader.classList.add('hide');
    loaderContent.classList.remove('hide');
  }
});

// Функции тестирования
async function testPing() {
  let totalPing = 0;
  
  for (let i = 0; i < TEST_CONFIG.ping.trials; i++) {
    const start = performance.now();
    await fetch(TEST_CONFIG.ping.url + '?t=' + Date.now(), { 
      method: 'GET',
      cache: 'no-store'
    });
    totalPing += performance.now() - start;
  }
  
  return (totalPing / TEST_CONFIG.ping.trials).toFixed(1) + ' мс';
}

async function testDownload(onProgress) {
  const start = performance.now();
  let loaded = 0;
  
  const response = await fetch(TEST_CONFIG.download.url + '?t=' + Date.now(), {
    cache: 'no-store'
  });
  
  // Получаем реальный размер файла
  const total = parseInt(response.headers.get('content-length')) || TEST_CONFIG.download.fileSize;
  const reader = response.body.getReader();
  
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    loaded += value.length;
    onProgress(loaded / total);
  }
  
  const duration = (performance.now() - start) / 1000;
  return (total * 8 / duration / 1024 / 1024).toFixed(2) + ' Mbps';
}

async function testUpload(onProgress) {
  const start = performance.now();
  const testData = TEST_CONFIG.upload.testData;
  let uploaded = 0;
  const chunkSize = 1024 * 1024; // 1MB chunks
  
  // Отправка данных по частям для отслеживания прогресса
  const total = testData.size;
  const chunks = Math.ceil(total / chunkSize);
  
  for (let i = 0; i < chunks; i++) {
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, total);
    const chunk = testData.slice(start, end);
    
    await fetch(TEST_CONFIG.upload.url, {
      method: 'POST',
      body: chunk,
      headers: { 'Content-Type': 'application/octet-stream' }
    });
    
    uploaded += chunk.size;
    onProgress(uploaded / total);
  }
  
  const duration = (performance.now() - start) / 1000;
  return (total * 8 / duration / 1024 / 1024).toFixed(2) + ' Mbps';
}

// Вспомогательные функции
function resetUI() {
  loaderContent.classList.add('hide');
  loader.classList.remove('hide');
  content.classList.remove('hide');
  progressBar.style.width = '0%';
}

function showResults(ping, download, upload) {
  content.innerHTML = `
    <div class="result-item">
      <span class="result-label">Ping:</span>
      <span class="result-value">${ping}</span>
    </div>
    <div class="result-item">
      <span class="result-label">Скачивание:</span>
      <span class="result-value">${download}</span>
    </div>
    <div class="result-item">
      <span class="result-label">Отдача:</span>
      <span class="result-value">${upload}</span>
    </div>
  `;
}

// Анимация результатов (опционально)
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = (progress * (end - start) + start).toFixed(2);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}