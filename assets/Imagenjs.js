const stickers = document.querySelectorAll('.sticker');

stickers.forEach(sticker => {
    sticker.addEventListener('click', () => {
        toggleBorder(sticker);
    });
});

function toggleBorder(element) {
    element.classList.toggle('selected');
}