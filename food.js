import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// ===========================
// ZESTO FOOD MANAGEMENT
// ===========================

document.addEventListener("DOMContentLoaded", () => {

const foodImage = document.getElementById("foodImage");
const preview = document.getElementById("preview");
const addFoodBtn = document.getElementById("addFoodBtn");

foodImage.addEventListener("change", function () {

const file = this.files[0];

if(file){
preview.src = URL.createObjectURL(file);
}

});

addFoodBtn.addEventListener("click", async function(){

const name = document.getElementById("foodName").value.trim();
const price = document.getElementById("foodPrice").value.trim();
const category = document.getElementById("foodCategory").value;
const description = document.getElementById("foodDescription").value.trim();

if(name==="" || price==="" || description===""){

alert("⚠ Please fill all fields.");
return;

}

addFoodBtn.innerHTML="⏳ Adding Food...";
addFoodBtn.disabled=true;

try {

await addDoc(collection(db, "foods"), {
name: name,
price: price,
category: category,
description: description,
createdAt: Date.now()
});

alert("✅ Food Added Successfully!");

document.getElementById("foodName").value="";
document.getElementById("foodPrice").value="";
document.getElementById("foodDescription").value="";
document.getElementById("foodCategory").selectedIndex=0;
preview.src="https://via.placeholder.com/300x180?text=Food+Preview";

} catch(error){

alert("❌ " + error.message);

}

addFoodBtn.innerHTML="➕ Add Food";
addFoodBtn.disabled=false;

});

});
