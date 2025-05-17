function showRoles() {
    document.getElementById('playContainer').style.display = 'none';
    document.getElementById("roleButtons").style.display = "inline-block"; // o "block"
    document.getElementById("selectorRol").style.display = "flex";
}

function goTo(path) {
    window.location.href = path;
}

// Generar luces
const lightsContainer = document.querySelector('.lights-container');
const numLights = 100;
const lightsPerSide = numLights / 4;
const sides = ['top', 'right', 'bottom', 'left'];

sides.forEach(side => {
    for (let i = 0; i < lightsPerSide; i++) {
        const light = document.createElement('div');
        light.classList.add('light');
        light.style.position = 'absolute';
        light.style[side] = '0';

        if (side === 'top' || side === 'bottom') {
            light.style.left = `${(i / lightsPerSide) * 100}%`;
        } else {
            light.style.top = `${(i / lightsPerSide) * 100}%`;
        }

        lightsContainer.appendChild(light);
    }
});

// Reproducir audio
const audio = new Audio('/sounds/intro.mp3');
audio.loop = true;

document.getElementById('message').addEventListener('click', function () {
    audio.play();
    this.style.display = 'none';
});
