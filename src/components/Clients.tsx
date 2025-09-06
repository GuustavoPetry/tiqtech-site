const Clients = () => {
  const clientTypes = [
    "Negócios B2B",
    "Consultorias", 
    "Corretoras de seguros"
  ];

  // Mock client logos - in a real implementation, these would be actual client logos
  const clientLogos = [
    { name: "Eisen", logo: "/logos2/eisen.png" },
    { name: "Hansel Connect", logo: "/logos2/hansel.png" },
    // { name: "Precisa Automação", logo: "/logos2/precisa.webp" },
    // { name: "JF Assessoria", logo: "/logos/jf_assessoria.png" },
    { name: "Projacseg", logo: "/logos2/projacseg.webp" },
    { name: "QVS", logo: "logos2/QVS.webp" },
  ];

  return (
    <section id="clientes" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg flex items-center justify-center transition-colors"
              >
              
              <img
                src={client.logo}
                className="object-contain max-h-16"
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;