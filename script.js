// ***************************** CCBANNER ********************************************
gsap.set(".ccbanner",{
    top: "100vh"    
})
gsap.to(".ccbanner",{
    scrollTrigger:{
        trigger: "#hero",
        start:"-80px 90%",
        end: "100vh 50%",
        scrub: 2
    },
    rotate: -540,
    top: "-100vh",
    ease: Power0.easeInOut
})

// ***************************** CIRCLES ********************************************
gsap.to("#fcircle",{
    scrollTrigger:{
        trigger: "#hero",
        start:"top 90%",
        end: "900vh 10%",
        scrub: 3
    },
    rotate: 720,
    duration: 2,
    ease: Power1.easeInOut
})
gsap.to("#scircle",{
    scrollTrigger:{
        trigger: "#hero",
        start:"top 90%",
        end: "900vh 10%",
        scrub: 4
    },
    rotate: -450,
    duration: 2,
    ease: Power1.easeInOut
})
gsap.to("#tcircle",{
    scrollTrigger:{
        trigger: "#hero",
        start:"top 90%",
        end: "900vh 10%",
        scrub: 3
    },
    rotate: 540,
    duration: 2,
    ease: Power1.easeInOut
})
gsap.to("#small",{
    scrollTrigger:{
        trigger: "#hero",
        start:"top 90%",
        end: "500vh 30%",
        scrub: 3
    },
    backgroundColor: "rgb(255, 190, 110)",
    rotate: 360,
    width: "50px",
    height: "50px",
    ease: Power1.easeInOut,
    color: "black",
    fontSize: "55px"
})

// ***************************** NAV ********************************************
gsap.to("#nav",{
    scrollTrigger:{
        trigger: "#hero",
        start: "-30px 7%",
        end: "top 0%",
        scrub: 2
    },
    ease: Power1.easeInOut,
    color: "white"
})
gsap.to("#nav i",{
    scrollTrigger:{
        trigger: "#hero",
        start: "-30px 7%",
        end: "top 0%",
        scrub: 2
    },
    ease: Power1.easeInOut,
    backgroundColor: "white",
    color: "black"
})

// ***************************** PHOTOS ********************************************
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#three",
        start: "center center",
        end: "90% 10%",
        scrub: 1.5,
        pin: true
    }
});
tl
.to("#photu",{
    top: "50%",
    rotate: 720,
    duration:5,
    ease: Circ.easeInOut
})
.to("#photus",{
    left: "67%",
    expo: Power1.easeOut
})
.to(".slide",{
    left: "-100%",
    expo: Power1.easeOut,
    duration:4
    
})

// ***************************** MANY THANKS ********************************************
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#four",
        start: "center center",
        end: "100% 15%",
        scrub: 2,
        pin: true
    }
});
tl2
.to("#img",{
    opacity: 1,
    stagger: .3,
    ease: Power3
}, "a")
.to("#img",{
    opacity: 0,
    stagger: .3,
    ease: Power3
}, "a")
.to("#four h1 span",{
    y: -40,
    stagger: .3,
    ease: Power3
}, "a")
.to("#four h1 span",{
    y: "0",
    stagger: .3,
    ease: Power3
}, "a")

// ***************************** LINKS ********************************************
document.querySelectorAll("#topf h4").forEach(function(link){
    link.addEventListener("mouseover", function(dets){
        gsap.to(".imgbox", {
            x: dets.target.dataset.index * -100 + "%",
            duration: 1.5,
            ease: "expo"
        })
    })
})

// ***************************** HIDDEN MANU LINKS ********************************************
document.querySelectorAll(".tags h1").forEach(function(tag){
    tag.addEventListener("mouseover", function(dets){
        gsap.to(".tagimgs", {
            x: dets.target.dataset.shift * -100 + "%",
            duration: 2,
            ease: "expo"
        })
    })
})

// ***************************** HIDDEN MENU ********************************************
document.querySelector("#nav i").addEventListener("click", function(){
    document.querySelector("#hidmenu").style.bottom = "0%";
})
document.querySelector("#hidmenu i").addEventListener("click", function(){
    document.querySelector("#hidmenu").style.bottom = "100vh";
})

// ***************************** PROGRESS BAR ********************************************
ScrollTrigger.create({
    onUpdate: function (dets){
        gsap.to("#main #progress", {
            width: Math.floor(dets.progress * 100)+"%",
            ease: "power3.easeInOut"
        })
    }
})


