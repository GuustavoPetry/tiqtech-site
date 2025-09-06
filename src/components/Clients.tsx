const Clients = () => {
  const clientTypes = [
    "Negócios B2B",
    "Consultorias", 
    "Corretoras de seguros"
  ];

  // Mock client logos - in a real implementation, these would be actual client logos
  const clientLogos = [
    { name: "Cliente 1", logo: "C1" },
    { name: "Cliente 2", logo: "C2" },
    { name: "Cliente 3", logo: "C3" },
    { name: "Cliente 4", logo: "C4" },
    { name: "Cliente 5", logo: "C5" },
    { name: "Cliente 6", logo: "C6" },
  ];

  return (
    <section id="clientes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Quem são nossos <span className="bg-gradient-primary bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Atendemos empresas de diversos segmentos com soluções personalizadas
          </p>
        </div>

        {/* Tipos de clientes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {clientTypes.map((type, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{type}</h3>
            </div>
          ))}
        </div>

        {/* Logos dos clientes */}
        <div className="border-t pt-12">
          <p className="text-center text-muted-foreground mb-8">
            Alguns de nossos clientes parceiros
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <span className="text-2xl font-bold text-muted-foreground">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;