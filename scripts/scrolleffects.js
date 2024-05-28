gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".center-blue-shoe",
        start: "center center",
        end: "top 10%",
        scrub: 4,
        pin: true,
        //toggleActions:"restart pause none none",
        //markers: {
        //    fontSize: "3rem",
        //},
    },
})
tl.to(".center-blue-shoe", {
    y: 700,
    duration:4,
    ease:"none"
});