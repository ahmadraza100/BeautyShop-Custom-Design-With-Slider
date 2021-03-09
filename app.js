
document.getElementById("dot1").addEventListener("click" , ()=>{
    document.getElementById("dot1").style.backgroundColor = "white";
    document.getElementById("dot2").style.backgroundColor = "transparent";

    document.getElementById("h").style.background = "url(./img/back2.jpg)";
    // alert("hello");
})


document.getElementById("dot2").addEventListener("click" , ()=>{
    
    
    document.getElementById("dot2").style.backgroundColor = "white";
    document.getElementById("dot1").style.backgroundColor = "transparent";
    document.getElementById("h").style.background = "url(./img/back4.jpg)";
    
    
  
   
   
})

setInterval(function (){
    document.getElementById("dot1").style.backgroundColor = "white";
    document.getElementById("dot2").style.backgroundColor = "transparent";
    document.getElementById("h").style.background = "url(./img/back2.jpg)";
} ,7000)

var j = 0;


setInterval(function (){
    j++;
    document.getElementById("dot2").style.backgroundColor = "white";
    document.getElementById("dot1").style.backgroundColor = "transparent";
    document.getElementById("dot1").style.backgroundPosition = "center center";
    document.getElementById("h").style.background = "url(./img/back6.jpg)";
    if(j%5==0){
    document.getElementById("h").style.background = "url(./img/back1.jpg)";
    document.getElementById("dot2").style.backgroundColor = "transparent";

    }
    
} ,13000)