// count i
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'I'){
    count++;
  }
}
// console.log(count);

// celcius to farenheit
// (0°C × 9/5) + 32 = 32°F
// first
var cel = 100; 
var farenheit = (cel* 9 / 5) + 32;
console.log('The farenheit is',farenheit);

// farenheit to celcius
// (32°F − 32) × 5/9 = 0°C

var far = 320;
var celcius = (far - 32) * 5 / 9;
console.log('The celcius is',celcius);


