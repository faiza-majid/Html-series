let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");

let turn0=true;

const winsPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach ((box) =>{
    box.addEventListener("click",() => {
         console.log("box was click");
         if (turn0){
            box.innerText="o";
            turn0=false;
         }else {
            box.innerText="x";
            turn0=true; 
         }
         box.disabled=true;

         checkWinner();
    })
});
const checkWinner  = () => {
    for(let pattern of winsPatterns ){
        console.log(pattern[0],[1],[2]);
    }
}





        
    






