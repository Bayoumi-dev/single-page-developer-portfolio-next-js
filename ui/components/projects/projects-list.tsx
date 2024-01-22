import Image from "next/image";

const projects: {
  name: String;
  skills: String[];
  src: String;
  previewLink: String;
  codeLink: String;
}[] = [
  {
    name: "Design portfolio",
    skills: ["HTML", "CSS"],
    src: "/assets/images/thumbnail-project-1-large.webp",
    previewLink:
      "https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo",
    codeLink: "https://github.com/",
  },
  {
    name: "E-learning Landing Page",
    skills: ["HTML", "CSS"],
    src: "/assets/images/thumbnail-project-2-large.webp",
    previewLink:
      "https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q",
    codeLink: "https://github.com/",
  },
  {
    name: "TODO Web App",
    skills: ["HTML", "CSS", "JavaScript"],
    src: "/assets/images/thumbnail-project-3-large.webp",
    previewLink: "https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW",
    codeLink: "https://github.com/",
  },
  {
    name: "Entertainment Web App",
    skills: ["HTML", "CSS", "JavaScript"],
    src: "/assets/images/thumbnail-project-4-large.webp",
    previewLink:
      "https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X",
    codeLink: "https://github.com/",
  },
  {
    name: "Memory Game",
    skills: ["HTML", "CSS", "JavaScript"],
    src: "/assets/images/thumbnail-project-5-large.webp",
    previewLink:
      "https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM",
    codeLink: "https://github.com/",
  },
  {
    name: "Art Gallery Showcase",
    skills: ["HTML", "CSS", "JavaScript"],
    src: "/assets/images/thumbnail-project-6-large.webp",
    previewLink:
      "https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6",
    codeLink: "https://github.com/",
  },
];

export default function ProjectsList() {
  return (
    <ol className="flex flex-row flex-wrap justify-center pt-10 gap-y-10 gap-x-5 md:pt-15 xl:pt-20 xl:gap-y-[4.375rem] 3xl:gap-x-15">
      {projects.map((project, i) => (
        <li key={i} className="relative">
          <div className="relative w-[21.375rem] h-[15.8125rem] xl:w-[33.75rem] xl:h-100 peer">
            <Image
              fill
              src={`${project.src}`}
              alt={`${project.name} image preview`}
              className="object-cover"
            />
          </div>
          <div className="">
            <h3 className="mt-6 mb-[0.625rem] uppercase">{project.name}</h3>
            <ul className="flex gap-x-5 uppercase xl:text-lg">
              {project.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          <div
            className="w-full flex mt-[0.625rem] gap-x-7 xl:absolute xl:top-0 xl:left-0 
                xl:flex-col xl:justify-center items-center xl:w-[33.75rem] xl:h-100 xl:mt-0 xl:gap-y-[2.375rem] 
               xl:bg-black/75 xl:invisible xl:opacity-0 xl:duration-300 xl:hover:visible xl:hover:opacity-100
                xl:peer-hover:visible xl:peer-hover:opacity-100"
          >
            <a
              href={`${project.previewLink}`}
              target="_blank"
              role="button"
              className="btn"
            >
              View Project
            </a>
            <a
              href={`${project.codeLink}`}
              target="_blank"
              role="button"
              className="btn"
            >
              View Code
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
