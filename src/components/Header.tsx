import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="/logos/logo1.png"
            alt="tiqtech"
            className="h-8 w-auto"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 pl-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("clientes")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Falar com representante
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("solucoes")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection("clientes")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button
                variant="default"
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity w-full"
              >
                Falar com representante
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;