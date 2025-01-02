export const animationWebCity = (gsap, webSection, maxWidth) => {
  const webTlSq = gsap.timeline();
  const webTlCursor = gsap.timeline();
  const webTlParticles = gsap.timeline();
  const webTlTitle = gsap.timeline();

  const animations = (state = false) => {
    if (state) {
      var vsOpts = {
        slides: document.querySelectorAll(".slide-text"),
        list: document.querySelector(".slides-text"),
        duration: 0.3,
        lineHeight: 50,
      };

      var vSlide = gsap.timeline({
        paused: true,
        repeat: -1,
      });

      vsOpts.slides.forEach(function (slide, i) {
        // Move each letter

        let tween = gsap.from(slide, {
          duration: vsOpts.duration,
          y: 50,
          repeat: 1,
          yoyo: true,
          stagger: vsOpts.duration / 10,
          repeatDelay: 1,
        });

        vSlide.add(tween);
      });
      vSlide.play();

      webTlSq
        .from(".computer-sq", {
          opacity: 0,
          x: 20,
          ease: "expo.out",
          duration: 1.5,
          stagger: 0.3,
        })
        .yoyo(true)
        .repeat(-1)
        .timeScale(1.5)
        .play(0.3);

      webTlCursor
        .from(".point-circle", {
          keyframes: {
            "0%": { y: 0 },
            "50%": { x: -50, y: 10 }, // finetune with individual eases
            "80%": { x: 60, y: 10 },
            "100%": { x: 0, y: 0 },
            easeEach: "expo.inOut", // ease between keyframes
          },
          ease: "expo.out", // ease the entire keyframe block
          duration: 6,
          stagger: 0.3,
        })
        .yoyo(true)
        .repeat(-1)
        .timeScale(1.5)
        .play(0.3);

      webTlParticles
        .from(".web-particles", {
          opacity: 0,
          y: 60,
          ease: "expo.out",
          duration: 3,
          stagger: 0.8,
        })
        .yoyo(true)
        .repeat(-1)
        .timeScale(1.5)
        .play(0.3);
    } else {
      return false;
    }
  };
  animations(true);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: webSection,
        start: () =>
          "top 700-=" +
          (webSection.offsetLeft - window.innerWidth / 2) *
            (maxWidth / (maxWidth - window.innerWidth)),
        end: () =>
          "+=" +
          webSection.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: webSection, className: "active" },
        scrub: true,
        reverse: true,
        ease: "power3",
        onEnter: () => {
          //animations(true);
        },
        onLeave: () => {
          //animations(false);
        },
      },
    })
    .from("#line-street--web-city", {
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    })
    .from(".building-web-city", {
      y: 80,
      opacity: 0,
      ease: "expo.out",
      duration: 2,
    })
    .from(".text-animation--web", {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.3,
      stagger: 0.3,
    })
    .from(".web-city-computer", {
      y: 40,
      rotation: 10,
      opacity: 0,
      ease: "bounce.out",
      duration: 1.3,
    })
    .from(".web-city-figure", {
      transformOrigin: "right right",
      scaleX: 0.2,
      duration: 1.5,
      yoyo: true,
      repeat: 5,
    });
};
