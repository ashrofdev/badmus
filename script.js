const aud = document.querySelector('audio')

aud.addEventListener('play', ()=>{
    console.log(3333333)
    document.querySelector('.top img').classList.add('roll')
    document.querySelector('.o').classList.add('oo')
})
aud.addEventListener('pause', ()=>{
    document.querySelector('.top img').classList.remove('roll')
    document.querySelector('.o').classList.remove('oo')
    console.log(222222)
})