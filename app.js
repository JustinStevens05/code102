var customerName = prompt("Please enter your name",);
if (customerName!= null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + customerName + "! How are you today?";
}

var r = confirm("Are you sure you typed your name right");

var rating = prompt("What would you rate the look of this website",);
if (Number.isInteger(rating)) {
    document.getElementById("rate").innerHTML =
    "Thanks for the information";
}
