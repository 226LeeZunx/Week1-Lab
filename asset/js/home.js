// Khi rê chuột vào section thì nhấc lên một chút, rời chuột thì hạ xuống
document.querySelectorAll('.intro, .menu').forEach(function (section) {
    section.addEventListener('mouseenter', function () {
        section.classList.add('lifted');
    });
    section.addEventListener('mouseleave', function () {
        section.classList.remove('lifted');
    });
});