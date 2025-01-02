import { useEffect } from "react";
import { iconsTech } from "../utils/IconsTech";

const ProjectCard = ({ techs, name, description, link, type, companyName }) => {
  const returnIcon = (icon) => {
    const i = iconsTech.filter((ic) => ic.name == icon);
    return i[0].icon;
  };

  return (
    <>
      <article className="project-card p-relative ">
        <div className="project-card-wrapper ">
          <h2 className="text-primary project-card-title">{name}</h2>
          <p className="project-card-paragraph dark-text">{description}</p>
          <div className="tag-type">
            <h4 className="tag-type-title">
              {type == "PERSONAL"
                ? "personal project"
                : `Build for : ${companyName && companyName}`}
            </h4>
          </div>
          <div className="project-card-actions d-flex justify-content-center align-items-center">
            <div className="d-flex project-card-techs">
              {techs &&
                techs.map((icon, key) => (
                  <figure key={key} className="text-primary project-card-tech">
                    {returnIcon(icon.icon)}
                  </figure>
                ))}
            </div>
            <a href={link} target={"_blank"} className="btn-view dark-text">
              VIEW
            </a>
          </div>
        </div>
      </article>
      <style jsx>{`
        .project-card {
          cursor: pointer;
        }
        .project-card::before {
          content: "";
          position: absolute;
          transform: translate(-2%, 4%);
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: ${type == "PERSONAL" ? "#ffb81f" : "#1FDFFF"};
          border-radius: 0.4rem;
          z-index: 0;
          transition: transform 0.3s ease;
        }
        .project-card:hover::before {
          transform: translate(0%, 0%);
        }
        .project-card-wrapper {
          position: relative;

          height: 230px;
          background-color: white;
          border: 3px solid var(--primary-color);
          border-radius: 0.4rem;
          padding: 1.2rem;
          z-index: 100;
        }
        .project-card-title {
          font-size: 2.3rem;

          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
        .project-card-paragraph {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 1.6rem;
          margin-top: 1.2rem;
          font-weight: 400;
          padding: 0;
        }
        .project-card-techs {
          flex-grow: 1;
        }
        .project-card-tech {
          margin: 0;
          padding: 0;
          margin-right: 0.7rem;
        }
        .project-card-actions {
          margin-top: 5rem;
        }

        .btn-view {
          border-radius: 0.2rem;
          background-color: ${type == "PERSONAL" ? "#ffb81f" : "#1FDFFF"};
          padding: 0.4rem 2rem;
        }

        .tag-type {
          width: max-content;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.1rem 1.3rem;
          background-color: #e6e6e6;
          border-radius: 1rem;
          margin-top: 2rem;
        }
        .tag-type-title {
          font-size: 1.2rem;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
