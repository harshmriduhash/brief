export const animationIntention = (gsap, webSection, maxWidth) => {
  const animation = (state = false) => {
    if (state) {
      /* gsap
        .from(".subtitle-text--tech", {
          opacity: 0,
          y: 20,
          ease: "expo.out",
          duration: 3,
          stagger: 0.8,
        })
        .yoyo(true)
        .repeat(-1)
        .timeScale(1.5)
        .play(0.3); */
      gsap
        .from(".lever", {
          rotation: "-30deg",
          transformOrigin: "bottom bottom",
          ease: "expo.out",
          duration: 3,
          stagger: 0.8,
        })
        .yoyo(true)
        .repeat(-1)
        .timeScale(1.2)
        .play(0.2);

      gsap
        .from(".web-particles", {
          opacity: 0.2,
          y: 60,
          ease: "expo.out",
          duration: 3,
          stagger: 0.8,
        })
        .yoyo(true)
        .repeat(-1)
        .timeScale(1.5)
        .play(0.3);

      gsap
        .from(".web-rocket", {
          y: 15,
          opacity: 0.9,
          ease: "expo.out",
          duration: 1.2,
          stagger: 0.4,
        })
        .yoyo(true)
        .repeat(-1)
        .timeScale(1.5)
        .play(0.3);
    } else {
      return false;
    }
  };

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
          animation(true);
        },
        onLeave: () => {
          animation(false);
        },
      },
    })
    .from("#line-street--intention", {
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    })
    .from(".intention-city", {
      y: 80,
      opacity: 0,
      ease: "expo.out",
      duration: 2,
    })
    .from(".text-animation--intentions", {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.3,
      stagger: 0.3,
    })
    .from(".subtitle-text--tech", {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.3,
    })
    .from(".web-laboratory-elements", {
      y: 40,
      opacity: 0,
      ease: "expo.out",
      duration: 1.2,
      stagger: 0.4,
    });
};
