//components
import BuildingWebCity from "../components/svg/BuildingWebCity";
import StreetLine from "../components/StreetLine";

const BuildingWebSection = () => {
  return (
    <section className="section web-section flex-shrink-0 vw-100 vh-100 d-flex">
      <BuildingWebCity />
      <div className="m-title">
        <h2 className="section-title text-animation--web text-primary">
          ABOUT ME
        </h2>
        <p className="section-paragraph dark-text text-animation--web">
          I am a Software Developer. I love building webapps, scale a product. 
          I have a degree in computer science. I like the
          collaborative learning .Actually, I use the technology to learn and
          build cool projects.{" "}
        </p>
      </div>

      <h2 className="build-text text-primary subtitle-text slides-text">
        <span className="p-absolute  slide-text">BUILD WEBAPPS</span>
        <span className="p-absolute  slide-text">Learn & Build</span>
      </h2>

      {/* <h2 className="build-text text-primary">BUILD WEBAPPS</h2>
            <h2 className="build-text text-primary">Learn & Build</h2> */}
      <StreetLine id={"line-street--web-city"} />
    </section>
  );
};

export default BuildingWebSection;
