let btn = document.querySelector(".btn");
const inputField = document.querySelector("#password")


btn.addEventListener("click", function() {    
if(inputField.type === "password"){
    inputField.type = "text";
    btn.textContent="Hide Password";
}else {
    inputField.type ="password";
    btn.textContent ="Show Password";
}
})


