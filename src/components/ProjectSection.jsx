import { ArrowBigRight, ExternalLink, Github } from "lucide-react";
//import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.jpg";

const projects = [
  /*{
    id: 1,
    title: "Real Estate Platform",
    description:
      "A property management platform allowing users to browse, list, and manage real estate properties.",
    image: project1,
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/EiPhyuSinMg2003/real-estate.git",
  },*/
  {
    id: 2,
    title: "Inventory Management System",
    image: project2,
    description:
      "A full-featured inventory dashboard for managing inventory, products, and users, with real-time analytics, sales tracking, expense summaries, and category-wise visualizations.",

    tags: ["Next.js", "Tailwind CSS", "Express.js"],

    githubUrl: "https://github.com/EiPhyuSinMg2003/inventory-management.git",
  },
  {
    id: 3,
    title: "E-commerce Clothing App",
    description:
      "A dynamic shopping cart feature for an E-commerce Clothing App allowing users to add, update, and remove products, view real-time totals, and proceed to checkout seamlessly",
    image: project3,
    tags: ["React-Native", "Tailwind CSS"],
    githubUrl: "https://github.com/EiPhyuSinMg2003/clothing-app.git",
  },
  {
    id: 4,
    title: "Flutter Student Registration App",
    description:
      "An  app with secure student login and registration displaying school employee information, enabling students to view teacher or staff profiles, contact details, and roles.",
    image: project4,
    tags: ["Dart", "Flutter"],

    githubUrl: "https://github.com/EiPhyuSinMg2003/students-registration.git",
  },
  {
    id: 5,
    title: "Mini AI Chatbot App",
    description:
      "AI chatbot app built with React Native and TypeScript, powered by Gemini AI for intelligent conversations on the go.",
    image: project5,
    tags: ["React-Native", "TypeScript"],
    githubUrl: "https://github.com/EiPhyuSinMg2003/chatbot-app.git",
  },
  {
    id: 5,
    title: "Firewall Configuration and Network Lab",
    description:
      "Simulated a secure corporate network with VLANs, routers, switches, and firewalls; configured traffic between LAN, DMZ, and external networks while applying network security and routing concepts.",
    image: project6,
    tags: ["Network Security", "Firewall", "VLAN", "Routing"],
    githubUrl: "https://github.com/EiPhyuSinMg2003/networking.git",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-left  text-glow">
          My {""}
          <span className="opacity-0 animate-fade-in-delay-2 text-primary">
            Projects
          </span>
        </h3>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was implemented with
          an intuitive design and a smooth, user-friendly experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card p-4 rounded-lg overflow-hidden shadow-md card-hover flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* ✅ Moved this outside the image div */}
              <div className="=p-1 flex flex-col justify-between flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
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
            className="cosmic-button w-fit flex items-center mx-auto gap-2 font-bold "
            href="https://github.com/EiPhyuSinMg2003"
          >
            Check My GitHub <ArrowBigRight sixe={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
