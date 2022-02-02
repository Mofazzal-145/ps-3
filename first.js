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
console.log(farenheit);


