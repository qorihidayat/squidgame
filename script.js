const redBox = document.querySelector('.kotak');
const musik = document.querySelector('audio');
const star = document.querySelector('.star');
const doll = document.querySelector('.doll');
let jalan = 0;


star.addEventListener('click', function playMusik() {
for (var i = 1; i < 100000; i++) {
  musik.play();
  musik.loop = 'true';
  doll.style.backgroundImage = 'url(img/doll1.png)';
  star.style.backgroundColor = 'lightgreen';

setTimeout(function() {
  doll.style.backgroundImage = 'url(img/doll2.png)';
  star.style.backgroundColor = 'red';
  console.log('interval 4500');
}, i = i + 4500);


  setTimeout(function() {
  doll.style.backgroundImage = 'url(img/doll1.png)';
  star.style.backgroundColor = 'lightgreen';
  console.log('interval 6000');

}, i = i + 2000);


}



  // setTimeout(function() {
  //   musik.play();
  //   doll.style.backgroundImage = 'url(img/doll1.png)';
  //   star.style.backgroundColor = 'lightgreen';
  // }, 6000);



document.addEventListener('keydown', function arah(e) {
  if (e.key == 'ArrowUp') {
    jalan = jalan - 1;
    redBox.style.transform = 'translate(0,'+ jalan+'px)';
    redBox.style.animation = 'jalan 1s steps(8) infinite';
  }else if (e.key == 'ArrowDown') {
    jalan = jalan + 1;
    redBox.style.transform = 'translate(0,'+ jalan+'px)';
    redBox.style.animation = 'jalan 1s steps(8) infinite';
  }else if (e.key == 'd') {
    jalan = jalan + 1;
    redBox.style.transform = 'translate('+jalan+'px, 0)';
    redBox.style.animation = 'jalan 1s steps(8) infinite';
  }
});

document.addEventListener('keyup', function arah(e) {
  if (e.key == 'ArrowUp') {
    jalan = jalan + 1;
    redBox.style.transform = 'translate(0,'+ jalan+'px)';
    redBox.style.animation = 'paused';
  }else if (e.key == 'ArrowDown') {
    jalan = jalan + 1;
    redBox.style.transform = 'translate(0,'+ jalan+'px)';
    redBox.style.animation = 'paused';
  }else if (e.key == 'd') {
    jalan = jalan + 1;
    redBox.style.transform = 'translate('+jalan+'px, 0)';
    redBox.style.animation = 'paused';
  }
});

});
