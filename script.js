// Ladeverzögerung mit Fade-Effekt
window.onload = function() {
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 1200); // 1.2 Sekunden Verzögerung für sanftes Laden
};

// Dynamische Logo-Bewegung mit Maus-Tracking und Rotation
document.addEventListener('mousemove', (event) => {
  const logo = document.querySelector('.logo');
  const x = (window.innerWidth / 2 - event.pageX) / 40;
  const y = (window.innerHeight / 2 - event.pageY) / 40;

  logo.style.transform = `translate(${x}px, ${y}px) rotateY(${x * 2}deg) rotateX(${y * 2}deg)`;
});

// Parallax-Effekt für Vorschau-Bilder
document.addEventListener('mousemove', (event) => {
  const photos = document.querySelectorAll('.preview-photo');
  photos.forEach(photo => {
    const x = (window.innerWidth / 2 - event.pageX) / 60;
    const y = (window.innerHeight / 2 - event.pageY) / 60;
    photo.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
});

// Partikel-Effekt beim Discord-Button-Klick
const discordButton = document.querySelector('.discord-button');

discordButton.addEventListener('click', function(e) {
  const buttonRect = this.getBoundingClientRect();
  for (let i = 0; i < 60; i++) {
    const particles = document.createElement('div');
    particles.classList.add('particles');
    particles.style.top = `${Math.random() * buttonRect.height}px`;
    particles.style.left = `${Math.random() * buttonRect.width}px`;
    this.appendChild(particles);
    setTimeout(() => {
      particles.remove();
    }, 1200);
  }
});
