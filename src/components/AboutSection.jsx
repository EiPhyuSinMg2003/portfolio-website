import { ArrowRightIcon, Code, Mail, Phone } from "lucide-react";
import ProfilePic from "../assets/profile.jpg";
import Resume from "../assets/Ei_Phyu_Sin_Mg_Resume.pdf";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section id="about" className=" py-12 px-6 relative">
      <div className="container mx-auto max-w-5xl font-bold  text-glow">
        <h2 className="text-3xl md:text-4xl mb-10 text-left transition-transform duration-500 animate-fade-in-delay-1">
          Learn More About
          <span className="opacity-0 animate-fade-in-delay-2 px-4 text-primary">
            Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          {/* Right column - Profile picture */}
          <div className="flex-shrink-0 order-1 md:order-2 mb-6 md:mb-0 ">
            <img
              src={ProfilePic}
              alt="Ei Phyu Sin Mg"
              className="w-full max-w-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] object-cover rounded-2xl card-hover"
            />
          </div>

          {/* Left column - Text + contact cards + buttons */}
          <div className="flex-1 space-y-6 order-2 md:order-1 text-left">
            <h3 className="text-2xl md:text-2xl mb-4 font-extrabold text-primary transition-transform duration-500 hover:scale-105 ">
              Web Developer & Mobile App Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a final year ICT student who spent the past few years
              exploring the world of software development — from building full
              stack wesbites and mobile apps. I'm passionate about intuitive
              user experiences, clean architecture, and solving real-world
              problems with code.
            </p>

            <p className="text-muted-foreground">
              Right now, I am looking for an internship from January to May 2026
              — a place where I can contribute to real products, learn from
              experienced developers, and continue leveling up my skills in
              mobile and full-stack development.
            </p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-3 mt-4">
              <div className="gradient-border ">
                <div className="flex items-center gap-2 p-2 rounded-full bg-primary/10 text-primary">
                  <Code className="h-6 w-6 text-primary" />
                  <p className="text-muted-foreground">
                    Website: saurabhgupta.netlify.app
                  </p>
                </div>
              </div>
              <div className="gradient-border ">
                <div className="flex items-center gap-2 p-2 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6 text-primary" />
                  <p className="text-muted-foreground">
                    Email: eiphyusin.m66@rsu.ac.th
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
              <a href="#contact" className="cosmic-button font-bold">
                Get In Touch
              </a>

              <a href={Resume} download className="cosmic-button">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
