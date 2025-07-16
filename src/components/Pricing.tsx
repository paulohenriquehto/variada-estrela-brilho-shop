import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Iniciante",
      price: "Grátis",
      period: "",
      description: "Perfeito para começar seu e-commerce",
      icon: Star,
      features: [
        "Até 50 produtos",
        "2 fornecedores parceiros",
        "Suporte por email",
        "Dashboard básico",
        "Integração com 1 marketplace"
      ],
      buttonText: "Começar Grátis",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Profissional",
      price: "R$ 97",
      period: "/mês",
      description: "Ideal para empreendedores sérios",
      icon: Crown,
      features: [
        "Produtos ilimitados",
        "Todos os fornecedores",
        "Suporte prioritário 24/7",
        "Dashboard avançado",
        "Integração com todos marketplaces",
        "Análises de mercado",
        "Automação de pedidos"
      ],
      buttonText: "Começar Agora",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 297",
      period: "/mês",
      description: "Para grandes operações",
      icon: Zap,
      features: [
        "Tudo do Profissional",
        "Gerente de conta dedicado",
        "Integração personalizada",
        "Treinamento individual",
        "API exclusiva",
        "Relatórios customizados",
        "Prioridade máxima"
      ],
      buttonText: "Falar com Vendas",
      buttonVariant: "gradient" as const,
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-primary text-sm font-medium">PLANOS E PREÇOS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o plano ideal 
            <span className="text-primary"> para seu negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Temos opções para todos os tamanhos de negócio. Comece grátis e escale conforme cresce.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth transform hover:scale-105 relative ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                plan.popular ? 'bg-gradient-primary' : 'bg-gradient-primary opacity-80'
              }`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              {/* Plan Info */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.buttonVariant} 
                className="w-full rounded-lg" 
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Todos os planos incluem 7 dias de teste grátis • Cancele a qualquer momento
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Sem taxas de setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Suporte em português</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Dados seguros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;