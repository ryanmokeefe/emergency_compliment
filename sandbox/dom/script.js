
var myFirstElement = document.getElementById("numberOne");

var mySecondElement = document.querySelector("ul");
var myThirdElement = document.getElementsByClassName("test");
var myForthElement = document.getElementsByTagName("li");
var myFifthElement = document.querySelectorAll(".test");
var pep = document.getElementById("pep");
pep.textContent = "Peperoniiiiiiiiiiiiiiiiii";
// exercises
//How could we use the getElementsByClassName method to select all elements with the class vegetarian?
document.getElementByClassName("vegetrian");
//How could we use the getElementsByTagName method to select all <li>s?
document. getElementsByTagName("li")
//How could we use the querySelectorAll method to select all elements with a class vegetarian?
document.querySelectorAll(". vegetarian");

for(var i = 0; i < quiz2.lenght; i++){
    quiz2[i].className = "red";
}


var a = document.createElement("p");
a.textContent = "Hello World";
document.getElementsByTagName("ul")[0].appendChild(a);

document.selectElementByTagName("button")[0]. addEventListener
("click", function(){
    window.alert("you just clicked me!")
}

var email = document.getElementById("email");
var tabAway = function(){
    window.alert("field is no longer in focus")
}
email.addEventListener("blur", tabAway)




