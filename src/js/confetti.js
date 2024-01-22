import confetti from 'canvas-confetti';

const confettiButton = document.getElementById('confettiButton');

confettiButton.addEventListener('click', () => {
  // Konfigurasi confetti
  const config = {
    particleCount: 500,
    spread:100,
    colors: ['#ff0000', '#00ff00', '#0000ff','#E8D8C4','#F3B95F','#3652AD'],
  };

  // Memicu animasi confetti
  confetti(config);
});