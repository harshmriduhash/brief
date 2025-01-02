
//components
import LaboratoryCity from "../components/svg/LaboratoryCity"
import StreetLine from "../components/StreetLine"
import TechItem from "../components/Techs/TechItem"
import Icons from "../components/Icons";

import Carousel from 'react-multi-carousel';
import { CustomDot, responsive, CustomRightArrow, CustomLeftArrow } from '../components/Carousel/Tools'
import { iconsTech } from "../components/utils/IconsTech";

const IntentionsSection = () => {
    const superLargeDesktop = { items: 3 }
    const desktop = { items: 3 }
    const responsiveConfig = responsive(desktop, superLargeDesktop)
    return (

        <section className="section intention-web-section flex-shrink-0 vw-100 vh-100 d-flex   ">
            <LaboratoryCity />
            <div className="m-title">
                <h2 className="section-title text-primary text-animation--intentions">INTENTIONS</h2>
                <p className="section-paragraph dark-text text-animation--intentions">In addition to contribute with my knowledge and learn in this web development journey.
                    I want to transform innovative ideas in products that generate impact in the people by moderns technologies
                </p>

            </div>
            <h2 className=" subtitle-text subtitle-text--tech tech-text text-primary">TECHNOLOGIES</h2>
            <div className="tech-carousel-box web-laboratory-elements">
                <Carousel infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    itemClass="tech-carousel-item " showDots={false} className="h-100 w-100 " responsive={responsiveConfig} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
                    {
                        iconsTech.map((item, key) => (

                            <TechItem key={key} icon={item.icon} />

                        ))
                    }
                </Carousel>

            </div>
            <StreetLine id={"line-street--intention"} />
        </section>
    )

}

export default IntentionsSection