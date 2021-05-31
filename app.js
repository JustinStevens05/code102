var customerName = prompt("Please enter your name",);

if (customerName!= null) {

    document.getElementById("welcome").innerHTML =

    "Hello " + customerName + "! How are you today?";

}

var r = confirm("Are you sure you typed your name right");

var rating = 1

do{
    var rating = prompt("do you think this website will be helpful please rate from 1 to 10",);

    if (rating!= null) {

        document.getElementById("rate").innerHTML =

        "When asked if you thought the website would be helpful you said " + rating;
    }
}
while(rating = 1);
