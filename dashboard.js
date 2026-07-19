// ======================
// ZESTO Dashboard JS
// ======================

document.addEventListener("DOMContentLoaded",()=>{

console.log("✅ ZESTO Admin Dashboard Loaded");

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(0.97)";

setTimeout(()=>{

card.style.transform="scale(1)";

},150);

});

});

});
