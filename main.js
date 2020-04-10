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


    const anchors = document.querySelectorAll('.header__nav_link');

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href');
        
        document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
    }
})();
