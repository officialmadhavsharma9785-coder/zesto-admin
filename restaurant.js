// ===========================
// ZESTO RESTAURANT MANAGEMENT
// ===========================

document.addEventListener("DOMContentLoaded", () => {

const restaurantImage = document.getElementById("restaurantImage");
const preview = document.getElementById("preview");
const addRestaurantBtn = document.getElementById("addRestaurantBtn");

restaurantImage.addEventListener("change", function () {

    const file = this.files[0];

    if(file){
        preview.src = URL.createObjectURL(file);
    }

});

addRestaurantBtn.addEventListener("click", function(){

    const name = document.getElementById("restaurantName").value.trim();
    const address = document.getElementById("restaurantAddress").value.trim();
    const delivery = document.getElementById("deliveryTime").value.trim();
    const rating = document.getElementById("rating").value.trim();

    if(name==="" || address==="" || delivery==="" || rating===""){
        alert("⚠ Please fill all fields.");
        return;
    }

    addRestaurantBtn.innerHTML="⏳ Adding Restaurant...";
    addRestaurantBtn.disabled=true;

    setTimeout(()=>{

        alert("✅ Restaurant Added Successfully! (Demo)");

        document.getElementById("restaurantName").value="";
        document.getElementById("restaurantAddress").value="";
        document.getElementById("deliveryTime").value="";
        document.getElementById("rating").value="";

        preview.src="https://via.placeholder.com/350x200?text=Restaurant+Preview";

        addRestaurantBtn.innerHTML="➕ Add Restaurant";
        addRestaurantBtn.disabled=false;

    },1000);

});

});
