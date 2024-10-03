const menuElements = document.querySelectorAll('.nav-bar ul li a');

menuElements.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('clicked');
    });
});