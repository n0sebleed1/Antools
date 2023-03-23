const moreButton = document.querySelector('.block-more')
const blockList = document.querySelector('.block-list')

moreButton.addEventListener('click', function(){
	blockList.classList.add('show')
	moreButton.classList.add('block-more-hide')
})

let counter = 0;

const sliderBox = document.querySelector('.slider')
const slides = sliderBox.querySelectorAll('.slider-content')
const btnPrev = sliderBox.querySelector('.slider-left')
const btnNext = sliderBox.querySelector('.slider-right')
const sliderNumber = document.querySelectorAll('.slider-number-block')

btnNext.addEventListener('click', function(){
	slides[counter].classList.toggle('slider-content-active')
	sliderNumber[counter].classList.toggle('slider-number-block-active')
	counter++;
	if (counter >= slides.length) {
		counter = 0;
	}
	slides[counter].classList.toggle('slider-content-active')
	sliderNumber[counter].classList.toggle('slider-number-block-active')
})

btnPrev.addEventListener('click', function(){
	slides[counter].classList.toggle('slider-content-active')
	sliderNumber[counter].classList.toggle('slider-number-block-active')
	counter--;
	if (counter < 0) {
		counter = slides.length - 1 ;
	}
	slides[counter].classList.toggle('slider-content-active')
	sliderNumber[counter].classList.toggle('slider-number-block-active')
})