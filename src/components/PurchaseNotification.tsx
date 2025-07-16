import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { X, ShoppingBag } from "lucide-react";

const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({ name: "", plan: "", time: "" });

  const names = [
    "Pedro", "Ana", "Carlos", "Maria", "João", "Fernanda", "Ricardo", "Juliana",
    "Roberto", "Camila", "Diego", "Larissa", "Bruno", "Patrícia", "Lucas", "Gabriela",
    "Marcos", "Beatriz", "Felipe", "Amanda", "Rafael", "Carla", "Thiago", "Vanessa"
  ];

  const plans = ["Básico", "Premium", "Avançado"];

  const generateRandomNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];
    const randomTime = Math.floor(Math.random() * 30) + 1; // 1 to 30 minutes
    
    return {
      name: randomName,
      plan: randomPlan,
      time: `${randomTime} minuto${randomTime > 1 ? 's' : ''}`
    };
  };

  useEffect(() => {
    const showNotification = () => {
      setCurrentNotification(generateRandomNotification());
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Then show every 15-25 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 10000 + 15000; // 15-25 seconds
      setTimeout(showNotification, randomDelay);
    }, 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-left duration-500">
      <Card className="p-4 bg-white shadow-lg border border-border max-w-sm">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">
              <span className="font-bold">{currentNotification.name}</span> acabou de comprar
            </p>
            <p className="text-sm text-muted-foreground">
              o plano <span className="font-semibold text-primary">{currentNotification.plan}</span> há {currentNotification.time} atrás
            </p>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default PurchaseNotification;