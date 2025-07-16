import { Button } from "@/components/ui/button";
import { Star, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Estrela Variedades</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-smooth font-medium">
              Início
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-smooth font-medium">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-smooth font-medium">
              Como Funciona
            </a>
            <a href="#planos" className="text-foreground hover:text-primary transition-smooth font-medium">
              Planos
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-smooth font-medium">
              Depoimentos
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" className="rounded-lg" asChild>
              <a href="#planos">
                Comece Agora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-smooth font-medium">
                Início
              </a>
              <a href="#beneficios" className="text-foreground hover:text-primary transition-smooth font-medium">
                Benefícios
              </a>
              <a href="#como-funciona" className="text-foreground hover:text-primary transition-smooth font-medium">
                Como Funciona
              </a>
              <a href="#planos" className="text-foreground hover:text-primary transition-smooth font-medium">
                Planos
              </a>
              <a href="#depoimentos" className="text-foreground hover:text-primary transition-smooth font-medium">
                Depoimentos
              </a>
              <Button variant="hero" className="rounded-lg mt-2" asChild>
                <a href="#planos">
                  Comece Agora
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;