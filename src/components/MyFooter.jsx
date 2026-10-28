import React, { useState } from "react";

export function MyFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
        </div>

        {/* Link da Política de Privacidade */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs text-zinc-400 hover:text-amber-400 underline transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-500 pt-2 border-t border-zinc-800/60 w-full max-w-xs text-center">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </footer>

      {/* MODAL DE POLÍTICA DE PRIVACIDADE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-700 w-full max-w-lg rounded-2xl p-6 text-white shadow-2xl relative flex flex-col max-h-[85vh]">
            {/* Cabeçalho do Modal */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold text-amber-400">
                Política de Privacidade
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-white text-xl font-bold px-2 py-1"
                aria-label="Fechar modal"
              >
                &times;
              </button>
            </div>

            {/* Conteúdo da Política */}
            <div className="py-4 space-y-3 text-sm text-zinc-300 overflow-y-auto pr-2">
              <p>
                A sua privacidade é importante para nós. Esta política descreve como coletamos e utilizamos suas informações neste site.
              </p>
              <h4 className="font-semibold text-white pt-2">1. Coleta de Dados</h4>
              <p>
                Utilizamos ferramentas de análise (como o Google Analytics) para coletar dados anônimos de navegação, como páginas visitadas e tempo de permanência, com o objetivo de melhorar a experiência do usuário. Esses dados não identificam você pessoalmente.
              </p>
              <h4 className="font-semibold text-white pt-2">2. Contato via WhatsApp e E-mail</h4>
              <p>
                As informações fornecidas voluntariamente por você ao clicar nos botões de contato (como número de telefone e mensagens) são direcionadas exclusivamente para o atendimento direto da prestação de serviços.
              </p>
              <h4 className="font-semibold text-white pt-2">3. Cookies</h4>
              <p>
                O site utiliza cookies de preferência e estatísticos gerenciados através do seu consentimento prévio pelo banner de rodapé. Você pode alterar suas escolhas de navegação a qualquer momento limpando os dados do navegador.
              </p>
            </div>

            {/* Rodapé do Modal */}
            <div className="pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#C2A76D] text-zinc-950 text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-[#b0945b] transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}