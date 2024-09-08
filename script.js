// Lebendiges Logo, das auf die Mausbewegung reagiert
document.addEventListener('mousemove', (event) => {
  const logo = document.querySelector('.logo');
  const x = (window.innerWidth / 2 - event.pageX) / 20;
  const y = (window.innerHeight / 2 - event.pageY) / 20;

  logo.style.transform = `translate(${x}px, ${y}px)`;
});

// Button Explosion Animation bei Klick
const discordButton = document.querySelector('.discord-button');

discordButton.addEventListener('click', function(e) {
  const buttonRect = this.getBoundingClientRect();
  const particles = document.createElement('div');
  particles.classList.add('particles');
  particles.style.top = `${e.clientY - buttonRect.top}px`;
  particles.style.left = `${e.clientX - buttonRect.left}px`;
  this.appendChild(particles);
  setTimeout(() => {
    particles.remove();
  }, 1000);
});
