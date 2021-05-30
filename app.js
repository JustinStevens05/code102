var customerName = prompt("Please enter your name",);

if (customerName!= null) {

    document.getElementById("welcome").innerHTML =

    "Hello " + customerName + "! How are you today?";

}

var r = confirm("Are you sure you typed your name right");

if (r == true) {

    x = "ok";

}
else {

    x = "reloed the page and try again";

}
