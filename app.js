var r = "no";
if(r= "no"){
    var customerName = prompt("Please enter your name",);
    if (customerName!= null) {
        document.getElementById("welcome").innerHTML =
        "Hello " + customerName + "! How are you today?";
    }
    var r = prompt("Did you spell your name right?");
}

var rating = prompt("What would you rate the look of this website",);
if (rating!= null) {
    document.getElementById("rate").innerHTML =
    "Thanks for the information";
}
