document.addEventListener('DOMContentLoaded',()=>{
let display=document.getElementById('display');
let exp=document.getElementById('exp');
let root=document.getElementById('root');
let del=document.getElementById('del');
let ac=document.getElementById('ac');
let dot=document.getElementById('dot');
let signs=Array.from(document.getElementsByClassName('sign'))
let numBut=Array.from(document.getElementsByClassName('numBut'))
let equal=document.getElementById('equal')
let operators = {
    '+': { precedence: 1 },
    '-': { precedence: 1 },
    'x': { precedence: 2 },
    '÷': { precedence: 2 },
};

function applyOperator(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '÷':
            return num1 / num2;
        default:
            return NaN;
    }
}

function evaluatePostfix(postfixExpression) {
    let stack = [];
    for (let token of postfixExpression) {
        if (!isNaN(parseFloat(token))) {
            stack.push(parseFloat(token));
        } else if (operators[token]) {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(applyOperator(token, num1, num2));
        }
    }
    return stack[0];
}

function shuntingYard(input) {
    let output = [];
    let operatorStack = [];

    for (let token of input) {
        if (!isNaN(parseFloat(token))) {
            output.push(token);
        } else if (operators[token]) {
            while (
                operatorStack.length > 0 &&
                operators[operatorStack[operatorStack.length - 1]].precedence >= operators[token].precedence
            ) {
                output.push(operatorStack.pop());
            }
            operatorStack.push(token);
        }
    }

    while (operatorStack.length > 0) {
        output.push(operatorStack.pop());
    }

    return output;
}

equal.addEventListener('click', () => {
    let expression = display.value.split(/([+\-x÷])/).filter(Boolean);
    let postfixExpression = shuntingYard(expression);
    let result = evaluatePostfix(postfixExpression);
    display.value = result;
});

numBut.forEach(num => {
    num.addEventListener('click',()=>{
    display.value+=num.innerText})
});

signs.forEach(sign => {
    sign.addEventListener('click',()=>{
            display.value+=sign.innerText})
});

ac.addEventListener('click',()=>{
    display.value=""
})

del.addEventListener('click',()=>{
    let displayContent=(display.value).split('');
    displayContent.pop();
    display.value=displayContent
})

root.addEventListener('click',()=>{
    let contentRoot=Math.sqrt(parseFloat(display.value))
    display.value=contentRoot
})

dot.addEventListener('click',()=>{
    if(!display.value.includes('.')) display.value+="."
})

exp.addEventListener('click',()=>{
    let contentExp=((parseFloat(display.value))**2)
    display.value=contentExp
})


})
