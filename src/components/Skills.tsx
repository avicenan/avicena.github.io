import { skillCategories, getSkillLogo } from "../data/skills";

export function Skills() {
  // Get all skills from all categories
  const allSkills = skillCategories.flatMap((category) => category.skills);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">My technical expertise across various technologies, frameworks, and tools.</p>
        </div>

        {/* Unified Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {allSkills.map((skill) => {
            const logo = getSkillLogo(skill);

            return (
              <div key={skill} className="bg-muted backdrop-blur-md border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {logo.svg ? (
                      <img
                        src={logo.svg}
                        alt={`${skill} logo`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          // Fallback to emoji if SVG fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const emojiSpan = target.nextElementSibling as HTMLSpanElement;
                          if (emojiSpan) {
                            emojiSpan.style.display = "block";
                          }
                        }}
                      />
                    ) : null}
                    <span className={`text-3xl ${logo.svg ? "hidden" : "block"}`} style={{ display: logo.svg ? "none" : "block" }}>
                      {logo.emoji}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{skill}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
