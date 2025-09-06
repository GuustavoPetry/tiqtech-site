import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-business-automation.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div>
          {/* Selo Parceiro Gold */}
          <div className="mb-8">
            <Badge variant="outline" className="border-accent text-accent px-4 py-2 text-sm">
              🏆 Parceiro Gold Bitrix24
            </Badge>
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Transforme Seu Negócio com Tecnologia
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl lg:max-w-none">
            Entendemos sua empresa, melhoramos processos e geramos dados com inteligência
          </p>

          {/* Principais Serviços */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="text-primary font-bold mb-3 text-lg">Bitrix24</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Parceiro Gold Bitrix24 - Gerenciamento total em um único lugar
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="text-secondary font-bold mb-3 text-lg">Tiqchat</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Software para Atendimento de WhatsApp
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="text-accent font-bold mb-3 text-lg">Agentes de IA</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Atendimento ativo e receptivo humanizado (sem chatbots)
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg hover:shadow-xl"
          >
            Falar com representante
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;