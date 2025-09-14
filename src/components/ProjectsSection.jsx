import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "HiTeman",
    description: "An application to eliminate negative emotions",
    image: "/projects/project12.png",
    tags: ["Hugging Face", "Distilbert", "NLP"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Resolving Issues in Educational Institutions",
    description: "identifying students at risk of dropping out ",
    image: "/projects/streamlit1.png",
    tags: ["Metabase", "Streamlit", "RF"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Helmet Detection",
    description: "Detecting whether a person is wearing a helmet or not",
    image: "/projects/val_batch1_pred.jpg",
    tags: ["Computer Vision", "Yolov11"],
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Sentiment Analysis of Mobile Legends App",
    description:
      "Sentiment analysis of positive, negative, and neutral categories, along with building Machine Learning and Deep Learning models.",
    image: "/projects/mobile legends.jpg",
    tags: ["GRU", "Keras", "Tensor Flow"],
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Sistem Monitoring",
    description:
      "Building a reliable, production-ready machine learning system involves the complete pipeline—from data collection and model training to metadata tracking, deployment, and active monitoring.",
    image: "/projects/iris.jpg",
    tags: ["Grafana", "Docker", "ML Flow"],
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section data-aos="zoom-out" id="projects" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* ini bagian bawah, otomatis turun ke bawah karena pakai flex-1 di atas */}
                <div
                  id="Bottom"
                  className="flex justify-between items-center mt-auto"
                >
                  <div className="flex space-x-3">
                    {project.id === 5 ? (
                      <Link
                        to={`/projectsistemML`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    ) : project.id === 1 ? (
                      <Link
                        to={`/hiTeman`} // misal route khusus untuk id 1
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    ) : (
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
