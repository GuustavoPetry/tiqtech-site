import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Solutions = () => {
  const solutions = [
    {
      title: "Bitrix24",
      subtitle: "Licença, Implementação, Treinamento e Suporte",
      description: "Tudo em um único lugar para gerir sua empresa",
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
      description: "Vários atendentes utilizando um único número",
      features: [
        "API Oficial e Não Oficial",
        "Kanban",
        "Agendamento de Mensagens",
        "Departamentos",
        "Tags/Etiquetas",
        "Chatbot/IA"
      ],
      color: "secondary"
    },
    {
      title: "Agentes de IA",
      subtitle: "Atendimento Receptivo e Ativo",
      description: "Atenda clientes e qualifique leads de forma humanizada",
      features: [
        "Responde dúvidas",
        "Faz prospecção",
        "Agenda reuniões",
        "Cria negócio no CRM"
      ],
      color: "accent"
    },
    {
      title: "Automações de Marketing",
      subtitle: "com Mautic",
      description: "Rastreie o comportamento de leads e clientes e execute uma comunicação mais assertiva",
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
    <section id="solucoes" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossas <span className="bg-gradient-primary bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias integradas para otimizar todos os processos da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge 
                    variant="outline" 
                    className={`border-${solution.color} text-${solution.color}`}
                  >
                    {solution.title}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{solution.subtitle}</CardTitle>
                <CardDescription className="text-base">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${solution.color}`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
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