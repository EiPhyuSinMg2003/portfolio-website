const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "React Native", level: 95 },
  { name: "Flutter", level: 70 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 75 },
  { name: "MongoDB", level: 63 },
  { name: "PostgreSQL", level: 70 },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className=" py-12 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-left text-glow">
          My
          <span className="px-4 opacity-0 animate-fade-in-delay-2 text-primary">
            Skills
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-2 rounded-lg shadow-md card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "% " }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
