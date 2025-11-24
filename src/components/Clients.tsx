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
    <section id="clientes" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="border-t"></div>

      <div className="container mx-auto px-4 mt-24">
        <div className="text-center">
          <h2 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-3xl md:text-5xl font-bold mb-4">
            Quem são nossos <span className="bg-gradient-primary bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendemos empresas de diversos segmentos com soluções personalizadas
          </p>
        </div>

        {/* Logos dos clientes */}
        <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 items-center p-8 mb-20 mt-8">
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
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-5
            gap-8
            mb-16 max-w-6xl mx-auto
          "
        >
          {clientTypes.map((type, index) => (
            <div key={index} className="relative flex flex-col items-center mb-12">

              {/* CÍRCULO */}
              <div
                className="
                  bg-gradient-primary
                  w-12 h-12 md:w-14 md:h-14
                  rounded-full flex items-center justify-center
                  mx-auto mb-3
                ">
                <span className="text-white font-bold text-sm md:text-base">
                  {index + 1}
                </span>
              </div>

              {/* TEXTO */}
              <h3
                style={{ fontFamily: "DM Sans, sans-serif" }}
                className="text-muted-foreground text-sm md:text-lg font-semibold text-center"
              >
                {type}
              </h3>

              {/* FLECHA – aparece em todas menos na última */}
              {index < clientTypes.length - 1 && (
                <>
                  {/* DESKTOP (flecha →) */}
                  <div
                    className="
                    hidden sm:flex
                    absolute
                    top-1/4
                    right-[-25px]
                    -translate-y-1/2
                    text-5xl
                  "
                  >
                    →
                  </div>

                  {/* MOBILE (flecha ↓) */}
                  <div className="sm:hidden text-4xl mt-3">↓</div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="border-t"></div>




      </div>
    </section>
  );
};

export default Clients;