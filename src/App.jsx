// imgs
import perfil from "./imgs/perfil.jpeg";

// Analytics vercel
import { Analytics } from "@vercel/analytics/react";

// Components
import { CookieBanner } from "./components/CookieBanner";
import { MyFooter } from "./components/MyFooter";
import MyTags from "./components/MyTags";

// CSS
import "./App.css";

function App() {
  const handleWhatsappClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "clique_whatsapp",
      });
    }
  };

  const whatsappUrl =
    "https://wa.me/5584996230097?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites!";

  return (
    <div className="bg-[#141414] text-zinc-100 selection:bg-[#C2A76D] selection:text-zinc-950 font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden">
        {/* Luz de fundo sutil (Glow) para dar profundidade sem poluir */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C2A76D]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl md:border-x border-zinc-800/80 px-6 md:px-12 flex flex-col items-center text-center space-y-6">
          {/* Foto de Perfil / Avatar */}
          <div className="relative group">
            <div className="w-36 h-36 md:w-44 md:h-44 border-2 border-[#C2A76D] p-1 rounded-full shadow-2xl bg-zinc-900">
              <img
                src={perfil}
                alt="Foto de perfil de Moisés"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            <MyTags
              icon={<i className="fa-solid fa-code"></i>}
              role="Desenvolvedor"
            />
            <MyTags icon={<i className="fa-solid fa-globe"></i>} role="Web" />
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight text-white">
            Olá, seja bem-vindo! <br className="hidden sm:block" />
            Me chamo <span className="font-bold text-[#C2A76D]">Moisés</span>
          </h1>

          {/* Subtítulo / Proposta de Valor */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Desenvolvo sites modernos, rápidos e estratégicos para transformar a
            presença digital da sua marca em um canal de vendas.
          </p>

          {/* Chips de Contato Rápido */}
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-300 border border-zinc-800 rounded-full px-4 py-2 hover:border-[#25D366]/60 hover:text-[#25D366] hover:bg-[#25D366]/5 transition-all duration-200 bg-zinc-900/60"
              onClick={handleWhatsappClick}
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:moisesdev082@gmail.com"
              className="flex items-center gap-2 text-sm text-zinc-300 border border-zinc-800 rounded-full px-4 py-2 hover:border-[#C2A76D]/60 hover:text-[#C2A76D] hover:bg-[#C2A76D]/5 transition-all duration-200 bg-zinc-900/60"
            >
              <i className="fa-regular fa-envelope text-base"></i>
              <span>E-mail</span>
            </a>
          </div>

          {/* Botão de Ação Principal (CTA) */}
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C2A76D] text-zinc-950 font-bold py-4 px-8 rounded-xl shadow-[0_0_25px_rgba(194,167,109,0.25)] hover:bg-[#d1b77e] hover:shadow-[0_0_35px_rgba(194,167,109,0.4)] hover:-translate-y-0.5 transition-all duration-200"
              onClick={handleWhatsappClick}
            >
              <span>Vamos conversar sobre seu projeto</span>
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>

        {/* Indicador de Rolar para Baixo */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-[#C2A76D] transition-colors animate-bounce">
          <a href="#servicos" aria-label="Rolar para baixo">
            <i className="fa-solid fa-angles-down text-xl"></i>
          </a>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section
        id="servicos"
        className="w-full py-20 px-4 bg-[#19191B] border-y border-zinc-800/80 flex flex-col items-center"
      >
        <div className="w-full max-w-6xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C2A76D] font-semibold mb-2">
            Soluções Digitais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            O que ofereço?
          </h2>

          {/* Grid responsivo corrigido (3 colunas no desktop, 1 no mobile) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-8 flex flex-col justify-between bg-[#202023] border border-zinc-800 hover:border-[#C2A76D]/50 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C2A76D]/10 border border-[#C2A76D]/20 flex items-center justify-center text-[#C2A76D] mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-laptop-code text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                  Criação de Sites Profissionais
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Design 100% personalizado para sua marca</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Ultra rápido e otimizado para celulares</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Estruturado para converter visitantes em clientes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-8 flex flex-col justify-between bg-[#202023] border border-zinc-800 hover:border-[#C2A76D]/50 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C2A76D]/10 border border-[#C2A76D]/20 flex items-center justify-center text-[#C2A76D] mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-shield-halved text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                  Hospedagem & Segurança
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Site 99,9% do tempo online e estável</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Backups e segurança</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Certificado SSL (protocolo de segurança HTTPS)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-8 flex flex-col justify-between bg-[#202023] border border-zinc-800 hover:border-[#C2A76D]/50 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C2A76D]/10 border border-[#C2A76D]/20 flex items-center justify-center text-[#C2A76D] mb-6 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-screwdriver-wrench text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                  Manutenção & Suporte
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Atualizações constantes de segurança</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Suporte técnico contínuo para dúvidas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#C2A76D] font-bold mt-0.5">✓</span>
                    <span>Pequenos ajustes e alterações de conteúdo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative w-full py-20 px-4 bg-[#141414] flex flex-col items-center overflow-hidden">
        {/* Toque sutil de cor vinho/dourado no fundo para dar personalidade sem brigar com o texto */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#6f1b44]/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C2A76D] font-semibold mb-2">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Quem você está contratando?
          </h2>

          {/* Card de Apresentação */}
          <div className="bg-[#1C1C1F] border border-zinc-800/90 p-8 md:p-10 rounded-2xl shadow-2xl w-full text-left space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h3 className="text-2xl font-bold text-white">
                Prazer, sou o <span className="text-[#C2A76D]">Moisés</span>! 👋
              </h3>
              <span className="hidden sm:inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#C2A76D]/10 text-[#C2A76D] border border-[#C2A76D]/20">
                IFRN • UFRN
              </span>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-zinc-200 font-medium">
              Desenvolvedor especializado em criar sites modernos, rápidos e
              focados em converter visitantes em clientes.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-zinc-400">
              Com formação técnica pelo <strong className="text-zinc-200 font-medium">IFRN</strong> e cursando Tecnologia da Informação na <strong className="text-zinc-200 font-medium">UFRN</strong>, uno conhecimento acadêmico com as tecnologias mais modernas do mercado (como React e Tailwind) para transformar a visão da sua marca em uma presença digital viva.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-zinc-400">
              Meu objetivo não é apenas entregar um site bonito, mas criar uma
              ferramenta que passe credibilidade e{" "}
              <strong className="text-[#C2A76D] font-semibold">
                mostre a visão real do seu negócio
              </strong>
              .
            </p>

            {/* Botão de Ação com alto contraste */}
            <div className="pt-4 flex justify-center sm:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-transparent border-2 border-[#C2A76D] text-[#C2A76D] hover:bg-[#C2A76D] hover:text-zinc-950 font-bold py-3 px-7 rounded-xl transition-all duration-200"
                onClick={handleWhatsappClick}
              >
                Solicitar um orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MyFooter />

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 md:w-15 md:h-15 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
        onClick={handleWhatsappClick}
      >
        <i className="fa-brands fa-whatsapp text-3xl group-hover:rotate-12 transition-transform duration-300"></i>

        <span className="absolute right-16 bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl hidden sm:block pointer-events-none">
          Fale comigo no WhatsApp
        </span>
      </a>

      <CookieBanner />
      <Analytics />
    </div>
  );
}

export default App;