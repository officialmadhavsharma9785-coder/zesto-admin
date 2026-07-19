// ===========================
// ZESTO ADMIN LOGIN
// ===========================

document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("adminLogin");
const error = document.getElementById("error");

form.addEventListener("submit", function(e){

e.preventDefault();

const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Zesto@123";

if(username === ADMIN_USERNAME && password === ADMIN_PASSWORD){

error.style.color = "green";
error.innerHTML = "✅ Login Successful...";

setTimeout(() => {
window.location.href = "admin.html";
},1000);

}else{

error.style.color = "red";
error.innerHTML = "❌ Invalid Username or Password";

}

});

});
