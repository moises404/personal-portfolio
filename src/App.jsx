// imgs
import perfil from "./imgs/perfil.jpeg";

// Analitycs
import { Analytics } from "@vercel/analytics/react"

import "./App.css";

function App() {

  const handleWhatsappClick = () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'clique_whatsapp',
    });
  }
};


  return (
    <>
      {/* Home */}
      <section className="relative w-full min-h-screen bg-[#262626] flex flex-col items-center justify-center py-12 text-white">
        <div className="w-[90%] md:border-x-2 max-w-4xl flex flex-col items-center text-center space-y-6">
          {/* Foto de Perfil / Avatar */}
          <div className="w-40 h-40 md:w-48 md:h-48 border-4 border-[#C2A76D] rounded-full overflow-hidden shadow-2xl flex items-center justify-center bg-zinc-800">
            {/* Insira sua tag <img> aqui quando tiver a foto */}
            <img src={perfil} alt="Foto de perfil" />
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight">
            Olá, seja bem-vindo! Me chamo <span className="font-extrabold text-[#C2A76D]">Moisés</span>
          </h1>

          {/* Subtítulo / Proposta de Valor */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light">
            Desenvolvo sites modernos, rápidos e estratégicos para transformar a
            presença digital da sua marca em um canal de vendas.
          </p>

          {/* Chips de Contato Rápido */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="https://wa.me/5584996230097?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm border border-zinc-600 rounded-full px-4 py-1.5 cursor-pointer hover:border-[#25D366] hover:text-[#25D366] transition-all duration-200 bg-zinc-800/50"
              onClick={handleWhatsappClick}
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:moisesdev082@gmail.com"
              className="flex items-center gap-2 text-sm border border-zinc-600 rounded-full px-4 py-1.5 cursor-pointer hover:border-[#4285f4] hover:text-[#4285f4] transition-all duration-200 bg-zinc-800/50"
            >
              <i className="fa-regular fa-envelope text-base"></i>
              <span>E-mail</span>
            </a>
          </div>

          {/* Botão de Ação Principal (CTA) */}
          <div className="pt-4">
            <a
              href="https://wa.me/5584996230097?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites!"
              target="_blank"
              className="inline-block bg-[#C2A76D] text-zinc-950 font-bold py-3.5 px-8 rounded-xl shadow-lg hover:bg-[#b0945b] hover:scale-105 transition-all duration-200"
              onClick={handleWhatsappClick}
            >
              Vamos conversar sobre seu projeto
            </a>
          </div>
        </div>

        {/* Indicador de Rolar para Baixo (Scroll Indicator) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <a href="#proxima-secao" aria-label="Rolar para baixo">
            <i className="fa-solid fa-angles-down text-xl"></i>
          </a>
        </div>
      </section>

      {/* Services */}

      <section className="w-full py-4 bg-[#980458] flex flex-col items-center text-white">
        <div className="w-[90%] pb-4 gap-4 flex flex-col items-center flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que ofereço?
          </h2>

          <div className="w-full pb-4 gap-4 flex flex-col items-center flex-wrap md:flex-row justify-center">

            <div className="md:w-1/3 w-full p-6 flex flex-col justify-center items-start shadow-xl bg-[#41242f] h-100 lg:h-70 border-l-4 border-amber-400 rounded-r-lg text-white gap-3 ">
            <h3 className="text-2xl font-bold mb-1 tracking-wide">
              Criação de Sites Professional
            </h3>

            <ul className="space-y-2 text-sm md:text-base text-gray-200">
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Design 100%
                personalizado para sua marca
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Ultra rápido
                e otimizado para celulares
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Estruturado
                para converter visitantes em clientes
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 w-full p-6 flex flex-col justify-center items-start shadow-xl bg-[#41242f] border-l-4 border-amber-400 rounded-r-lg text-white gap-3 h-100 lg:h-70">
            <h3 className="text-2xl font-bold mb-1 tracking-wide">
              Hospedagem & Segurança
            </h3>

            <ul className="space-y-2 text-sm md:text-base text-gray-200">
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Site 99,9%
                do tempo online e estável
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Backups
                automáticos e de segurança
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Certificado
                SSL (protocolo de segurança HTTPS)
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 w-full p-6 flex flex-col justify-center items-start shadow-xl bg-[#41242f] border-l-4 border-amber-400 rounded-r-lg text-white gap-3 h-100 lg:h-70">
            <h3 className="text-2xl font-bold mb-1 tracking-wide">
              Manutenção & Suporte
            </h3>

            <ul className="space-y-2 text-sm md:text-base text-gray-200">
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Atualizações
                constantes de segurança
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Suporte
                técnico contínuo para dúvidas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span> Pequenos
                ajustes e alterações de conteúdo
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {/* 
      <section className='w-full py-4 bg-[#7D4B2A] flex flex-col items-center h-screen text-white'>
          <h2 className='text-4xl' >Projetos</h2>
      </section> */}

      {/* About */}

      <section className="w-full py-12 bg-[#6f1b44] flex flex-col items-center text-white">
        <div className="w-[90%] max-w-3xl flex flex-col items-center text-center">
          {/* Título da Seção */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quem você está contratando?
          </h2>

          {/* Apresentação */}
          <div className="bg-black/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-9xl w-full text-left space-y-4">
            <h3 className="text-2xl font-bold text-white mb-2">
              Prazer, sou o Moisés! 👋
            </h3>

            <p className="text-base md:text-lg leading-relaxed text-amber-50 font-medium">
              Desenvolvedor especializado em criar sites modernos, rápidos e
              focados em converter visitantes em clientes.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-amber-100/90">
              Com formação técnica pelo IFRN e cursando Tecnologia da Informação
              na UFRN, uno conhecimento acadêmico com as tecnologias mais
              modernas do mercado (como React e Tailwind) para transformar a
              visão da sua marca em uma presença digital viva.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-amber-100/90">
              Meu objetivo não é apenas entregar um site bonito, mas criar uma
              ferramenta que passe credibilidade e{" "}
              <strong className="text-white font-semibold">
                mostre a visão real do seu negócio
              </strong>
              .
            </p>

            {/* Botão de Ação (Opcional) */}
            <div className="pt-4 flex justify-center md:justify-center">
              <a
                href="https://wa.me/5584996230097?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites!"
                target="_blank"
                className="bg-white text-center text-[#C2A76D] font-bold py-3 px-6 rounded-lg shadow-md hover:bg-amber-50 transition-all duration-200"
                onClick={handleWhatsappClick}
              >
                Vamos conversar sobre seu projeto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#262626] border-t border-zinc-800 py-8 px-4 flex flex-col items-center justify-center gap-4 text-white">
        {/* Nome / Marca */}
        <div className="text-center">
          <p className="font-semibold text-base tracking-wide">
            Moisés Azevedo Bezerra
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            Desenvolvedor Web Front-End
          </p>
        </div>

        {/* Redes e Contato */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5584996230097?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center w-9 h-9 border border-zinc-700 rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-all duration-200"
            onClick={handleWhatsappClick}
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
          </a>

          <a
            href="mailto:moisesdev082@gmail.com"
            target="_blank"
            aria-label="E-mail"
            className="flex items-center justify-center w-9 h-9 border border-zinc-700 rounded-full hover:border-[#4285f4] hover:text-[#4285f4] transition-all duration-200"
          >
            <i className="fa-regular fa-envelope text-base"></i>
          </a>

          {/* <a 
      href="https://linkedin.com/in/seuperfil" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex items-center justify-center w-9 h-9 border border-zinc-700 rounded-full hover:border-[#0a66c2] hover:text-[#0a66c2] transition-all duration-200"
    >
      <i className="fa-brands fa-linkedin-in text-base"></i>
    </a> */}
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-500 pt-2 border-t border-zinc-800/60 w-full max-w-xs text-center">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5584996230097?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
        onClick={handleWhatsappClick}
      >
        <i className="fa-brands fa-whatsapp text-3xl md:text-4xl group-hover:rotate-12 transition-transform duration-300"></i>

        {/* Tooltip / Balão de ajuda (opcional no hover em telas grandes) */}
        <span className="absolute right-16 bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md hidden sm:block">
          Fale comigo no WhatsApp
        </span>
      </a>

      <Analytics />
    </>
  );
}

export default App;
