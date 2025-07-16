import { Card } from "@/components/ui/card";

const Integrations = () => {
  const integrations = [
    {
      name: "Mercado Livre",
      logo: "https://http2.mlstatic.com/D_NQ_NP_790091-MLA74840999430_032024-O.webp"
    },
    {
      name: "Amazon",
      logo: "https://api.freelogodesign.org/assets/blog/img/20180911090509731amazon_logo_RGB.jpg"
    },
    {
      name: "Shopee",
      logo: "https://www.ideianoar.com.br/wp-content/uploads/2022/03/shopee-marketplace-1-1.png"
    },
    {
      name: "Magalu",
      logo: "https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png"
    },
    {
      name: "Americanas",
      logo: "https://images.seeklogo.com/logo-png/61/2/americanas-sa-logo-png_seeklogo-611138.png"
    },
    {
      name: "Shopify",
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg"
    },
    {
      name: "WooCommerce",
      logo: "https://aescoladesites.com.br/wp-content/uploads/2021/06/WooCommerce.jpg"
    },
    {
      name: "Bling",
      logo: "https://vancecontabil.com.br/wp-content/uploads/2021/06/logo-bling-png-1.png"
    },
    {
      name: "Melhor Envio",
      logo: "https://logodownload.org/wp-content/uploads/2020/12/melhor-envio-logo-0.png"
    },
    {
      name: "Olist",
      logo: "https://d3hw41hpah8tvx.cloudfront.net/images/logo_ecossistema_66f532e37b.svg"
    }
  ];

  // Duplicar o array para criar o efeito infinito
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-primary text-sm font-medium">CONEXÕES PODEROSAS</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Integrações 
            <span className="text-primary"> completas</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Estrela Variedades integra com os principais marketplaces e plataformas de e-commerce do Brasil para maximizar suas vendas.
          </p>
        </div>

        {/* Carousel Container */}
        <Card className="p-8 bg-gradient-card border-0 shadow-card overflow-hidden">
          <div className="relative">
            {/* Carousel Track */}
            <div className="flex animate-scroll-right">
              {duplicatedIntegrations.map((integration, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-48 mx-4 flex flex-col items-center justify-center p-6 rounded-lg hover:bg-muted/50 transition-smooth group"
                >
                  <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-smooth shadow-sm border border-border/20 p-2">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-smooth"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain' 
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-smooth text-center">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            E muito mais integrações sendo adicionadas constantemente para expandir seu alcance de vendas.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Integrations;