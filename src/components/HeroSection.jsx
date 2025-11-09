import { ArrowBigDown, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-32 pb-24"
    >
      <div className="container max-w-4sxl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl  md:text-5xl font-bold leading-tight  ">
            <h1 className="opacity-0 animate-fade-in">
              Welcome to My Portfolio!!
            </h1>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1 px-2.5">
              Hi I'm
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2 px-1.5">
              Ei Phyu
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              Sin Mg
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I enjoy transforming ideas into interactive products . I create
            digital experiences, specializing in web development and mobile
            development.
          </p>

          <div className="  animate-fade-in-delay-4 mt-12 opacity-0">
            <a href="#projects" className="cosmic-button font-bold">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span>Scroll</span>
        <ArrowBigDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
