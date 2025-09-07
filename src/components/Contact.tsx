import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import FormularioBitrix from "./FormularioBitrix";

const Contact = () => {

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
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
           <div>
            <FormularioBitrix/>
           </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;