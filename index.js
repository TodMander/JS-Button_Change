//color button works!
//document.getElementById("press").style.background='red';

//another way to color button!
//var button = document.getElementById("press");
//button.style.background = 'red';



var button = document.getElementById("press");
var color = document.getElementById("change_color");

button.addEventListener("click", function(){
    if (color.style.background == "red"){
        color.style.background = "blue"
    }
    else if (color.style.background == "blue"){
        color.style.background = "red";
    }
    else color.style.background = "red"
})
