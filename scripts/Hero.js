let menu = document.querySelector("nav i")
let cross = document.querySelector(".full i")
let rightarrow = document.querySelector(".ri-arrow-right-line")
let leftarrow = document.querySelector(".ri-arrow-left-line")
console.log(rightarrow)
var tl =  gsap.timeline({paused:true})
tl.to(".full",{
    right:"0",
    duration:0.5
})
tl.from(".full h4",{
    x:150,
    duration:0.6,
    stagger:0.3,
    opacity:0
})

tl.from(".full i",{
    opacity:"0"
})

menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})
rightarrow.addEventListener("click",function(){
    gsap.to(".sidepage",{
        right:"0",
        duration:1

    })
    gsap.to(".left-shoe-1",{
        x:300,
        opacity:0,
        duration:1
    })
    gsap.to(".left-shoe-2",{
        y:300,
        opacity:0,
        duration:1
    })
    gsap.to(".right-shoe-1",{
        y:300,
        opacity:0,
        duration:1,
       
    })
    
})
leftarrow.addEventListener("click",function(){
    gsap.to(".sidepage",{
        right:"-110%",
        duration:1,
    })
    gsap.to(".left-shoe-1",{
        x:100,
        opacity:1,
        duration:1
    })
    gsap.to(".left-shoe-2",{
        y:-50,
        opacity:1,
        duration:1
    })
    gsap.to(".right-shoe-1",{
        y:-100,
        opacity:1,
        duration:0.5,
        
    })
})