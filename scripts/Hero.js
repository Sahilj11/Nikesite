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
        scroller:"body",
        
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
        scroller:"body",
      
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
        scroller:"body",
        start:"top -80%",
        end:"top 40%",
        scrub:5,
    },
    
   
})

//gsap.to(".center-blue-shoe",{
//    y:60,
//    scrollTrigger:{
//        trigger:"#product-title",
//        start:"top center",
//        end: "top 250",
//        toggleActions:"restart none",
//        onLeave: () => {
//            document.querySelector(".center-blue-shoe").classList.add("center-blue-shoeStop");
//        },
//        onEnterBack:()=>{
//            document.querySelector(".center-blue-shoe").classList.remove("center-blue-shoeStop");
//            gsap.to(".center-blue-shoe",{y:-20})
//        }
//    }
//})
