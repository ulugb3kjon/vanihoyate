document.addEventListener('DOMContentLoaded', () => {
  particlesJS('tsparticles', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00ffff" },
      shape: { type: "circle" },
      opacity: { value: 0.2 },
      size: { value: 3 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    },
    retina_detect: true
  });
});
