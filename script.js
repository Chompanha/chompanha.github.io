const main = document.querySelector(".main-content");
const image= document.querySelector(".image");
const button = document.querySelector("#submit");
const email = document.querySelector("#email");
const password= document.querySelector("#pass");

button.addEventListener("click" ,function(){

    if(email.value.length > 0 && password.value.length)
    {
    main.style.display="none"
    image.style.display="block";
    }
    else
    {
        alert("Must fill All Information !");
    }


})