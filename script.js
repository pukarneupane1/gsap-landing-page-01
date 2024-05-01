gsap.from("#img1",{
    opacity : 0,
    delay:0.4,
    duration:1,
    y:60
})
gsap.from("#img2",{
    opacity : 0,
    delay:0.4,
    duration:1,
    x:60
})
gsap.from("#img3",{
    opacity : 0,
    delay:0.4,
    duration:1,
    y: -60
})
gsap.from("#main h1",{
    opacity : 0,
    delay:0.4,
    duration:1
})

gsap.from("#page3 h5, #page3 h1, #about-us",{
    opacity: 0,
    stagger: 0.6,
    scrollTrigger: {
        trigger: "#page3 h5",
        scroller: "body",
        start: "top 60%",
    }
})