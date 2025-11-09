import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div className="mx-auto px-4 max-w-7xl flex items-center justify-between w-full">
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ei Phyu Sin Mg</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="space-x-8 mx-auto hidden md:flex items-center z-[50]">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* ✅ Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-foreground/80 z-50 hover:text-primary transition-colors duration-300"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 md:hidden",
            "transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* ✅ Theme Toggle (Mobile menu) */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
