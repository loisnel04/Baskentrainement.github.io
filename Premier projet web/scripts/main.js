let myImg = document.querySelector("img")
myImg.addEventListener("click", function() {
    let mySrc = myImg.getAttribute("src")
    if(mySrc === "images/ballon_basket.webp"){
        myImg.setAttribute("src", "images/ballon_basket_2.jpg")
    } else {
        myImg.setAttribute("src", "images/ballon_basket.webp")
    }
})

let myButton = document.querySelector("button")
let myh1 = document.querySelector("h1")

function setUserName(){
    let myName = prompt("Quel est votre nom ?")
    localStorage.setItem("name", myName)
    myh1.textContent = "Bienvenue, " + myName
}

if(!localStorage.getItem("name")){
    setUserName()
} else {
    let name = localStorage.getItem("name")
    myh1.textContent = "Bienvenue, " + name 
}

myButton.addEventListener("click", function(){
    setUserName()
})