import { useEffect } from "react";
import { Link } from "react-router-dom";

const SYMPLA =
  "https://www.sympla.com.br/evento/festival-costume-gourmet/3512927";

export default function ChefClaudeTroisgros() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = "Claude Troisgros no Festival Costume Gourmet 2026";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "Claude Troisgros, herdeiro de uma das famílias mais importantes da gastronomia francesa, no Festival Costume Gourmet 2026, sexta-feira, em Fortaleza."
    );
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
    };
  }, []);

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
                <div className="rounded-[calc(2rem-2px)] overflow-hidden aspect-[4/5] frame-real foto-grain">
                  <img src="/chefs/claude-troisgros.webp" alt="Chef Claude Troisgros" className="w-full h-full object-cover foto-real" />
                </div>
              </div>
              <span className="absolute -top-3 -right-3 text-[11px] font-bold tracking-[0.14em] px-3 py-1.5 rounded-full bg-vinho text-creme shadow-md">SEXTA</span>
            </div>
            <div>
              <div className="label-eyebrow font-bold uppercase text-dourado text-[11px] inline-flex items-center gap-2">
                <span className="w-5 h-px bg-dourado/50" /> Chef convidado <span className="w-5 h-px bg-dourado/50" />
              </div>
              <h1 className="font-serif font-extrabold text-vinho mt-3 leading-[0.98]" style={{ fontSize: "clamp(38px,7vw,72px)" }}>
                Claude <span className="italic text-dourado">Troisgros</span>
              </h1>
              <p className="mt-5 text-[15px] md:text-lg leading-relaxed text-grafite/80 max-w-xl">
                Herdeiro de uma das famílias mais importantes da gastronomia francesa, Claude Troisgros mora no Brasil desde 1979 e é hoje um dos chefs mais queridos do país. Ele passa pelo Festival Costume Gourmet nesta sexta-feira, num dos encontros mais aguardados da edição do centenário do São Luiz.
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
            <p className="font-serif italic text-vinho text-xl md:text-2xl leading-snug border-l-2 border-dourado pl-6">
              "Meus cardápios misturam a técnica francesa com os produtos tropicais e exóticos do Brasil." É essa mistura, cultivada há mais de quatro décadas, que Claude Troisgros leva ao palco do Festival Costume Gourmet.
            </p>

            <h2 className="font-serif font-bold text-vinho text-2xl md:text-3xl mt-10 mb-4">Uma sobrenome que é sinônimo de cozinha francesa</h2>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              Claude Troisgros nasceu em 9 de abril de 1956, em Roanne, uma pequena cidade na região de Loire, no centro da França. Não é uma cidade qualquer para quem nasce com o sobrenome Troisgros: é lá que o avô dele, Jean Baptiste Troisgros, abriu nos anos 1930 o restaurante que daria início a uma das dinastias culinárias mais respeitadas do mundo. Os filhos de Jean Baptiste, Pierre e Jean Troisgros, tio e pai de Claude, transformaram aquele endereço familiar num dos templos da cozinha francesa e são creditados, ao lado de outros poucos nomes, pela criação da Nouvelle Cuisine, o movimento que na década de 1970 mudou a forma como o mundo pensava alta gastronomia: pratos mais leves, técnica precisa, ingrediente em primeiro lugar.
            </p>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              Crescer numa cozinha dessas não é sinônimo de escolha fácil. Claude se formou na Escola de Hotelaria de Thonon Les Bains, na fronteira da França com a Suíça, e seguiu o caminho natural de qualquer Troisgros: a cozinha profissional, dura, técnica, francesa até a última gota de manteiga.
            </p>

            <h2 className="font-serif font-bold text-vinho text-2xl md:text-3xl mt-10 mb-4">O Brasil que virou casa</h2>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              A vinda de Claude Troisgros ao Brasil, em 1979, não foi um plano de vida, foi um convite. O grande chef confeiteiro francês Gaston Lenôtre, um dos nomes mais influentes da pâtisserie mundial, foi quem abriu a porta para que o jovem chef cruzasse o Atlântico. O que era pra ser uma passagem virou residência definitiva: Claude nunca mais foi embora.
            </p>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              Nos anos 1980, ele chegou a comandar o restaurante Roanne em São Paulo, uma homenagem direta à cidade natal da família, hoje já fechado. Mas foi no Rio de Janeiro que Claude Troisgros construiu o que viria a ser um pequeno império gastronômico próprio, hoje formado por endereços com personalidades bem diferentes entre si: o raffinamento do Olympe, restaurante de alta gastronomia que carrega seu nome de forma mais autoral; o clima descontraído e carnívoro do CT Boucherie; o ar de bistrô parisiense do Le Blond; a informalidade do CT Brasseria; o formato buffet do Atelier Troisgros; e a intimidade do Chez Claude. Cada casa é uma forma diferente de contar a mesma história: a técnica francesa que ele carrega no sangue, temperada por décadas de convivência com os ingredientes, o calor e o jeito brasileiro de comer.
            </p>

            <h2 className="font-serif font-bold text-vinho text-2xl md:text-3xl mt-10 mb-4">Da cozinha para a tela</h2>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              Muito antes de virar rotina no Brasil, ver um chef de alta gastronomia na televisão era raridade. Claude Troisgros ajudou a mudar isso. Em 2004, ele estreou no GNT com o programa "Adivinha o que tem para jantar?", um dos pioneiros do gênero gastronômico na TV paga brasileira. Vieram depois "Menu Confiança", também no GNT, e passagens por atrações como "The Taste Brasil" e "Que Maravilha!".
            </p>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              Em outubro de 2019, Claude assumiu a apresentação de "Mestre do Sabor", da Rede Globo, um reality culinário concebido propositalmente como contraponto aos formatos mais agressivos do gênero: a ideia, segundo o próprio chef contou à imprensa na época, era valorizar a comida e os cozinheiros brasileiros sem o drama, as brigas ou a grosseria que marcam outros programas do tipo. Em outubro de 2023, ele também apareceu na Globo em "Vai Que Cola".
            </p>

            <h2 className="font-serif font-bold text-vinho text-2xl md:text-3xl mt-10 mb-4">Reconhecimento</h2>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              O trabalho de mais de quatro décadas rendeu a Claude Troisgros uma coleção de reconhecimentos. Em 2013, ele foi eleito o primeiro colocado na categoria Conjunto da Obra do prêmio 50 Best América Latina, um dos rankings mais respeitados da gastronomia do continente. Em 2014, recebeu o Prêmio Faz Diferença, do jornal O Globo. E em 2026, o nome Troisgros voltou a aparecer ao lado de uma estrela Michelin, o selo mais cobiçado da alta gastronomia mundial, reafirmando que a herança da família segue viva também em solo brasileiro.
            </p>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              Em 2007, ele reuniu parte do repertório de receitas que desenvolveu ao longo da carreira no livro "Receitas Preferidas do Chef Claude Troisgros", publicado pela Larousse do Brasil.
            </p>

            <h2 className="font-serif font-bold text-vinho text-2xl md:text-3xl mt-10 mb-4">Uma família, duas gerações na cozinha</h2>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              A herança Troisgros segue viva na geração seguinte. Thomas Troisgros, filho de Claude, também seguiu carreira como chef, mantendo o sobrenome de peso na cena gastronômica. Carolina Troisgros, sua irmã, é casada com o ator e humorista Marcos Porchat. A cozinha, pelo visto, segue sendo assunto de família havia quase cem anos, desde aquele primeiro restaurante do avô Jean Baptiste em Roanne.
            </p>

            <h2 className="font-serif font-bold text-vinho text-2xl md:text-3xl mt-10 mb-4">No Costume Gourmet</h2>
            <p className="text-[15px] leading-relaxed text-grafite/85 mt-4">
              É esse repertório, o de um francês que decidiu fazer do Brasil sua casa e da cozinha brasileira parte do seu vocabulário, que Claude Troisgros leva ao palco do Festival Costume Gourmet nesta sexta-feira. Numa edição que celebra os 100 anos do São Luiz Supermercado sob o conceito "Sabores de uma bela história", dificilmente haveria escolha mais simbólica: um chef cuja própria história pessoal atravessa gerações, países e tradições culinárias inteiras, para contar, ele também, a sua própria bela história.
            </p>
          </article>

          <div className="mt-14 pt-8 border-t border-creme-soft text-center">
            <p className="text-[13px] text-grafite/60 mb-4">Quer ver o Chef Claude Troisgros ao vivo?</p>
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
