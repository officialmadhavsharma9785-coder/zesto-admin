// ===========================
// ZESTO ORDERS MANAGEMENT
// ===========================

document.addEventListener("DOMContentLoaded",()=>{

const btn=document.getElementById("saveOrder");

btn.addEventListener("click",()=>{

const status=document.getElementById("status").value;

btn.innerHTML="⏳ Updating...";
btn.disabled=true;

setTimeout(()=>{

alert("✅ Order Status Updated : "+status);

btn.innerHTML="Update Status";
btn.disabled=false;

},1000);

});

});
