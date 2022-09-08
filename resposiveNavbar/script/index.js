let small_screen_btn=document.getElementById("small-screen-btn");
let cross=document.getElementById("cross");
let list=document.getElementById("list");
let count=0;
function dispaly_menu(){
    if(count%2==0){
        small_screen_btn.style.display="flex";
        cross.style.display="flex";
        list.style.display="none";
    }else{
        small_screen_btn.style.display="none";
        cross.style.display="none";
        list.style.display="flex";
    }
    ++count;
}