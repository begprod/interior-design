export default class ItemSlider {
	constructor(sliderItemClass, dotsContainerClass) {
		this.sliderItemClass = sliderItemClass;
		this.dotsContainerClass = dotsContainerClass;
		this.init();
	}

	init() {
		this.slide = document.getElementsByClassName(this.sliderItemClass);
		this.dotsContainer = document.querySelector(this.dotsContainerClass);
		this.numOfSlides = this.culcNumOfSlides();
		this.currentSlide = 0;
		this.renderDots();
		this.dotsCtrl();

		this.slide[this.currentSlide].classList.add('active');
	}

	culcNumOfSlides() {
		let num = 0;

		for(let i = 0; i < this.slide.length; i++) {
			this.slide[i].id = i;
			num = i + 1;
		}

		return num;
	}

	renderDots() {
		for(let i = 0; i < this.numOfSlides; i++) {
			const dot = document.createElement('button');
			dot.classList.add('slider-dot');
			dot.id = i;
			this.dotsContainer.appendChild(dot);
		}
	}

	dotsCtrl() {
		const self = this;

		this.dotsContainer.addEventListener('click', function(event) {
			if(event.target.classList.contains('slider-dot')) {
				self.slide[self.currentSlide].classList.remove('active');
				self.currentSlide = event.target.id;
				self.slide[self.currentSlide].classList.add('active');
			}
		});
	}

	swipeSlides() {

	}
}