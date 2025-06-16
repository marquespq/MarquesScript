import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Rocket,
  Shield,
  Users,
  Star,
  Clock,
  Code,
  Sword,
  UserCog,
  Scale3d,
  Coins,
  Send,
  RotateCcw,
  TrendingUp,
  Zap,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [counters, setCounters] = useState({ hours: 0, monthly: 0, yearly: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const animateCounters = () => {
      const targets = { hours: 5, monthly: 150, yearly: 1800 };
      const duration = 2000;
      const steps = {
        hours: targets.hours / (duration / 16),
        monthly: targets.monthly / (duration / 16),
        yearly: targets.yearly / (duration / 16),
      };

      let current = { hours: 0, monthly: 0, yearly: 0 };

      const timer = setInterval(() => {
        current.hours += steps.hours;
        current.monthly += steps.monthly;
        current.yearly += steps.yearly;

        if (current.hours >= targets.hours) {
          setCounters(targets);
          clearInterval(timer);
        } else {
          setCounters({
            hours: Math.floor(current.hours),
            monthly: Math.floor(current.monthly),
            yearly: Math.floor(current.yearly),
          });
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    const counterElement = document.getElementById("counters");
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const installScript = (scriptName: string) => {
    let scriptUrl = "";
    if (scriptName === "loader.user.js") {
      scriptUrl =
        "https://gist.github.com/marquespq/91f88524bcb9401dd1919cb69d70d874/raw/dc085e2f19308185e88553a620973a1aa80531c7/marquescript.user.js";
    } else if (scriptName === "mass-atack-plan.user.js") {
      scriptUrl =
        "https://gist.github.com/marquespq/c3a9b49e72a625ccd181c860f3f061ee/raw/b9f0859488c5eca79d409644492d13f6c3372a44/plan.user.js";
    } else {
      // fallback for other scripts if needed
      scriptUrl = `/scripts/${scriptName}`;
    }
    window.open(scriptUrl, "_blank");
  };

  return (
    <div className="gradient-bg text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code className="text-2xl text-primary" />
              <span className="text-xl font-bold">MarquesScripts</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="hover:text-primary transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("install")}
                className="hover:text-primary transition-colors"
              >
                Instalação
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/20">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Benefícios
                </button>
                <button
                  onClick={() => scrollToSection("install")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Instalação
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Economize <span className="text-primary">Horas</span> no
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tribal Wars
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Scripts profissionais que automatizam suas tarefas e multiplicam
              sua eficiência no jogo.
              <strong className="text-primary">
                {" "}
                Ganhe até 5 horas por dia!
              </strong>
            </p>

            {/* Time Savings Counter */}
            <div
              id="counters"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            >
              <Card className="glass-effect border-border/20 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {counters.hours}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Horas Economizadas/Dia
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-border/20 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {counters.monthly}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Horas/Mês Poupadas
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-border/20 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {counters.yearly}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Horas/Ano Liberadas
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main CTA Button */}
            <div className="mb-8">
              <Button
                onClick={() => scrollToSection("install")}
                className="hero-gradient text-white font-bold py-4 px-8 text-xl glow-effect pulse-animation hover:scale-105 transition-all duration-300 shadow-2xl h-auto"
                size="lg"
              >
                <Download className="mr-3 h-5 w-5" />
                Instalar
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Instalação automática via Tampermonkey
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
              <div className="flex items-center">
                <Shield className="mr-2 h-4 w-4 text-green-400" />
                Seguro & Testado
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-blue-400" />
                +1000 Usuários
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4 text-yellow-400" />
                5.0 Avaliação
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Scripts Ativos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada funcionalidade foi desenvolvida para maximizar sua
              produtividade no Tribal Wars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Upar Paladino
                </h3>
                <p className="text-muted-foreground mb-4">
                  Distribui automaticamente os recursos para acelerar o
                  aprimoramento do Paladino. Seu herói evolui enquanto você
                  dorme!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-400 border-green-500/30"
                >
                  <Clock className="mr-1 h-3 w-3" />
                  Economiza 1h/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚔️</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Recrutador Automático
                </h3>
                <p className="text-muted-foreground mb-4">
                  Recruta automaticamente tropas com base em um plano
                  predefinido. Suas aldeias nunca param de produzir exércitos!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                >
                  <Zap className="mr-1 h-3 w-3" />
                  Economiza 2h/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Farm Mapa
                </h3>
                <p className="text-muted-foreground mb-4">
                  Coleta coordenadas do mapa automaticamente e manda farmar
                  baseado no A ou B. Farm inteligente que encontra as melhores
                  oportunidades!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                >
                  <TrendingUp className="mr-1 h-3 w-3" />
                  Economiza 1.5h/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Balanceador de Recursos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Balanceia automaticamente os recursos entre as aldeias. Mantém
                  o equilíbrio perfeito em todo seu império sem esforço manual!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-orange-500/20 text-orange-400 border-orange-500/30"
                >
                  <RotateCcw className="mr-1 h-3 w-3" />
                  Economiza 45min/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Cunhar Moedas
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cunha automaticamente as moedas para maximizar seu potencial
                  econômico. Transforme recursos em poder de ataque constante!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                >
                  <Coins className="mr-1 h-3 w-3" />
                  Economiza 30min/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Planejador de Ataques
                </h3>
                <p className="text-muted-foreground mb-4">
                  Planeja ataques complexos com base em horários, coordenadas e
                  tipos de tropas. Estratégia militar automatizada de elite!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                >
                  <Send className="mr-1 h-3 w-3" />
                  Economiza 1h/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🧲</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Coleta em Massa
                </h3>
                <p className="text-muted-foreground mb-4">
                  Coleta automaticamente os recursos de todas as aldeias.
                  Maximize seus ganhos enquanto foca na estratégia!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-400 border-green-500/30"
                >
                  <Clock className="mr-1 h-3 w-3" />
                  Economiza 40min/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Mercado Premium
                </h3>
                <p className="text-muted-foreground mb-4">
                  Troca automaticamente os recursos no mercado premium. Otimize
                  suas transações e maximize lucros em tempo real!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-red-500/20 text-red-400 border-red-500/30"
                >
                  <Rocket className="mr-1 h-3 w-3" />
                  Economiza 25min/dia
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/20 bg-card/50 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Proteção Anti-Captcha
                </h3>
                <p className="text-muted-foreground mb-4">
                  Logout automático quando captcha aparece, com notificações no
                  Telegram. Proteja suas contas 24/7!
                </p>
                <Badge
                  variant="secondary"
                  className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                >
                  <Shield className="mr-1 h-3 w-3" />
                  Segurança Total
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* More Scripts Teaser */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-primary">
                E MUITO MAIS!
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Estes são apenas alguns dos{" "}
                <span className="text-primary font-bold">
                  25+ scripts disponíveis
                </span>{" "}
                nos MarquesScripts
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🚜</div>
                  <p>Farm Assistente</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">📫</div>
                  <p>Mensagem OP Automática</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🔥</div>
                  <p>Calculadora de Snips</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">⚔️</div>
                  <p>Envio Automático de Fakes</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🤝</div>
                  <p>Verificar Apoios Fórum</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">⚔️</div>
                  <p>Enviar Apoio em Massa</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🧪</div>
                  <p>Coleta Individual</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">✏️</div>
                  <p>Etiquetador + Discord</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">⚔️</div>
                  <p>Verificador de Defesa</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">🚚</div>
                  <p>Enviar Recursos</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">📊</div>
                  <p>Export Tropas</p>
                </div>
                <div className="glass-effect p-3 rounded-lg border border-border/20">
                  <div className="text-2xl mb-2">⚔️</div>
                  <p>Contador de Fulls</p>
                </div>
              </div>

              <div className="mt-8 p-6 glass-effect rounded-lg border border-primary/30">
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Categorias Completas:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      📋 Gerente de Conta
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      6+ scripts para automação total
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🌾 Farm e Coleta
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      7+ scripts para maximizar recursos
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🧠 Planejamento e Estratégia
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      4+ scripts para domínio tático
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🏛️ Funcionalidades da Tribo
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      5+ scripts para coordenação
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🔒 Segurança e Notificações
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      3+ scripts para proteção
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      🛡️ Defesa e Apoio
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      3+ scripts para fortalecimento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 relative">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Por Que Escolher MarquesScripts?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="text-left">
                <div className="text-6xl text-primary mb-4">
                  <Zap className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Eficiência Máxima</h3>
                <p className="text-muted-foreground">
                  Nossos scripts foram otimizados para consumir mínimos recursos
                  do navegador enquanto maximizam sua produtividade no jogo.
                </p>
              </div>

              <div className="text-left">
                <div className="text-6xl text-secondary mb-4">
                  <Shield className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">100% Seguro</h3>
                <p className="text-muted-foreground">
                  Código auditado e testado por milhares de jogadores. Sem
                  riscos de ban ou violação dos termos do jogo.
                </p>
              </div>

              <div className="text-left">
                <div className="text-6xl text-accent mb-4">
                  <RotateCcw className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Atualizações Constantes
                </h3>
                <p className="text-muted-foreground">
                  Scripts sempre atualizados com as últimas mudanças do Tribal
                  Wars. Suporte técnico dedicado.
                </p>
              </div>

              <div className="text-left">
                <div className="text-6xl text-primary mb-4">
                  <TrendingUp className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Resultados Comprovados
                </h3>
                <p className="text-muted-foreground">
                  Usuários relatam crescimento 300% mais rápido no jogo após
                  implementar nossos scripts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Como Instalar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Passos de instalação permanecem os mesmos */}
            </div>

            {/* Botões de instalação separados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="glass-effect border-border/20 bg-card/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    MarqueScript Loader
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    O script principal que carrega todas as funcionalidades
                    básicas
                  </p>
                  <Button
                    onClick={() => installScript("loader.user.js")}
                    className="w-full hero-gradient text-white font-bold py-4 px-8 glow-effect hover:scale-105 transition-all duration-300"
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Instalar Loader
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect border-border/20 bg-card/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    Agendador de Comandos
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Planeje e execute ataques em massa automaticamente
                  </p>
                  <Button
                    onClick={() => installScript("plan.user.js")}
                    className="w-full hero-gradient text-white font-bold py-4 px-8 glow-effect hover:scale-105 transition-all duration-300"
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Instalar Agendador
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center text-muted-foreground text-sm">
              <p>
                Após clicar em instalar, o Tampermonkey irá detectar
                automaticamente o script.
              </p>
              <p>Confirme a instalação quando solicitado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Comprar ou Renovar Licença
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato para adquirir ou renovar sua licença dos
              MarquesScripts
            </p>

            <div className="flex justify-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/5551994823267?text=Oi,%20vim%20pelo%20marquescript%20para%20comprar%20ou%20renovar%20uma%20licença",
                    "_blank"
                  )
                }
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-xl glow-effect hover:scale-105 transition-all duration-300 shadow-2xl h-auto"
                size="lg"
              >
                <div className="mr-3 text-2xl">📱</div>
                Entrar em Contato via WhatsApp
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Desenvolvido por Gabriel Borba Marques
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card/50 text-center text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>
            &copy; 2024 MarquesScripts. Desenvolvido por Gabriel Borba Marques.
          </p>
          <p className="mt-2 text-sm">Scripts para Tribal Wars - Versão 0.1</p>
        </div>
      </footer>
    </div>
  );
}
