import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Solutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const solutions = [
    {
      title: "Performance",
      subtitle: "CRM Inteligente com Marketing Integrado",
      description: "Gerencie seus pontos de contato da captação ao fechamento.",
      features: [
        "Whatsapp, Telefonia e E-mail integrado às oportunidades",
        "Crie tarefas automaticamente por etapa",
        "Campos customizados: solicite informações obrigatórias por etapa",
        "Envie formulários para o cliente e salve dados em cards automaticamente",
        "Gere propostas em PDF com layout personalizado",
        "Envie e gerencie contratos para assinatura digital",
      ],
      color: "primary",
      image: "/logos/bitrix1.png"
    },
    {
      title: "Organização",
      subtitle: "Automação Inteligente de Processos (SPAs)",
      description: "Organize processos de qualquer departamento da sua empresa.",
      features: [
        "Crie áreas interligadas ao CRM: Pós Vendas, Compras, Financeiro e Operação",
        "Crie áreas para departamentos independentes: RH e Administrativo",
        "Gerencie níveis de permissão de acessos para cada área individualmente",
        "Solicite e salve informações, documentos e arquivos com automações",
        "Construa uma base de dados e KPIs para sua realidade",
        "Toda empresa em um único lugar",
      ],
      color: "accent",
      image: "/logos/bitrix5.png"
    },
    {
      title: "Eficiência",
      subtitle: "Fluxos de Trabalho: Processos Organizados e Fluídos",
      description: "Execute processos com eficiência e fluidez, sem gargalos operacionais.",
      features: [
        "Crie requisições entre departamentos",
        "Padronize seus processos: requisição, execução, aprovação",
        "Direcione as demandas para pessoa certa automaticamente",
        "Decida quais informações serão obrigatórias ou opcionais",
        "Notifique algo automaticamente em alguma etapa do processo",
        "Salve dados e gere documentos"
      ],
      color: "accent",
      image: "/logos/bitrix3.png"
    },
    {
      title: "Sinergia",
      subtitle: "Comunicação Interna e Colaboração",
      description: "Envolva pessoas e departamentos, e gere sinergia com objetividade.",
      features: [
        "Chat individuais e grupos por departamentos",
        "Crie chats somente com participantes de uma tarefa",
        "Mural de comunicação: Avisos, Enquetes e Eventos",
        "Gerencie pastas e documentos compartilhados",
        "Gerencie agenda de times, departamentos e salas de reunião",
        "Trabalhe com Lousas compartilhadas, o Miro do Bitrix24"
      ],
      color: "primary",
      image: "/logos/bitrix4.png"
    },
    {
      title: "Entrega",
      subtitle: "Tarefas e Projetos: integrado ao CRM e SPAs",
      description: "Nunca mais fique perdido com prazos e entregas pendentes.",
      features: [
        "Controle de Prazos: Calendário e Gantt",
        "Kanbans personalizados por Projetos e Planejador individual",
        "Diferentes funções: Criador, Responsável, Observadores, Participantes",
        "Crie modelos de tarefas com descrição e checklist padrão",
        "Crie recorrência personalizada de tarefas",
        "Delegue fluxos de tarefas automaticamente"
      ],
      color: "primary",
      image: "/logos/bitrix2.png"
    },
    {
      title: "Inteligência",
      subtitle: "BI Builder - Dashboards Customizados",
      description: "Analise seus KPIs e tome decisões com inteligência.",
      features: [
        "É o PowerBI do Bitrix24",
        "Crie datasets personalizados e gere qualquer tipo de gráfico",
        "Todos os dados do gerados no Bitrix24 podem ser cruzados",
        "Tabelas, Cards Numéricos, Gráfico de Pizza, Gráfico de Colunas, Linhas, etc",
        "Crie filtros com base nos campos personalizados do CRM ou SPAs",
        "Layout de Dashboards customizados: Abas, Linhas, Colunas e Títulos"
      ],
      color: "primary",
      image: "/logos/bitrix5.png"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, solutions.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? solutions.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Bitrix24 </span>
            Professional e Enterprise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para otimizar a gestão e acelerar o crescimento da sua empresa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {solutions.map((solution, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="group transition-all duration-500 border-0 hover:scale-[1.02] backdrop-blur-sm rounded-lg overflow-hidden flex flex-col md:flex-row-reverse md:h-96">

                    {/* IMAGEM */}
                    <div className="relative w-full md:w-7/12 h-60 md:h-full overflow-hidden flex-shrink-0">
                      <img
                        src={solution.image}
                        alt={solution.subtitle}
                        className="w-full h-full object-contain transition-transform duration-700"
                      />
                    </div>



                    {/* CONTEÚDO */}
                    <div className="w-full md:w-5/12 px-4 py-6 md:px-6 md:py-8 flex flex-col justify-between">

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs md:text-xs font-medium border ${solution.color === 'primary'
                            ? 'border-blue-500 text-blue-500 bg-blue-500/10'
                            : 'border-cyan-500 text-cyan-500 bg-cyan-500/10'
                            }`}>
                            {solution.title}
                          </span>
                        </div>

                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug md:leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                          {solution.subtitle}
                        </h3>

                        <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 md:gap-3 group-hover:translate-x-1 transition-transform duration-300">
                            <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mt-1 flex-shrink-0 ${solution.color === 'primary'
                              ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                              : 'bg-cyan-500 shadow-lg shadow-cyan-500/50'
                              }`}></div>
                            <span className="text-xs md:text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>


                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-gray-800 p-3 transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>


          <button
            onClick={goToNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-gray-800 p-3 transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>


          <div className="flex justify-center gap-3 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-cyan-500'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
