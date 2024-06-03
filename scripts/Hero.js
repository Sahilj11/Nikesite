gsap.registerPlugin(ScrollTrigger);
let menu = document.querySelector(".ri-menu-3-line");
let cross = document.querySelector("#cross");
var nav = document.querySelector("nav");
let sideMenu = document.querySelector(".full");
var tl = gsap.timeline();

gsap.from(".nav-heading", {
    y: "50vh",
    scale: 6,
    yPercent: -50,
    color:"white",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        endTrigger: ".hero-section",
        end: "top center",
        scrub: true,
    },
});
tl.to(".full", {
    right: "0",
    duration: 0.4,
});
tl.from(".full h4", {
    x: 150,
    duration: 0.3,
    stagger: 0.3,
    opacity: 0,
});

tl.from(".full i", {
    opacity: "0",
});
 tl.pause()
menu.addEventListener("click", function() {
     console.log("hello");
     tl.play();
});
document.querySelector(".ri-close-line").addEventListener("click", function() {
    console.log("hello");
    tl.reverse();
});


let parentdiv = document.querySelector(".parentdiv");
let childdiv = document.querySelector(".child");

const childleftdiv = document.getElementById("firstleftdiv");
const rightchild = document.getElementById("firstrightdiv");
let cursor = document.querySelector(".cursor");
childleftdiv.addEventListener("mouseenter", function() {
    childdiv.classList.add("animate");
});
childleftdiv.addEventListener("mouseleave", function() {
    childdiv.classList.remove("animate");
});
rightchild.addEventListener("mouseenter", function() {
    childdiv.classList.add("animateleft");
    gsap.to(cursor, {
        opacity: 1,
    });
});
rightchild.addEventListener("mouseleave", function() {
    childdiv.classList.remove("animateleft");
});
document.body.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        opacity: 1,
    });
});
childdiv.addEventListener("mouseenter", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        opacity: 1,
        backgroundColor: "yellow",
    });
});
childdiv.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        opacity: 0,
        backgroundColor: "transparent",
    });
});

// secodn card create
let secondchildcard = document.querySelector("#secondcard");
const secondleft = document.getElementById("secondleftdiv");
const secondright = document.getElementById("secondrightdiv");

secondleft.addEventListener("mouseenter", function() {
    secondchildcard.classList.add("animate1");
});
secondleft.addEventListener("mouseleave", function() {
    secondchildcard.classList.remove("animate1");
});
secondright.addEventListener("mouseenter", function() {
    secondchildcard.classList.add("animateleft1");
    gsap.to(cursor, {
        backgroundColor: "orange",
        opacity: 1,
    });
});
secondright.addEventListener("mouseleave", function() {
    secondchildcard.classList.remove("animateleft1");
});
secondchildcard.addEventListener("mouseenter", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        opacity: 1,
        backgroundColor: "orange",
    });
});
secondchildcard.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        opacity: 0,
        backgroundColor: "transparent",
    });
});
const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".center-blue-shoe",
        start: "center center",
        end: "top 10%",
        scrub: 4,
        pin: true,
    },
});
tl5.to(".center-blue-shoe", {
    y: 740,
    duration: 4,
    ease: "none",
});

// seciton 5 code
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let newimg = document.querySelector(".newimg");
let malltitle = document.querySelector(".mall-title");
let malldesc = document.querySelector(".mall-desc");
circle1.addEventListener("mouseenter", function() {
    newimg.src = "./images/Malltwo.avif";
    malltitle.innerHTML = "CHENNAI";
    malldesc.innerHTML = "Avenue And Phoenix Markcity";
    circle1.style.backgroundColor = "#c0dc4f7d";
    gsap.from(newimg, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
    });
});
circle1.addEventListener("mouseleave", function() {
    circle1.style.backgroundColor = "";
});
circle2.addEventListener("mouseenter", function() {
    newimg.src = "./images/Mallthree.jpg";
    malltitle.innerHTML = "HYDERABAD";
    malldesc.innerHTML = "Inorbit Mall And GVK One Mall";
    circle2.style.backgroundColor = "#c0dc4f7d";
    gsap.from(newimg, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
    });
});
circle2.addEventListener("mouseleave", function() {
    circle2.style.backgroundColor = "";
});

circle3.addEventListener("mouseenter", function() {
    newimg.src = "./images/Mall6.avif";
    malltitle.innerHTML = "MUMBAI";
    malldesc.innerHTML = "Infinity Mall in Malad";
    circle3.style.backgroundColor = "#c0dc4f7d";
    gsap.from(newimg, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
    });
});
circle3.addEventListener("mouseleave", function() {
    circle3.style.backgroundColor = "";
});

const videoOverLay1 = document.querySelector("#video-over1");
const tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: videoOverLay1,
        start: "center center",
        end: "bottom 5%",
        scrub: true,
        pin: false,
    },
});
tl6.to(videoOverLay1, {
    scale: 3,
    opacity: 0,
});
const videoOverLay2 = document.querySelector("#video-over2");
const tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: videoOverLay2,
        start: "center center",
        end: "bottom 5%",
        scrub: true,
        pin: false,
    },
});
tl7.to(videoOverLay2, {
    scale: 3,
    opacity: 0,
});
const videoOverLay3 = document.querySelector("#video-over3");
const tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: videoOverLay3,
        start: "center center",
        end: "bottom 5%",
        scrub: true,
        pin: false,
    },
});
tl8.to(videoOverLay3, {
    scale: 3,
    opacity: 0,
});
