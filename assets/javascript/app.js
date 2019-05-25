

var timeleft = 120;
var downloadTimer = setInterval(function(){
  document.getElementById("time").innerHTML ="Time remaining: " + timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished"
  }
}, 1000);