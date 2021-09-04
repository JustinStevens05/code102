function enterName() {
    var namecheck = "no";
    while(namecheck=== "no"){
        var visitorName = prompt("Please enter your name");
        if (visitorName!== "") {
            document.getElementById("welcome").innerHTML =
            "Hello " + visitorName + " welome to my website.";
        }
        namecheck = prompt("Did you spell your name right?");
    }
}

function diplayImages() {
    for(howMany = prompt("how many images would you like"); howMany > 0; howMany -= 1){
        var img = document.createElement("img"); 
 
        img.src = "https://4.bp.blogspot.com/-knTMC27r2DI/WEEBIXuL_gI/AAAAAAAACzo/ebc-C9ONNncTIX3INe9HxfuHeK9dcDTAACLcB/s1600/90539_0.jpg";
        var src = document.getElementById("pic"); 
 
        src.appendChild(img); 
    }
}
    
function petNumber() {
    var petNumberLoop = 2;
    while(petNumberLoop != 1){
        var numberOfPets = prompt("How many pets is to many");
        if(isNaN(numberOfPets)= true){
            numberOfPets = numberOfPets * 2;
            document.getElementById("number").innerHTML =
            "I think you should get " + numberOfPets + " pets";
            petNumberLoop = 1;
        } else{
            petNumberLoop = 2;
        }
    }
}

var element = document.createElement("button");
element.appendChild(document.createTextNode("Click Me!"));
var page = document.getElementById("btn");
page.appendChild(element);
console.log(element);


enterName()
displayImages()
petNumber()
