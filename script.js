document.getElementById('accept-btn').addEventListener('click', function() {
    alert('¡Gracias por aceptar la invitación! Nos vemos en el estreno de Moana 2.');
    window.open('image.jpeg', '_blank');
});

const gameImages = document.querySelectorAll('.game-img');
const puaIndex = Math.floor(Math.random() * gameImages.length);

gameImages.forEach((img, index) => {
    img.addEventListener('click', function() {
        if (index === puaIndex) {
            alert('¡Felicidades! Has encontrado a Pua 🐷');
        } else {
            alert('Sigue buscando...');
        }
    });
});
