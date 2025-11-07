import { Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-12 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate AI Engineer</h3>

            <p className="text-muted-foreground">
              Lulusan Matematika dari Universitas Pendidikan Indonesia dengan
              fokus yang kuat pada Kecerdasan Buatan (AI). Saya berdedikasi
              untuk membangun solusi cerdas berbasis data yang dapat mengatasi
              tantangan dunia nyata. Bersemangat dalam mengembangkan sistem
              kecerdasan buatan yang mampu memecahkan masalah nyata, saya
              memiliki keahlian dalam Machine Learning, Deep Learning, Natural
              Language Processing (NLP), Large Language Models (LLM), serta
              Computer Vision.
            </p>

            <p className="text-muted-foreground">
              Terbiasa bekerja dengan pipeline data, mulai dari pengumpulan,
              pembersihan, pemodelan, evaluasi, hingga deployment model ke
              lingkungan produksi. Selain itu, saya memahami aspek MLOps seperti
              monitoring performa model, dan integrasi CI/CD untuk memastikan
              model tetap andal. Saya berkomitmen untuk terus belajar,
              beradaptasi, dan menerapkan perkembangan teknologi terbaru guna
              menghadirkan solusi yang relevan, efektif, dan berdampak di era
              digital yang dinamis saat ini.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> AI Engineer</h4>
                  <p className="text-muted-foreground">
                    Mengumpulkan dan membersihkan data, serta mengembangkan
                    model berbasis data menggunakan kerangka kerja AI/ML modern.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Scientist</h4>
                  <p className="text-muted-foreground">
                    Memproses dan menganalisis data, mengembangkan dashboard,
                    serta menyajikan insight yang dapat ditindaklanjuti untuk
                    mendukung pengambilan keputusan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
