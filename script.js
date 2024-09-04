let slideIndex = 0;
const slides = document.querySelectorAll('.slide .item');
const totalSlides = slides.length;

function showNextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slide').style.transform = `translateX(${offset}%)`;
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
