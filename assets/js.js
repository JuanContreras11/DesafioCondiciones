const stickers = document.querySelectorAll('.sticker');

stickers.forEach(sticker => {
    sticker.addEventListener('click', () => {
        
    });
});



function verificarStickers() {
    let totalStickers = 0;

    stickers.forEach(sticker => {
        
            const inputValue = sticker.querySelector('input').value.trim();
            const stickerValue = inputValue === '' || isNaN(inputValue) ? 0 : parseInt(inputValue, 10);

            if (stickerValue >= 0 && stickerValue <= 10) {
                totalStickers += stickerValue;
            } else {
                alert('Ingresa un valor válido entre 1 y 10 para cada sticker.');
                return;
            }
        
    });

    const mensaje = document.getElementById('mensaje');

    if (totalStickers <= 10) {
        mensaje.textContent = `Llevas ${totalStickers} stickers`;
    } else {
        mensaje.textContent = 'Llevas demasiados stickers';
    }
}

