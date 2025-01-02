import { useEffect, useLayoutEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//sections
import HomeSection from "../core/sections/HomeSection";
import BuildingWebSection from "../core/sections/BuildingWebSection";
import IntentionsSection from "../core/sections/IntentionsSection";
import ProjectSection from "../core/sections/ProjectSection";
import ContactSection from "../core/sections/ContactSection";

//components
import BicyCharacter from "../core/components/svg/BicyCharacter";

//animations
import { animationWebCity } from "../core/helpers/AnimationWebCity";
import { animationIntention } from "../core/helpers/AnimationIntentions";
import { AnimationProjectSection } from "../core/helpers/AnimationProjectSection";
import { animationContactSection } from "../core/helpers/AnimationContactSection";

export default function Home() {
  const [responsiveContent, setResponsiveContent] = useState(false)
  useEffect(() => {

    const sections = gsap.utils.toArray("section");
    const contactSection = document.querySelector(".contact-section");
    const character = gsap.utils.toArray(".character-bicy");
    const bikeomatic = document.querySelector(".bikeomatic");
    const sct = document.querySelector('.home-section')

    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: false,
      },
    });
    /* 
        sections.forEach((sct, i) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: sct,
              start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
              end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
              toggleClass: { targets: sct, className: "active" },
              scrub: 1,
              reverse: true,
              ease: "power3",
            }
          })
            .from('.section-title', {
              y: 300,
              opacity: 0,
              ease: "expo.out",
              duration: 1.8,
            })
    
        }); */

    /* gsap.timeline({
      scrollTrigger: {
        trigger: sct,
        start: () => 'right right-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" },
        scrub: 1,
        reverse: true,
        ease: "power3",
      }
    }) */

    //HOME
    const properties = {
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    }
    var tl = gsap.timeline();
    document.body.style.overflow = 'hidden'
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
        onComplete: () => {
          document.body.style.overflowY = 'visible'
        }

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
    })
      .to('.go-to-history', {
        x: -50,
        opacity: 0,
        ease: "expo.out",
        duration: 1,

      }).to('.home-items--character', {
        y: 200,
        opacity: 0,
        ease: "expo.out",
        duration: 1.5,

      }).to('.text-animation', {
        y: 200,
        opacity: 0,
        ease: "expo.out",
        duration: 1.5,

      })
      .from(character, {
        y: 50,
        opacity: 0,
        ease: "expo.out",
        duration: 2,

      })

    //WEB_SECTION
    const webSection = document.querySelector('.web-section')
    animationWebCity(gsap, webSection, maxWidth)

    //INTENTIONS_SECTION
    const intentionSection = document.querySelector('.intention-web-section')
    animationIntention(gsap, intentionSection, maxWidth)

    //ANIMATION PROJECT_SECTION
    const projectSection = document.querySelector('.project-section')
    AnimationProjectSection(gsap, projectSection, maxWidth)

    //ANIMATION CONTACT_CITY

    animationContactSection(gsap, contactSection, maxWidth)


    gsap.to(character, {
      x: () => `${bikeomatic.offsetLeft}`,
      scrollTrigger: {
        scrub: 1,
        reverse: true,
        end: () => `+=${contactSection.offsetLeft + window.innerWidth * 0.5}`,
        invalidateOnRefresh: true,
      },
    });



  }, []);
  return (
    <div className="wrapper d-flex flex-nowrap">

      <div className="wrapper d-flex flex-nowrap">

        <HomeSection />
        <BuildingWebSection />
        <IntentionsSection />
        <ProjectSection />
        <ContactSection />
      </div>

      {/* <div className="center-marker"></div> */}

      <BicyCharacter />


    </div>
  );
}
