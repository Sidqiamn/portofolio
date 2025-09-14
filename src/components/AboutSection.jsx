import { Briefcase, Code, User } from "lucide-react";

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
              A Mathematics graduate from the Indonesia University of Education
              with a strong focus on Artificial Intelligence (AI). I am
              dedicated to building intelligent, data-driven solutions that
              tackle real-world challenges.
            </p>

            <p className="text-muted-foreground">
              Passionate about turning complex data into innovative and
              impactful AI systems, I bring expertise in machine learning, deep
              learning, and data modeling. I am committed to continuously
              sharpening my skills and staying at the forefront of technological
              advancements to deliver meaningful solutions in today’s dynamic
              digital landscape.
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
                    Collecting and cleaning data, and developing data-driven
                    models using modern AI/ML frameworks.
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
                    Processing and analyzing data, developing dashboards, and
                    delivering actionable insights to support decision-making
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineer</h4>
                  <p className="text-muted-foreground">
                    Scraping and collecting data from websites, applications,
                    and various sources to build reliable data pipelines
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
