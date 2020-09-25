const imgTag = document.querySelector('img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const images = ['img/computer1.jpg', 'img/computer2.jpg', 'img/computer3.jpg', 'img/computer4.jpg'];
let index = 0;
imgTag.src = images[index];

images.forEach((el, i) => {
  const indicator = document.createElement('span');
  indicator.className = 'circle';

 
  indicator.style.marginRight = 25 * i + 1 + 'px';
  next.after(indicator);
});

document.querySelector('.circle').style.background = '#DDD'
const changeImage = (arrow) => {
  if (arrow === 'next') {
    if (index === images.length - 1) {
      index = 0;
    } else {
      index++;
    }
  } else {
    if (index === 0) {
      index = images.length - 1;
    } else {
      index--;
    }
  }

  const indicators = document.querySelectorAll('.circle');
  for (let i = 0; i < indicators.length; i++) {
    if (i === index) {
      indicators[i].style.background = '#DDD';
    } else {
      indicators[i].style.background = 'transparent';
    }
  }

  imgTag.src = images[index];
}

next.addEventListener('click', () => changeImage('next'));
prev.addEventListener('click', () => changeImage('prev'));
