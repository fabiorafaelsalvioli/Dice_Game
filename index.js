let diceChoice1 = document.getElementsByClassName("dice6");
let diceChoice2 = document.getElementsByClassName("dice6");
let count = 0;
let interval = null;
let notice = document.querySelector("h2");
let flag = document.getElementsByClassName("flag");

function resetDices(){
  diceChoice1[0].style.display = "none";
  diceChoice2[1].style.display = "none";
  flag[0].style.display = "none";
  flag[1].style.display = "none";
}

function rollDices(){
  resetDices();
  count++;
  let indexDice1 = Math.floor(Math.random()*6)+1;
  let indexDice2 = Math.floor(Math.random()*6)+1;
  diceChoice1 = document.getElementsByClassName("dice"+ indexDice1);
  diceChoice1[0].style.display = "block";
  diceChoice2 = document.getElementsByClassName("dice"+ indexDice2);
  diceChoice2[1].style.display = "block";
  if (count==10){
    clearInterval(interval);
    count = 0;
    if (indexDice1 > indexDice2) {
      notice.innerHTML = "Player 1 Won!!!"; 
      flag[0].style.display = "inline";
    }else if (indexDice1 < indexDice2){
      notice.innerHTML = "Player 2 Won!!!";
      flag[1].style.display = "inline";
    }else{
      notice.innerHTML = "Draw!!!"
    }
       
  }
}
    
function start(){
  notice.innerHTML = "Rolling...";
  interval = setInterval(rollDices, 400); 
}



