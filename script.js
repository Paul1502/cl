// Ladeverzögerung
window.onload = function() {
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 1000); // 1 Sekunde Verzögerung
};

// Dynamische Logo-Bewegung mit Maus-Tracking
document.addEventListener('mousemove', (event) => {
  const logo = document.querySelector('.logo');
  const x = (window.innerWidth / 2 - event.pageX) / 50;
  const y = (window.innerHeight / 2 - event.pageY) / 50;

  logo.style.transform = `translate(${x}px, ${y}px) rotateY(${x}deg) rotateX(${y}deg)`;
});

// Partikel-Effekt beim Discord-Button-Klick
const discordButton = document.querySelector('.discord-button');

discordButton.addEventListener('click', function(e) {
  const buttonRect = this.getBoundingClientRect();
  for (let i = 0; i < 50; i++) {
    const particles = document.createElement('div');
    particles.classList.add('particles');
    particles.style.top = `${Math.random() * buttonRect.height}px`;
    particles.style.left = `${Math.random() * buttonRect.width}px`;
    this.appendChild(particles);
    setTimeout(() => {
      particles.remove();
    }, 1000);
  }
});
