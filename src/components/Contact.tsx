import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    empresa: "",
    comentario: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.sobrenome || !formData.email || !formData.telefone || !formData.empresa || !formData.comentario) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Criar mensagem para WhatsApp
    const message = `Olá! Gostaria de conversar sobre as soluções da tiqtech.

*Dados de contato:*
Nome: ${formData.nome} ${formData.sobrenome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Empresa: ${formData.empresa}

*Comentário:*
${formData.comentario}`;

    // Redirecionar para WhatsApp
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp em instantes."
    });

    // Limpar formulário
    setFormData({
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      empresa: "",
      comentario: ""
    });
  };

  return (
    <section id="contato" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Entre em contato
                </span>
              </CardTitle>
              <CardDescription className="text-lg">
                Fale agora com um representante e otimize sua empresa com nossas tecnologias de gestão de negócios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sobrenome">Sobrenome *</Label>
                    <Input
                      id="sobrenome"
                      name="sobrenome"
                      value={formData.sobrenome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa">Nome da Empresa *</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comentario">Comentário *</Label>
                  <Textarea
                    id="comentario"
                    name="comentario"
                    rows={4}
                    value={formData.comentario}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Enviar mensagem via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;