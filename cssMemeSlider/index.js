document.addEventListener("DOMContentLoaded", function (event) {
    const sliderLine = document.querySelector(".slider-line"),
      pagination = document.querySelectorAll(".button-back"),
      sliderDots = document.querySelectorAll(".item-pagination");
    let sliderCount = 0,
      sliderWidth = document.querySelector(".container").offsetWidth;
    console.log(sliderWidth);
  
    sliderDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        let sliderWidth = document.querySelector(".image-abote").offsetWidth  + getSize("container") - getSize("image-abote", 'marginRight') + 23;
        console.log(sliderWidth);
        sliderCount = index;
        rollSlider(sliderLine, sliderWidth, sliderCount);
        activeDot(sliderCount, pagination);
        let textH = document.getElementsByTagName('h2').item(0);
        let imgAlt = document.getElementsByClassName('image-abote').item(index);
        textH.innerText = imgAlt.alt;
        textH.style.animation = 'none';
        textH.offsetHeight; 
        textH.style.animation = null;
      });
    });
    onresize = (event) => {
        let sliderWidth = document.querySelector(".image-abote").offsetWidth  + getSize("container") - getSize("image-abote", 'marginRight') + 23;
        rollSlider(sliderLine, 474, 0);
        activeDot(0, pagination);
        
      };
    
    });
  
  function rollSlider(sliderLine, sliderWidth, sliderCount) {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  }
  function activeDot(index, pagination) {
    pagination.forEach((item) => item.classList.remove("active"));
    pagination[index].classList.add("active");
  }
  function getSize(classNme, type) {
    let element = document.getElementsByClassName(classNme).item(0);
    var style = element.currentStyle || window.getComputedStyle(element);
      if(type === 'marginRight'){
    return Number(style.marginRight.slice(0, length -2));
      }
      return (Number(style.paddingLeft.slice(0, length -2)) + Number(style.paddingRight.slice(0, length -2)));
  }
  