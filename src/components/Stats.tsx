import { Card } from "@/components/ui/card";
import { Star, Package, ThumbsUp, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "8+",
      label: "Fornecedores Parceiros",
      color: "text-primary"
    },
    {
      icon: Package,
      number: "2.500+",
      label: "Produtos Disponíveis",
      color: "text-secondary"
    },
    {
      icon: ThumbsUp,
      number: "99%",
      label: "Taxa de Satisfação",
      color: "text-primary"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Avaliação Média",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth transform hover:scale-105">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;