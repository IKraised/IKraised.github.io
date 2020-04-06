class Slider {
    constructor(images, buttons, duration = 5000) {
        this.images = images;
        this.buttons = buttons;
        this.index = 0;
        this.duration = duration; 
        this.animate = true;
    }
    __addActiveClass(index) {
        this.images[index].classList.add("slider-active");
    }
    __removeActiveClass(index) {
        this.images[index].classList.remove("slider-active");
    }
    __setIndex(number) {
        if (number >= this.images.length)
            this.index = 0;
        else if(number < 0)
            this.index = this.images.length - 1;
        else
            this.index = number;
    }
    startSlideShow() {
        this.interval = setInterval(this.nextSlide.bind(this), this.duration);
    }
    stopSlideShow() {
        clearInterval(this.interval);
    }
    nextSlide() {
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index+1);
        this.__addActiveClass(this.index);
    }
    prevSlide() {
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index-1);
        this.__addActiveClass(this.index);
    }
    controllerClick(event) {
        let target = event.target.dataset.target;
        if(target){
            event.preventDefault();
            if(target.toLowerCase() === "next") {
                this.nextSlide();
            } else if(target.toLowerCase() === "prev") {
                this.prevSlide();
            }
        }
    }
    controllerHover() {
        this.animate = !this.animate;
        if(this.animate) {
            this.startSlideShow();
        } else {
            this.stopSlideShow();
        }
    }
}