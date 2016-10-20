$(document).ready(function(){
  //$(".container").submit(function(event){
  var height = parseInt(prompt("How tall are you in inches?"));
   if (height >= 72) {
    $(".1").show();
  }  else if (71 >= height, height >= 65) {
    $(".2").show();
  } else if (64 >= height, height >= 53) {
    $(".3").show();
  } else if (52 >= height, height >= 40) {
    $(".4").show();
  } else {
    alert("We're sorry, but you're just too short to experience our fun. Try again once you've grown some!");
  }
     //event.preventDefault();

});
