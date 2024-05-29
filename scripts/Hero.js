gsap.registerPlugin(ScrollTrigger)
let menu = document.querySelector("nav i")
let cross = document.querySelector(".full i")
let rightarrow = document.querySelector(".ri-arrow-right-line")
var leftarr = document.getElementById("leftarrow")
var nav = document.querySelector("nav")
let sideMenu = document.querySelector(".full")
var tl =  gsap.timeline({paused:true})

tl.to(".full",{
    right:"0",
    duration:0.4
})
tl.from(".full h4",{
    x:150,
    duration:0.3,
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
        opacity:1,
        scale:1,
        duration:1,
        
    })
    gsap.to(".center-blue-shoe",{
        opacity:0,
        duration:0.3,
    })
    gsap.to(".left-shoe-1",{
        opacity:0,
        duration:0.3
    })
    gsap.to(".left-shoe-2",{
        opacity:0,
        duration:0.3
    })
    gsap.to(".right-shoe-1",{
        opacity:0,
        duration:0.3,
    })
})
leftarr.addEventListener("click",function(){
    gsap.to(".sidepage2",{
        opacity:1,
        scale:1,
        duration:1,
        
    })
     
})

tl.to(".centerfirst #heading",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#heading",
        //scroller:"body",
        start:"top -80%",
        end:"top 40%",
        scrub:5,
    },
   
})

tl.to(".secondcard #head",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#head",
        //scroller:"body",
      
        start:"top -80%",
        end:"top 40%",
        scrub:5,
    },
    
})

tl.to(".thirdcard #headingthird",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#headingthird",
        //scroller:"body",
        start:"top -80%",
        end:"top 40%",
        scrub:5,
    },
    
   
})


let parentdiv = document.querySelector(".parentdiv")
let childdiv = document.querySelector(".child")

const childleftdiv = document.getElementById("firstleftdiv")
const rightchild = document.getElementById("firstrightdiv")
let cursor = document.querySelector(".cursor")
childleftdiv.addEventListener("mouseenter",function(){
    childdiv.classList.add("animate")
    
})
childleftdiv.addEventListener("mouseleave",function(){
    childdiv.classList.remove("animate")
    
})
rightchild.addEventListener("mouseenter",function(){
    childdiv.classList.add("animateleft")
    gsap.to(cursor,{
        
        opacity:1,
    })
})
rightchild.addEventListener("mouseleave",function(){
    childdiv.classList.remove("animateleft")
})
document.body.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        opacity:1,
    })
})
childdiv.addEventListener('mouseenter',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        opacity:1,
        backgroundColor:"yellow",
        
    })
})
childdiv.addEventListener('mouseleave',function(){
    
    gsap.to(cursor,{
        opacity:0,
        backgroundColor:"transparent",
    })
})

// secodn card create
let secondchildcard = document.querySelector("#secondcard")
const secondleft = document.getElementById("secondleftdiv")
const secondright = document.getElementById("secondrightdiv")

secondleft.addEventListener("mouseenter",function(){
    secondchildcard.classList.add("animate1")
    
})
secondleft.addEventListener("mouseleave",function(){
    secondchildcard.classList.remove("animate1")
    
})
secondright.addEventListener("mouseenter",function(){
    secondchildcard.classList.add("animateleft1")
    gsap.to(cursor,{
        backgroundColor:"orange",
        opacity:1,
    })
})
secondright.addEventListener("mouseleave",function(){
    secondchildcard.classList.remove("animateleft1")
})
secondchildcard.addEventListener('mouseenter',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        opacity:1,
        backgroundColor:"orange",
        
    })
})
secondchildcard.addEventListener('mouseleave',function(){
    
    gsap.to(cursor,{
        opacity:0,
        backgroundColor:"transparent",
    })
})
const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".center-blue-shoe",
        start: "center center",
        end: "top 10%",
        scrub: 4,
        pin: true,
    },
})
tl5.to(".center-blue-shoe", {
    y: 700,
    duration:4,
    ease:"none"
});
