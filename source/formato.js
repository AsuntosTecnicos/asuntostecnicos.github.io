function ajustarPaddingTop() {
    var header = document.querySelector('header.fixed-top');
    if (header) {
    document.body.style.paddingTop = header.getBoundingClientRect().height + 'px';
    }
}

window.addEventListener('load', ajustarPaddingTop);
window.addEventListener('resize', ajustarPaddingTop);