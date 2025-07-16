import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Santos",
      role: "Empreendedor Digital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Com a Estrela Variedades consegui triplicar minha receita em apenas 3 meses. A plataforma é incrivelmente intuitiva e o suporte é excepcional.",
      content: "Com a SP Drop consegui triplicar minha receita em apenas 3 meses. A plataforma é incrivelmente intuitiva e o suporte é excepcional.",
      rating: 5
    },
    {
      name: "Juliana Costa",
      role: "Lojista Online",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      content: "Finalmente encontrei uma solução completa para meu e-commerce. Os fornecedores são confiáveis e a integração com os marketplaces é perfeita.",
      rating: 5
    },
    {
      name: "Fernando Lima",
      role: "Gestor de Vendas",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "O que mais me impressiona é a variedade de produtos disponíveis e a facilidade para importar tudo para minha loja. Recomendo demais!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-secondary text-sm font-medium">DEPOIMENTOS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes 
            <span className="text-secondary"> estão dizendo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 1.200 empreendedores já transformaram seus negócios com a SP Drop. 
            Veja o que eles têm a dizer sobre nossa plataforma.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth transform hover:scale-105 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Avaliação Média</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">+1.200</div>
            <p className="text-muted-foreground">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <p className="text-muted-foreground">Taxa de Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;