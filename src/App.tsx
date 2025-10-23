"use client"

import { useState } from "react"
import ScrollProgress from "./components/ui/ScrollProgress"

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <ScrollProgress />

      {/* Header com vídeo de fundo */}
      <header className="relative h-screen overflow-hidden">
        {/* Vídeo de fundo */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/ondas-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay azul petróleo */}
        <div className="absolute inset-0 bg-[#004E64] opacity-40"></div>

        {/* Conteúdo do header */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Navbar */}
          <nav className="mx-auto mt-8 bg-white rounded-full shadow-2xl px-8 py-4 flex items-center justify-between max-w-6xl w-[90%]">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo-o-q2udd4yfn5rqo5lj3uk5in56ddcacneyfw0f1ex9eo.webp" alt="Onda Pro" className="h-12" />
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-[#6c256f] transition-colors font-medium">
                Home
              </a>
              <a href="#institucional" className="text-[#6c256f] font-bold">
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

            {/* Ícones Sociais */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-[#1877F2] hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-[#E4405F] hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-[#25D366] hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Menu Mobile Toggle */}
            <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {/* Menu Mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-2xl p-6 z-50">
              <a href="#home" className="block py-3 text-gray-700 hover:text-[#6c256f] transition-colors font-medium">
                Home
              </a>
              <a href="#institucional" className="block py-3 text-[#6c256f] font-bold">
                Institucional
              </a>
              <a
                href="#projetos"
                className="block py-3 text-gray-700 hover:text-[#6c256f] transition-colors font-medium"
              >
                Projetos
              </a>
              <a
                href="#contato"
                className="block py-3 text-gray-700 hover:text-[#6c256f] transition-colors font-medium"
              >
                Contato
              </a>
              <a
                href="#distribuidores"
                className="block py-3 text-gray-700 hover:text-[#6c256f] transition-colors font-medium"
              >
                Distribuidores
              </a>
            </div>
          )}

          {/* Título Principal */}
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <h1 className="text-center text-white font-bold mb-8">
              {/* Primeira linha */}
              <div className="text-3xl md:text-5xl lg:text-6xl mb-4">
                {"A Educação do seu".split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-200 hover:-translate-y-2 hover:scale-110 hover:text-shadow-glow cursor-default"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>

              {/* Segunda linha com gradiente */}
              <div className="text-3xl md:text-5xl lg:text-6xl">
                {"Municípios em primeiro lugar!".split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-200 hover:-translate-y-2 hover:scale-110 cursor-default"
                    style={{
                      display: char === " " ? "inline" : "inline-block",
                      background: "linear-gradient(135deg, #9e61a4 0%, #dbbfdd 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </h1>

            {/* Subtítulo */}
            <p className="text-white text-lg md:text-xl text-center max-w-2xl">
              Transformando a educação municipal com soluções inovadoras e materiais de qualidade
            </p>
          </div>
        </div>
      </header>

      {/* Faixa de Destaques */}
      <section className="py-16 bg-gradient-to-r from-[#6c256f] to-[#009bac]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Material Didático Completo</h3>
              <p className="text-white/90">Recursos educacionais de alta qualidade para todos os níveis de ensino</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Soluções Personalizadas</h3>
              <p className="text-white/90">Adaptamos nossos produtos às necessidades específicas do seu município</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Suporte Dedicado</h3>
              <p className="text-white/90">Equipe especializada para acompanhar sua jornada educacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Missão, Política e Visão */}
      <section id="institucional" className="py-20 bg-[#f6f6f6]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">Nossa Essência</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6c256f] to-[#8c4091] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#6c256f]">Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Fornecer soluções educacionais de excelência que transformem a realidade dos municípios brasileiros,
                promovendo o desenvolvimento integral dos estudantes através de materiais didáticos inovadores e de
                qualidade superior.
              </p>
            </div>

            {/* Política */}
            <div className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#009bac] to-[#4dbdc6] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#009bac]">Política de Qualidade</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprometimento com a excelência em todos os processos, desde a criação até a entrega dos materiais
                educacionais, garantindo conformidade com as diretrizes nacionais e superando as expectativas dos nossos
                parceiros municipais.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8c4091] to-[#9e61a4] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#8c4091]">Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser referência nacional em soluções educacionais para municípios, reconhecida pela inovação, qualidade e
                impacto positivo na formação de cidadãos críticos, criativos e preparados para os desafios do futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#6c256f] to-[#009bac] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/logo-o-q2udd4yfn5rqo5lj3uk5in56ddcacneyfw0f1ex9eo.webp"
            alt="Onda Pro"
            className="h-16 mx-auto mb-6 brightness-0 invert"
          />
          <p className="text-lg mb-4">A Educação do seu Municípios em primeiro lugar!</p>
          <p className="text-white/80">© 2025 Onda Educacional. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
