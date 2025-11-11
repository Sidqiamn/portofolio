import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "Phyton", category: "AI Engineer" },
  { name: "R", category: "AI Engineer" },
  { name: "Tensor Flow", category: "AI Engineer" },
  { name: "Hugging face", category: "AI Engineer" },
  { name: "RAG", category: "AI Engineer" },
  { name: "Grafana", category: "AI Engineer" },
  { name: "Scikit-learn", category: "AI Engineer" },
  { name: "PyTorch", category: "AI Engineer" },
  { name: "Computer Vision", category: "AI Engineer" },
  { name: "LLM", category: "AI Engineer" },
  { name: "NLP", category: "AI Engineer" },
  { name: "PyTorch", category: "AI Engineer" },
  { name: "Docker", category: "AI Engineer" },

  // Backend
  { name: "Metabase", category: "Data Scientist" },
  { name: "Power BI", category: "Data Scientist" },
  { name: "Tableau", category: "Data Scientist" },
  { name: "Seaborn", category: "Data Scientist" },
  { name: "GraphQL", category: "Data Scientist" },
];

const categories = ["all", "AI Engineer", "Data Scientist"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      data-aos="zoom-in"
      id="skills"
      className="py-12 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-center"
            >
              <h3 className="font-semibold text-lg text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
