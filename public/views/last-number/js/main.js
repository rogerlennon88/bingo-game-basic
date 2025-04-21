// views/last-number/main.js

const lastNumberElement = document.querySelector('.ball.num-1');

function updateLastNumber(number) {
    if (lastNumberElement) {
        lastNumberElement.textContent = number;
    }
}

// Escuchar los cambios desde la "interfaz administrativa" (main.js)
window.addEventListener('lastNumberUpdated', (event) => {
    updateLastNumber(event.detail.number);
});

// Simulación de la obtención inicial del dato
fetch('/api/last-number') // Reemplaza con tu endpoint real
    .then(response => response.json())
    .then(data => {
        updateLastNumber(data.lastNumber);
    })
    .catch(error => {
        console.error('Error al obtener la última balota:', error);
    });