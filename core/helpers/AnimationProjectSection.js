export const AnimationProjectSection = (gsap, webSection, maxWidth) => {
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
          //animation(true);
        },
        onLeave: () => {
          //animation(false);
        },
      },
    })
    .from("#line-street--project", {
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    })
    .from(".project-city", {
      y: 80,
      opacity: 0,
      ease: "expo.out",
      duration: 2,
    })
    .from(".text-animation--project", {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 1.3,
      stagger: 0.3,
    })
    .from(".project-card", {
      y: 30,
      opacity: 0,
      ease: "expo.out",
      duration: 1.3,
      stagger: 0.3,
    });
};
