gsap.from("#div1 #h1",{
    opacity:0,
    duration:3,
    x:150,
    scrollTrigger:{
        trigger:"#div1 #h1",
        scroller:"body",
        start:"top 35%",
        scrub: 2,

    }
})
gsap.from("#div1 #h3", {
    opacity: 0,
    duration: 0.01,
    x:-150,
    scrollTrigger: {
        trigger: "#div1 #h3",
        scroller: "body",
        start: "top 60%",
        scrub: 2,
    }
})


gsap.from("body #nav", {
    duration: 1.5,
    y: -70,

})
gsap.from("#div1 #links", {
    opacity: 0,
    duration: 4,
    scrollTrigger:{
        trigger:"#div1 #links",
        scroller:"body",
        start:"top 70%",
        end:"top 3%",
        scrub: 2,
    }
})
gsap.from("main #main-img", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger:{
        trigger:"main #main-img",
        scroller:"body",
        start:"top -20%",
        end:"top 0%",
        scrub: 5,

    }
})
gsap.from("main #main-p1", {
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger:{
        trigger:"main #main-p1",
        scroller:"body",
        start:"top -20%",
        end:"top 1%",
        scrub: 5,
    }
})

gsap.from("body #footer", {
    duration: 2,
    y: 100,
    scrollTrigger:{
        trigger:"body",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub: 2,

    }
})

gsap.to("#well #cover", {
    duration: 2,
    transform:"TranslateX(130%)",
    scrollTrigger: {
        trigger: "#well",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin:true,
    }

})
