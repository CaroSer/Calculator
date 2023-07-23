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
    display.value="10"
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
