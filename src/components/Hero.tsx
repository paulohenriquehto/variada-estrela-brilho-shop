import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-3xl"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-white text-sm font-medium">Inovação em E-commerce</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Revolucione seu 
              <span className="text-secondary"> e-commerce </span>
              com variedades infinitas
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Conectamos você aos principais fornecedores e marketplaces do Brasil para 
              potencializar suas vendas online, sem se preocupar com estoque ou logística.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="secondary" size="lg" className="rounded-lg font-semibold transform hover:scale-105 transition-smooth" asChild>
                <a href="#planos">
                  Comece Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <a href="#como-funciona">
                  Como Funciona
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary border-2 border-white"></div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span className="font-bold text-secondary">+1.200</span>
                </div>
                <p className="text-sm">Empreendedores já estão transformando seus negócios</p>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-smooth duration-700">
              <img 
                src={dashboardMockup} 
                alt="Dashboard Estrela Variedades" 
                className="w-full rounded-xl shadow-2xl border border-white/20"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-card z-20 animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Pedido Entregue</span>
              </div>
              <p className="text-xs text-muted-foreground">#EV-45789 confirmado</p>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-card z-20 animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Vendas em Alta</span>
              </div>
              <p className="text-xs text-muted-foreground">+34% esta semana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;