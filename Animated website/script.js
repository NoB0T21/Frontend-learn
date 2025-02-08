var cur = document.querySelector("#cursor");
var curblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets) {
    cur.animate({
        left: dets.x + "px",
        top: dets.y + "px"
    },{duration: 1500, fill: "forwards"})
    curblur.animate({
        left: dets.x + "px",
        top: dets.y + "px"
    },{duration: 3000, fill: "forwards"})
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:'110px',
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -10%",
        scrub:1,
    }
})

gsap.to('#main',{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:1,
    }
})


gsap.to(".colum1",{
    left: '15%',
    top: '10%',
    duration:1,
    scrollTrigger:{
        trigger:".colum1",
        scroller:"body",
        start:"top 95%",
        end:"top 95%",
        scrub:2,
    }
})
gsap.to(".colum2",{
    right: '15%',
    bottom: '10%',
    duration:1,
    scrollTrigger:{
        trigger:".colum2",
        scroller:"body",
        start:"top 99%",
        end:"top 99%",
        scrub:2,
    }
})