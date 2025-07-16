import { Card } from "@/components/ui/card";

const Integrations = () => {
  const integrations = [
    {
      name: "Mercado Livre",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "Shopee",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "Magalu",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "Americanas",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "Shopify",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "WooCommerce",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "Bling",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "Melhor Envio",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center"
    },
    {
      name: "Olist",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-6">
            <span className="text-red-600 text-sm font-medium">CONEXÕES PODEROSAS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Integrações 
            <span className="text-red-600"> completas</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A SP DROP integra com os principais marketplaces e plataformas de e-commerce do Brasil para maximizar suas vendas.
          </p>
        </div>

        {/* Integrations Grid */}
        <Card className="p-12 bg-gradient-card border-0 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 rounded-lg hover:bg-muted/50 transition-smooth group"
              >
                <div className="text-center">
                  <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-smooth">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-smooth"
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-smooth">
                    {integration.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            E muito mais integrações sendo adicionadas constantemente para expandir seu alcance de vendas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;