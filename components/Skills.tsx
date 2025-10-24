interface SkillCategory {
  title: string;
  skills: string[];
  isHighlight?: boolean;
}

interface SkillsProps {
  categories: SkillCategory[];
}

const SkillTag = ({ skill, isHighlight = false }: { skill: string; isHighlight?: boolean }) => (
  <span 
    className={`px-3 py-1 text-sm rounded-full backdrop-blur-sm font-medium ${
      isHighlight 
        ? 'bg-orange-300 text-gray-800' 
        : 'bg-white/30 text-gray-800'
    }`}
  >
    {skill}
  </span>
);

const Skills = ({ categories }: SkillsProps) => {
  return (
    <div className="space-y-6 bg-white/20 backdrop-blur-sm rounded-2xl p-8">
      <h2 className="text-3xl font-Mediasansextended tracking-wide">Skills</h2>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-gray-700 mb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag 
                  key={skill} 
                  skill={skill} 
                  isHighlight={category.isHighlight} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
