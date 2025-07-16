import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/5511995540705?text=Gostaria%20de%20mais%20informa%C3%A7%C3%A3o%20sobre%20o%20fornecedor%20SPdrop";

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-8 z-40 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-green-500 hover:bg-green-600 hover:scale-110 border-2 border-white"
      size="icon"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </Button>
  );
};

export default WhatsAppFloat;