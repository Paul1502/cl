// Premium Logo mit Mausbewegung und 3D-Effekten
document.addEventListener('mousemove', (event) => {
  const logo = document.querySelector('.logo');
  const x = (window.innerWidth / 2 - event.pageX) / 40;
  const y = (window.innerHeight / 2 - event.pageY) / 40;

  logo.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
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
