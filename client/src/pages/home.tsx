import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AlertaCaptcha from "./alerta-captcha";
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
  // Detecta o parâmetro alerta-captcha na URL
  const [showAlerta, setShowAlerta] = useState(false);
  const [counters, setCounters] = useState({ hours: 0, monthly: 0, yearly: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("alerta-captcha")) {
      setShowAlerta(true);
    }
  }, []);

  useEffect(() => {
    if (showAlerta) return;
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
  }, [showAlerta]);

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
        "https://gist.github.com/marquespq/5ec4333660e301e4467bf5be6a48db14/raw/40e85f10e8be28000e1a4eea6ea5b74cc6417458/marquescript.user.js";
    } else if (scriptName === "plan.user.js") {
      scriptUrl =
        "https://gist.github.com/marquespq/2ac8068d989b4210667509cfc2e29053/raw/38a9ca72c3730c2a249962dfa710648578c3d83e/plan.user.js";
    } else {
      // fallback for other scripts if needed
      scriptUrl = `/scripts/${scriptName}`;
    }
    window.open(scriptUrl, "_blank");
  };

  if (showAlerta) {
    return <AlertaCaptcha />;
  }

  return (
    <div className="gradient-bg text-white min-h-screen">
      <Helmet>
        <title>
          MarquesScripts - Scripts para Tribal Wars | Ganhe Horas e Resultados
        </title>
        <meta
          name="description"
          content="Scripts profissionais para Tribal Wars. Automatize tarefas, economize horas e maximize seus resultados. Instale já e veja os benefícios!"
        />
        <meta
          property="og:title"
          content="MarquesScripts - Scripts para Tribal Wars"
        />
        <meta
          property="og:description"
          content="Scripts profissionais para Tribal Wars. Automatize tarefas, economize horas e maximize seus resultados. Instale já!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marquesscripts.com.br/" />
        <meta property="og:image" content="https://i.imgur.com/IILGd2S.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MarquesScripts - Scripts para Tribal Wars"
        />
        <meta
          name="twitter:description"
          content="Scripts profissionais para Tribal Wars. Automatize tarefas, economize horas e maximize seus resultados."
        />
        <meta name="twitter:image" content="https://i.imgur.com/IILGd2S.png" />
        <link rel="canonical" href="https://marquesscripts.com.br/" />
      </Helmet>
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
                Instalação e valores
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
                  Instalação e valores
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

      {/* Installation Section - versão resumida */}
      <section id="install" className="py-28 md:py-36 bg-card/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-16">
              <div className="w-full max-w-5xl">
                <div className="glass-effect border-2 border-primary/40 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-12 bg-card/90">
                  <div className="w-full md:w-3/5 flex-shrink-0">
                    <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg border-2 border-primary/40">
                      <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/aL78mGBI_OE?si=bMKXR47OZmbHMdFz"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-64 md:h-[400px] rounded-2xl"
                      ></iframe>
                    </div>
                  </div>
                  <div className="w-full md:w-2/5 flex flex-col items-center justify-center text-center gap-6">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 drop-shadow-lg">
                      Venha para o melhor bot do Tribal Wars
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
                      +30 scripts: farm, coleta, cunhagem, agendador, captcha,
                      WhatsApp, tribo, defesas e muito mais.
                    </p>
                    <Button
                      onClick={() => installScript("loader.user.js")}
                      className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-10 text-xl glow-effect hover:scale-105 transition-all duration-300 shadow-xl h-auto mb-1 rounded-full"
                      size="lg"
                    >
                      <Download className="mr-3 h-6 w-6" /> Instalar Agora
                    </Button>
                    <span className="text-base text-muted-foreground font-semibold">
                      Apenas{" "}
                      <span className="text-3xl text-primary font-extrabold">
                        R$18
                      </span>{" "}
                      <span className="text-lg">/mês</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Área de informações e preços - destaque visual */}
            <div className="glass-effect border-2 border-primary/40 rounded-2xl p-10 mb-8 text-center flex flex-col gap-6 shadow-xl bg-card/95">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
                Planos e Benefícios
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
                <div className="flex flex-col items-center bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl p-6 min-w-[220px] shadow-md">
                  <span className="text-2xl font-bold text-primary mb-1">
                    Individual
                  </span>
                  <span className="text-4xl font-extrabold text-white mb-1 drop-shadow">
                    R$18
                  </span>
                  <span className="text-base text-muted-foreground">
                    por mês
                  </span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-green-400/10 to-primary/10 rounded-xl p-6 min-w-[220px] shadow-md">
                  <span className="text-2xl font-bold text-green-400 mb-1">
                    Pacote Tribo
                  </span>
                  <span className="text-4xl font-extrabold text-white mb-1 drop-shadow">
                    R$12
                  </span>
                  <span className="text-base text-muted-foreground">
                    por mês (10+ membros)
                  </span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-yellow-400/10 to-primary/10 rounded-xl p-6 min-w-[220px] shadow-md">
                  <span className="text-2xl font-bold text-yellow-400 mb-1">
                    Indicação
                  </span>
                  <span className="text-2xl font-extrabold text-white mb-1 drop-shadow">
                    +5 dias grátis
                  </span>
                  <span className="text-base text-muted-foreground">
                    por cada amigo indicado
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-6 text-base mt-2">
                <a
                  href="https://www.youtube.com/@marquesscripts/videos"
                  target="_blank"
                  rel="noopener"
                  className="underline text-secondary font-semibold"
                >
                  Canal no YouTube
                </a>
                <a
                  href="https://chat.whatsapp.com/L055QCXwZCeBp9N3InbinL?mode=r_c"
                  target="_blank"
                  rel="noopener"
                  className="underline text-green-400 font-semibold"
                >
                  Grupo de Novidades
                </a>
              </div>
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
                Entrar em Contato
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

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5551994823267?text=Oi,%20vim%20pelo%20marquescript%20para%20comprar%20ou%20renovar%20uma%20licença"
        target="_blank"
        rel="noopener"
        className="fixed z-50 bottom-6 right-6 md:bottom-10 md:right-10 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center px-5 py-3 gap-2 text-lg font-bold transition-all duration-200  hover:scale-105"
        style={{ boxShadow: "0 8px 32px 0 rgba(34,197,94,0.25)" }}
        title="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.51 5.8L0 24l6.29-1.65A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.18-3.48-8.52zM12 22c-1.85 0-3.62-.5-5.15-1.44l-.37-.22-3.73.98.99-3.63-.24-.38A9.96 9.96 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"
          />
        </svg>
      </a>
    </div>
  );
}
