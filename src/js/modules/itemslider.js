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
		this.currentSlideId = 0;
		this.renderDots();
		this.dotsCtrl(this.currentSlideId);

		this.slide[this.currentSlideId].classList.add('is-active');
		this.dotsContainer.children[this.currentSlideId].classList.add('is-active');
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
			dot.innerText = i;
			dot.classList.add('slider-dot');
			dot.id = i;
			this.dotsContainer.appendChild(dot);
		}
	}

	dotsCtrl(index) {
		const self = this;

		this.dotsContainer.addEventListener('click', function(event) {
			if(event.target.classList.contains('slider-dot')) {
				this.children[index].classList.remove('is-active');
				self.slide[index].classList.remove('is-active');
				index = event.target.id;
				this.children[index].classList.add('is-active');
				self.slide[index].classList.add('is-active');
			}
		});
	}

	swipeSlides() {

	}
}