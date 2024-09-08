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
