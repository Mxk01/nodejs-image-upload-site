let autoText = document.querySelector(".typing");
let wordsArr = ["Image Upload","Best choice"];
let index = 0; // wordsArr index
let count = 0; // string index
let letters = "";
let currentText ="";
let mainImg = document.getElementById("main-image");

(function textEffect(){
// If last element is reached reset to first position
if(count==wordsArr.length) count=0;

// Looping through the array;
currentText = wordsArr[count]; // wordsArr[0]
// After getting one array element we want to get characters
// from  0 to n  (++index)
let letters = currentText.slice(0,++index);
autoText.textContent = letters;
// If the entire element is cut
if(letters.length==currentText.length)
{
  count++; // Go to the next element
  index=0; // reset to 0 pos of string
}
setTimeout(textEffect,200);
})();

(function changeImg()
{
  let imgArr = ['https://i.pinimg.com/originals/a4/3b/8e/a43b8e60d7ef458b6ead273f2b427178.jpg','https://mindcraftstories.ro/images/2020/03/Mindcraftstories_Cum-am-ajuns-aici_Deschidere_Martin-Sanchez-Unsplash-1920x1080.jpg',
'https://images.unsplash.com/photo-1551368321-dddf8a05c459?ixlib=rb-1.2.1&w=1000&q=80'];

let randIndex = Math.floor(Math.random()*imgArr.length);
mainImg.src=imgArr[randIndex];

setTimeout(changeImg,900);
})();
