import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Selo Parceiro Gold */}
          <div className="mb-8">
            <Badge variant="outline" className="border-accent text-accent px-4 py-2 text-sm">
              🏆 Parceiro Gold Bitrix24
            </Badge>
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Entendemos sua empresa, melhoramos processos e geramos dados com inteligência
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Gerenciamento total em um único lugar
          </p>

          {/* Principais Serviços */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary font-semibold mb-2">Bitrix24</div>
              <p className="text-muted-foreground">
                Parceiro Gold Bitrix24 - Gerenciamento total em um único lugar
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-secondary font-semibold mb-2">Tiqchat</div>
              <p className="text-muted-foreground">
                Software para Atendimento de WhatsApp
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-accent font-semibold mb-2">Agentes de IA</div>
              <p className="text-muted-foreground">
                Atendimento ativo e receptivo humanizado (sem chatbots)
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
          >
            Falar com representante
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;