const particles = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 20 + 5 + 'px';
    particle.style.width = size;
    particle.style.height = size;

    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';

    particle.style.animationDuration = Math.random() * 3 + 2 + 's';

    particle.addEventListener('animationiteration', () => {
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
    });

    particles.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}

setInterval(createParticle, 100);
