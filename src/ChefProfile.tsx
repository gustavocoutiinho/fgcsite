import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { chefProfiles } from "./chefProfiles";

const SYMPLA =
  "https://www.sympla.com.br/evento/festival-costume-gourmet/3512927";

export default function ChefProfile() {
  const { slug } = useParams();
  const chef = slug ? chefProfiles[slug] : undefined;

  useEffect(() => {
    if (!chef) return;
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = chef.tituloPagina;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    meta?.setAttribute("content", chef.metaDescription);
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
    };
  }, [chef]);

  if (!chef) {
    return (
      <div className="min-h-screen bg-creme grid place-items-center px-5 text-center font-sans">
        <div>
          <p className="text-vinho font-serif text-2xl font-bold mb-4">Chef não encontrado</p>
          <Link to="/#chefs" className="text-dourado font-bold">← Voltar para os chefs do festival</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-creme text-grafite font-sans">
      {/* ===== NAV ===== */}
      <header className="bg-creme/95 backdrop-blur border-b border-creme-soft">
        <div className="max-w-content mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/brand/logo-fcg.webp" alt="Festival Costume Gourmet" className="h-9 w-auto" />
          </Link>
          <a href={SYMPLA} target="_blank" rel="noopener" className="px-5 py-2.5 rounded-full bg-vinho text-creme text-[13px] font-bold tracking-wide hover:bg-[#4E1714] transition">
            Ingressos
          </a>
        </div>
      </header>

      {/* ===== HERO DO CHEF ===== */}
      <section className="relative px-5 pt-10 pb-14 md:pt-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(90% 60% at 50% 0%, #f3e6cf 0%, #FCF6EE 60%)" }} />
        <div className="max-w-content mx-auto">
          <Link to="/#chefs" className="inline-flex items-center gap-2 text-[13px] font-bold text-dourado hover:text-laranja mb-8">
            ← Voltar para os chefs do festival
          </Link>
          <div className="grid md:grid-cols-[320px_1fr] gap-10 md:gap-14 items-center">
            <div className="relative mx-auto md:mx-0 w-56 md:w-full">
              <div className="p-[2px] rounded-[2rem] bg-gradient-to-br from-dourado to-telha">
                <div className={`rounded-[calc(2rem-2px)] overflow-hidden aspect-[4/5] frame-real foto-grain ${!chef.foto ? `${chef.cor} grid place-items-center` : ""}`}>
                  {chef.foto ? (
                    <img src={chef.foto} alt={`${chef.primeiroNome} ${chef.resto}`} className="w-full h-full object-cover foto-real" />
                  ) : (
                    <span className="font-serif italic font-black text-creme/95 select-none" style={{ fontSize: 96, lineHeight: 1 }}>
                      {chef.primeiroNome.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              <span className="absolute -top-3 -right-3 text-[11px] font-bold tracking-[0.14em] px-3 py-1.5 rounded-full bg-vinho text-creme shadow-md">{chef.dia}</span>
            </div>
            <div>
              <div className="label-eyebrow font-bold uppercase text-dourado text-[11px] inline-flex items-center gap-2">
                <span className="w-5 h-px bg-dourado/50" /> Chef do festival <span className="w-5 h-px bg-dourado/50" />
              </div>
              <h1 className="font-serif font-extrabold text-vinho mt-3 leading-[0.98]" style={{ fontSize: "clamp(38px,7vw,72px)" }}>
                {chef.primeiroNome} <span className="italic text-dourado">{chef.resto}</span>
              </h1>
              <p className="mt-5 text-[15px] md:text-lg leading-relaxed text-grafite/80 max-w-xl">
                {chef.bioCurta}
              </p>
              <a href={SYMPLA} target="_blank" rel="noopener" className="inline-block mt-7 px-8 py-4 rounded-full bg-gradient-to-r from-dourado to-laranja text-vinho font-bold tracking-wide shadow-lg shadow-dourado/30 hover:brightness-105 transition">
                Garantir meu ingresso
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTIGO ===== */}
      <section className="px-5 pb-24">
        <div className="max-w-2xl mx-auto">
          <article>
            {chef.artigo.map((secao, i) => (
              <div key={i}>
                <h2 className="font-serif font-bold text-vinho text-2xl md:text-3xl mt-10 mb-4">{secao.titulo}</h2>
                {secao.paragrafos.map((p, j) => (
                  <p key={j} className="text-[15px] leading-relaxed text-grafite/85 mt-4">{p}</p>
                ))}
              </div>
            ))}
          </article>

          <div className="mt-14 pt-8 border-t border-creme-soft text-center">
            <p className="text-[13px] text-grafite/60 mb-4">Quer ver {chef.primeiroNome} {chef.resto} ao vivo?</p>
            <a href={SYMPLA} target="_blank" rel="noopener" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-dourado to-laranja text-vinho font-bold tracking-wide shadow-lg shadow-dourado/30 hover:brightness-105 transition">
              Garantir meu ingresso
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2a0b0a] text-creme px-5 py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(/brand/pattern-vinho.webp)", backgroundSize: "240px" }} aria-hidden="true" />
        <div className="max-w-content mx-auto relative">
          <div className="flex items-center justify-center gap-7 flex-wrap">
            <img loading="lazy" src="/brand/logo-fcg.webp" alt="Festival Costume Gourmet" className="h-12 w-auto" />
            <img loading="lazy" src="/brand/logo-saoluiz.webp" alt="São Luiz Supermercado" className="h-9 w-auto" />
            <img loading="lazy" src="/brand/selo-100anos.webp" alt="100 anos São Luiz" className="h-12 w-auto" />
          </div>
          <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-dourado/40 to-transparent my-7" aria-hidden="true" />
          <Link to="/" className="text-[13px] font-bold text-dourado hover:text-laranja">← Voltar para o site do festival</Link>
        </div>
      </footer>
    </div>
  );
}
