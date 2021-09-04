'use strict';
// The Lenght of the iage :
//************************************************************************* */
let imgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.png',
  '11.jpg', '12.jpg', '13.png', '14.jpg', '15.jpg', '16.jfif',
  '17.jfif', '18.jfif', '19.jfif', '20.jpg', '21.jfif', '22.jfif', '23.jfif', '24.jfif']

const imageSection = document.getElementById('imageSection');

let h1title = document.getElementById('h1title');
let pfooter = document.getElementById('pfooter');


let first_image = document.getElementById('first_Image');
let second_image = document.getElementById('second_Image');
let third_image = document.getElementById('third_Image');

let first_image_random;
let second_image_random;
let third_image_random;

let counter = 0;
let number_of_round = 25;

// The Arrays


let all = [];
let images = [];

// The Random Number Fuction
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// The Rest function
function Rest(name, imageSrc) {
  this.name = name;
  this.image = imageSrc;
  Rest.all.push(this);
}
Rest.all = [];

getData()

// Render Function 
function render() {

  do {
    first_image_random = getRandomNumber(0, imgArray.length - 1);
    second_image_random = getRandomNumber(0, imgArray.length - 1);
    third_image_random = getRandomNumber(0, imgArray.length - 1);
  }

  while (first_image_random === second_image_random
  || first_image_random === third_image_random
  || third_image_random === second_image_random
  || images.includes(first_image_random)
  || images.includes(second_image_random)
  || images.includes(third_image_random)

  );
  images = [first_image_random, second_image_random, third_image_random];
  console.log(images)


  first_image.src = './img/' + Rest.all[first_image_random].image;
  second_image.src = './img/' + Rest.all[second_image_random].image;
  third_image.src = './img/' + Rest.all[third_image_random].image;

}
Rest.prototype.getName = function() {
  console.log('test')
}

render();
console.log(Rest.all);
// console.log(images)

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}

imageSection.addEventListener('click', thehandlerImageClick);
function thehandlerImageClick(event) {

    let counter = 0;
  h1title.textContent = "React application " + counter + 1 ;
  pfooter.textContent = "@copy right by wissam " +counter + 1;
  counter ++;

  if ((event.target.id === 'first_Image' || event.target.id === 'second_Image' || event.target.id === 'third_Image') && counter < number_of_round) {

    if (event.target.id == 'first_Image') {
      Rest.all[first_image_random].click++;
    }
    else if (event.target.id == 'second_Image') {
      Rest.all[second_image_random].click++;
    }
    else if (event.target.id == 'third_Image') {
      Rest.all[third_image_random].click++;
    }
    else {
      imageSection.removeEventListener('click', thehandlerImageClick);
    }
    render();
    counter++;
    console.log(Rest.all);
  }
}
function getData() {
  if( localStorage.data ) {
    let data = JSON.parse( localStorage.data );
    for( let i = 0; i < data.length; i++ ) {
      new Rest( data[i].name, data[i].image );
    }
  } else {
    for( let i = 0; i < imgArray.length; i++ ) {
      new Rest( imgArray[i].split( '.' )[0], imgArray[i] );
    }
  }
}
