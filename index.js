let boxes=document.querySelectorAll(".box");
let reseetBtn=document.querySelector("#resetbtn");

let turn0=true; //player x ,player y

let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


const resetGame=()=>{
     turn0=true;
     enableeBoxes();
     msgContainer.classList.add("hide");

}


const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked ");
        if(turn0){
            box.innerText="O";
            turn0=false; //next player 
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    })
});


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableeBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""; //reset all the box values 
    }
};

let showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner=()=>{
    for(let pattern of winpattern){
        let post1val=boxes[pattern[0]].innerText;
        let post2val=boxes[pattern[1]].innerText;
        let post3val=boxes[pattern[2]].innerText;


        if(post1val!="" && post2val!="" && post3val!=""){
            if(post1val===post2val && post2val===post3val){
                console.log("Winner",post1val);
                showWinner(post1val );
            }
        }
    }
};
newGamebtn.addEventListener("click",resetGame);
reseetBtn.addEventListener("click",resetGame);
