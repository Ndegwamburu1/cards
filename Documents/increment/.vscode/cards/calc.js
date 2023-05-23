let valueA=12;
let valueB=13;
document.getElementById("num1").textContent=valueA;
document.getElementById("num2").textContent=valueB;

let vadd=document.getElementById("adds")
 
function plus(){
     let results=valueA+valueB
    vadd.textContent='the output of the addition is '+ results
}


let subt=document.getElementById("adds")
function MInus(){
    let results=valueA-valueB
    subt.textContent='the subtraction value is'+results
}
 let div=document.getElementById('adds')
 
function DIvision(){
    let results=valueA/valueB
    div.textContent='the value of division is ' +results
}

let times=document.getElementById('adds')
function TImes(){
    let results=valueA*valueB
    times.textContent='the multiplication value is ' +results
}