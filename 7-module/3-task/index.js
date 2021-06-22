export default class StepSlider {
  constructor({ steps, value = 0}) {
    this.elem = document.createElement('div');
    this.elem.classList.add("slider");
    this.render(this.elem, steps, value);
    this.elem.addEventListener('click', (event) => this.onClick(event, steps));
  }
  render(elem, steps, value) {
    let slider = [];
    for (let elememt = 0; elememt < steps - 1; elememt++) {
      slider.push('<span></span>');

    };
    slider = slider.join("");
    elem.innerHTML = `
    <!--Заполненная часть слайдера-->
    <div class="slider__thumb">
    <span class="slider__value">${value}</span>
  </div>
    <div class="slider__progress" style="width: 0%;"></div>
    <div class="slider__steps">
    <span class="slider__step-active"></span>
        ${slider}
      </div>  
    `;
  }
  onClick(event, steps) {
    let slidrePosition = event.clientX;
    let sliderWidth = this.elem.offsetWidth;
    let left = slidrePosition - this.elem.getBoundingClientRect().left;
    let leftRelative = left / sliderWidth;
    let  segments = steps - 1;
    let  approximateValue = leftRelative * segments;
    let  value = Math.round(approximateValue);
    let  valuePercents = value / segments * 100;
    let  sliderSteps = this.elem.querySelector('.slider__steps');
    let  sliderThumb = this.elem.querySelector('.slider__thumb');
    let  sliderProgress = this.elem.querySelector('.slider__progress');
    let  sliderValue = this.elem.querySelector('.slider__value');
    sliderSteps = sliderSteps.querySelectorAll('span');
    sliderValue.textContent = value;
    for (let elem of sliderSteps) {
      elem.classList.remove("slider__step-active");
    }
    sliderSteps[value].classList.add("slider__step-active");
    sliderThumb.style.left = `${valuePercents}%`;
    sliderProgress.style.width = `${valuePercents}%`;
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: value,
      bubbles: true
    }));

  }
}
