document.addEventListener('DOMContentLoaded',()=>{
let display=document.getElementById('display');
let exp=document.getElementById('exp');
let root=document.getElementById('root');
let del=document.getElementById('del');
let ac=document.getElementById('ac');
let division=document.getElementById('division');
let rest=document.getElementById('rest');
let dot=document.getElementById('dot');
let equal=document.getElementById('add');
let multiply=document.getElementById('equal');
let add=document.getElementById('multiply');

ac.addEventListener('click',()=>{
    display.innerText=""
})

del.addEventListener('click',()=>{
    let displayContent=(display.innerText).split('');
    displayContent.pop();
    display.innerText=displayContent
})

root.addEventListener('click',()=>{
    let contentExp=(Math.sqrt(parseFloat(display.innerText))).toFixed(13)
    display.innerText=contentExp
})

dot.addEventListener('click',()=>{
    if(!display.innerText.includes('.')) display.innerText+="."
})

})
