let p1 = document.querySelector('#p1score')
let p2 = document.querySelector('#p2score')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btnReset = document.querySelector('.btnreset')
let btnInput = document.querySelector('#btninput')
let winningScore = document.querySelector('#winningscore')
let p1Score = 0
let p2Score = 0
let winnerScore = 5
let gameOver = false

btn1.addEventListener('click', function(){
    if(!gameOver){
        p1Score++
        p1.textContent = p1Score
    }
    if(p1Score === winnerScore){
        p1.style.color = "green"
        gameOver = true
    }
})
btn2.addEventListener('click', function(){
    if(!gameOver){
        p2Score++
        p2.textContent = p2Score
    }
    if(p2Score === winnerScore){
        p2.style.color = "green"
        gameOver = true
    }
})
btnReset.addEventListener('click', function(){
   reset()
})
function reset (){
    p1.textContent = 0
    p2.textContent = 0
    p1Score = 0
    p2Score = 0
    p1.style.color = "black"
    p2.style.color = "black"
    gameOver = false
}
btnInput.addEventListener('change', function(){
    winningScore.textContent = Number(btnInput.value)
    winnerScore = Number(btnInput.value)
    reset()
})