const scroll = new LocomotiveScroll({
    el: document.querySelector('.body'),
    smooth: true
});


function mouseMove() {
    window.addEventListener("mousemove",function (detal) {
        document.querySelector(".circle").style.transform = `translate(${detal.clientX}px,${detal.clientY}px)`
        console.log(detal)
    })
}

function firstpageanimi() {
    var ti = gsap.timeline()

    ti.from(".nav" ,{
        y:'-10',
        opacity:0,
        ease: Expo.easeInOut,
        duration:1.5,
    })
    
      .to(".animi" ,{
                y:'0',
                 ease: Expo.easeInOut,
                duration:2,
                stagger:.2,
   })
    
}

mouseMove()
firstpageanimi()