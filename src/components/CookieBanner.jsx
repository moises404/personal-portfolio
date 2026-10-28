import React, { useState, useEffect } from "react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fez uma escolha
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
  localStorage.setItem("cookie_consent", "granted");

  // Atualiza a instrução no Analytics para liberado
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted'
    });
  }

  setShowBanner(false);
  // Recarrega para garantir que os scripts de rastreamento capturem a sessão atual
  window.location.reload();
};

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 p-4 shadow-2xl text-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-zinc-300 text-center sm:text-left">
          Nós utilizamos cookies para analisar o tráfego do site e melhorar sua experiência. 
          Ao continuar, você concorda com nossa coleta de dados anônimos.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs border border-zinc-600 rounded-lg text-zinc-300 hover:bg-zinc-800 transition-colors"
          >
            Rejeitar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-xs bg-[#C2A76D] text-zinc-950 font-bold rounded-lg hover:bg-[#b0945b] transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}