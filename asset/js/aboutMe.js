document.querySelectorAll('.card, .project, .skill').forEach(function (el) {
            el.addEventListener('mouseenter', function () { el.classList.add('lifted'); });
            el.addEventListener('mouseleave', function () { el.classList.remove('lifted'); });
        });