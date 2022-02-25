document.addEventListener("DOMContentLoaded", function(event){
    const getId = function(id) {
        return document.getElementById(id);
    }

    let flag = false;

    const form = getId("form");
    // console.log(form);
    form.addEventListener("input",Validation);

    function Validation (event){
        const email = getId("email").value;
        const password = getId("password").value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexList = this.querySelectorAll("ul li");

        if(email == "") {
            regexList[0].classList.add("invalid");
            regexList[0].classList.remove("valid");
        } else {
            regexList[0].classList.remove("invalid");
            regexList[0].classList.add("valid");
        }

        if(!regexEmail.test(email)) {
            regexList[1].classList.add("invalid");
            regexList[1].classList.remove("valid");
        } else {
            regexList[1].classList.remove("invalid");
            regexList[1].classList.add("valid");
        }

        if(password == "") {
            regexList[2].classList.add("invalid");
            regexList[2].classList.remove("valid");
        } else {
            regexList[2].classList.remove("invalid");
            regexList[2].classList.add("valid");
        }

        if(password.length < 8) {
            regexList[3].classList.add("invalid");
            regexList[3].classList.remove("valid");
        } else {
            regexList[3].classList.remove("invalid");
            regexList[3].classList.add("valid");
        }

        if(!/[A-Z]/.test(password)) {
            regexList[4].classList.add("invalid");
            regexList[4].classList.remove("valid");
        } else {
            regexList[4].classList.remove("invalid");
            regexList[4].classList.add("valid");
        }

        if(!/[0-9]/.test(password)) {
            regexList[5].classList.add("invalid");
            regexList[5].classList.remove("valid");
        } else {
            regexList[5].classList.remove("invalid");
            regexList[5].classList.add("valid");
        }
    }
    

    form.addEventListener("submit", gui);
    function gui(event) {
        event.preventDefault();
    }
});