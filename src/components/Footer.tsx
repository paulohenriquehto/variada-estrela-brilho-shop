import { Star, Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="w-1 h-6 bg-white mx-1"></div>
                <div className="flex flex-col">
                  <div className="w-4 h-1 bg-secondary rounded-full mb-1"></div>
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Revolucionando o e-commerce brasileiro com soluções inovadoras e fornecedores de confiança.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-white/80 hover:text-secondary transition-smooth">Início</a></li>
              <li><a href="#beneficios" className="text-white/80 hover:text-secondary transition-smooth">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-white/80 hover:text-secondary transition-smooth">Como Funciona</a></li>
              <li><a href="#planos" className="text-white/80 hover:text-secondary transition-smooth">Planos</a></li>
              <li><a href="#depoimentos" className="text-white/80 hover:text-secondary transition-smooth">Depoimentos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-secondary transition-smooth">Central de Ajuda</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-smooth">Documentação</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-smooth">Guias e Tutoriais</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-smooth">Status do Sistema</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-smooth">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-white/80">contato@estrelavariedades.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/80">(98) 9964-0226</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-white/80">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-center md:text-left">
            © 2024 Estrela Variedades. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
              Termos de Uso
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;