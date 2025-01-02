import ProjectCity from "../components/svg/ProjectCity";
import StreetLine from "../components/StreetLine";
import ProjectCard from "../components/Projects/ProjectCard";
import Icons from "../components/Icons";

//data

const projectData = [
  {
    name: "Sony wireless Control",
    description:
      "Section landing page section about how to use the sony interactive control  for Play 4",
    link: "https://sony-wireless-control-ui.vercel.app/",
    type: "PERSONAL",
    techs: [{ icon: "js" }, { icon: "css" }, { icon: "react" }, ,],
  },
  {
    name: "STUDYROOMS-UI",
    description:
      "Online training platform for TIC professionals In this moment this proyect only aviable for desktop-device",
    link: "https://github.com/anuidev8/studyrooms-ui",
    type: "PERSONAL",
    techs: [{ icon: "react" }, { icon: "css" }],
  },
  {
    name: "Tablero de noticias ",
    description: "Is a pwa for shared information by group boards",
    link: "https://github.com/anuidev8/Tablero-de-noticias",
    type: "PERSONAL",
    techs: [
      { icon: "react" },
      { icon: "nextjs" },
      { icon: "node" },
      { icon: "mongoDb" },
    ],
  },
  {
    name: "Algorithm OVA(Virtual Object Learning)",
    description:
      "The object of this OVA is to teach about how an algorithm works , using interactive elements as games. This project is not finished yet, it is in development mode.",
    link: "http://186.43.32.120/algorytmy/",
    type: "PERSONAL",
    techs: [{ icon: "react" }, { icon: "css" }, { icon: "svg" }],
  },
];

const ProjectSection = () => {
  return (
    <section className="section project-section flex-shrink-0 vw-100 vh-100 d-flex">
      <ProjectCity />
      <div className="project-container w-100">
        <h2 className="section-title section-title--project text-animation--project text-primary">
          PROJECTS WORKED{" "}
        </h2>
        <div className="m-title--project w-100">
          <div className="projects-box-container">
            <div className="projects-box">
              {projectData.map((item, key) => (
                <ProjectCard key={key} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <StreetLine id={"line-street--project"} />
    </section>
  );
};

export default ProjectSection;
