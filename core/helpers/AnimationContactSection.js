export const animationContactSection = (gsap, webSection, maxWidth) => {
  const animation = (state = false) => {
    if (state) {
      gsap
        .from(".could", {
          y: 20,
          opacity: 0.3,
          ease: "expo.out",
          duration: 2,
          stagger: 0.3,
        })

        .yoyo(true)
        .repeat(-1)
        .timeScale(1.5)
        .play(0.3);

      gsap
        .from(".tree", {
          transformOrigin: "bottom bottom",
          rotation: 15,
          opacity: 0.3,
          ease: "expo.out",
          duration: 2,
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
    .from("#line-street--contact", {
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    })
    .from(".contact-city", {
      y: 80,
      opacity: 0,
      ease: "expo.out",
      duration: 2,
    })
    .from(".text-animation--contact", {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.3,
      stagger: 0.3,
    })
    .from(".text-animation--social", {
      y: 40,
      opacity: 0,
      ease: "expo.out",
      duration: 1.5,
    });
};
