myitem = document.getElementById("firsttest");
//This is the line that links our JS to our HTML by creating an item and grabbing elements with the ID "firsttest" from our HTML file into this item
myitem.addEventListener("click", onClick);
//This is the line that tells the computer to look for a click on any element that is contained without our item (elements id'd with "firsttest")
function onClick() {  
    myitem.style.color = "rgb(94, 19, 129)";  
    // function onClick tells the computer that we want something to happen when myItem is clicked on
    //Anything within this function is applied to myItem when it is clicked
    myitem.style.backgroundColor = "grey";
}
myitem.addEventListener("mouseout", mouseout);
function mouseout() {
    myitem.style.color = "";
    myitem.style.backgroundColor = "";
}
//Button Testing Below
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
    otheritem.style.color = "rgb(94, 19, 129)";  
}
//My Button Testing Below
mybutton = document.getElementById("mybutton");
thetext = document.getElementById("mybuttontest");
mybutton.addEventListener("click", onButtonClick2);
function onButtonClick2() {
    thetext.style.color ="rgb(94, 19, 129)";
}
//Text Box Testing Below
textentry = document.getElementById("myinput"); 
yourtext = document.getElementById("yourtext"); 
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
   yourtext.innerHTML = newtext;  
}
//Third Button Testing Below
thirdbutton = document.getElementById("normal");
thirdbutton.addEventListener("click", onButtonClick3);
function onButtonClick3() {
    thetext.style.color = "black";
    otheritem.style.color = "black";
}
//Assignment 7 Part 3 Work
hurtsImage = document.getElementById("HurtsID");
hurtsImage.addEventListener("click", imgSizeChange);
function imgSizeChange() {
    if (hurtsImage.style.width == "200px") {
        hurtsImage.style.width = "400px";
        hurtsImage.setAttribute("title", "Hurts playing in College (Click to Expand)")
    }
    else {
        hurtsImage.style.width = "200px";
        hurtsImage.setAttribute("title", "Hurts playing in College (Click to Shrink)" )
    }
}



