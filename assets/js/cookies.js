document.cookie = "Data-User=Collect The Data Of A User To Third Parties Services; expires=Thu, 25 Dec 2030 12:00:00 UTC; path=/"
document.cookie = "Cookie-Eater=Deletes Unecessary Cookies For Faster User Speed; expires=Thu, 1 Jan 3000 12:00:00 UTC; path=/"
document.cookie = "Remember-Me=Users Of The Web Remember Forever HACKERPRO; expires=Wed, 25 Jun 3007 12:00:00 UTC; path=/"
document.cookie = "User-State=Checks User's State Is Fine For The Web; expires=Thu, 25 Dec 2020 12:00:00 UTC; path=/"
document.cookie = "XOPBOT-Services=All Services Available To Everyone; expires=Fri, 30 Dec 5000 12:00:00 UTC; path=/"
document.cookie = "next-update=Jan 5, 2022 15:37:25;path=/"
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);