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
    <section id="home" className="pt-10 min-h-screen flex items-center bg-gradient-to-br from-muted to-muted">
      <div className="container mx-auto px-4 pb-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div>
            {/* Selo Parceiro Gold */}
            <div className="mb-8">
              <Badge variant="outline" className="border-accent text-accent px-4 py-2 text-sm">
                🏆 Parceiro Gold Bitrix24
              </Badge>
            </div>

            {/* Headline Principal */}
            <h1 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Entendemos seu Negócio 
                <br /> Otimizamos Processos
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl lg:max-w-none">
              Especialistas em destravar o potencial máximo das licenças 
              <br /> Professional e Enterprise do Bitrix24
            </p>

            {/* Call to Action */}
            <div className="mb-10">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg hover:shadow-xl"
              >
                Falar com representante
              </Button>
            </div>


            {/* Principais Serviços */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-12">
              <div className="group bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 max-w-[250px] md:max-w-none mx-auto">
                <div style={{ fontFamily: "DM Sans, sans-serif" }} className="text-primary font-bold mb-3 text-lg">Licenças</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Condições especiais para licenças Professional e Enterprise.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 max-w-[250px] md:max-w-none mx-auto">
                <div style={{ fontFamily: "DM Sans, sans-serif" }} className="text-secondary font-bold mb-3 text-lg">Implementação</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Customize o seu Bitrix24 com quem entende de negócios.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 max-w-[250px] md:max-w-none mx-auto">
                <div style={{ fontFamily: "DM Sans, sans-serif" }} className="text-accent font-bold mb-3 text-lg">Integração</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Seu Bitrix24 conversando com seu ERP via API.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 max-w-[250px] md:max-w-none mx-auto">
                <div style={{ fontFamily: "DM Sans, sans-serif" }} className="text-accent font-bold mb-3 text-lg">Suporte</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tenha uma equipe de suporte para resolver problemas.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 max-w-[250px] md:max-w-none mx-auto">
                <div style={{ fontFamily: "DM Sans, sans-serif" }} className="text-accent font-bold mb-3 text-lg">Treinamento</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mantenha seu time técnico e operacionalmente capacitado.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;