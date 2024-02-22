let currentIndex = 0;

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function showSlide(index) {
    const slides = document.querySelector('.slider');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}

// Automatic sliding every 3 seconds
setInterval(function () {
    changeSlide(1);
}, 3000);
