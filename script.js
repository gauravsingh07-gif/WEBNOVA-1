var tl = gsap.timeline();
tl.from("#loader h1",{
    x:-1200,
    delay:0.5,
    duration:1.5,
    stagger:0.5
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    y:-1500,
    duration:0.7,
    opacity:0,
    delay:0.25,
    ease:Power4
})