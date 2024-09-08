// Lebendiges Logo, das auf die Mausbewegung reagiert
document.addEventListener('mousemove', (event) => {
  const logo = document.querySelector('.logo');
  const x = (window.innerWidth / 2 - event.pageX) / 30;
  const y = (window.innerHeight / 2 - event.pageY) / 30;

  logo.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

// Button Explosion Animation bei Klick
const discordButton = document.querySelector('.discord-button');

discordButton.addEventListener('click', function(e) {
  const buttonRect = this.getBoundingClientRect();
  for (let i = 0; i < 30; i++) {
    const particles = document.createElement('div');
    particles.classList.add('particles');
    particles.style.top = `${e.clientY - buttonRect.top}px`;
    particles.style.left = `${e.clientX - buttonRect.left}px`;
    this.appendChild(particles);
    setTimeout(() => {
      particles.remove();
    }, 1000);
  }
});
