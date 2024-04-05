let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true; //palyerx, palyero
//let arr=["apple", "banana", "litchi"];

//2D arrys
//let arr2 =[["apple", "litchi"],["potato" , "mushroom"], ["pants", "shrits"]];
const winpatterns = [
    [0,1,2],
    [0,3,4],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame =() =>{
    turn0= true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        if(turn0){
            box.innerText="0";
            turn0=false;
        
        }else{
            box.innerText="x";
            turn0=true;
    
        }
        box.disabled= true;


        checkwinner();


    });
 });

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled =true;
    }
};
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
};
 const showWinner =(winner) => {
     msg.innerText = 'congratlations, winner is ${x,o}';
     msgcontainer.classList.remove("hide");
 }

const checkwinner =() =>{
    for( let pattern of winpatterns){
      
           let pos1Val= boxes[pattern[0]].innerText;
           let pos2Val=boxes[pattern[1]].innerText;
           let pos3Val= boxes[pattern[2]].innerText;
        

           if (pos1Val !="" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
             
            
                showWinner(pos1Val);
            }

           }
      
    }
};
  newGameBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click" ,resetGame);
