import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "HiTeman",
    description: "Aplikasi untuk menghilangkan emosi negatif",
    image: "/projects/project12.png",
    tags: ["Hugging Face", "Distilbert", "NLP"],
    githubUrl: "https://github.com/Sidqiamn",
  },
  {
    id: 2,
    title: "Penyelesaian Masalah di Institusi Pendidikan",
    description: "Mengidentifikasi siswa yang berisiko untuk putus sekolah",
    image: "/projects/streamlit1.png",
    tags: ["Metabase", "Streamlit", "RF"],
    githubUrl: "https://github.com/Sidqiamn",
  },
  {
    id: 3,
    title: "Deteksi Helm",
    description: "Mendeteksi apakah seseorang menggunakan helm atau tidak",
    image: "/projects/val_batch1_pred.jpg",
    tags: ["Computer Vision", "Yolov11"],
    githubUrl: "https://github.com/Sidqiamn",
  },
  {
    id: 4,
    title: "Analisis Sentimen Aplikasi Mobile Legends",
    description:
      "Analisis sentimen untuk kategori positif, negatif, dan netral, serta membangun model Machine Learning dan Deep Learning.",
    image: "/projects/mobile legends.jpg",
    tags: ["GRU", "Keras", "Tensor Flow"],
    githubUrl: "https://github.com/Sidqiamn",
  },
  {
    id: 5,
    title: "Sistem Monitoring",
    description:
      "Membangun sistem machine learning yang andal dan siap produksi mencakup seluruh pipeline — mulai dari pengumpulan data, pelatihan model, pelacakan metadata, hingga deployment dan monitoring aktif.",
    image: "/projects/iris.jpg",
    tags: ["Grafana", "Docker", "ML Flow"],
    githubUrl: "https://github.com/Sidqiamn",
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
          Berikut adalah beberapa proyek terbaru saya. Dibuat Dengan akurasi
          tinggi dan detail yang baik.
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
