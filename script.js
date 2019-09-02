const aud = document.querySelector('audio')

aud.addEventListener('play', ()=>{
    console.log(3333333)
    document.querySelector('.top img').classList.add('roll')
})
aud.addEventListener('pause', ()=>{
    document.querySelector('.top img').classList.remove('roll')
    console.log(222222)
})