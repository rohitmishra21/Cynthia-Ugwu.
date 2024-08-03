const scroll = new LocomotiveScroll({
  el: document.querySelector(".body"),
  smooth: true,
});

function mouseMove( xscale,  yscale) {
  window.addEventListener("mousemove", function (detal) {
  document.querySelector(".circle").style.transform = `translate(${detal.clientX}px,${detal.clientY}px) scale(${xscale}, ${yscale})`;
 
  });
}

function firstpageanimi() {
  var ti = gsap.timeline();

  ti.from(".nav", {
    y: "-10",
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
    delay: 0.1,
  })
  .to(".animi",{
    y: "0",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.2,
    delay: -1,
  });
  
}


let timeout ;

function circleChapataKaro() {

  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove",function (dets) {
    
    clearTimeout(timeout)
     
    xscale = gsap.utils.clamp(.8, 1.2,dets.clientX - xprev )
    yscale= gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)
    
      
      xprev = dets.clientX ;
      yprev = dets.clientY ;

     mouseMove(xscale,yscale)
     timeout= setInterval(() => {
       
       document.querySelector(".circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
    
    });

timeout
}




document.querySelectorAll(".elem").forEach(function (elem) {

  let rotate = 0

let diffrot = 0;

   elem.addEventListener("mousemove",function(detals){

   let diff =  detals.clientY - elem.getBoundingClientRect().bottom.top;

   diffrot = detals.clientX - rotate

   rotate = detals.clientX ;

  

      gsap.to(elem.querySelector("img"),{
        opacity:96,
        ease: Power2,
        top:diff,
        left:detals.clientX,
        rotate: gsap.utils.clamp(-20,20,diffrot)
      })
    })

    elem.addEventListener("mouseleave",(detals) =>{
      gsap.to(elem.querySelector("img"),{
         opacity:0,
         ease: Power1,
         duration:.5,
        
       })
     })
     gsap.to(".right",{
      y:0,
      
     })
})




mouseMove();
firstpageanimi();
// lastpageanimi();
circleChapataKaro();
