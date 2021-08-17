function double(number){
    return number * 2;
}

var namecheck = "no";
while(namecheck=== "no"){
    var visitorName = prompt("Please enter your name");
    if (visitorName!== "") {
        document.getElementById("welcome").innerHTML =
        "Hello " + visitorName + " welome to my website.";
    }
    namecheck = prompt("Did you spell your name right?");
}


for(howMany = prompt("how many images would you like"); howMany > 0; howMany -= 1){
    var img = document.createElement("img"); 
 
    img.src = "https://4.bp.blogspot.com/-knTMC27r2DI/WEEBIXuL_gI/AAAAAAAACzo/ebc-C9ONNncTIX3INe9HxfuHeK9dcDTAACLcB/s1600/90539_0.jpg";
    var src = document.getElementById("pic"); 
 
    src.appendChild(img); 
}

var petNumberLoop = 2;
while(petNumberLoop != 1){
    var numberOfPets = prompt("How many pets is to many");
    if(numberOfPets !== 1){
        numberOfPets = double(numberOfPets);
        document.getElementById("number").innerHTML =
        "I think you should get " + numberOfPets + " pets";
        petNumberLoop = 1;
    } else{
        petNumberLoop = 2;
    }
}

