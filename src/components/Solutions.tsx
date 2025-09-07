import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Solutions = () => {
  const solutions = [
    {
      title: "Bitrix24",
      subtitle: "Licença, Implementação e Suporte",
      description: "Tudo em um único lugar para gerir sua empresa.",
      features: [
        "CRM - Leads e Negócios",
        "Fluxos de Automação de Processos",
        "Tarefas e Projetos",
        "Site Institucional",
        "Atendimento ao cliente",
        "Comunicação interna",
        "BI Integrado"
      ],
      color: "primary"
    },
    {
      title: "tiqchat",
      subtitle: "Atendimento via WhatsApp",
      description: "Vários atendentes utilizando um único número.",
      features: [
        "API Oficial e Não Oficial",
        "Agendamento de Mensagens",
        "Kanban", 
        "Departamentos",
        "Tags/Etiquetas",
        "Agentes de IA",
        "Chatbots"
      ],
      color: "accent"
    },
    {
      title: "Agentes de IA",
      subtitle: "Atendimento Receptivo e Ativo",
      description: "Atenda clientes e qualifique leads de forma humanizada.",
      features: [
        "Responde dúvidas",
        "Faz prospecção",
        "Agenda reuniões",
        "Cria negócio no CRM"
      ],
      color: "accent"
    },
    {
      title: "Mautic",
      subtitle: "Automações de Marketing",
      description: "Rastreie o comportamento de leads e clientes e execute uma comunicação mais assertiva.",
      features: [
        "Campanhas de e-mail e whatsapp automatizadas",
        "Segmentações inteligentes",
        "Lead Scoring",
        "Fluxos de nutrição e reengajamento"
      ],
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-3xl md:text-5xl font-bold mb-4">
            Nossas <span className="bg-gradient-primary bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para otimizar a gestão e acelerar o crescimento da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-card to-card/80 hover:scale-[1.02] backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge 
                    variant="outline" 
                    className={`border-${solution.color} text-${solution.color} bg-${solution.color}/5 group-hover:bg-${solution.color}/10 transition-colors duration-300`}
                  >
                    {solution.title}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">{solution.subtitle}</CardTitle>
                <CardDescription className="text-base">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                      <div className={`w-3 h-3 rounded-full bg-${solution.color} shadow-lg`}></div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;