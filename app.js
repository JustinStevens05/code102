var namecheck = "no";
while(namecheck=== "no"){
    var visitorName = prompt("Please enter your name");
    if (visitorName!== "") {
        document.getElementById("welcome").innerHTML =
        "Hello " + visistorName + " welome to my website.";
    }
    namecheck = prompt("Did you spell your name right?");
}


for(howMany = prompt("how many images would you like"); howMany > 0; howMany -= 1){
    var img = document.createElement("img"); 
 
    img.src = 90539_0.jpg
    var src = document.getElementById("pic"); 
 
    src.appendChild(img); 
}
