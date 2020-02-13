`use strict`;
{
// const target1 =document.getElementById("target1")
// const target2 =document.getElementById("target2")
// const target3 =document.getElementById("target3")
//
// target1.addEventListener("click",()=>{
//     target1.classList.toggle("circle");
//     });
//     target2.addEventListener("click",()=>{
//         target2.classList.toggle("circle");
//         });
//         target3.addEventListener("click",()=>{
//             target3.classList.toggle("circle");
//             });
const num=5;
const winner =Math.floor(Math.random()*num);



for(let i =0; i<num; i++){
  const div =  document.createElement("div");
  div.classList.add("box");
  // div.textContent =i;

  div.addEventListener("click",()=>{
    // div.classList.toggle("circle");
    if(i===winner){
      div.textContent ="Win!";
      div.classList.add("win");

    }else {
      div.textContent ="Lose";
      div.classList.add("lose");
    }
  });

  document.body.appendChild(div);

}



}
