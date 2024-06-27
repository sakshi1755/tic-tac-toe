// SubTask1

const board = document.getElementById("board");
const cells = document.getElementsByClassName("cell");
const msg = document.getElementById("msg");
const players = ["X", "O"];

let current = players[0];
function swapturns(){
if(current=="X") {current="O";}
else {current="X";}
msg.innerText= `${current}'s turn`

}
Array.from(cells).forEach(cell=> {
  cell.addEventListener("click",  handleCellClick);
}
);

// // add event listeners to each cell

function handleCellClick(event){
  

  
  let cell=event.target;
  if(cell.innerText !=="") {return ;}
  else{
  cell.innerText=current;
  if(checkWin()){
    msg.innerText=`${current} wins!`;
    cellsdisabled();
    return;
  }
  if(checkTie()){
    msg.innerText="It's a tie";
    return;
  }
  swapturns();
  }

  // Handle Cell Clicking Functionality
}


// SubTask2

function checkWin() {
  const winningPatterns=[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8],[2,4,6]  ];
   for(let patterns of winningPatterns){
    if(cells[patterns[0]].innerText===current && cells[patterns[1]].innerText===current && cells[patterns[2]].innerText===current){
     
      return true;
    }}
    return false;
   

  // // Check Winning conditions
}

function checkTie() {
  let tie=true;
  Array.from(cells).forEach(cell=> {
    if(cell.innerText==""){tie=false};
  }
  );
  return tie;

  // // Check Tie conditions
}

function cellsdisabled(){
  for(let cell of cells){
    cell.removeEventListener("click",  handleCellClick);
  }
}



// SubTask3
function restart() {
  for(let cell of cells){
    cell.innerText="";
  }
  Array.from(cells).forEach(cell=> {
    cell.addEventListener("click",  handleCellClick);
  }
  );
  current="X";
  msg.innerText=`${current}'s turn`;

  // // Restart Game Functionality
}
