// Ladeverzögerung mit Fade-Effekt
window.onload = function() {
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 1500); // 1.5 Sekunden Verzögerung für maximales Erlebnis
};

// Dynamische Logo-Bewegung mit Maus-Tracking und Rotation
document.addEventListener('mousemove', (event) => {
  const logo = document.querySelector('.logo');
  const x = (window.innerWidth / 2 - event.pageX) / 30;
  const y = (window.innerHeight / 2 - event.pageY) / 30;

  logo.style.transform = `translate(${x}px, ${y}px) rotateY(${x * 2}deg) rotateX(${y * 2}deg)`;
});

// Parallax-Effekt für Vorschau-Bilder mit Bewegung und Rotation
document.addEventListener('mousemove', (event) => {
  const photos = document.querySelectorAll('.preview-photo');
  photos.forEach(photo => {
    const x = (window.innerWidth / 2 - event.pageX) / 40;
    const y = (window.innerHeight / 2 - event.pageY) / 40;
    photo.style.transform = `rotateY(${x * 1.5}deg) rotateX(${y * 1.5}deg)`;
  });
});

// Partikel-Effekt beim Discord-Button-Klick
const discordButton = document.querySelector('.discord-button');

discordButton.addEventListener('click', function(e) {
  const buttonRect = this.getBoundingClientRect();
  for (let i = 0; i < 70; i++) {
    const particles = document.createElement('div');
    particles.classList.add('particles');
    particles.style.top = `${Math.random() * buttonRect.height}px`;
    particles.style.left = `${Math.random() * buttonRect.width}px`;
    this.appendChild(particles);
    setTimeout(() => {
      particles.remove();
    }, 1500);
  }
});
