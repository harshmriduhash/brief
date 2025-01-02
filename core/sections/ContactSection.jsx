import ContactCity from "../components/svg/ContactCity";
import StreetLine from "../components/StreetLine";
import SocialMedias from "../components/SocialsMedias/Index";

const ContactSection = () => {
  return (
    <section className="section contact-section flex-shrink-0 vw-100 vh-100 d-flex">
      <ContactCity />
      <div className="contact-container w-100 h-100">
        <div className="phrases-container w-100 h-100 d-flex justify-content-center text-animation--contact">
          <h2 className="phrases-title text-primary">
            <b>
              {" "}
              WHAT WOULD YOU LIKE <br /> TO START NOW?{" "}
            </b>{" "}
          </h2>
          <div className="bikeomatic p-absolute"></div>
        </div>
        <div className="contact-items d-flex flex-column justify-content-end align-items-center w-100 h-100 ">
          <footer>
            <SocialMedias className={"text-animation--social"} />
            <h3 className="footer-title text-animation--social">
              Build by Harsh Mriduhash 2025 🚀{" "}
            </h3>
          </footer>
        </div>
      </div>
      <StreetLine id={"line-street--contact"} />
    </section>
  );
};

export default ContactSection;
