document.getElementById('remorseBtn').addEventListener('click', function() {
    const animation = document.getElementById('animation');
    const coralineImage = document.getElementById('coralineImage');
    animation.style.opacity = 1;
    animation.style.transform = 'scale(1)';
    coralineImage.style.opacity = 1;
    coralineImage.style.transform = 'translateY(0)';
});
