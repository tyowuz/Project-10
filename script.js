let num1 = 0
let num2 = 0

num1El = document.getElementById("num1_el")

function fast() {
    num1 += 1
    num1El.innerText = num1
}
function slow() {
    num1 -= 1
    num1El.innerText = num1
}

num2El = document.getElementById("num2_el")

function forward() {
    num2 += 1
    num2El.innerText = num2
}
function backward() {
    num2 -= 1
    num2El.innerText = num2
}

answerEl = document.getElementById("answer_el")

function add() {
    let add_num= num1 + num2
    answerEl.innerText = add_num
}
function multiply() {
    let multiply_num= num1 * num2
    answerEl.innerText = multiply_num
}
function substract() {
    let substract_num= num1 - num2
    answerEl.innerText = substract_num
}
function divide() {
    let divide_num= num1 / num2
    answerEl.innerText = divide_num
}
function clear() {
    num1El.innerText = "0"
    num2El.innerText = "0"
    answerEl.innerText = "0"
}



 