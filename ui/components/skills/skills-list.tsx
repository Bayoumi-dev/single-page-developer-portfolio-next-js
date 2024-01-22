const skillsList: { name: String; experience: String }[] = [
  { name: "HTML", experience: "4 Years Experience" },
  { name: "CSS", experience: "4 Years Experience" },
  { name: "Javascript", experience: "4 Years Experience" },
  { name: "Accessibility", experience: "4 Years Experience" },
  { name: "React", experience: "3 Years Experience" },
  { name: "Sass", experience: "3 Years Experience" },
];

export default function SkillsList() {
  return (
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
  );
}
