// Pobiera elementy HTML
const star = document.getElementById('star');
const clickCounter = document.getElementById('clickCounter');

// Inicjalizuje liczbę kliknięć
let clicks = 0;

// Funkcja zwiększająca licznik
star.addEventListener('click', () => {
    clicks++;
    clickCounter.textContent = `${clicks}`;
});