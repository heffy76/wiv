const assettoCard = document.getElementById('assetto-corsa-card');
const assettoOverlay = document.getElementById('assetto-overlay');
const closeOverlay = document.getElementById('close-overlay');

assettoCard.addEventListener('click', () => {
  assettoOverlay.style.display = 'flex';
});

closeOverlay.addEventListener('click', () => {
  assettoOverlay.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === assettoOverlay) {
    assettoOverlay.style.display = 'none';
  }
});
