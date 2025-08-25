// Download BTN Animation 

const downloadCVBtn = document.getElementById('downloadCVBtn');

downloadCVBtn.addEventListener('click', () => {
  // if (downloadCVBtn.classList.contains('loading')) return;

  downloadCVBtn.textContent = 'Downloading ...';

  // simulate download
  setTimeout(() => {
    downloadCVBtn.textContent = 'Open CV';
  }, 3000);
});

