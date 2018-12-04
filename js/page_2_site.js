/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value

  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.

  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}


/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


/* START WRITING YOUR CODE BELOW */

for ( var i = 0; i < 500; i++) {
  // create a div
  var shape = document.createElement('div');

  //add class "shape" to div
  shape.classList.add('shape');

  var duration = randomNumber (1000,5000);

  
  shape.style.animationDuration = duration + 'ms';


  // select container div
  var container = document.querySelector('.content');

  // add a div with class "shape" to container div
  container.append(shape);
}

var shapes= document.querySelectorAll('.shape');
var h= randomNumber(17,20)
var s= randomNumber(30%, 90%) 
var l= randomNumber(30%, 70%) 
shapes.style.background= hslColor(h, s, l)

shapes.forEach(function(shape, i) {
  shape.addEventListener('mouseover', function(event) {
      if(shape.classList.contains('shape-interaction')) {
        shape.classlist.remove('shape-interaction');
    } else {
    shape.classList.add('shape-interaction');
  }

  });
});



















