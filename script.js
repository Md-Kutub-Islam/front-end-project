// Locomotive scroll code 
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation()

// Page1 video work 
function videoconAnimation(){
    const videocon = document.querySelector('#video-container')
    const playbtn = document.querySelector('#play')

    videocon.addEventListener('mousemove', (e) => {
        gsap.to(playbtn,{
            scale:1,
            opacity:1,

            // -80 islia lagaye h ki mouse jo h wo button ke najdik rahe
            left: e.x-80,
            top:e.y-80
        })
    })
    videocon.addEventListener('mouseleave', () => {
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        })
    })
}
videoconAnimation()

function lodingAnimation(){
    gsap.from('#page1 h1', {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from('#page1 #video-container', {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
    })
}
lodingAnimation()

function navbarAnimation(){
    // Navbar part1 work 
gsap.to('#nav-part1 .one', {
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger: "#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
        scrub:2
    }
})
gsap.to('#nav-part1 .two', {
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger: "#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
        scrub:2
    }
})
// Navbar part2 work 
gsap.to('#nav-part2 #links', {
    transform: "translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger: "#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
        scrub:2
    }
})
}
navbarAnimation()

// Page2 work 

// dets1 work 
document.querySelector('.dets1').addEventListener("mouseenter", () => {
    document.querySelector('.dets1').style.height= '250px';
})
document.querySelector('.dets1').addEventListener("mouseleave", () => {
    document.querySelector('.dets1').style.height= '60px';
})

// dets2 work 
document.querySelector('.dets2').addEventListener("mouseenter", () => {
    document.querySelector('.dets2').style.height= '250px';
})
document.querySelector('.dets2').addEventListener("mouseleave", () => {
    document.querySelector('.dets2').style.height= '60px';
})

// // dets3 work 
document.querySelector('.dets3').addEventListener("mouseenter", () => {
    document.querySelector('.dets3').style.height= '250px';
})
document.querySelector('.dets3').addEventListener("mouseleave", () => {
    document.querySelector('.dets3').style.height= '60px';
})

document.querySelector('#child1').addEventListener('mousemove', (e) => {
    gsap.to(".cursor1", {
        left: e.x-80,
        top: e.y-80,
        transform: `translate(-50%, -50%) scale(1)`,
        opacity: 1
    })
})
document.querySelector('#child1').addEventListener('mouseleave', () => {
    gsap.to(".cursor1", {
        transform: `translate(-50%, -50%) scale(0)`,
        opacity: 0
        
    })
})

document.querySelector('#child2').addEventListener('mousemove', (e) => {
    gsap.to(".cursor2", {
        left: e.x-650,
        top: e.y-80,
        transform: `translate(-50%, -50%) scale(1)`,
        opacity: 1
    })
})
document.querySelector('#child2').addEventListener('mouseleave', () => {
    gsap.to(".cursor2", {
        transform: `translate(-50%, -50%) scale(0)`,
        opacity: 0
    })
})

document.querySelector('#child3').addEventListener('mousemove', (e) => {
    gsap.to(".cursor3", {
        left: e.x-80,
        top: e.y-80,
        transform: `translate(-50%, -50%) scale(1)`,
        opacity: 1
    })
})
document.querySelector('#child3').addEventListener('mouseleave', () => {
    gsap.to(".cursor3", {
        transform: `translate(-50%, -50%) scale(0)`,
        opacity: 0
    })
})

document.querySelector('#child4').addEventListener('mousemove', (e) => {
    gsap.to(".cursor4", {
        left: e.x-650,
        top: e.y-100,
        transform: `translate(-50%, -50%) scale(1)`,
        opacity: 1
    })
})
document.querySelector('#child4').addEventListener('mouseleave', () => {
    gsap.to(".cursor4", {
        transform: `translate(-50%, -50%) scale(0)`,
        opacity: 0
    })
})


// Page5 work 

