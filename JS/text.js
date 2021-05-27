$("#card").flip();
$("button").click(function(){

     $("h1, h2, p").toggleClass("blue");
    
     $("#card").flip('toggle')
     $("#ddd")
  });
  const buttonRandom = document.querySelector(".button-random");
const colors = [
  " url(../Img/lambo1.jpg)",
  " url(../Img/DOREMON1.jpg)",
 
];
buttonRandom.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // document.body.style.backgroundImage = randomColor;
  document.getElementById("setbackground").style.backgroundImage = randomColor;
});