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

addFoodBtn.addEventListener("click", function(){

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

setTimeout(()=>{

alert("✅ Food Added Successfully! (Demo)");

document.getElementById("foodName").value="";
document.getElementById("foodPrice").value="";
document.getElementById("foodDescription").value="";
document.getElementById("foodCategory").selectedIndex=0;
preview.src="https://via.placeholder.com/300x180?text=Food+Preview";

addFoodBtn.innerHTML="➕ Add Food";
addFoodBtn.disabled=false;

},1000);

});

});
