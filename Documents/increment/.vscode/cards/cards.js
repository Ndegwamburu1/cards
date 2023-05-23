let card1=1
let card2=8
let sumEL=document.getElementById('sum-el')
let cardEL=document.getElementById('card-el')
let messageEl=document.getElementById('message-el')
let sum=card1+card2
let message=""
 /*document.getElementById('c1').textContent=card1
 document.getElementById('c2').textContent=card2*/
 
  
 /*document.getElementById("out").textContent=sum*/
 
let startGAme=document.getElementById('start')
 
//document.getElementById('start').textContent
 function startgame(){
  sumEL.textContent='SUM:' +sum
   cardEL.textContent='cards :'+card1+" "+card2


    if(sum<21){
       message="do you want to draw a new card"
    
       }
     else if(sum ===21)
     {
        message="congratulations you've passed"
     }
     else{
       message="Game over!"
       
     }
     messageEl.textContent=message
 }

 
 //newcardEL.textContent="drawing new card from the deck"
//let newcardEL=document.getElementById('new')
  function newcard(){
   let newcard=4
  sum=sum+newcard
 } 
 