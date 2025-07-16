import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Zap, 
  Truck, 
  TrendingUp, 
  CreditCard, 
  Headphones,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Fornecedores Verificados",
      description: "Trabalhamos apenas com fornecedores 100% verificados que garantem produtos de qualidade e entrega rápida em todo o Brasil."
    },
    {
      icon: Zap,
      title: "Integração Total",
      description: "Integração automática com os principais marketplaces do Brasil como Mercado Livre, Shopee e Amazon com sincronização em tempo real."
    },
    {
      icon: Truck,
      title: "Logística Facilitada",
      description: "Rastreamento automático de pedidos e sistema inteligente para processar devoluções sem complicações para você."
    },
    {
      icon: TrendingUp,
      title: "Análise de Mercado",
      description: "Ferramentas avançadas para analisar tendências e identificar produtos de alta demanda antes da concorrência."
    },
    {
      icon: CreditCard,
      title: "Pagamentos Automáticos",
      description: "Sistema automático para processar pagamentos e transferências dos pedidos diretamente aos fornecedores com segurança."
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe de suporte disponível 7 dias por semana via chat, email e telefone para resolver qualquer problema imediatamente."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-primary text-sm font-medium">RECURSOS EXCLUSIVOS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher a 
            <span className="text-primary"> SP Drop</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma foi desenvolvida para atender todas as suas necessidades de e-commerce, 
            oferecendo integração perfeita e experiência premium.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth transform hover:scale-105 group">
              <div className="bg-gradient-primary rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg" className="rounded-lg" asChild>
            <a href="#planos">
              Explorar todos os recursos
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;