var r = "no";
while(r== "no"){
    var customerName = prompt("Please enter your name",);
    if (customerName!= null) {
        document.getElementById("welcome").innerHTML =
        "Hello " + customerName + "! How are you today?";
    }
    var r = prompt("Did you spell your name right?");
}


for(howMany = prompt("how many images would you like",); howMany > 0; howMany - 1){
    var img = document.createElement("img"); 
 
    img.src = "https://images.search.yahoo.com/images/view;_ylt=AwrEzNwBYb5gkSoAKNOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2MxZGVmYmVjM2I4NmVhN2JmMzYwZDQ4OTE5YzhjYmY2BGdwb3MDMTYEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimages%2Bof%2Bcats%26imgl%3Dfsu%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%26tab%3Dorganic%26ri%3D16&w=3872&h=2592&imgurl=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F74%2FA-Cat.jpg&rurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AA-Cat.jpg&size=2172.3KB&p=images+of+cats&oid=c1defbec3b86ea7bf360d48919c8cbf6&fr2=p%3As%2Cv%3Ai&fr=mcafee&tt=File%3AA-Cat.jpg+-+Wikimedia+Commons&b=0&ni=72&no=16&ts=&imgl=fsu&tab=organic&sigr=CYTEmsNXamNN&sigb=RCICFCOy8dsa&sigi=JxFVnoRNjBmg&sigt=QPseWt_SlF04&.crumb=dM7qdvlhnam&fr=mcafee&fr2=p%3As%2Cv%3Ai"; 
    var src = document.getElementById("pic"); 
 
    src.appendChild(img); 
}



/*if (howMany!= null) {
    document.getElementById("rate").innerHTML =
    "Thanks for the information";
}*/
