const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">tiqtech</div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Entendemos sua empresa, melhoramos processos e geramos dados com inteligência.
            </p>
            <div className="text-sm text-primary-foreground/60">
              🏆 Parceiro Gold Bitrix24
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solucoes")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("clientes")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Clientes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Links legais e redes sociais */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Política de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Termos de uso
                </a>
              </li>
            </ul>

            <div>
              <h4 className="font-semibold mb-3">Redes sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} tiqtech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;