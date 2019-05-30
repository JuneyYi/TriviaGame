

var timeleft = 120;

var timer = setInterval(function(){
  document.getElementById("time").innerHTML ="Time remaining: " + timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("time").innerHTML = "Finished"
  }
}, 1000);





