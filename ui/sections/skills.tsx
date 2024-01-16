const skillsList: { name: String; experience: String }[] = [
  { name: "HTML", experience: "4 Years Experience" },
  { name: "CSS", experience: "4 Years Experience" },
  { name: "Javascript", experience: "4 Years Experience" },
  { name: "Accessibility", experience: "4 Years Experience" },
  { name: "React", experience: "3 Years Experience" },
  { name: "Sass", experience: "3 Years Experience" },
];

export default function SkillsSection() {
  return (
    <section className="skills relative">
      <div className="decor absolute top-0 left-1/2 -translate-x-1/2 -z-1 w-full max-[1920px] h-full" />
      <div className="container py-10 md:pt-13 md:pb-0 xl:pt-18 border-t border-white">
        <h2 className="absolute opacity-0 -z-10">Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-y-15 text-center md:text-left">
          {skillsList.map((skill, i) => (
            <li key={i}>
              <span className="text-[2rem] font-bold leading-[1.1667] tracking-tight text-white md:text-5xl">
                {skill.name}
              </span>
              <span className="block text-base font-medium leading-6 md:text-lg md:mt-[0.875rem]">
                {skill.experience}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
