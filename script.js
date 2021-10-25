// document.querySelector("html").onclick = function(){
//     alert("Success")
// };

// var htmlElement = document.querySelector("html");
// htmlElement.addEventListener("click", function(){
//     alert("Success");
// });

// var htmlElement = document.querySelector("html");
// htmlElement.onclick = function(){
//     alert("Success");
// }

// document.querySelector("form").onsubmit = function(){
//     alert("FormSubmitted");
// }

var button = document.querySelector("button");
button.onclick = function(){
    arrayPrinter(companies);
    // try{
    //     arrayPrinter(heyheyheyhey)
    // }catch(error){
    // alert(error);
// }

}

function addition(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function sayMyName(name){
    return "Hello " + name;
}

var boxers = ["Josh Taylor", "Canelo Alvarez", "Tyson Fury", "Errol Spence Jr"];
var companies = ["Apple", "Microsoft", "IBM", "Intel"];

function arrayPrinter(array){
    for(var i=0; i < array.length; i++){
        alert(array[i]);

    }

}