//components
import MainCharacter from "../components/svg/MainCharacter";
import SocialMedias from "../components/SocialsMedias/Index";
import Icons from "../components/Icons";

const HomeSection = () => {
  return (
    <section className="section home-section flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="home-wrapper w-100 h-100">
        <div className="home-items home-items--character">
          <MainCharacter />
        </div>
        <div className="home-items home-items--text p-relative  h-100 d-flex justify-content-center  flex-column">
          <h1 className="main-title text-animation">HI, I AM Harsh</h1>
          <p className="dark-text main-paragraph text-animation p-relative">
            <span className="text-front p-absolute">
              FRONTEND DEVELOPER AND I LIKE BUILD WebApps
            </span>
            <span className="text-back p-absolute">
              AND THIS IS MY HISTORY FOLLOW ME
            </span>
          </p>

          <aside>
            <SocialMedias className={"text-animation"} spacing={true} />
          </aside>
          <figure className="text-primary p-absolute go-to-history go-to-history--right d-flex">
            <Icons.Arrow size="10rem" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
