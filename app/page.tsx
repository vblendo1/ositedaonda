"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Lightbulb,
  FileText,
  Eye,
  Target,
  ScrollText,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const AnimatedLetter = ({ letter, index }: { letter: string; index: number }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <span
        className="inline-block transition-all duration-200 ease-out cursor-default"
        style={{
          transform: isHovered ? "translateY(-8px) scale(1.1)" : "translateY(0) scale(1)",
          color: isHovered ? "#ffffff" : "inherit",
          textShadow: isHovered ? "0 4px 8px rgba(0,0,0,0.3)" : "none",
          zIndex: isHovered ? 10 : 1,
          position: "relative",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    )
  }

  const renderAnimatedText = (text: string, startIndex = 0) => {
    return text
      .split("")
      .map((letter, index) => <AnimatedLetter key={startIndex + index} letter={letter} index={startIndex + index} />)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ONDAS%20%EF%BD%9C%20MAR%20%EF%BD%9C%20OCEANO%20%EF%BD%9C%20-%20%28V%C3%ADdeo%20Livre%20de%20Direitos%20Autorais%29%20%281%29-mWHt7YILGCgUTHVhWYmyQ2XNo86eLk.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#004E64] to-[#007C91] opacity-40"></div>

        <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo-o-q2udd4yfn5rqo5lj3uk5in56ddcacneyfw0f1ex9eo.webp"
                  alt="Onda Pro"
                  className="h-10 w-auto"
                />
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-700 hover:text-[#6c256f] transition-colors font-medium">
                  Home
                </a>
                <a href="#institucional" className="text-[#6A1B9A] font-semibold border-b-2 border-[#6A1B9A] pb-1">
                  Institucional
                </a>
                <a href="#projetos" className="text-gray-700 hover:text-[#6c256f] transition-colors font-medium">
                  Projetos
                </a>
                <a href="#contato" className="text-gray-700 hover:text-[#6c256f] transition-colors font-medium">
                  Contato
                </a>
                <a href="#distribuidores" className="text-gray-700 hover:text-[#6c256f] transition-colors font-medium">
                  Distribuidores
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
                <div className="space-y-4">
                  <a href="#home" className="block text-gray-700 hover:text-[#6c256f] transition-colors font-medium">
                    Home
                  </a>
                  <a href="#institucional" className="block text-[#6A1B9A] font-semibold">
                    Institucional
                  </a>
                  <a
                    href="#projetos"
                    className="block text-gray-700 hover:text-[#6c256f] transition-colors font-medium"
                  >
                    Projetos
                  </a>
                  <a href="#contato" className="block text-gray-700 hover:text-[#6c256f] transition-colors font-medium">
                    Contato
                  </a>
                  <a
                    href="#distribuidores"
                    className="block text-gray-700 hover:text-[#6c256f] transition-colors font-medium"
                  >
                    Distribuidores
                  </a>

                  {/* Mobile Social Icons */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight font-montserrat">
              <div className="mb-2">{renderAnimatedText("A Educação do seu")}</div>
              <div className="bg-gradient-to-r from-[#9e61a4] to-[#dbbfdd] bg-clip-text text-white">
                {renderAnimatedText("Municípios em primeiro lugar!", 18)}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/80 font-montserrat font-light mt-8 max-w-3xl mx-auto">
              Soluções inovadoras para transformar a educação municipal.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative cursor-pointer group">
            <div className="absolute inset-0 bg-white/10 rounded-full animate-ping group-hover:animate-pulse"></div>
            <ChevronDown className="w-8 h-8 text-white animate-bounce relative z-10 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-[#009bac] to-[#4dbdc6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white animate-float hover-lift" style={{ animationDelay: "0s" }}>
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl backdrop-blur-sm">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg leading-relaxed font-medium">Recursos concretos que estimulam o aprendizado.</p>
            </div>

            <div className="text-center text-white animate-float hover-lift" style={{ animationDelay: "0.5s" }}>
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl backdrop-blur-sm">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg leading-relaxed font-medium">
                Propostas de atividades interdisciplinares, lúdicas, interativas e totalmente alinhadas à BNCC.
              </p>
            </div>

            <div className="text-center text-white animate-float hover-lift" style={{ animationDelay: "1s" }}>
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl backdrop-blur-sm">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg leading-relaxed font-medium">
                Assessoria Formativa visando a capacitação de professores, apresentamos estratégias para melhor
                exploração dos recursos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Policy and Vision Section */}
      <section id="institucional" className="py-20 bg-gradient-to-br from-accent/30 to-neutral/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover-lift border-0 bg-white glass overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#6c256f] mb-4">MISSÃO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Estimular a criatividade, a inteligência, a interação e a socialização com o intuito de enriquecer e
                  dinamizar a ação docente, respeitar diferenças e, sobretudo, ampliar as possibilidades de contato das
                  crianças e adolescentes com o mundo.
                </p>
              </CardContent>
            </Card>

            {/* Policy Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover-lift border-0 bg-white glass overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <ScrollText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#009bac] mb-4">POLÍTICA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Na Onda nós levamos a brincadeira a sério. Por isso, atuamos alinhados às tendências pedagógicas
                  contemporâneas, idealizamos e produzimos recursos educacionais respeitando todas as normas de
                  segurança e testes de qualidade do INMETRO.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover-lift border-0 bg-white glass overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#8c4091] mb-4">VISÃO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Ser uma empresa referência nas soluções educacionais por estar conectada com a transformação digital e
                  as novas tecnologias, produzindo os mais variados recursos educacionais para potencializar o processo
                  ensino-aprendizagem e torná-lo mais dinâmico, contextual e significativo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-accent/30 to-neutral/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 font-medium">
                Nossa Missão
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Democratizando o Acesso à Educação de Qualidade
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Na Onda Educacional, acreditamos que a educação é o catalisador mais poderoso para a transformação
                pessoal e profissional. Nossa plataforma combina tecnologia de ponta com metodologias pedagógicas
                inovadoras para criar uma experiência de aprendizado única e eficaz.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Metodologia baseada em projetos reais",
                  "Mentoria personalizada com especialistas",
                  "Certificações reconhecidas pelo mercado",
                  "Comunidade ativa de aprendizado colaborativo",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center shadow-md">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="gradient-secondary text-white hover:opacity-90 transition-all duration-300 hover-lift px-8 py-4"
              >
                Conheça Nossa História
              </Button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/nosso-espaco.webp"
                  alt="Nosso espaço educacional moderno"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 gradient-secondary rounded-full animate-pulse-glow"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 gradient-primary rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-medium">Nossos Cursos</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Trilhas de Aprendizado Personalizadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore nossa coleção cuidadosamente curada de cursos projetados para impulsionar sua carreira, expandir
              suas habilidades e transformar seu futuro profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Desenvolvimento Web Moderno",
                description: "Domine React, Next.js e tecnologias de ponta para criar aplicações web revolucionárias",
                image: "/trilha.png",
                badge: "Mais Popular",
                badgeColor: "bg-primary",
                rating: 4.9,
                students: "12.5k",
              },
              {
                title: "Ciência de Dados & IA",
                description: "Python, Machine Learning e análise avançada para o futuro da tecnologia",
                image: "/mate.png",
                badge: "Novo",
                badgeColor: "bg-secondary",
                rating: 4.8,
                students: "8.2k",
              },
              {
                title: "Design UX/UI Avançado",
                description: "Crie experiências digitais extraordinárias que encantam e convertem usuários",
                image: "/abc.png",
                badge: "Trending",
                badgeColor: "bg-secondary-light",
                rating: 4.9,
                students: "15.3k",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover-lift border-0 bg-card/80 glass overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg?height=200&width=400"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-4 left-4 ${course.badgeColor} text-white font-medium shadow-lg`}>
                    {course.badge}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-foreground">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{course.students} estudantes</span>
                  </div>
                  <Button className="w-full gradient-secondary text-white hover:opacity-90 transition-all duration-300 hover-lift">
                    Explorar Curso
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-neutral/30 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 font-medium">Depoimentos</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              O que Nossos Estudantes Dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Histórias reais de transformação e sucesso de quem escolheu a Onda Educacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Desenvolvedora Full Stack",
                content:
                  "A Onda Educacional transformou completamente minha carreira. Em 6 meses, consegui uma promoção e aumento salarial de 80%. A metodologia de projetos reais fez toda a diferença!",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "João Santos",
                role: "Data Scientist",
                content:
                  "Os cursos são extremamente práticos e atualizados. A metodologia de projetos reais fez toda a diferença no meu aprendizado. Hoje trabalho na empresa dos meus sonhos!",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Ana Costa",
                role: "UX Designer",
                content:
                  "Plataforma incrível! O suporte dos mentores e a qualidade do conteúdo superaram todas as minhas expectativas. A comunidade ativa de aprendizado é inspiradora!",
                rating: 5,
                avatar: "/placeholder.svg",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="glass border-0 hover:shadow-xl transition-all duration-300 hover-lift p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para Transformar sua Carreira?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Junte-se a milhares de profissionais que já transformaram suas vidas através da nossa plataforma educacional
            inovadora. O futuro começa agora!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover-lift px-8 py-4 text-lg font-semibold"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 bg-transparent px-8 py-4 text-lg font-semibold"
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo-o-q2udd4yfn5rqo5lj3uk5in56ddcacneyfw0f1ex9eo.webp"
                  alt="Onda Pro"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-background/70 mb-4 leading-relaxed">
                A educação do seu município em primeiro lugar! Transformando o futuro através da educação de qualidade.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Navegação</h3>
              <ul className="space-y-3 text-background/70">
                <li>
                  <a href="#home" className="hover:text-background transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#institucional" className="hover:text-background transition-colors">
                    Institucional
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="hover:text-background transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-background transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Recursos</h3>
              <ul className="space-y-3 text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Materiais Educacionais
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Assessoria Formativa
                  </a>
                </li>
                <li>
                  <a href="#distribuidores" className="hover:text-background transition-colors">
                    Distribuidores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
            <p>&copy; 2024 Onda Educacional. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
