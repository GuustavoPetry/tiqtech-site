import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const Solutions = () => {
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
      color: "primary"
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
      color: "accent"
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
      color: "accent"
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
      color: "primary"
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
      color: "primary"
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
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-primary bg-clip-text text-transparent"> Bitrix24 </span>
          Professional e Enterprise
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