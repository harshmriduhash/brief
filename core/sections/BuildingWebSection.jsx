
//components
import BuildingWebCity from "../components/svg/BuildingWebCity"
import StreetLine from "../components/StreetLine"

const BuildingWebSection = () => {

    return (
        <section className="section web-section flex-shrink-0 vw-100 vh-100 d-flex">
            <BuildingWebCity />
            <div className="m-title">
                <h2 className="section-title text-animation--web text-primary">ABOUT ME</h2>
                <p className="section-paragraph dark-text text-animation--web">I am a FrontEnd developer. I love the web animations, design and interfaces. I have a degree in computer science. I like the collaborative  learning .Actually, I use the technology to teach and build learning spaces. </p>

            </div>

            <h2 className="build-text text-primary subtitle-text slides-text">
                <span className="p-absolute  slide-text">DESIGN WEBAPPS</span>
                <span className="p-absolute  slide-text">BUILD WEBAPPS</span>
                <span className="p-absolute  slide-text">ANIMATE WEBAPPS</span>
            </h2>


            {/* <h2 className="build-text text-primary">BUILD WEBAPPS</h2>
            <h2 className="build-text text-primary">ANIMATE WEBAPPS</h2> */}
            <StreetLine id={"line-street--web-city"} />
        </section>
    )

}

export default BuildingWebSection