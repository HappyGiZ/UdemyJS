// Slider

const
    slides = document.querySelectorAll('.offer__slide'),
    prevSlide = document.querySelector('.offer__slider-prev'),
    nextSlide = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current');
let slideIndex = 1;


showSlides(slideIndex);

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    // скрытие всех слайдов
    slides.forEach(slide => slide.style.display = 'none');  /* переделать под classList */
    // отображение нужного слайда
    slides[slideIndex - 1].style.display = 'block';


    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prevSlide.addEventListener('click', () => {
    plusSlides(-1);
});

nextSlide.addEventListener('click', () => {
    plusSlides(+1);
});