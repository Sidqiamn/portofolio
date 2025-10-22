import { ArrowDown } from "lucide-react";
import Lottie from "lottie-react";
// import file Lottie kamu, misal "starAnimation.json"
import starAnimation from "../animation/birds.json"; // sesuaikan path
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, Saya</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sidqi
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Amanullah
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Saya membangun solusi cerdas berbasis kecerdasan buatan yang dapat
            mengubah data menjadi inovasi nyata. Sebagai seorang AI Engineer,
            saya berfokus pada pengembangan model dan sistem AI yang efektif,
            terukur, dan memiliki dampak langsung terhadap kebutuhan pengguna.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
      {/* Lottie Animation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Lottie animationData={starAnimation} loop={true} />
      </div>
    </section>
  );
};
