let time = 1000;
let button = document.querySelector('button')
let h1 = document.querySelector('h1')

button.addEventListener('click', ()=>{
    let s = 0
   setInterval(()=>{
        s++
    
        h1.innerText= s
   },time)
})