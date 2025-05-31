document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const images = track.querySelectorAll('img');
  const imgCount = images.length / 2; 
  const imgWidth = 200;
  const marginRight = 10;
  const step = imgWidth + marginRight; 

  let position = 0;

  for(let i = 0; i < imgCount; i++) {
    const clone = images[i].cloneNode(true);
    track.appendChild(clone);
  }

  function animate() {
    position -= 1;  
    if(position <= -step * imgCount) {
      position = 0; 
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
