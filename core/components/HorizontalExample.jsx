import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    /* const sections = gsap.utils.toArray("section");
    const character = gsap.utils.toArray(".character");
    const characterBike = document.querySelector(".character-bike");
    const bikeomatic = document.querySelector(".bikeomatic");
 
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
        invalidateOnRefresh: true,
      },
    });
 
    gsap.to(character, {
      x: () => bikeomatic.offsetLeft,
      ease: "none",
      scrollTrigger: {
        scrub: true,
        end: () => `+=${bikeomatic.offsetLeft + window.innerWidth * 0.5}`,
        invalidateOnRefresh: true,
      },
    });
 
    gsap.to(characterBike, {
      x: () =>
        `+=${maxWidth - bikeomatic.offsetLeft - window.innerWidth * 0.5}`,
      ease: "none",
      scrollTrigger: {
        scrub: true,
        markers: true,
        start: () => `+=${bikeomatic.offsetLeft + window.innerWidth * 0.5}`,
        invalidateOnRefresh: true,
      },
    }); */

    const sections = gsap.utils.toArray("section");
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
        invalidateOnRefresh: true,
      },
    });

    sections.forEach((sct, i) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () =>
          "top top-=" +
          (sct.offsetLeft - window.innerWidth / 2) *
          (maxWidth / (maxWidth - window.innerWidth)),
        end: () =>
          "+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" },
      });
    });
  }, []);
  return (
    <div className="wrapper d-flex flex-nowrap">
      <div class="wrapper d-flex flex-nowrap">
        <section class="section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
          Part One
        </section>
        <section class="section section--dark section--small vh-100 flex-shrink-0 d-flex justify-content-center align-items-center">
          Part Two
        </section>
        <section class="section section--small vh-100 flex-shrink-0 d-flex justify-content-center align-items-center">
          Part Three
        </section>
        <section class="section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
          Part Four
        </section>
      </div>

      <div class="center-marker"></div>

      {/*   <section
        id="route"
        className="section section--story section--small vh-100 flex-shrink-0 d-flex justify-content-center align-items-center"
      >
        <div className="clouds">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/clouds.png"
            className="d-block h-100"
          />
        </div>
        <img
          src="https://enekodev.s3.eu-west-3.amazonaws.com/img/bg.png"
          className="d-block h-100"
        />
        <div className="totoro">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/totoro-ojos.gif"
            className="d-block h-100"
          />
        </div>
        <div className="trash">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/trash.gif"
            className="d-block h-100"
          />
        </div>
        <div className="chicapelo">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/chica_pelo.gif"
            className="d-block h-100"
          />
        </div>
        <div className="smellyoyster">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/smellyoyster.png"
            className="d-block h-100"
          />
        </div>
        <div className="advert">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/addd.png"
            className="d-block h-100"
          />
        </div>
        <div className="character">
          <div className="character-container">
            <img
              src="https://enekodev.s3.eu-west-3.amazonaws.com/img/car.png"
              className="d-block h-100"
            />
          </div>
        </div>
        <div className="character-bike">
          <div className="character-container">
            <img
              src="https://enekodev.s3.eu-west-3.amazonaws.com/img/car.png"
              className="d-block h-100"
            />
          </div>
        </div>
        <div className="farola">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/farola.png"
            className="d-block h-100"
          />
        </div>
        <div className="bikeomatic">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/bikeomatic.png"
            className="d-block h-100"
          />
        </div>

        <div className="adman">
          <img
            src="https://enekodev.s3.eu-west-3.amazonaws.com/img/adman.png"
            className="d-block h-100"
          />
        </div>
      </section> */}
    </div>
  );
}
