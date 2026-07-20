// ===========================
// ZESTO USER MANAGEMENT
// ===========================

document.addEventListener("DOMContentLoaded",()=>{

const blockBtn=document.querySelector(".block");
const deleteBtn=document.querySelector(".delete");

blockBtn.addEventListener("click",()=>{

if(blockBtn.innerHTML==="🚫 Block"){

blockBtn.innerHTML="✅ Unblock";
blockBtn.style.background="#2E7D32";

alert("✅ User Blocked");

}else{

blockBtn.innerHTML="🚫 Block";
blockBtn.style.background="#FF9800";

alert("✅ User Unblocked");

}

});

deleteBtn.addEventListener("click",()=>{

if(confirm("Delete this user?")){

document.querySelector(".user-card").remove();

alert("✅ User Deleted");

}

});

});
