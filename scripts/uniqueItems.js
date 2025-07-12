// Download BTN Animation 

const downloadCVBtn = document.getElementById('downloadCVBtn');

downloadCVBtn.addEventListener('click', () => {
  if (downloadCVBtn.classList.contains('loading')) return;

  downloadCVBtn.classList.add('loading');
  downloadCVBtn.textContent = 'Downloading ...';

  // simulate download
  setTimeout(() => {
    downloadCVBtn.textContent = 'Open CV';
    downloadCVBtn.classList.remove('loading');
  }, 3000);
});


