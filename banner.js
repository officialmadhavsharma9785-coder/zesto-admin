const bannerImage=document.getElementById("bannerImage");
const preview=document.getElementById("bannerPreview");
const saveBtn=document.getElementById("saveBtn");

bannerImage.addEventListener("change",function(){

const file=this.files[0];

if(file){

preview.src=URL.createObjectURL(file);

}

});

saveBtn.addEventListener("click",()=>{

alert("✅ Banner Saved Successfully (Demo)");

});
