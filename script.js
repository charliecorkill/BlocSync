// Set the date we're counting down to (replace with your launch date)
var countDownDate = new Date("July 20, 2024 14:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
    
  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;
    
  // Calculate time units
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the countdown is finished, display text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Countdown Ended!";
  }
}, 1000);
