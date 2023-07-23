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

equal.addEventListener('click',()=>{
    let expression=(display.value).split('');
    for (let index = 0; index < expression.length; index++) {
        
            if (expression[index]=="÷"){
                display.value=parseFloat(expression[index-1])/parseFloat(expression[index+1])
            }

            if (expression[index]=="x"){
                display.value=parseFloat(expression[index-1])*parseFloat(expression[index+1])
            }
            
            if (expression[index]=="-"){
                display.value=parseFloat(expression[index-1])-parseFloat(expression[index+1])
            }

            if (expression[index]=="+"){
                display.value=parseFloat(expression[index-1])+parseFloat(expression[index+1])
            }
}})

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
