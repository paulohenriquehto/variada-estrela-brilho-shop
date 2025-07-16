import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Search, 
  ShoppingCart, 
  TrendingUp,
  ArrowRight,
  ArrowDown 
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Cadastre-se",
      description: "Crie sua conta gratuita em menos de 2 minutos e tenha acesso completo à nossa plataforma de variedades."
    },
    {
      icon: Search,
      number: "02", 
      title: "Encontre Produtos",
      description: "Navegue por milhares de produtos de fornecedores verificados e encontre os melhores para seu nicho."
    },
    {
      icon: ShoppingCart,
      number: "03",
      title: "Importe e Venda",
      description: "Importe produtos com um clique para seus marketplaces e comece a vender sem se preocupar com estoque."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Acompanhe Resultados",
      description: "Use nosso dashboard avançado para monitorar vendas, lucros e performance em tempo real."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-secondary text-sm font-medium">PROCESSO SIMPLES</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Como funciona a 
            <span className="text-secondary">SP Drop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em apenas 4 passos simples você estará vendendo online sem complicações, 
            com acesso a milhares de produtos de fornecedores confiáveis.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
                {/* Number & Icon */}
                <div className="md:col-span-3 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-4 mx-auto md:mx-0">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-primary/20">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <Card className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              </div>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-primary rounded-full p-3">
                    <ArrowDown className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="rounded-lg" asChild>
            <a href="#planos">
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Sem taxas de adesão • Sem compromisso • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;