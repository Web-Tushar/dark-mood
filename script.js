let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");


moon.addEventListener("click",function(){
     // let icon = document.body;
     // document.body.classList.toggle("dark_mode");
     if(document.body.classList.toggle("dark_mode")){
          // moon.style.display = "none";
          // // sun.style.display = "block";
          moon.src = "./images/sun.png"
          
     }else{
          moon.src = "./images/moon.png"

     }
})

// sun.addEventListener("click",function(){
//      if(document.body.classList.toggle("white_mode")){
//           sun.style.display = "none";
//           moon.style.display = "block";
//      }else{
          // sun.style.display = "block";
          // moon.style.display = "none";

//      }
// })