import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Instagram,
  Twitter
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold primary-gradient bg-clip-text text-primary">
                TiqTech
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Transformamos negócios através da tecnologia. Oferecemos soluções completas em gestão empresarial, 
              chatbots inteligentes e integrações avançadas com IA personalizada.
            </p>
            <div className="flex space-x-4">
              <div 
                className="p-2 bg-muted-foreground/10 rounded-lg hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </div>
              <div
                className="p-2 bg-muted-foreground/10 rounded-lg hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </div>
              <div 
                className="p-2 bg-muted-foreground/10 rounded-lg hover:bg-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#clientes" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:jardel@tiqtech.com.br"><span className="text-muted-foreground">jardel@tiqtech.com.br</span></a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="https://api.whatsapp.com/send?phone=554796472001" target="_blank" ><span className="text-muted-foreground">(47) 996472001</span></a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Joinville, SC - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground/80 text-sm">
              © 2024 TiqTech. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground/80 hover:text-primary text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground/80 hover:text-primary text-sm transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;