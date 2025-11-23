const Clients = () => {
  const clientTypes = [
    "Briefing",
    "Análise", 
    "Planejamento",
    "Execução",
    "Treinamento"
  ];

  // Mock client logos - in a real implementation, these would be actual client logos
  const clientLogos = [
    { name: "Hansel Connect", logo: "/logos/hansel.png" },
    { name: "Projacseg", logo: "/logos/projacseg.png" },
    { name: "Eisen", logo: "/logos/eisen.png" },
    { name: "Precisa", logo: "/logos/precisa.png" },
    { name: "Azimute", logo: "/logos/azimute.png" },
    { name: "QVS", logo: "logos/QVS.png" },
  ];

  return (
    <section id="clientes" className="py-20 bg-gradient-to-br from-muted to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-3xl md:text-5xl font-bold mb-4">
            Quem são nossos <span className="bg-gradient-primary bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendemos empresas de diversos segmentos com soluções personalizadas
          </p>
        </div>

        {/* Logos dos clientes */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 items-center p-8 mb-20 mt-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="aspect-video rounded-lg flex items-center justify-center transition-colors"
              >
              
              <img
                src={client.logo}
                className="object-contain max-h-12"
              />
              </div>
            ))}
          </div>

          <div className="border-t"></div>

        {/* Etapas da Implementação */}
        <div className="text-center mt-24">
          <h2 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-3xl md:text-5xl font-bold mb-20">
            Etapas da <span className="bg-gradient-primary bg-clip-text text-transparent">Implementação</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 max-w-4xl mx-auto text-center">
          {clientTypes.map((type, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold w-4">{index + 1}</span>
              </div>
              <h3 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-muted-foreground text-lg font-semibold">{type}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;