

const animations = {
    home:()=>{
        //HOME
    const properties = {
        opacity: 0,
        ease: "expo.out",
        duration: 1,
      }
      var tl = gsap.timeline();
      tl.from('.home-items--character', {
        y: 350,
        opacity: 0,
        ease: "expo.out",
        duration: 1.5,
  
  
      })
        .from('.text-animation', {
          y: 350,
          opacity: 0,
          ease: "expo.out",
          duration: 1.2,
          stagger: .3,
  
  
        }, "-=.2")
        .from('.social-item', {
          y: 150,
          opacity: 0,
          ease: "expo.out",
          duration: 1,
          stagger: .4
        }).to('.text-front', {
          y: 20,
          opacity: 0,
          ease: "expo.out",
          duration: 1,
        })
        .from('.text-back', {
          y: 20,
          opacity: 0,
          ease: "expo.out",
          duration: 1,
  
        })
        .from('.go-to-history', {
          x: 50,
          opacity: 0,
          ease: "expo.out",
          duration: 1,
  
        })
      gsap.timeline({
        scrollTrigger: {
          trigger: sct,
          start: "top top",
          end: "bottom 300",
          toggleClass: { targets: sct, className: "active" },
          scrub: 1,
          reverse: true,
          ease: "power3",
        }
      }).to('.home-items--character', {
        y: 200,
        opacity: 0,
        ease: "expo.out",
        duration: 1.5,
  
      }).to('.text-animation', {
        y: 200,
        opacity: 0,
        ease: "expo.out",
        duration: 1.2,
  
      })
        .to('.go-to-history', {
          x: -50,
          opacity: 0,
          ease: "expo.out",
          duration: 1,
  
        })
  
  
    }
}