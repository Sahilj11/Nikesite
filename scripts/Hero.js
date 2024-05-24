function mouseMove(){
    document.body.addEventListener('mousemove',function(event){
        gsap.to(".mouse",{
            left:event.pageX,
            top:event.pageY
        })
    })
    Shery.makeMagnet("li");
}

mouseMove()