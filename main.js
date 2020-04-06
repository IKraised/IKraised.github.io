(() => {
    const images = document.querySelectorAll('.work__slider_img');
    const buttons = document.querySelectorAll('.slider__btn');
    const sliderBlock = document.querySelector('.work__item');
    
    const slider = new Slider(
        images,
        buttons
    );
    slider.startSlideShow();
    
    sliderBlock.addEventListener('click', slider.controllerClick.bind(slider));
    sliderBlock.addEventListener('mouseenter', slider.controllerHover.bind(slider));
    sliderBlock.addEventListener('mouseleave', slider.controllerHover.bind(slider));
})();
