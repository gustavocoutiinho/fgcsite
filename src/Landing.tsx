import { Fragment, useEffect, useRef, useState, type ReactNode, type CSSProperties, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import { motion, AnimatePresence } from "framer-motion";

const SYMPLA =
  "https://www.sympla.com.br/evento/festival-costume-gourmet/3512927";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=La+Maison+Coliseu+Av+Eng+Luiz+Vieira+555+Papicu+Fortaleza";
const WAZE = "https://waze.com/ul?q=La%20Maison%20Coliseu%20Av%20Eng%20Luiz%20Vieira%20555%20Papicu%20Fortaleza";
const NEWSLETTER = "https://www.instagram.com/channel/AbYOJmngcLM_wj4b/";
const LEADS_API = "https://festival-costume-gourmet.vercel.app/api/leads-b2b";
/* liga quando o chef convidado de sexta for divulgado nas redes; até lá, some do site sem apagar o trabalho */
const CHEF_SURPRESA_REVELADO = true;
const EVENTO = new Date("2026-09-18T15:00:00-03:00").getTime();

/* ---------- fade-in ao rolar (usabilidade Event Spark) ---------- */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => e[0].isIntersecting && (setSeen(true), io.disconnect()),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* estrela de 4 pontas da marca, em SVG puro (nunca bitmap) */
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
    </svg>
  );
}

const ICONES_PROGRAMACAO: Record<"cozinha" | "harmonizacao" | "musica", string> = {
  cozinha: "M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-1-2-1-2 1 2 3 3 3 6a5 5 0 0 1-10 0c0-5 3-6 5-12Z",
  harmonizacao: "M7 3h10l-1 6a4 4 0 0 1-3 3.9V17h3v2H8v-2h3v-4.1A4 4 0 0 1 8 9L7 3Z",
  musica: "M9 17a3 3 0 1 1-2-2.83V5l10-2v10.17a3 3 0 1 1-2-2.83V6.3L9 8v9Z",
};

function IconePrograma({ variante, className = "" }: { variante: "cozinha" | "harmonizacao" | "musica"; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={ICONES_PROGRAMACAO[variante]} fill="currentColor" />
    </svg>
  );
}

/* rótulo de seção com hairlines dos dois lados (regra visual do hero estendida ao site inteiro) */
function Eyebrow({ children, center = false, dark = false }: { children: ReactNode; center?: boolean; dark?: boolean }) {
  const line = dark ? "bg-dourado-lt/60" : "bg-dourado/50";
  const text = dark ? "text-dourado-lt" : "text-dourado";
  return (
    <div className={`label-eyebrow font-bold uppercase ${text} inline-flex items-center gap-2 text-[11px] ${center ? "justify-center w-full" : ""}`}>
      <span className={`w-5 h-px ${line}`} />
      {children}
      <span className={`w-5 h-px ${line}`} />
    </div>
  );
}

/* modal com o tema e a receita de um slot da programação */
function ReceitaModal({ titulo, tema, receita, onClose }: { titulo: string; tema?: string; receita?: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] bg-[#1a0605]/85 backdrop-blur-sm grid place-items-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-lg w-full max-h-[85vh] overflow-y-auto bg-creme rounded-3xl shadow-2xl p-7 md:p-9"
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] as const }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-vinho/10 hover:bg-vinho/20 grid place-items-center text-vinho transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          </button>
          <div className="label-eyebrow font-bold uppercase text-dourado text-[11px]">{receita ? "Receita" : "Tema"}</div>
          <h3 className="font-serif font-bold text-vinho text-xl md:text-2xl mt-1.5 pr-8">{titulo}</h3>
          {tema && <p className="mt-4 text-[13.5px] leading-relaxed text-grafite italic">{tema}</p>}
          {receita && (
            <div className="mt-5 pt-5 border-t border-creme-soft text-[13.5px] leading-relaxed text-grafite whitespace-pre-line">
              {receita}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* número que conta de 0 até o valor quando entra na tela (anime.js) */
function CountUp({ to, prefix = "", suffix = "", className, style }: { to: number; prefix?: string; suffix?: string; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          io.disconnect();
          const o = { v: 0 };
          animate(o, {
            v: to, duration: 1700, ease: "outExpo",
            onUpdate: () => { el.textContent = prefix + Math.round(o.v) + suffix; },
            onComplete: () => animate(el, { scale: [1, 1.08, 1], duration: 650, ease: "outQuad" }),
          });
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, prefix, suffix]);
  return <span ref={ref} className={className} style={style}>{prefix}0{suffix}</span>;
}

type LeadTipo = "patrocinio" | "expositor" | "imprensa";

const LEAD_LABELS: Record<LeadTipo, { empresa: string; mensagem: string }> = {
  patrocinio: { empresa: "Empresa/marca", mensagem: "Conte um pouco do que sua marca procura (cota, mídia kit, etc.)" },
  expositor: { empresa: "Restaurante/marca", mensagem: "O que você gostaria de expor no festival?" },
  imprensa: { empresa: "Veículo", mensagem: "Pauta ou o que você precisa pra cobertura" },
};

/* formulário inline que cai direto no portal interno (leads-b2b), sem WhatsApp */
function LeadForm({ tipo, onClose }: { tipo: LeadTipo; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "erro">("idle");
  const labels = LEAD_LABELS[tipo];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const whatsapp = String(data.get("whatsapp") || "").trim();
    if (!nome || (!email && !whatsapp)) { setStatus("erro"); return; }
    setStatus("sending");
    fetch(LEADS_API, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        tipo,
        nome,
        empresa: String(data.get("empresa") || "").trim(),
        email,
        whatsapp,
        mensagem: String(data.get("mensagem") || "").trim(),
      }),
    })
      .then((r) => r.json().catch(() => ({})))
      .then((j) => setStatus(j && j.ok ? "ok" : "erro"))
      .catch(() => setStatus("erro"));
  };

  if (status === "ok") {
    return (
      <div className="mt-4 rounded-2xl border border-dourado/40 bg-white/[0.06] p-5 text-center">
        <p className="text-[13.5px] font-semibold text-creme">Recebemos sua mensagem. O time vai te chamar em breve.</p>
        <button onClick={onClose} className="mt-3 text-[12px] font-bold text-dourado hover:text-laranja">Fechar</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 rounded-2xl border border-dourado/30 bg-white/[0.05] p-5 flex flex-col gap-2.5">
      <input name="nome" required placeholder="Seu nome" className="px-4 py-2.5 rounded-full bg-creme/95 text-grafite text-[13px] placeholder:text-grafite/50 outline-none" />
      <input name="empresa" placeholder={labels.empresa} className="px-4 py-2.5 rounded-full bg-creme/95 text-grafite text-[13px] placeholder:text-grafite/50 outline-none" />
      <div className="grid grid-cols-2 gap-2.5">
        <input name="email" type="email" placeholder="E-mail" className="px-4 py-2.5 rounded-full bg-creme/95 text-grafite text-[13px] placeholder:text-grafite/50 outline-none" />
        <input name="whatsapp" placeholder="WhatsApp" className="px-4 py-2.5 rounded-full bg-creme/95 text-grafite text-[13px] placeholder:text-grafite/50 outline-none" />
      </div>
      <textarea name="mensagem" placeholder={labels.mensagem} rows={2} className="px-4 py-2.5 rounded-2xl bg-creme/95 text-grafite text-[13px] placeholder:text-grafite/50 outline-none resize-none" />
      {status === "erro" && <p className="text-[11.5px] text-telha font-semibold">Preencha nome e pelo menos e-mail ou WhatsApp.</p>}
      <div className="flex gap-2 mt-1">
        <button type="submit" disabled={status === "sending"} className="flex-1 px-5 py-3 rounded-full bg-dourado text-vinho font-bold text-[13px] hover:brightness-105 transition disabled:opacity-60">
          {status === "sending" ? "Enviando…" : "Enviar"}
        </button>
        <button type="button" onClick={onClose} className="px-5 py-3 rounded-full border border-dourado/40 text-dourado font-bold text-[13px] hover:bg-dourado/10 transition">Cancelar</button>
      </div>
    </form>
  );
}

const experiencias = [
  { nome: "Recebendo em Casa", tag: "Experiência premium", desc: "Uma mesa, trinta lugares, serviço do começo ao fim e um chef convidado servindo do primeiro prato à sobremesa. Vagas limitadas por horário.", img: "/espacos/recebendo-em-casa.webp", selo: "ic-ramo" as const },
  { nome: "Palco Gourmet", tag: "Cozinha show", desc: "Chefs cearenses e de todo o país cozinhando ao vivo, com telão para ninguém perder o detalhe. A cada dia, outras mãos e outras receitas.", img: "/espacos/palco-gourmet.webp" },
  { nome: "Piano Bar", tag: "Vinhos e música", desc: "Taça na mão, sommelier ao lado e piano tocando. Degustação e harmonização em todas as noites.", img: "/espacos/piano-bar.webp", duotone: "duotone-om", selos: ["ic-rolha", "ic-sacarolha"] as const },
];

const numeros = [
  { to: 35, prefix: "+", suffix: "", l: "estandes", glow: "#D8992F" },
  { to: 3, prefix: "", suffix: "", l: "dias de festa", glow: "#DC463C" },
  { to: 30, prefix: "+", suffix: "", l: "chefs confirmados", glow: "#A0A04E" },
  { to: 3, prefix: "", suffix: "", l: "espaços", glow: "#D8992F" },
  { to: 30, prefix: "+", suffix: "", l: "marcas parceiras", glow: "#DC463C" },
  { to: 100, prefix: "", suffix: "%", l: "da renda destinada à doação", glow: "#A0A04E" },
];

const numeroVarianteContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const numeroVarianteItem = {  
  hidden: { opacity: 0, y: 56, scale: 0.8, filter: "blur(10px)" },
  show: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const chefs: { nome: string; sub?: string; casa?: string; atracao: string; dia: string; cor: string; foto?: string; link?: string; instagram?: string; instagram2?: string; bio?: string; pronome?: string; status?: "aconfirmar" }[] = [
  { nome: "Phelipe Carvalho", casa: "Curadoria gastronômica", atracao: "Embaixador São Luiz", dia: "", cor: "bg-telha", foto:"/chefs/phelipe-carvalho.webp", instagram: "https://www.instagram.com/phecarvalhopaduo/" },
  // SEXTA
  { link: "/chefs/georgia-santiago", pronome: "dela", nome: "Georgia Santiago", casa: "Muá Tuá", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-oliva", foto: "/chefs/georgia-santiago.webp", instagram: "https://www.instagram.com/georgiasantiago/" },
  { nome: "Daniel Sabbá", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-bordo", foto: "/chefs/daniel-sabba.webp", instagram: "https://instagram.com/danielsabba", link: "/chefs/daniel-sabba" },
  { link: "/chefs/chef-zena", pronome: "dela", nome: "Zena", sub: "Sabores de uma bela História", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-vinho", foto: "/chefs/zena.webp", instagram: "https://www.instagram.com/restaurante.zena/" },
  { nome: "Claude Troisgros", casa: "São Luiz", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-vinho", foto: "/chefs/claude-troisgros.webp", link: "/chefs/claude-troisgros", instagram: "https://www.instagram.com/c_troisgros/?hl=pt" },
  { nome: "Brunno Malheiros", casa: "Cheiro do Pão", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-oliva", foto: "/chefs/brunno-malheiros.webp", link: "/chefs/brunno-malheiros", instagram: "https://www.instagram.com/brunnopadeiro/" },
  { link: "/chefs/edil-costa", nome: "Edil Costa", atracao: "Palco Gourmet", dia: "SAB", cor: "bg-[#8a3d18]", foto: "/chefs/edil-costa.webp", instagram: "https://www.instagram.com/edilcostaoficial/" },
  { link: "/chefs/maria-braz", pronome: "dela", nome: "Maria Braz", atracao: "Piano Bar", dia: "SEX", cor: "bg-bordo", foto: "/chefs/maria-braz.webp", instagram: "https://www.instagram.com/mariabrazmb/" },
  { link: "/chefs/marbenia", pronome: "dela", nome: "Marbenia", atracao: "Piano Bar", dia: "SEX", cor: "bg-vinho", foto: "/chefs/marbenia.webp", instagram: "https://www.instagram.com/marbenia/" },
  { link: "/chefs/leiliane", pronome: "dela", nome: "Leiliane", casa: "Wineladies", atracao: "Piano Bar", dia: "SEX", cor: "bg-oliva", foto: "/chefs/leiliane.webp", instagram: "https://www.instagram.com/leilianepinheiro/" },
  { link: "/chefs/karime-loureiro", pronome: "dela", nome: "Karime Loureiro", casa: "", atracao: "Piano Bar", dia: "SEX", cor: "bg-bordo", foto: "/chefs/karime-loureiro.webp", instagram: "https://www.instagram.com/karimeloureiro/" },
  // { nome: "Jardenia", casa: "D'Origem", atracao: "Piano Bar", dia: "SEX", cor: "bg-vinho", foto: "/chefs/jardenia.webp" },
  { link: "/chefs/izabela-fiuza", pronome: "dela", nome: "Izabela Fiúza", casa: "La Maison · São Luiz", atracao: "Recebendo em Casa", dia: "SEX", cor: "bg-oliva", foto: "/chefs/isabela-fiuza.webp", instagram: "https://www.instagram.com/izabelafiuza/" },
  { link: "/chefs/bia-araujo", pronome: "dela", nome: "Bia Araújo", atracao: "Recebendo em Casa", dia: "SEX", cor: "bg-vinho", foto: "/chefs/bia-araujo.webp", instagram: "https://www.instagram.com/beatricearaujo/" },
  { link: "/chefs/mona", pronome: "dela", nome: "Mona", casa: "Netas de Olga", atracao: "Recebendo em Casa", dia: "SEX", cor: "bg-bordo", foto: "/chefs/mona.webp", instagram: "https://www.instagram.com/asnetasdeolga/" },
  { link: "/chefs/joao-filho", nome: "João Filho", sub: "Sommelier", atracao: "Recebendo em Casa", dia: "SEX", cor: "bg-[#8a3d18]", foto: "/chefs/joao-filho.webp", instagram: "https://www.instagram.com/joaofilhosommelier/" },
  // SÁBADO
  { link: "/chefs/matu-macedo", pronome: "dela", nome: "Matu Macêdo", sub: "Sabor de uma bela história", atracao: "Palco Gourmet", dia: "SAB", cor: "bg-vinho", foto: "/chefs/matu-macedo.webp", instagram: "https://www.instagram.com/mattumacedo/" },
  { nome: "Felipe Caputo", casa: "São Luiz", atracao: "Palco Gourmet", dia: "SAB", cor: "bg-vinho", foto: "/chefs/felipe-caputo.webp", instagram: "https://instagram.com/felipecaputo", link: "/chefs/felipe-caputo" },
  { nome: "Thales Romão", casa: "NOM · Molino Padaria Artesanal", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-[#8a3d18]", foto: "/chefs/thales-romao.webp", instagram: "https://instagram.com/thalesromao_", link: "/chefs/thales-romao" },
  { link: "/chefs/ralfo", nome: "Ralfo", casa: "Parrilleiro", atracao: "Palco Gourmet", dia: "SAB", cor: "bg-bordo", foto: "/chefs/ralfo.webp", instagram: "https://www.instagram.com/chefralfo/" },
  { link: "/chefs/marco-frossard", nome: "Marco Frossard", atracao: "Palco Gourmet", dia: "SAB", cor: "bg-[#8a3d18]", foto: "/chefs/marco-frossard.webp", instagram: "https://www.instagram.com/chefmarcofrossard/" },
  { link: "/chefs/barbara-saunders", pronome: "dela", nome: "Barbara Saunders e Leune", atracao: "Palco Gourmet", dia: "SAB", cor: "bg-vinho", foto: "/chefs/barbara-saunders.webp", instagram: "https://www.instagram.com/barbarasaunders/" },
  { link: "/chefs/fernanda-dantas", pronome: "dela", nome: "Fernanda Dantas", casa: "Coktelitas", atracao: "Piano Bar", dia: "SAB", cor: "bg-oliva", foto: "/chefs/fernanda-dantas.webp", instagram: "https://www.instagram.com/coktelitasdrinks/" },
  { link: "/chefs/carol-barreto", pronome: "dela", nome: "Carol Barreto", casa: "Santa Clara", atracao: "Piano Bar", dia: "SAB", cor: "bg-vinho", foto: "/chefs/carol-barreto.webp", instagram: "https://www.instagram.com/carolbarreto3/" },
  { link: "/chefs/marcelo-pimentel", nome: "Marcelo Pimentel", atracao: "Piano Bar", dia: "SAB", cor: "bg-bordo", foto: "/chefs/marcelo-pimentel.webp", instagram: "https://www.instagram.com/marcelo_pimentel/" },
  { link: "/chefs/julia-zimmerman", pronome: "dela", nome: "Julia Zimmerman", atracao: "Piano Bar", dia: "SAB", cor: "bg-oliva", foto: "/chefs/julia-zimmermann.webp" },
  { link: "/chefs/mauro-tirabosco", nome: "Mauro Tirabosco", sub: "Degustação de whisky", atracao: "Piano Bar", dia: "DOM", cor: "bg-bordo", foto: "/chefs/mauro-tirabosto.webp", instagram: "https://www.instagram.com/maurotirabosco/" },
  { link: "/chefs/luiz-de-franca", nome: "Luiz de França", atracao: "Recebendo em Casa", dia: "SAB", cor: "bg-vinho", foto: "/chefs/luiz-de-franca.webp", instagram: "https://www.instagram.com/chef_luizdefranca/" },
  // { nome: "Ana Paula Rezende", atracao: "Recebendo em Casa", dia: "SAB", cor: "bg-oliva", foto: "/chefs/ana-paula-rezende.webp", instagram: "https://www.instagram.com/chefannapaularezende/" },
  { link: "/chefs/dani-gondim", pronome: "dela", nome: "Dani Gondim", atracao: "Recebendo em Casa", dia: "SAB", cor: "bg-bordo", foto: "/chefs/dani-gondim.webp", instagram: "https://www.instagram.com/dani.gondim_/" },
  { link: "/chefs/felipe-cicconato", nome: "Felipe Cicconato", atracao: "Recebendo em Casa", dia: "SAB", cor: "bg-[#8a3d18]", foto: "/chefs/felipe-cicconato.webp", instagram: "https://www.instagram.com/felipecicconato/" },
  { link: "/chefs/frederico-jayme", nome: "Frederico Jayme", atracao: "Recebendo em Casa", dia: "SAB", cor: "bg-vinho", foto: "/chefs/frederico-jayme.webp", instagram: "https://www.instagram.com/cheffredericojayme/" },
  // DOMINGO
  { link: "/chefs/matheus-vieira", nome: "Matheus Vieira", casa: "Arroz Tio João", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-oliva", foto: "/chefs/matheus-vieira.webp", instagram: "https://instagram.com/chefmatheusvieira" },
  { nome: "Pepê", sub: "Pepê e Diego", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-[#8a3d18]", foto: "/chefs/pepe.webp", link: "/chefs/pepe-e-diego", pronome: "deles", instagram: "https://www.instagram.com/pepemva/" },
  { nome: "Diego", sub: "Pepê e Diego", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-vinho", foto: "/chefs/diego.webp", link: "/chefs/pepe-e-diego", pronome: "deles", instagram: "https://www.instagram.com/_diegofreire/" },
  { link: "/chefs/elcio-e-bia-nagano", pronome: "deles", nome: "Elcio e Bia Nagano", sub: "Oficina", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-bordo", foto: "/chefs/elcio-e-bia-nagano.webp", instagram: "https://www.instagram.com/elcionagano/", instagram2: "https://www.instagram.com/bianagano/" },
  { nome: "DJ Itaque", sub: "Participação com Elcio e Bia Nagano", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-vinho", foto: "/chefs/dj-itaque.webp", instagram: "https://www.instagram.com/itaque/" },
  { link: "/chefs/rafael-kim", nome: "Rafael Kim", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-vinho", foto: "/chefs/rafael-kim.webp", instagram: "https://www.instagram.com/_rafaelkim/" },
  { link: "/chefs/chef-zinda", pronome: "dela", nome: "Chef Zinda", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-oliva", foto: "/chefs/chef-zinda.webp", instagram: "https://www.instagram.com/restaurante.lafrance/" },
  { link: "/chefs/marco-ferrari", nome: "Marco Ferrari", casa: "Opção", atracao: "Piano Bar", dia: "DOM", cor: "bg-vinho", foto: "/chefs/marco-ferrari.webp", instagram: "https://www.instagram.com/vinhofortaleza/" },
  { link: "/chefs/clovis-holanda", nome: "Clovis Holanda", atracao: "Piano Bar", dia: "DOM", cor: "bg-oliva", foto: "/chefs/clovis-holanda.webp", instagram: "https://www.instagram.com/clovisholandajornalista/" },
  { link: "/chefs/marina-araujo", pronome: "dela", nome: "Marina Araújo", atracao: "Recebendo em Casa", dia: "DOM", cor: "bg-oliva", foto: "/chefs/marina-araujo.webp", instagram: "https://www.instagram.com/marinaaraujo/" },
  { link: "/chefs/gabi-barreto", pronome: "dela", nome: "Gabi Barreto", atracao: "Recebendo em Casa", dia: "DOM", cor: "bg-bordo", foto: "/chefs/gabi-barreto.webp", instagram: "https://www.instagram.com/gabibarretoa_/" },
  { link: "/chefs/renata", pronome: "dela", nome: "Renata", casa: "", atracao: "Recebendo em Casa", dia: "DOM", cor: "bg-vinho", foto: "/chefs/renata-azucar.webp", instagram: "https://www.instagram.com/azucar.atelier/" },
  { link: "/chefs/lia-quindere", pronome: "dela", nome: "Lia Quinderé", atracao: "Recebendo em Casa", dia: "DOM", cor: "bg-[#8a3d18]", foto: "/chefs/lia-quindere.webp", instagram: "https://www.instagram.com/liaquindere/" },
  { nome: "Jardenia", casa: "D'Origem", atracao: "Recebendo em Casa", dia: "DOM", cor: "bg-oliva", foto: "/chefs/jardenia.webp", instagram: "https://www.instagram.com/jardenia_siqueira/" },
  // AINDA EM CONFIRMAÇÃO
];

const instituicoes = [
  {
    sigla: "IPREDE",
    nome: "Instituto da Primeira Infância",
    vira: "futuro",
    desc: "Há 40 anos cuida da saúde, da nutrição e do desenvolvimento de crianças na primeira infância e apoia mães em situação de vulnerabilidade, em Fortaleza.",
    site: "https://iprede.org.br/",
    foto: "/impacto/iprede.webp",
    foco: "center 40%",
    legenda: "Entrega de refeições do IPREDE",
  },
  {
    sigla: "IPOM",
    nome: "Instituto Povo do Mar",
    vira: "educação",
    desc: "Transforma a vida de crianças e adolescentes da comunidade do Vicente Pinzón, no litoral de Fortaleza, com esporte, arte e educação.",
    site: "https://institutopovodomar.org.br/",
    foto: "/impacto/ipom.webp",
    foco: "center 26%",
    legenda: "Oficina de educação ambiental do IPOM",
  },
  {
    sigla: "ICC",
    nome: "Instituto do Câncer do Ceará",
    vira: "cuidado",
    desc: "Leva tratamento a pacientes com câncer no Ceará e mantém a Casa Vida, que acolhe famílias que vêm a Fortaleza em busca de tratamento oncológico.",
    site: "https://icc.org.br/",
    foto: "/impacto/icc.webp",
    foco: "center center",
    legenda: "Campanha dos 80 anos do ICC",
  },
];

const masterLogos = [
  "dorigem", "emape", "granja-regina",
  "sao-jose", "tijuca", "opcao", "santa-clara", "stella-artois","piraque","adria","heineken","la-maison","galbani"
].map((n) => `/patrocinadores/master-${n}.webp`);

const premiumLogos = [
  "kimura","byd","moncoc","alentejo","luckys","haciendas","nescau-protein","moura","santo-oleo","campari","turatti", "avine", "br-spices", "brutal-fruit", "imac", "doritos", "madi",
  "naturagua", "netumar", "nossa-fruta", "prokitchen", "pronto-carne", "sabor-vida", "pomar", "tio-joao",
  "lecuisinier","dolcedivino","president","unimed","aperol","castelo","rio-valley","bone","chivas"
].map((n) => `/patrocinadores/premium-${n}.webp`).concat([
  "/patrocinadores/logo-jackdaniels.webp",
  "/patrocinadores/logo-lor.webp",
  "/patrocinadores/master-friboi.webp"
]);

const faq = [
  ["Posso comprar por dia ou o combo dos três dias?", "Os dois. Tem ingresso por dia e o combo para os três dias de festival."],
  ["Como acesso o evento depois de comprar?", "A compra é pela Sympla. Na bilheteria, você apresenta o ingresso pelo celular e retira a pulseira de acesso."],
  ["Quantos ingressos posso comprar?", "Quantos quiser. Não há limite por pessoa."],
  ["Posso levar crianças?", "Sim. O Festival Costume Gourmet é um ambiente para toda a família. Menores de idade deverão estar acompanhados pelos pais ou responsáveis. Crianças de até 11 anos não pagam. A partir dos 12 anos, será necessária a apresentação do ingresso e, quando aplicável, da carteirinha para comprovação do benefício."],
  ["Tem estacionamento?", "Sim, o local conta com +300 vagas de estacionamento disponíveis. Se for beber, utilize o aplicativo de transporte de sua preferência."],
  ["Posso sair e voltar no mesmo dia?", "Pode, é só usar a pulseira de acesso entregue na entrada."],
];

const galeria = Array.from({ length: 22 }, (_, i) => `/galeria/${i}.jpg`);

const instagramPreview = ["/galeria/g03.webp", "/galeria/g04.webp", "/galeria/g06.webp", "/galeria/g08.webp", "/espacos/piano-bar.webp", "/espacos/palco-gourmet.webp"];

const dias = [
  { dia: "Sexta", num: "18", mes: "SET", foco: "Noite de abertura", desc: CHEF_SURPRESA_REVELADO ? "O festival abre com Claude Troisgros no Palco Gourmet e o Piano Bar servindo a noite inteira." : "O festival abre com um chef convidado surpresa no Palco Gourmet e o Piano Bar servindo a noite inteira.", ic: "ic-vinho" },
  { dia: "Sábado", num: "19", mes: "SET", foco: "Palco dos chefs", desc: "Cozinha ao vivo do começo ao fim, marcas em ativação e, às 15h, o anúncio dos indicados no palco principal.", ic: "ic-queijo" },
  { dia: "Domingo", num: "20", mes: "SET", foco: "Recebendo em Casa", desc: "O fim de festa é na mesa posta, com chef convidado e clima de casa cheia.", ic: "ic-cafe" },
];

const programacaoBlocos = [
  { t: "Cozinha Show", d: "No Palco Gourmet, chefs cearenses e de todo o país cozinham diante do público, com telão para ninguém perder o detalhe. A cada dia, outro chef e outras receitas.", icone: "cozinha" as const },
  { t: "Jantares e Harmonizações", d: "No Recebendo em Casa, uma mesa de trinta lugares, serviço completo e chef convidado. Vagas limitadas, com reserva por horário.", icone: "harmonizacao" as const },
  { t: "Atrações musicais", d: "Piano Bar com música ao vivo todas as noites e o Projeto Cearal levando instrumental cearense pelos espaços abertos.", icone: "musica" as const },
];

const programacaoVarianteContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const programacaoVarianteCard = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const } },
};

const programacaoVarianteIcone = {
  hidden: { opacity: 0, scale: 0.3, rotate: -25 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring" as const, stiffness: 260, damping: 15, delay: 0.15 } },
};

/* grade real dos espaços do festival, por horário, sincronizada do cronograma ao vivo do portal interno (18/08/2026).
   "nota" descreve a atração (o que é servido, o formato). O campo Participação do portal, que traz o
   patrocinador do momento, NÃO entra aqui: nome de patrocinador não aparece na grade pública. */
const gradeEspacos: { id: string; nome: string; icon: string; grade: { dia: string; slots: { h: string; o: string; nota?: string; subtitulo?: string; patrocinadorLogo?: string | string[]; tema?: string; receita?: string; status: "confirmado" | "aconfirmar" | "fixo" | "intervalo" }[] }[] }[] = [
  { id: "palco", nome: "Palco Gourmet", icon: "mic", grade: [
    { dia: "Sexta", slots: [
      { h: "16h00 - 16h40", o: "Georgia Santiago", nota: "Muá Tuá + Pomar da Polpa", patrocinadorLogo: ["/patrocinadores/logo-arroztiojoao.webp", "/patrocinadores/premium-pomar.webp"], tema: "Tradição, criatividade e sabores do Ceará em uma só mordida. O atum de Itarema, defumado e cheio de personalidade, ganha o toque marcante do gochujang e a delicadeza do tarê de caju. Uma criação que surpreende pelo contraste e celebra ingredientes que têm identidade. Por Chef Georgia Santiago.", receita: "Oniguiri de atum de Itarema defumado, maionese gochujang e tarê de caju", status: "confirmado" },
      { h: "16h40 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 17h40", o: "Daniel Sabbá", nota: "Pronto Carnes", patrocinadorLogo: "/patrocinadores/premium-br-spices.webp", status: "confirmado" },
      { h: "17h40 - 18h00", o: "Intervalo", status: "intervalo" },
      { h: "18h00 - 18h40", o: "Chef Zena + Zenilda Bezerra", nota: "Zena + Zenilda Bezerra · Granja Regina", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Tem sabor que conquista na primeira mordida. Crocante por fora, suculento por dentro e com aquele toque especial que só uma receita cheia de personalidade pode ter. O clássico Bolinho de Carne da Zena é a próxima receita que vamos aprender no Palco Gourmet. Por Chef Zena.", receita: "Bolinha de carne da Zena\n\nDeixar reservada a carne moída e a água. Misturar bem em um bowl grande as verduras e os temperos. Aos poucos ir acrescentando a carne moída e ir misturando bem até que seja possível modelar. Molhar de acordo com a necessidade. Começar a modelar as bolinhas.\n\nEm uma frigideira grande e funda colocar bastante óleo e deixar esquentar bem. Colocar delicadamente as bolinhas para fritar. Uma dica é encher a frigideira para que elas não desmontem. Observar de virar para que elas fiquem fritas de maneira uniforme.", status: "confirmado" },
      { h: "18h40 - 19h20", o: "Intervalo", status: "intervalo" },
      { h: "19h20 - 20h20", o: CHEF_SURPRESA_REVELADO ? "Claude Troisgros" : "Chef convidado surpresa", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Quer aprender a preparar um risotto cheio de sabor e personalidade? Venha descobrir com o Chef Claude Troisgros os segredos do Risotto de Tomate, Carne Seca e Queijo Coalho e transforme ingredientes brasileiros em um prato irresistível.", receita: "Risotto de tomate, carne seca e queijo coalho", status: "confirmado" },
      { h: "20h00 - 20h40", o: "Brunno Malheiros", nota: "Cheiro do Pão", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "O panettone que conquistou o 2º lugar no mundo, em Milão, vai virar a sobremesa do seu Natal. Na oficina Panettone Caramellato, o chef Brunno Malheiros, da Cheiro do Pão, sobe ao palco com o seu lievito madre, o fermento vivo que usa na produção dos panettones, conta como um pão italiano o levou ao mundial e ensina a transformar uma fatia de panettone em sobremesa: caramelizada na manteiga, com creme diplomata e doce de leite, usando ingredientes do São Luiz. História, técnica e degustação. Vem provar!", receita: "Panettone Caramellato\n\n1. Em uma panela, junte o leite, o creme de leite, a pasta de baunilha e metade do açúcar. Leve ao fogo médio até levantar fervura.\n2. Em um bowl, misture a gema, o restante do açúcar e o amido.\n3. Adicione aos poucos essa mistura ao leite quente, mexendo sempre com fouet, até engrossar e começar a borbulhar.\n4. Transfira para um recipiente, cubra com plástico filme encostando no creme e leve à geladeira por pelo menos 2 horas.\n5. Abra a fava de baunilha ao meio e raspe as sementes. Bata o creme de leite fresco gelado com o açúcar e as sementes até o ponto de chantilly.\n6. Mexa o creme pâtissière frio até ficar liso e incorpore o chantilly em duas etapas, delicadamente, com uma espátula. Esse é o creme diplomata (proporções iguais entre creme pâtissière e chantilly). Reserve na geladeira, em saco de confeitar.\n7. Aqueça uma frigideira antiaderente em fogo médio com um pouco de manteiga. Polvilhe açúcar sobre a face cortada da fatia de panettone e coloque-a com o açúcar voltado para baixo. Deixe 1 a 2 minutos, até caramelizar. Polvilhe açúcar na outra face, vire e repita.\n8. Sirva a fatia ainda morna com 40 g de creme diplomata e 40 g de doce de leite.", status: "confirmado" },
      { h: "21h00 - 21h40", o: "Thales Romão", nota: "NOM · Molino", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Crocância, cremosidade e muito sabor em uma só receita. Venha aprender com o Chef Thales Romão os segredos do Folhado de Camarão com Vinagrete Cremoso e descubra como transformar ingredientes simples em uma experiência surpreendente. Não perca essa experiência e venha aprender, saborear e se inspirar!", receita: "Folhado de camarão com vinagrete cremoso\n\n1. Folhado de camarão\nCubra a abóbora com papel-alumínio e asse a 180°C, até ficar macia. Retire a polpa, amasse até obter um purê e reserve. Grelhe o camarão rapidamente, até ficar cozido. Deixe esfriar antes de montar o recheio. Misture o purê de abóbora com o Catupiry, a salsa picada, o manjericão e o camarão. Disponha três camadas de massa filo, espalhe o recheio e cubra com mais três camadas de massa filo. Pincele com manteiga e leve ao forno preaquecido a 170°C por 15 a 20 minutos, até dourar e ficar crocante. Deixe descansar brevemente e corte em seis porções.\n\n2. Maionese base\nColoque o ovo, a gema, o sal, a mostarda Dijon e o vinagre em um recipiente, todos gelados. Bata adicionando o óleo gelado em fio, até emulsionar e formar uma maionese firme. Reserve sob refrigeração.\n\n3. Vinagrete cremoso\nCorte o tomate e a cebola roxa em cubos pequenos. Misture à maionese base. Ajuste o sal e a pimenta e reserve sob refrigeração.\n\n4. Montagem\nDisponha 50 g de vinagrete cremoso na base do prato. Coloque uma porção de 75 g do folhado de camarão sobre o vinagrete. Acrescente 5 g do molho de ostra e finalize com coentro. Sirva imediatamente para preservar a crocância.", status: "confirmado" },
      { h: "21h40 - 22h00", o: "Fechamento", status: "fixo" },
    ]},
    { dia: "Sábado", slots: [
      { h: "16h00 - 16h40", o: "Marco Frossard", nota: "Prokitchen", patrocinadorLogo: "/patrocinadores/logo-prokitchen.webp", receita: "Arroz de coco com siri-boiá e chips de batata-doce\n\n1. Arroz: refogue a cebola e o alho no óleo. Acrescente o arroz e refogue. Junte o caldo de peixe, o leite de coco e a água. Tempere com sal, pimenta-branca e louro. Cozinhe até o arroz ficar macio e soltinho. Finalize com a manteiga e o coco fresco.\n2. Siri: refogue a cebola, o alho, os pimentões e o tomate no azeite. Acrescente a carne de siri e cozinhe rapidamente, preservando sua textura. Adicione o dendê e o leite de coco. Finalize com limão, coentro, cebolinha e pimenta-de-cheiro.\n3. Montagem: coloque o arroz de coco como base. Disponha o siri refogado por cima e finalize com os chips de batata-doce laranja. Acrescente algumas gotas do óleo de coentro e limão, coentro fresco e raspas de limão.", status: "confirmado" },
      { h: "16h40 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 18h00", o: "Matu Macêdo + Phelipe Carvalho", nota: "Matu Macêdo + Phelipe Carvalho · Pomar da Polpa", patrocinadorLogo: "/patrocinadores/premium-pomar.webp", receita: "Bolo de abacaxi com cenoura\n\nPré-aqueça o forno a 170ºC. Unte uma assadeira de 23x33 cm com manteiga. Misture a farinha de trigo, o bicarbonato de sódio e todas as especiarias (canela, gengibre, noz-moscada), reserve. Em uma tigela, bata o açúcar granulado, o açúcar mascavo, o extrato de baunilha, o óleo, a polpa e os ovos até obter uma mistura homogênea. Vá adicionando os ingredientes secos e misture bem. Junte a cenoura ralada, o abacaxi e as nozes ou castanha-do-pará. Incorpore tudo delicadamente com uma espátula. Despeje a massa na assadeira e espalhe uniformemente. Asse por 40 a 45 minutos, ou até que um palito no centro saia limpo. Deixe esfriar completamente antes de cobrir com a cobertura.\n\nCobertura: bata o chantilly na batedeira até ficar em ponto firme (picos rígidos) e reserve na geladeira. Em outra tigela, bata o cream cheese com o açúcar de confeiteiro e o limão até ficar cremoso. Adicione o cream cheese batido ao chantilly reservado, misturando apenas com um batedor.", status: "confirmado" },
      { h: "18h00 - 18h20", o: "Intervalo", status: "intervalo" },
      { h: "18h20 - 19h20", o: "Felipe Caputo", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Um prato que combina sabor, técnica e muito charme à mesa. Venha aprender com o Chef Felipe Caputo os segredos de um delicioso Arroz de Polvo e descubra como preparar esse clássico cheio de personalidade. Não perca essa experiência e venha aprender com quem entende de sabor!", receita: "Arroz de polvo\n\nPara o polvo e o caldo: em uma panela grande, aqueça o azeite e adicione o alho, a cebola, a cenoura e o alho-poró. Refogue por alguns minutos, até os vegetais começarem a liberar seus aromas. Acrescente as folhas de louro, o tomilho, o alecrim e as páprica. Adicione aproximadamente 2 litros de água e deixe o caldo levantar fervura. Segurando o polvo pela cabeça, mergulhe os tentáculos no caldo fervente e retire em seguida; repita esse processo três vezes. Depois da terceira imersão, coloque todo o polvo dentro do caldo. Assim que o caldo voltar a aquecer, abaixe o fogo e cozinhe por aproximadamente 1 hora a 1h10, ou até o polvo estar macio quando perfurado com a ponta de uma faca. Retire o polvo do caldo e reserve. Coe o caldo e mantenha-o aquecido para o preparo do arroz. Separe alguns tentáculos inteiros para a finalização e corte o restante em pedaços médios.\n\nPara o arroz: em uma panela larga, aqueça o azeite. Adicione a cebola roxa, o chorizo espanhol e a pimenta dedo-de-moça. Refogue até a cebola amolecer e o chorizo dourar. Acrescente o arroz bomba (ou próprio para paella) e refogue por cerca de 1 minuto. Deglaceie com o vinho tinto e cozinhe até o álcool evaporar. Adicione o caldo quente do polvo aos poucos, mantendo o arroz em fogo médio, até cozinhar de maneira uniforme. Tempere com sal e pimenta-do-reino, se necessário. Próximo do ponto, acrescente as azeitonas, a maior parte dos tomates e o polvo picado, reservando parte dos tomates para a finalização. Termine o cozimento mantendo a preparação úmida e suculenta, e finalize com um fio generoso de azeite extravirgem.\n\nPara os tentáculos grelhados: aqueça bem uma frigideira, adicione a manteiga e um fio de azeite, acrescente os tentáculos inteiros reservados e polvilhe com páprica. Grelhe em fogo alto até ficarem bem dourados e reserve para a montagem.\n\nPara o aioli de páprica picante: coloque em um recipiente as gemas, os dentes de alho assados, a mostarda Dijon, o suco de limão-siciliano, a páprica picante, o Tabasco, o sal e a pimenta-do-reino. Misture o óleo de girassol com o azeite extravirgem e bata a base com um mixer, acrescentando a mistura de óleos em fio até formar uma emulsão espessa e lisa. Acrescente as raspas de limão-siciliano e ajuste sal, limão, páprica ou Tabasco. Transfira para uma bisnaga e mantenha refrigerado.\n\nPara finalizar: transfira o arroz de polvo para o prato de servir, distribua os tomates reservados por cima, posicione os tentáculos grelhados, finalize com salsinha fresca picada e cebolete, faça pequenas gotas do aioli de páprica picante com a bisnaga e termine com um fio de azeite extravirgem.", status: "confirmado" },
      { h: "19h20 - 19h40", o: "Intervalo", status: "intervalo" },
      { h: "19h40 - 20h20", o: "Bárbara Saunders", status: "confirmado" },
      { h: "20h20 - 21h00", o: "Edil Costa", nota: "Le Cuiser · Netumar", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Quer aprender um prato que tem o sabor do Nordeste em cada detalhe? Venha descobrir com o Chef Edil Costa os segredos do Camarão com Creme de Jerimum, finalizado com queijo coalho maçaricado e coentro fresco. Uma combinação cremosa, marcante e cheia de identidade.", receita: "Camarão com creme de jerimum: queijo coalho maçaricado e coentro fresco\n\n1. Creme de jerimum: refogue metade da cebola e do alho em parte da gordura. Junte o jerimum, tempere e acrescente caldo aos poucos. Cozinhe até ficar macio. Bata até obter um creme liso e reserve.\n2. Base cremosa: em uma panela ampla, aqueça parte da gordura e refogue o restante da cebola e do alho. Acrescente os tomates e cozinhe rapidamente, mantendo parte da textura.\n3. Molho: junte o creme de jerimum, a nata e o creme de leite fresco. Misture em fogo baixo até ficar uniforme e aveludado. Ajuste a textura com caldo e corrija o sal e a pimenta.\n4. Camarões: tempere os camarões com sal e pimenta. Sele-os em pequenas porções, em frigideira bem quente, somente até mudarem de cor. Incorpore-os ao molho próximo do momento de servir.\n5. Queijo coalho: distribua os cubinhos de queijo coalho em assadeiras e doure com maçarico ou salamandra até formar pontos caramelizados.\n6. Finalização: finalize o creme com o coentro fresco. Sirva cerca de 120 g por pessoa e complete cada porção com os cubinhos de queijo coalho maçaricados e folhas de coentro.", status: "confirmado" },
      { h: "21h00 - 21h40", o: "Ralfo", nota: "Parrilleiro · Br Spices", patrocinadorLogo: ["/patrocinadores/logo-arroztiojoao.webp", "/patrocinadores/premium-br-spices.webp"], tema: "Não perca essa experiência! Venha aprender com o Chef Ralfo Ifanger os segredos de um Steak Tartare Dry Aged com Pegada Italiana e descubra como transformar um clássico em uma criação surpreendente.", receita: "Steak tartare dry aged com pegada italiana\n\n1. Corte o Dry Aged em cubos pequenos (é mais fácil enquanto a carne ainda estiver levemente congelada).\n2. Pique muito bem a gordura Dry Aged.\n3. Tempere a carne e a gordura com sal, pimenta-do-reino e a cebola roxa picada. Misture bem.\n4. Adicione as alcaparras picadas, a passata de tomate e o azeite.\n5. Monte em travessas, pratos ou tábuas, regue com mais um fio de azeite, rale o queijo pecorino finamente por cima e decore com as folhas de manjericão. Sirva acompanhado das torradas de baguete na manteiga ainda quentes.", status: "confirmado" },
      { h: "21h40 - 22h00", o: "Fechamento", status: "fixo" },
    ]},
    { dia: "Domingo", slots: [
      { h: "16h00 - 16h40", o: "Rafael Kim", nota: "Comida Asiática · Arroz Tio João", patrocinadorLogo: "", tema: "Venha aprender com o Chef Rafael Kim a preparar um autêntico Dan Dan Mian, cheio de sabor, aroma e personalidade. Não perca essa experiência e venha se aventurar pelos sabores orientais!", receita: "Dan dan mian\n\nCortar a copa lombo em tiras. Temperar com sal, pimenta, molho de ostra e shoyu. Fritar até ficar dourado. Cozinhar o capellini, escorrer e reservar. No bowl, adicionar o vinagre balsâmico, shoyu, açúcar, tahini, pasta de amendoim, glutamato, molho de ostra, o alho picado e o chilli oil. Com o molho finalizado, acrescentar o macarrão cozido e as tiras de copa lombo e servir. Finalizar com cebolinha, coentro, broto e um fio de chilli oil.", status: "confirmado" },
      { h: "16h40 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 17h40", o: "Matheus Vieira", nota: "Br Spices", patrocinadorLogo: "/patrocinadores/logo-arroztiojoao.webp", tema: "Venha aprender com o Chef Matheus Vieira os segredos de um Arroz de Pato à Brasileira e descubra como transformar ingredientes e tradição em uma experiência irresistível. Não perca essa experiência: venha aprender, saborear e se surpreender!", receita: "Arroz de pato à brasileira\n\n1. Pato: desosse o pato e armazene os ossos e carcaça para o caldo. Tempere o pato com sal, pimenta-do-reino, alho, cebola, louro e ervas. Reserve.\n2. Caldo: leve as carcaças ao forno a 200°C até dourar bem. Em uma panela, refogue a cebola, cenoura, alho e ervas na gordura, cubra com água, acrescente as carcaças douradas e cozinhe lentamente, retirando as impurezas, até obter um caldo concentrado.\n3. Arroz: sele bem os pedaços de pato até dourar e reserve. Na mesma panela, refogue cebola, alho e pimenta dedo-de-moça na gordura do pato. Acrescente o extrato de tomate, deixe dourar o fundo da panela e adicione o vinho branco seco aos poucos. Adicione o arroz e envolva bem no refogado. Adicione o caldo de pato quente gradualmente, os pedaços de pato, e cozinhe até o arroz ficar al dente.\n4. Finalização: finalize com raspas e sumo de laranja, castanha de caju picada, coentro e salsa.", status: "confirmado" },
      { h: "17h40 - 18h00", o: "Intervalo", status: "intervalo" },
      { h: "18h00 - 18h40", o: "Chef Zinda + Phelipe Carvalho", nota: "Chef Zinda + Phelipe Carvalho", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Venha aprender os segredos de um clássico da gastronomia francesa. Descubra como preparar um Magret de Pato com técnica, precisão e muito sabor, em uma receita assinada pela Chef Zinda.", status: "confirmado" },
      { h: "18h40 - 19h00", o: "Intervalo", status: "intervalo" },
      { h: "19h00 - 19h40", o: "Pepê e Diego", nota: "Br Spices", patrocinadorLogo: "/patrocinadores/premium-br-spices.webp", tema: "Venha aprender os segredos do Crudo de Peixe Kombujime! Uma técnica japonesa que transforma o peixe através do tempo, do sabor e da precisão. Com Chef Diego Freire e Pedro Paulo, descubra como preparar esse prato delicado, intenso e cheio de personalidade.", receita: "Crudo de peixe Kombujime\n\nPeixe cru: fatie o peixe fresco em sashimi.\n\nMolho ponzu: ferva suavemente todos os ingredientes em uma panela em fogo baixo. Após a fervura, tampe a panela e deixe absorver sabor por alguns minutos, coe o molho, refrigere e sirva frio.\n\nFurikake: toste levemente todos os ingredientes em uma frigideira em fogo baixo, até obter um dourado leve e crocância. Processe no liquidificador até virar um pó granulado.\n\nSalsa criolla: corte em cubinhos bem pequenos todos os ingredientes, tempere com sal, pimenta-do-reino e conserve com óleo de soja.", status: "confirmado" },
      { h: "19h40 - 20h00", o: "Intervalo", status: "intervalo" },
      { h: "20h00 - 21h00", o: "Elcio e Bia Nagano (Part. DJ Itaque)", nota: "Oficina", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", status: "confirmado" },
    ]},
  ]},
  { id: "piano", nome: "Piano Bar", icon: "wine", grade: [
    { dia: "Sexta", slots: [
      { h: "15h00 - 16h00", o: "Piano", status: "fixo" },
      { h: "16h00 - 16h40", o: "Maria Braz", nota: "São Luiz · Degustação", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Uma história que atravessa gerações e também pode ser contada através do vinho. Maria Braz, terceira geração da São Braz Bebidas, convida o público para uma experiência entre vinho, tradição e celebração, percorrendo a trajetória de uma marca genuinamente nordestina que há quase 50 anos faz parte de muitas mesas, encontros e brindes. E essa história não será apenas contada: será também degustada.", status: "confirmado" },
      { h: "16h40 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 17h40", o: "Marbenia", nota: "São Luiz · Degustação", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Marbênia Gonçalves, Head Sommelière, Wine Hunter e juíza de vinhos, convida você para uma vivência singular com fatos curiosos e histórias pitorescas de vinhos, revelados com sensibilidade e conhecimento de quem vive o vinho todos os dias. Mais do que uma degustação, uma descoberta. Venha descobrir o vinho além do rótulo.", status: "confirmado" },
      { h: "17h40 - 18h00", o: "Intervalo", status: "intervalo" },
      { h: "18h00 - 18h40", o: "Leiliane", nota: "São Luiz · Degustação", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Eu não vendo vinho, eu vendo histórias! Vinho bom é aquele que rende boas histórias! Vamos brindar, conversar e degustar com Leiliane Pinheiro, sommelière e fundadora da Confraria Wineladies. Um encontro leve, descontraído e, claro, com bons vinhos para acompanhar.", status: "confirmado" },
      { h: "18h40 - 19h00", o: "Intervalo", status: "intervalo" },
      { h: "19h00 - 19h40", o: "Momento Chivas Regal", nota: "São Luiz · Degustação", patrocinadorLogo: ["/patrocinadores/premium-chivas.webp"], status: "confirmado" },
      { h: "19h40 - 20h00", o: "Intervalo", status: "intervalo" },
      { h: "20h00 - 20h40", o: "Beatriz Marcondes", nota: "D'Origem", subtitulo: "Remy Cointreau / Interfood", patrocinadorLogo: "/patrocinadores/master-opcao.webp", status: "confirmado" },
      { h: "20h40 - 21h00", o: "Intervalo", status: "intervalo" },
      { h: "21h00 - 21h40", o: "Momento Heineken por João Filho", patrocinadorLogo: "/patrocinadores/master-heineken.webp", tema: "Vamos para o Piano Bar! Um papo leve e descomplicado sobre a Cerveja Praya, trazendo todo o frescor, sabor e conceito dessa marca incrível, com João Filho Sommelier, pela Heineken. Uma experiência para conhecer, degustar e brindar!", status: "confirmado" },
    ]},
    { dia: "Sábado", slots: [
      { h: "15h00 - 16h00", o: "Piano", status: "fixo" },
      { h: "16h00 - 16h40", o: "Fernanda Dantas com Momento Chivas Regal", nota: "Spritz + Campari", patrocinadorLogo: "/patrocinadores/premium-chivas.webp", status: "confirmado" },
      { h: "16h40 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 17h40", o: "Carol Barreto", nota: "Santa Clara", patrocinadorLogo: "/patrocinadores/master-santa-clara.webp", status: "confirmado" },
      { h: "17h40 - 18h00", o: "Intervalo", status: "intervalo" },
      { h: "18h00 - 18h40", o: "Jack Daniel's", nota: "Apresentador a confirmar", patrocinadorLogo: "/patrocinadores/logo-jackdaniels.webp", status: "confirmado" },
      { h: "18h40 - 19h00", o: "Intervalo", status: "intervalo" },
      { h: "19h00 - 19h40", o: "Karime Loureiro", nota: "Whisky · São Luiz", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Do simples ao sofisticado, o espumante surpreende. Da pipoca ao caviar, descubra como ele pode transformar sabores e ocasiões com Karime Loureiro. Venha descobrir combinações que vão surpreender o seu paladar!", status: "confirmado" },
      { h: "19h40 - 20h00", o: "Intervalo", status: "intervalo" },
      { h: "20h00 - 20h40", o: "Momento Heineken", patrocinadorLogo: "/patrocinadores/master-heineken.webp", status: "confirmado" },
      { h: "20h40 - 21h00", o: "Intervalo", status: "intervalo" },
      { h: "21h00 - 21h40", o: "Carne & Vinho por Marcelo Pimentel", nota: "Marcelo + Carlos · BTCH 746", patrocinadorLogo: "/patrocinadores/logo-butchers.webp", tema: "Quem escolhe o vinho é a carne. A boa harmonização começa no corte, não na garrafa. Vamos provar, conversar e harmonizar com Marcelo Pimentel, sócio do Butcher's 746 e fundador do Grupo Pim Food. Um talk cheio de sabor para fechar o sábado, com a carne no centro da mesa e o vinho fazendo companhia.", status: "confirmado" },
      { h: "21h50 - 22h00", o: "Fechamento", status: "fixo" },
    ]},
    { dia: "Domingo", slots: [
      { h: "15h00 - 16h00", o: "Piano", status: "fixo" },
      { h: "16h00 - 16h40", o: "Marco Ferrari", nota: "Opção", patrocinadorLogo: "/patrocinadores/master-opcao.webp", status: "confirmado" },
      { h: "16h40 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 17h40", o: "Mauro Tirabosco", tema: "Do clássico ao surpreendente, uma experiência para quem aprecia bons sabores! Vamos mergulhar no fascinante mundo dos vermutes e do whisky japonês, conhecer e descobrir os detalhes por trás desses universos, com o mixologista Mauro Tirabosco. Prepare-se para descobrir, degustar e brindar novos sabores!", status: "confirmado" },
      { h: "17h40 - 18h00", o: "Intervalo", status: "intervalo" },
      { h: "18h00 - 18h40", o: "Clovis Holanda + Karime Loureiro", nota: "Vinho · São Luiz", patrocinadorLogo: "/brand/logo-sao-luiz-cor.webp", tema: "Certo ou errado: harmonizações sem medo de ser feliz!", status: "confirmado" },
      { h: "18h40 - 19h00", o: "Intervalo", status: "intervalo" },
      { h: "19h00 - 19h40", o: "Momento Heineken", patrocinadorLogo: "/patrocinadores/master-heineken.webp", status: "confirmado" },
      { h: "19h50 - 20h00", o: "Intervalo", status: "intervalo" },
      { h: "20h00 - 20h40", o: "Momento Chivas Regal", nota: "Domaine Montes Claros", patrocinadorLogo: "/patrocinadores/premium-chivas.webp", status: "confirmado" },
      { h: "20h40 - 21h00", o: "Fechamento", status: "fixo" },
    ]},
  ]},
  { id: "casa", nome: "Recebendo em Casa", icon: "home", grade: [
    { dia: "Sexta", slots: [
      { h: "16h00 - 17h30", o: "Izabela Fiúza + Phelipe Carvalho + João Filho", nota: "La Maison · São Luiz · Opção", patrocinadorLogo: ["/patrocinadores/master-la-maison.webp","/patrocinadores/master-heineken.webp"], status: "confirmado" },
      { h: "17h30 - 17h50", o: "Intervalo", status: "intervalo" },
      { h: "17h50 - 19h20", o: "Bia Araújo + Karime Loureiro", nota: "Heineken · Dry aged 1953", patrocinadorLogo: ["/patrocinadores/master-friboi.webp"], tema: "Um menu para despertar todos os sentidos. Da delicadeza da abóbora assada com queijo de cabra ao sabor marcante do T-Bone dry age, finalizando com um creme de baunilha fresca, bananas assadas e doce de leite. Uma experiência que combina ingredientes, texturas e sabores em cada etapa. Prepare-se para uma experiência gastronômica inesquecível, assinada pela chef Bia Araújo.", receita: "Entrada: abóbora assada com queijo de cabra, sementes tostadas e vinagrete de laranja bahia.\nPrato principal: T-bone dry age de 45 a 60 dias de maturação, com batatas douradas na manteiga, milho doce e chimichurri.\nSobremesa: creme de baunilha fresca com bananas assadas, castanha de caju e doce de leite.", status: "confirmado" },
      { h: "19h20 - 19h40", o: "Intervalo", status: "intervalo" },
      { h: "19h40 - 22h00", o: "Phelipe Carvalho + Mona", nota: "Phelipe Carvalho + Mona · Opção", patrocinadorLogo: ["/brand/logo-sao-luiz-cor.webp", "/patrocinadores/master-opcao.webp"], status: "confirmado" },
    ]},
    { dia: "Sábado", slots: [
      { h: "16h00 - 17h30", o: "Chef Luiz de França + Ana Paula Rezende", nota: "Lor · Pronto Carnes", patrocinadorLogo: "/patrocinadores/logo-lor.webp", receita: "Sobremesa: tiramisu de café L'OR com chocolate amargo.", status: "confirmado" },
      { h: "17h30 - 17h50", o: "Intervalo", status: "intervalo" },
      { h: "17h50 - 19h20", o: "João Filho + Dani Gondim", nota: "Heineken", patrocinadorLogo: "/patrocinadores/master-heineken.webp", tema: "Venha experimentar uma viagem de sabores pelas memórias da Chef Danielle Gondim. Espanha, Sertão, Itália e afetos se encontram em um menu autoral que transforma ingredientes e histórias em experiências à mesa.", receita: "Entrada: croqueta de caranguejo, romesco de castanha.\nPrincipal: paniscia alla novarese, feijão-verde, suíno do sol e glace de cajuína.\nSobremesa: bolo da vó Araci, ganache de maracujá, gel de pitaya, merengue e azeite.\n\nCroqueta espanhola de caranguejo: refogue o alho picado no azeite até dourar, acrescente os demais temperos e o colorau. Adicione o caranguejo já temperado e deixe secar bem a água; retire da panela e reserve. Na mesma panela, adicione a manteiga e o dendê, deixe derreter e acrescente a farinha, deixando tostar. Adicione o leite e o leite de coco, junte esse creme ao caranguejo, leve para gelar, formate, empane e frite.\n\nMolho romesco com castanha: leve o pimentão, o tomate e o alho ao forno com um pouco de azeite e páprica até ficarem bem assados, com a pele escurecendo. Quando estiver quase pronto, acrescente as castanhas e deixe assar um pouco. Bata todos os ingredientes no liquidificador até ficar liso.\n\nPaniscia alla novarese: refogue a cebola no azeite até murchar bem. Corte a cenoura em cubinhos pequenos. Acrescente o arroz e refogue. Adicione o salame e o bacon, depois o vinho e o caldo de legumes aos poucos, até ficar al dente. Acrescente o feijão-verde já cozido e o sal. Em uma frigideira bem quente com um fio de azeite, sele a carne fatiada até o ponto. Acrescente a cajuína e deixe reduzir, adicione a manteiga bem gelada e mexa bem. Sirva a paniscia no prato, com a carne fatiada e o molho por cima.\n\nSuíno do sol: misture os ingredientes, passe na carne e leve à geladeira por 3 dias. Corte e refogue.", status: "confirmado" },
      { h: "19h40 - 22h00", o: "Frederico Jayme + Felipe Cicconato + Karime Loureiro", nota: " Br Spices", patrocinadorLogo: "/patrocinadores/master-friboi.webp", tema: "Sabores de casa, com sabor de experiência! O Chef Frederico Jayme convida para uma experiência que passeia por sabores marcantes e combinações surpreendentes. De uma farofa de pato confitado com uvas caramelizadas ao roast beef de maminha dry age com mousseline de macaxeira e castanha-de-caju, um menu pensado para despertar os sentidos e celebrar a boa mesa.", receita: "Sabores de casa por Chef Frederico Jayme\n\nEntrada: farofa de pato confitado, piccalilli de repolho roxo, redução de vinho tinto e uvas tintas caramelizadas.\nPrincipal: roast beef de maminha dry age 1953 com mostarda Dijon temperada, parmesão gratinado, alcaparras e redução de vinagre balsâmico, acompanhado de mousseline de macaxeira com castanha-de-caju.\n\nEntrada: confite lentamente o pato até ficar macio e desfie. Use parte da gordura do próprio pato para refogar cebola e alho, acrescente o pato desfiado e finalize com farinha de mandioca, ajustando sal e pimenta. Para o piccalilli, fatie finamente o repolho roxo e cozinhe rapidamente com vinagre, açúcar, mostarda e temperos, mantendo textura e acidez. Para a redução de vinho tinto, leve o vinho e o açúcar ao fogo baixo até obter consistência levemente xaroposa. Salteie as uvas tintas até começarem a caramelizar. Na montagem, sirva a farofa de pato com o piccalilli, a redução de vinho tinto e as uvas caramelizadas.\n\nPrincipal: tempere a maminha dry age 1953 e asse em forno a 180°C, virando durante o processo para manter o interior rosado. Deixe descansar e fatie finamente, como um roast beef. Pincele com mostarda Dijon temperada, acrescente parmesão e gratine. Finalize com alcaparras e redução de vinagre balsâmico (vinagre e açúcar reduzidos em fogo baixo até obter uma calda leve). Para a mousseline, cozinhe a macaxeira até ficar macia, processe ainda quente com manteiga e creme de leite até ficar lisa e leve, finalizando com castanha-de-caju tostada e triturada.", status: "confirmado" },
    ]},
    { dia: "Domingo", slots: [
      { h: "16h00 - 17h30", o: "Chef Marina Araújo + João Filho", nota: "Heineken · Granja Regina", patrocinadorLogo: "/patrocinadores/master-heineken.webp", tema: "Sabores que despertam a curiosidade e conquistam à primeira garfada. Do ajo blanco com camarão e uvas verdes grelhadas ao irresistível folhado de maçã verde com chocolate belga, este menu é uma viagem por combinações surpreendentes. Venha descobrir um menu pensado para surpreender.", receita: "Recebendo em casa por Chef Marina Araújo\n\nEntrada: ajo blanco com camarão e uvas verdes grelhadas.\nPrincipal: saltimbocca suíno com purê cremosíssimo e cebola crocante.\nSobremesa: folhado de maçã verde com sorvete de chocolate belga e crocante de chocolate branco.\n\nAjo blanco: deixe as amêndoas sem pele de molho em água fria por pelo menos 4 horas e escorra. Hidrate o pão branco sem casca em um pouco de água gelada. No liquidificador, bata as amêndoas, o pão, o alho, o vinagre e metade da água gelada até ficar bem liso. Com o liquidificador ligado, acrescente o azeite extravirgem em fio, formando uma emulsão. Adicione o restante da água aos poucos até obter uma sopa cremosa e fluida. Tempere com sal, passe por peneira fina e leve à geladeira por pelo menos 2 horas. Tempere os camarões com sal, pimenta e raspas de limão, e sele rapidamente em frigideira bem quente. Corte as uvas verdes ao meio e grelhe rapidamente na mesma frigideira. Na montagem, coloque o ajo blanco gelado no fundo do prato, disponha os camarões e as uvas grelhadas e finalize com azeite extravirgem.\n\nSaltimbocca suíno: limpe o filé-mignon suíno, corte em 6 porções e abra formando escalopes uniformes. Tempere com sal e pimenta-do-reino, disponha folhas de sálvia e uma ou duas fatias de presunto cru sobre cada escalope e prenda com palito. Passe levemente na farinha, retirando o excesso. Sele o lado do presunto e da sálvia até dourar, vire e doure o outro lado, e reserve aquecido. Deglaceie a frigideira com vinho branco seco, reduza pela metade, acrescente o caldo e reduza novamente até um molho concentrado. Desligue o fogo e incorpore a manteiga gelada aos poucos, mexendo para emulsionar. Retorne os escalopes rapidamente à frigideira para envolvê-los no molho.\n\nPurê de batata cremoso: cozinhe as batatas em água salgada até ficarem bem macias, escorra e passe pelo espremedor ainda quentes; para textura mais fina, passe novamente por peneira. Aqueça o creme de leite fresco com o leite integral. Em fogo baixo, incorpore a manteiga à batata aos poucos e adicione gradualmente a mistura de creme e leite quente até a textura desejada, sedosa e cremosa. Ajuste o sal e finalize com noz-moscada.\n\nCebola crocante: corte as cebolas em lâminas muito finas, misture farinha de trigo com amido de milho, passe as cebolas nessa mistura retirando o excesso e frite aos poucos em óleo a 160–170°C até dourarem. Escorra sobre papel absorvente e tempere com sal.\n\nFolhado de maçã verde: mantenha a massa folhada refrigerada, abra e corte em retângulos, disponha em assadeira com papel-manteiga e faça furinhos com garfo no centro. Corte as maçãs Granny Smith em lâminas finas com um pouco de suco de limão e arrume sobre cada retângulo. Pincele as bordas com ovo batido, distribua açúcar sobre as maçãs, finalize com pedaços de manteiga e uma pitada de canela, e asse a 200°C por 18–25 minutos até dourar. Para servir, aqueça rapidamente, monte com uma bola de sorvete de chocolate belga, o crocante de chocolate branco e açúcar de confeiteiro.\n\nCrocante de chocolate branco: faça um caramelo seco com o açúcar; quando estiver âmbar, acrescente a castanha-de-caju ou amêndoas, a manteiga e uma pitada de flor de sal. Espalhe sobre papel-manteiga e deixe esfriar, depois pique grosseiramente. Derreta o chocolate branco, misture parte do praliné, espalhe em camada fina sobre papel-manteiga e deixe cristalizar antes de quebrar em pedaços.", status: "confirmado" },
      { h: "17h30 - 17h50", o: "Intervalo", status: "intervalo" },
      { h: "17h50 - 19h20", o: "Gabi Barreto + Renata + Jardenia", nota: "Dorigem", patrocinadorLogo: "/patrocinadores/master-dorigem.webp", status: "confirmado" },
      { h: "19h20 - 19h40", o: "Intervalo", status: "intervalo" },
      { h: "19h40 - 22h00", o: "Phelipe Carvalho + Lia Quinderé + Jardenia", nota: "Phelipe Carvalho + Lia Quinderé · Pagueti + Dorigem", patrocinadorLogo: "/patrocinadores/logo-pagueti.webp", receita: "Entrada: amuse de queijo terroir Nossa Santa com prime rib.\nSobremesa: sopa de chocolate com Sucroc e Baniwa.", status: "confirmado" },
    ]},
  ]},
];

const produtoresLocais = [
  { nome: "Santa Clara", logo: "/patrocinadores/master-santa-clara.webp" },
  { nome: "Stella Artois Pure Gold", logo: "/patrocinadores/master-stella-artois.webp" },
  { nome: "Tijuca", logo: "/produtores/tijuca.webp" },
  { nome: "Granja Regina", logo: "/produtores/granja-regina.webp" },
  { nome: "D'origem", logo: "/patrocinadores/master-dorigem.webp" },
  { nome: "M. Dias Branco", logo: "/patrocinadores/master-mdiasbranco.webp" },
  { nome: "Galbani", logo: "/patrocinadores/master-galbani.webp" },
  { nome: "Opção", logo: "/patrocinadores/master-opcao.webp" }, 
  { nome: "La Maison", logo: "/patrocinadores/master-la-maison.webp" },
  { nome: "Heineken", logo: "/patrocinadores/master-heineken.webp" },
  { nome: "Emape ALimentos", logo: "/patrocinadores/master-emape.webp"}

];

const produtoresVarianteContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const produtoresVarianteCard = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const } },
};

/* vitrine "edições anteriores": grade em bento com lightbox */
const edicoesAnterioresImgs = [
  "/edicoes-anteriores/DSC_0098.jpg",
  "/edicoes-anteriores/DSC_0284.jpg",
  "/edicoes-anteriores/DSC_0355.jpg",
  "/edicoes-anteriores/ea1.jpeg",
  "/edicoes-anteriores/ea2.jpeg",
  "/edicoes-anteriores/ea3.jpeg",
];

const edicoesAnterioresSpan = [
  "col-span-2 row-span-2",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "col-span-2 row-span-1",
];

const edicoesAnterioresContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const edicoesAnterioresItem = {
  hidden: { opacity: 0, y: 34, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const } },
};


const regras = [
  { t: "Para toda a família", d: "Ambiente para todas as idades. Menores devem estar acompanhados dos responsáveis." },
  { t: "Chuva ou sol, o festival acontece", d: "O La Maison Coliseu é 100% coberto. Do primeiro brinde ao último prato, o tempo lá fora não muda nada aqui dentro." },
];

const ingressoInfo = [
  { t: "Por dia ou combo", d: "Escolha um dia ou leve os três de uma vez, no combo. Sem limite de ingressos por pessoa." },
  { t: "Meia-entrada", d: "Meia-entrada conforme a lei, com a devida comprovação na entrada." },
  { t: "Estudante de gastronomia", d: "Gratuidade para estudantes de gastronomia, mediante apresentação da credencial ou comprovante de matrícula." },
];

function LogoMarquee({ logos, dur, reverse = false }: { logos: string[]; dur: string; reverse?: boolean }) {
  const seq = [...logos, ...logos];
  return (
    <div className="marquee py-1">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`} style={{ "--dur": dur } as React.CSSProperties}>
        {seq.map((src, i) => (
          <div key={i} className="mx-2.5 shrink-0 h-24 w-40 bg-white rounded-2xl shadow-sm border border-creme-soft grid place-items-center px-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:scale-105">
            <img src={src} alt="" loading="lazy" className="max-h-[52px] max-w-[130px] w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* vitrine animada das edições anteriores, com lightbox por teclado/clique */
function GaleriaEdicoesAnteriores() {
  const [aberto, setAberto] = useState<number | null>(null);
  const total = edicoesAnterioresImgs.length;

  useEffect(() => {
    if (aberto === null) return;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(null);
      if (e.key === "ArrowRight") setAberto((i) => (i === null ? i : (i + 1) % total));
      if (e.key === "ArrowLeft") setAberto((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto, total]);

  return (
    <section id="edicoes-anteriores" className="px-5 py-20 md:py-28 relative overflow-hidden">
      <img loading="lazy" src="/brand/carimbo-vinho.webp" alt="" aria-hidden="true" className="absolute -top-16 -left-24 w-96 opacity-[0.08] -rotate-[10deg] pointer-events-none select-none hidden md:block" />
      <div className="max-w-content mx-auto relative">
        <Reveal>
          <Eyebrow center>Retrospectiva</Eyebrow>
          <h2 className="font-serif font-extrabold text-vinho mt-2 text-center" style={{ fontSize: "clamp(30px,5.5vw,54px)" }}>
            Edições anteriores do Costume Gourmet
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[15px] leading-relaxed text-grafite/75 text-center">
            As edições que vieram antes desta. Clique numa foto para ver de perto.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[130px] sm:auto-rows-[150px] gap-3 mt-10"
          style={{ gridAutoFlow: "dense" }}
          variants={edicoesAnterioresContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {edicoesAnterioresImgs.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setAberto(i)}
              variants={edicoesAnterioresItem}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative rounded-2xl overflow-hidden frame-real foto-grain text-left ${edicoesAnterioresSpan[i]}`}
              aria-label={`Ver foto ${i + 1} de ${total} em tamanho grande`}
            >
              <img
                loading="lazy"
                src={src}
                alt="Registro de uma edição anterior do Festival Costume Gourmet"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 foto-real"
                style={i % 2 === 1 ? { filter: "url(#duotone-vl)" } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vinho/0 to-transparent opacity-0 group-hover:opacity-100 group-hover:from-vinho/60 transition-opacity duration-500" />
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-11 h-11 rounded-full bg-creme/90 grid place-items-center shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-vinho" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                    <path d="M11 8v6M8 11h6" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {aberto !== null && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[#1a0605]/95 backdrop-blur-sm grid place-items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setAberto(null)}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setAberto(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-creme/10 hover:bg-creme/20 grid place-items-center text-creme transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Foto anterior"
              onClick={(e) => { e.stopPropagation(); setAberto((i) => (i === null ? i : (i - 1 + total) % total)); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-creme/10 hover:bg-creme/20 grid place-items-center text-creme transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={(e) => { e.stopPropagation(); setAberto((i) => (i === null ? i : (i + 1) % total)); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-creme/10 hover:bg-creme/20 grid place-items-center text-creme transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.div
              key={aberto}
              className="relative max-w-4xl max-h-[80vh] w-full"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] as const }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={edicoesAnterioresImgs[aberto]}
                alt="Registro de uma edição anterior do Festival Costume Gourmet"
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl foto-real"
              />
              <div className="mt-3 text-center text-[12px] tracking-[0.15em] uppercase text-creme/60">
                {aberto + 1} / {total}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* vitrine "o festival por dentro": carrossel horizontal com lightbox por clique */
function GaleriaFestival() {
  const [aberto, setAberto] = useState<number | null>(null);
  const total = galeria.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(true);
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    if (aberto === null) return;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(null);
      if (e.key === "ArrowRight") setAberto((i) => (i === null ? i : (i + 1) % total));
      if (e.key === "ArrowLeft") setAberto((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto, total]);

  const medirScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPodeVoltar(el.scrollLeft > 8);
    setPodeAvancar(el.scrollLeft < max - 8);
    setProgresso(max > 0 ? el.scrollLeft / max : 0);
  };

  useEffect(() => {
    medirScroll();
    const el = trackRef.current;
    if (!el) return;
    const onResize = () => medirScroll();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const mover = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const passo = card ? card.offsetWidth + 12 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * passo, behavior: "smooth" });
  };

  return (
    <section id="galeria" className="px-5 pb-4 md:pb-8 relative overflow-hidden">
      <img loading="lazy" src="/brand/carimbo-oliva.webp" alt="" aria-hidden="true" className="absolute -bottom-20 -right-20 w-[480px] opacity-[0.10] -rotate-[8deg] pointer-events-none select-none hidden md:block" />
      <div className="max-w-content mx-auto relative">
        <Reveal>
          <Eyebrow center>Galeria</Eyebrow>
          <h2 className="font-serif font-extrabold text-vinho mt-2 text-center" style={{ fontSize: "clamp(30px,5.5vw,54px)" }}>
            O festival por dentro
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[15px] leading-relaxed text-grafite/75 text-center">
            Os ambientes desta edição, antes de encherem de gente. Clique numa foto para ver de perto.
          </p>
        </Reveal>
        <Reveal>
          <div className="relative mt-10">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 z-10 bg-gradient-to-r from-creme to-transparent transition-opacity duration-300"
              style={{ opacity: podeVoltar ? 1 : 0 }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 z-10 bg-gradient-to-l from-creme to-transparent transition-opacity duration-300"
              style={{ opacity: podeAvancar ? 1 : 0 }}
            />

            <button
              type="button"
              aria-label="Voltar fotos"
              onClick={() => mover(-1)}
              disabled={!podeVoltar}
              className="hidden sm:grid absolute left-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-creme shadow-lg border border-creme-soft place-items-center text-vinho transition-all duration-300 hover:scale-105 hover:bg-white disabled:opacity-0 disabled:pointer-events-none"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Avançar fotos"
              onClick={() => mover(1)}
              disabled={!podeAvancar}
              className="hidden sm:grid absolute right-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-creme shadow-lg border border-creme-soft place-items-center text-vinho transition-all duration-300 hover:scale-105 hover:bg-white disabled:opacity-0 disabled:pointer-events-none"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              ref={trackRef}
              onScroll={medirScroll}
              className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scroll-px-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)" }}
            >
              {galeria.map((src, i) => (
                <button
                  key={src}
                  data-card
                  type="button"
                  onClick={() => setAberto(i)}
                  className="group relative shrink-0 snap-start rounded-2xl overflow-hidden frame-real foto-grain text-left w-[72vw] sm:w-[300px] md:w-[340px] aspect-[4/3]"
                  aria-label={`Ver foto ${i + 1} de ${total} em tamanho grande`}
                >
                  <img
                    src={src} alt="Ambiente do festival" loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 foto-real"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dourado/0 opacity-0 group-hover:opacity-100 group-hover:from-dourado/30 to-transparent transition-opacity duration-500" />
                  <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-11 h-11 rounded-full bg-creme/90 grid place-items-center shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-vinho" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                        <path d="M11 8v6M8 11h6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 h-[3px] w-full max-w-[220px] mx-auto rounded-full bg-creme-soft overflow-hidden">
              <div
                className="h-full rounded-full bg-dourado transition-[width] duration-150 ease-out"
                style={{ width: `${8 + progresso * 92}%` }}
              />
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {aberto !== null && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[#1a0605]/95 backdrop-blur-sm grid place-items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setAberto(null)}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setAberto(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-creme/10 hover:bg-creme/20 grid place-items-center text-creme transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Foto anterior"
              onClick={(e) => { e.stopPropagation(); setAberto((i) => (i === null ? i : (i - 1 + total) % total)); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-creme/10 hover:bg-creme/20 grid place-items-center text-creme transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={(e) => { e.stopPropagation(); setAberto((i) => (i === null ? i : (i + 1) % total)); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-creme/10 hover:bg-creme/20 grid place-items-center text-creme transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.div
              key={aberto}
              className="relative max-w-4xl max-h-[80vh] w-full"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] as const }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galeria[aberto]}
                alt="Ambiente do festival"
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl foto-real"
              />
              <div className="mt-3 text-center text-[12px] tracking-[0.15em] uppercase text-creme/60">
                {aberto + 1} / {total}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Countdown() {
  const calc = () => {
    const diff = Math.max(0, EVENTO - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
      done: diff === 0,
    };
  };
  const [t, setT] = useState(calc);
  const wrap = useRef<HTMLDivElement>(null);
  const prev = useRef(t);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (!wrap.current) return;
    const els = wrap.current.querySelectorAll<HTMLElement>("[data-unit]");
    const cur = [t.d, t.h, t.m, t.s];
    const pv = [prev.current.d, prev.current.h, prev.current.m, prev.current.s];
    els.forEach((el, i) => {
      if (cur[i] !== pv[i]) {
        animate(el, { translateY: [-9, 0], opacity: [0.3, 1], duration: 450, ease: "outExpo" });
        if (i === 3) {
          el.classList.remove("pulseglow");
          void el.offsetWidth;
          el.classList.add("pulseglow");
        }
      }
    });
    prev.current = t;
  }, [t]);
  if (t.done) {
    return (
      <div className="text-center font-serif font-extrabold text-dourado mt-3" style={{ fontSize: "clamp(28px,6vw,44px)" }}>
        É agora. O festival começou!
      </div>
    );
  }
  const pad = (n: number) => String(n).padStart(2, "0");
  const units: [string, string][] = [
    [String(t.d), "dias"],
    [pad(t.h), "horas"],
    [pad(t.m), "min"],
    [pad(t.s), "seg"],
  ];
  return (
    <div ref={wrap} className="flex items-start justify-center gap-2 md:gap-5 mt-7 max-w-2xl mx-auto">
      {units.map(([v, l], i) => (
        <Fragment key={l}>
          <div className="text-center relative w-20 md:w-28">
            <div className="absolute inset-x-0 top-0 h-14 md:h-20 rounded-full bg-dourado opacity-20 blur-2xl -z-10" aria-hidden="true" />
            <div data-unit className="font-serif font-extrabold text-dourado tabular-nums" style={{ fontSize: "clamp(40px,11vw,76px)", lineHeight: 1 }}>{v}</div>
            <div className="text-[11px] md:text-[13px] font-bold tracking-[0.16em] uppercase text-creme/70 mt-2.5">{l}</div>
          </div>
          {i < units.length - 1 && <Sparkle className="w-3 h-3 md:w-4 md:h-4 text-dourado/50 mt-5 md:mt-7 shrink-0" />}
        </Fragment>
      ))}
    </div>
  );
}

function Instituicoes() {
  const n = instituicoes.length;
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);
  const cur = instituicoes[i];
  return (
    <div className="mt-8">
      <p className="text-center text-[15px] md:text-lg text-creme/80">
        Seu ingresso vira{" "}
        <span key={cur.vira} className="cfade inline-block font-serif italic font-bold text-dourado">{cur.vira}</span>.
      </p>
      <div key={cur.sigla} className="cfade relative mt-7 max-w-xl mx-auto bg-white/[0.04] border border-musgo/25 rounded-3xl text-center overflow-hidden">
        <div className="absolute top-0 left-0 h-[3px] bg-musgo fillbar z-20" />
        <div className="relative h-[215px] md:h-[275px] overflow-hidden">
          <img loading="lazy" src={cur.foto} alt={cur.legenda} className="w-full h-full object-cover" style={{ objectPosition: cur.foco }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #26260A 0%, rgba(38,38,10,.82) 20%, rgba(38,38,10,.18) 55%, rgba(38,38,10,0) 100%)" }} />
        </div>
        <div className="relative px-8 md:px-10 pb-8 md:pb-10 -mt-10">
          <div className="absolute inset-x-8 top-2 h-16 rounded-full bg-musgo opacity-20 blur-2xl -z-10" aria-hidden="true" />
          <div className="font-serif font-extrabold text-dourado" style={{ fontSize: "clamp(30px,7vw,44px)" }}>{cur.sigla}</div>
          <div className="text-creme font-semibold text-[15px] mt-1">{cur.nome}</div>
          <p className="text-creme/80 text-[14px] leading-relaxed mt-4 max-w-md mx-auto">{cur.desc}</p>
          <a href={cur.site} target="_blank" rel="noopener" className="inline-block mt-7 px-7 py-3 rounded-full bg-musgo/90 text-oliva font-bold text-[13px] tracking-wide hover:bg-musgo transition">
            Conhecer o {cur.sigla}
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-6">
        <button aria-label="Anterior" onClick={() => setI((p) => (p - 1 + n) % n)} className="w-9 h-9 rounded-full border border-musgo/40 text-musgo hover:bg-musgo hover:text-oliva transition grid place-items-center">‹</button>
        <div className="flex gap-2">
          {instituicoes.map((_, k) => (
            <button key={k} aria-label={`Instituição ${k + 1}`} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-dourado" : "w-2 bg-creme/30"}`} />
          ))}
        </div>
        <button aria-label="Próximo" onClick={() => setI((p) => (p + 1) % n)} className="w-9 h-9 rounded-full border border-musgo/40 text-musgo hover:bg-musgo hover:text-oliva transition grid place-items-center">›</button>
      </div>
    </div>
  );
}

const navLinks: [string, string][] = [
  ["#sobre", "Sobre"],
  ["#experiencias", "Espaços"],
  ["#programacao", "Programação"],
  ["#chefs", "Chefs"],
  ["#galeria", "Galeria"],
  ["#cardapio", "Cardápio"],
  ["#social", "Impacto"],
  ["#b2b", "Imprensa"],
  ["#ingressos", "Ingressos"],
  ["#visite", "Visite"],
  ["#faq", "FAQ"],
];

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [espacoAtivo, setEspacoAtivo] = useState(0);
  const [leadOpen, setLeadOpen] = useState<LeadTipo | null>(null);
  const [receitaAberta, setReceitaAberta] = useState<{ titulo: string; tema?: string; receita?: string } | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const chefsTrackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.getElementById(window.location.hash.slice(1));
    if (el) el.scrollIntoView();
  }, []);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      setScrolled(window.scrollY > 40);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
        setScrollPct(Math.min(100, Math.max(0, pct)));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, []);
  useEffect(() => {
    if (!heroRef.current) return;
    animate(heroRef.current.querySelectorAll("[data-hero]"), {
      opacity: [0, 1],
      translateY: [28, 0],
      duration: 950,
      delay: stagger(95),
      ease: "outExpo",
    });
  }, []);

  return (
    <div className="min-h-screen bg-creme text-grafite font-sans">
      <div id="scrollbar-progress" style={{ width: `${scrollPct}%` }} />
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id="duotone-vl" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0 0 0 1 0" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.227 0.824" />
              <feFuncG type="table" tableValues="0.059 0.455" />
              <feFuncB type="table" tableValues="0.055 0.180" />
            </feComponentTransfer>
          </filter>
          <filter id="duotone-om" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0 0 0 1 0" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.149 0.627" />
              <feFuncG type="table" tableValues="0.149 0.627" />
              <feFuncB type="table" tableValues="0.039 0.306" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      {/* ===== NAV ===== */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-creme/90 backdrop-blur border-b border-creme-soft" : ""}`}>
        <div className="max-w-content mx-auto px-5 h-16 flex items-center justify-between">
          <span className="w-16 sm:w-24 md:w-40 shrink-0" aria-hidden="true" />
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold tracking-wide text-grafite/80">
            {navLinks.slice(0, 8).map(([href, label]) => (
              <a key={href} href={href} onClick={href === "#b2b" ? () => setLeadOpen("imprensa") : undefined} className="hover:text-dourado transition">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={SYMPLA} target="_blank" rel="noopener" className="px-5 py-2.5 rounded-full bg-vinho text-creme text-[13px] font-bold tracking-wide hover:bg-[#4E1714] transition">
              Ingressos
            </a>
            <button aria-label="Menu" onClick={() => setMenuOpen((v) => !v)} className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-creme-soft text-vinho">
              <span className="text-xl leading-none">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-creme border-t border-creme-soft shadow-xl">
            <div className="max-w-content mx-auto px-5 py-3 grid grid-cols-2 gap-x-4 gap-y-1">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href} onClick={() => { setMenuOpen(false); if (href === "#b2b") setLeadOpen("imprensa"); }} className="py-2.5 text-[14px] font-bold text-vinho hover:text-dourado border-b border-creme-soft">{label}</a>
              ))}
            </div>
          </div>
        )}
        {/* logotipo em aba retangular, colada no topo, cantos arredondados só embaixo */}
        <a href="#topo" className="absolute top-0 left-3 sm:left-5 md:left-8 flex items-center gap-1.5 sm:gap-3 md:gap-4 bg-vinho rounded-b-2xl md:rounded-b-3xl shadow-md px-2.5 py-1.5 sm:px-4 sm:py-2.5 md:px-7 md:py-4">
          <img src="/brand/logo-fcg.webp" alt="Festival Costume Gourmet" className="h-6 sm:h-9 md:h-14 w-auto" />
          <span className="w-px h-4 sm:h-6 md:h-9 bg-creme/25" aria-hidden="true" />
          <img src="/brand/logo-saoluiz.webp" alt="São Luiz Supermercado" className="h-4 sm:h-6 md:h-9 w-auto" />
        </a>
      </header>

      {/* ===== HERO ===== */}
      <section id="topo" className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-5 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(90% 60% at 50% 0%, #f3e6cf 0%, #FCF6EE 60%)" }} />
        {/* glow dourado atrás do título (melhoria visual) */}
        <div className="absolute left-1/2 top-[22%] -translate-x-1/2 w-[70%] max-w-xl aspect-square rounded-full bg-dourado opacity-20 glow-breathe -z-10 pointer-events-none" style={{ filter: "blur(100px)" }} aria-hidden="true" />
        {/* ondas postais no canto (asset real da IDV, melhoria visual) */}
        <img src="/brand/ondas-vinho.webp" alt="" aria-hidden="true" className="hidden sm:block absolute top-6 right-4 md:top-10 md:right-10 w-28 md:w-36 opacity-90 pointer-events-none select-none" />
        {/* moldura vintage fina envolvendo o hero (SVG, regra da marca: nunca bitmap) */}
        <svg className="absolute pointer-events-none hidden md:block" style={{ inset: "18px", width: "calc(100% - 36px)", height: "calc(100% - 36px)" }} aria-hidden="true">
          <defs>
            <linearGradient id="grad-moldura" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#D8992F" />
              <stop offset="1" stopColor="#DC463C" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke="url(#grad-moldura)" strokeOpacity="0.35" strokeWidth="1"
            style={{ clipPath: "polygon(24px 0,calc(100% - 24px) 0,100% 24px,100% calc(100% - 24px),calc(100% - 24px) 100%,24px 100%,0 calc(100% - 24px),0 24px)" }} />
        </svg>
        <Sparkle className="hidden md:block absolute top-5 right-5 w-5 h-5 text-dourado glow-breathe pointer-events-none" />
        <div ref={heroRef} className="max-w-content mx-auto relative">
          <div data-hero className="opacity-0 inline-flex items-center gap-2 text-[11px] md:text-xs font-bold tracking-[0.24em] uppercase text-dourado mb-6">
            <span className="w-6 h-px bg-dourado/60" /> 18 a 20 de setembro · Fortaleza <span className="w-6 h-px bg-dourado/60" />
          </div>
          <div data-hero className="opacity-0 relative">
            <img src="/brand/ic-graos.webp" alt="" aria-hidden="true" className="hidden sm:block absolute -top-2 -left-2 md:left-2 w-12 md:w-14 -rotate-[8deg] drop-shadow-sm pointer-events-none select-none" />
            <h1 className="font-serif font-extrabold leading-[0.98] tracking-tight text-vinho" style={{ fontSize: "clamp(44px,9vw,104px)" }}>
              Sabores de uma<br /><span className="text-dourado italic">bela história</span>
            </h1>
          </div>
          <p data-hero className="opacity-0 mt-7 mx-auto max-w-xl text-[15px] md:text-lg leading-relaxed text-grafite/80">
            Três dias em que Fortaleza senta à mesa para celebrar os 100 anos do São Luiz. Chefs cozinhando na sua frente, taça na mão e música até o fim da noite, no La Maison Coliseu.
          </p>
          <div data-hero className="opacity-0 mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={SYMPLA} target="_blank" rel="noopener" className="px-8 py-4 rounded-full bg-gradient-to-r from-dourado to-laranja text-vinho font-bold tracking-wide shadow-lg shadow-dourado/30 hover:brightness-105 transition">
              Garantir meu ingresso
            </a>
            <a href="#experiencias" className="px-8 py-4 rounded-full border border-vinho/25 text-vinho font-bold tracking-wide hover:border-dourado hover:text-dourado transition">
              Conhecer as experiências
            </a>
          </div>
          <div data-hero className="opacity-0 mt-12 flex items-center justify-center gap-3 text-grafite/60">
            <img src="/brand/selo-100anos.webp" alt="100 anos São Luiz" className="h-14 w-auto" />
            <span className="text-[12px] font-semibold tracking-wide max-w-[180px] text-left leading-snug">Edição do centenário do São Luiz Supermercado</span>
          </div>
          <div data-hero className="opacity-0 mt-6 flex flex-col items-center gap-2.5">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-grafite/45">Uma iniciativa</span>
            <div className="flex items-center gap-4 bg-vinho rounded-2xl px-6 py-3.5">
              <img loading="lazy" src="/brand/logo-saoluiz.webp" alt="São Luiz Supermercado" className="h-8 w-auto" />
              <span className="text-creme/40 text-xl font-light">+</span>
              <img loading="lazy" src="/brand/logo-fcg.webp" alt="Festival Costume Gourmet" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTAGEM REGRESSIVA ===== */}
      <section className="px-5 -mt-4 md:-mt-8 relative z-10">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="rounded-[2rem] text-creme px-5 py-10 md:py-14 shadow-xl shadow-oliva/30 relative overflow-hidden" style={{ background: "radial-gradient(circle at 50% 40%, #4A4A22 0%, #26260A 65%)" }}>
              <div className="label-eyebrow font-bold uppercase text-dourado-lt inline-flex items-center gap-3 justify-center w-full" style={{ fontSize: "clamp(15px,2.6vw,20px)" }}>
                <span className="w-8 h-px bg-dourado-lt/60" />
                Contagem regressiva
                <span className="w-8 h-px bg-dourado-lt/60" />
              </div>
              <Countdown />
              <div className="text-center font-bold tracking-wide text-creme/90 mt-6" style={{ fontSize: "clamp(16px,3vw,20px)" }}>18 a 20 de setembro · Fortaleza</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CHEF CONVIDADO (oculto até divulgação nas redes) ===== */}
      {CHEF_SURPRESA_REVELADO && (
        <section className="px-5 pt-14 pb-4 md:pt-20">
          <div className="max-w-content mx-auto">
            <Reveal>
              <Link to="/chefs/claude-troisgros" className="group block rounded-[2rem] bg-white border border-creme-soft shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden md:flex items-stretch">
                <div className="relative md:w-64 shrink-0 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img loading="lazy" src="/chefs/claude-troisgros.webp" alt="Chef Claude Troisgros" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 foto-real" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.14em] px-2.5 py-1 rounded-full bg-vinho text-creme">SEXTA</span>
                </div>
                <div className="p-7 md:p-9 flex-1 flex flex-col justify-center">
                  <img loading="lazy" src="/brand/logo-sao-luiz-cor.webp" alt="São Luiz" className="h-9 w-auto self-start mb-4" />
                  <div className="label-eyebrow font-bold uppercase text-dourado text-[11px]">São luiz apresenta</div>
                  <h3 className="font-serif font-extrabold text-vinho mt-1.5" style={{ fontSize: "clamp(26px,4.5vw,38px)" }}>Claude <span className="italic text-dourado">Troisgros</span></h3>
                  <p className="text-[14px] leading-relaxed text-grafite/75 mt-2 max-w-xl">
                    A família dele ajudou a reinventar a cozinha francesa. Ele escolheu o Brasil em 1979 e, nesta sexta, sobe ao Palco Gourmet em Fortaleza.
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-bold text-dourado group-hover:text-laranja">
                    Conhecer a história dele
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ===== SOBRE / HISTÓRIA ===== */}
      <section id="sobre" className="px-5 py-20 md:py-28 relative overflow-hidden">
        <img loading="lazy" src="/brand/ilustra-ramo-vinho.webp" alt="" aria-hidden="true" className="hidden lg:block absolute left-0 top-0 h-full w-56 object-cover opacity-[0.08] pointer-events-none select-none" style={{ objectPosition: "left" }} />
        <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center relative">
          <Reveal>
            <div className="relative">
              <img loading="lazy" src="/brand/ic-livro.webp" alt="" aria-hidden="true" className="hidden sm:block absolute -top-4 -right-2 md:-right-6 w-11 md:w-12 rotate-6 drop-shadow-sm pointer-events-none select-none" />
              <Eyebrow>Sobre o evento</Eyebrow>
              <h2 className="font-serif font-extrabold text-vinho mt-2 leading-[1.02]" style={{ fontSize: "clamp(30px,5.5vw,54px)" }}>
                Cem anos que cabem numa mesa
              </h2>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-grafite/80">
              O Festival Costume Gourmet nasce de uma história de cem anos, a do São Luiz Supermercado, que completa um século em 2026.
            </p>
            <blockquote className="relative my-6 pl-6 border-l-2 border-dourado">
              <span className="absolute -left-1 -top-5 font-serif text-dourado/25 text-6xl select-none" aria-hidden="true">"</span>
              <p className="font-serif italic text-vinho text-xl md:text-2xl leading-snug">Legado, experiência e futuro dividindo a mesma mesa.</p>
            </blockquote>
            <p className="mt-4 text-[15px] leading-relaxed text-grafite/80">
              Produtores, chefs, marcas e quem vem para comer, todos na mesma mesa. A curadoria olha para a cozinha cearense, onde cada receita guarda uma lembrança e cada cheiro traz alguém de volta.
            </p>
            <div className="mt-6">
              <div className="flex gap-3 items-start">
                <img loading="lazy" src="/brand/ic-ramo.webp" alt="" aria-hidden="true" className="w-9 h-9 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[13px] font-bold text-vinho">Sustentabilidade na prática</div>
                  <p className="text-[12.5px] text-grafite/70 leading-snug mt-0.5">O palco é de quem alimenta o Ceará há décadas: Tijuca desde 1969, Emape desde 1963. Origem perto daqui, cadeia curta, gente com nome e rosto.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-md frame-real foto-grain">
              <img loading="lazy" src="/galeria/g02.webp" alt="Ambiente do Festival Costume Gourmet" className="w-full h-full object-cover foto-real" />
              <div className="absolute inset-0 bg-gradient-to-t from-vinho/40 to-transparent" />
              <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 30% 20%, #D8992F, transparent 60%)", mixBlendMode: "soft-light" }} />
              <div className="absolute bottom-5 left-6 right-6">
                <img loading="lazy" src="/brand/selo-100anos.webp" alt="100 anos São Luiz" className="h-14 w-auto" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== EXPERIÊNCIAS ===== */}
      <section id="experiencias" className="px-5 py-20 md:py-28">
        <div className="max-w-content mx-auto">
          <Reveal>
            <Eyebrow>As experiências</Eyebrow>
            <h2 className="font-serif font-extrabold text-vinho mt-2 leading-[1.02]" style={{ fontSize: "clamp(32px,6vw,60px)" }}>
              Três jeitos de viver o festival
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-grafite/75">
              Do palco onde o chef cozinha na sua frente à mesa posta que recebe você como se a casa fosse dele.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {experiencias.map((e, i) => (
              <Reveal key={e.nome} delay={i * 90}>
                <div className="group">
                  <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-dourado to-telha">
                  <div className="relative rounded-[calc(1.5rem-1.5px)] overflow-hidden aspect-[4/5] shadow-sm bg-vinho foto-grain">
                    <img loading="lazy" src={e.img} alt={e.nome} className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-95 foto-real" style={e.duotone ? { filter: `url(#${e.duotone})` } : undefined} />
                    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(58,15,14,.55) 100%)" }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-vinho/75 via-vinho/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dourado/0 to-transparent opacity-0 group-hover:opacity-100 group-hover:from-dourado/25 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 label-micro text-[10px] font-bold uppercase px-3 py-1.5 rounded-full bg-creme/95 text-vinho">{e.tag}</span>
                    <h3 className="absolute bottom-4 left-5 right-5 font-serif font-bold text-2xl md:text-[1.7rem] text-creme leading-tight">{e.nome}</h3>
                    {e.selo && <img loading="lazy" src={`/brand/${e.selo}.webp`} alt="" aria-hidden="true" className="absolute -top-3 -right-3 w-12 -rotate-[10deg] drop-shadow-sm pointer-events-none select-none" />}
                    {e.selos && (
                      <>
                        <img loading="lazy" src={`/brand/${e.selos[1]}.webp`} alt="" aria-hidden="true" className="absolute -bottom-3 right-3 w-12 rotate-6 drop-shadow-md pointer-events-none select-none" />
                      </>
                    )}
                  </div>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-grafite/75">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NÚMEROS / O FESTIVAL ===== */}
      <section className="relative overflow-hidden text-creme py-16 md:py-24" style={{ background: "radial-gradient(ellipse at 50% 35%,#4E1714 0%,#3A0F0E 55%,#2A0A09 100%)" }}>
        <div className="absolute inset-0 -z-0 opacity-[0.07]" style={{ backgroundImage: "url(/brand/ilustra-mesa-vinho.webp)", backgroundSize: "520px", backgroundPosition: "center" }} />
        <div className="absolute inset-0 -z-0 opacity-[0.04]" style={{ backgroundImage: "url(/brand/pattern-vinho.webp)", backgroundSize: "300px", filter: "grayscale(1) contrast(1.2)", mixBlendMode: "overlay" }} />
        <div className="max-w-6xl mx-auto px-5 relative text-center">
          <Reveal>
            <Eyebrow dark center>Uma edição histórica</Eyebrow>
            <h2 className="font-serif font-extrabold mt-3 leading-tight" style={{ fontSize: "clamp(28px,5.5vw,52px)" }}>
              100 anos celebrados<br />em 3 dias de festa
            </h2>
          </Reveal>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-14 text-left"
            variants={numeroVarianteContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {numeros.map((s) => (
              <motion.div
                key={s.l}
                variants={numeroVarianteItem}
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-3xl border border-creme/10 bg-white/[0.05] backdrop-blur-sm overflow-hidden flex flex-col justify-center p-6 md:p-8 min-h-[180px] md:min-h-[220px]"
              >
                <div className="absolute -inset-6 opacity-30 blur-3xl -z-10" style={{ background: s.glow }} aria-hidden="true" />
                <CountUp
                  to={s.to} prefix={s.prefix} suffix={s.suffix}
                  className="font-serif font-extrabold tabular-nums block text-dourado-lt"
                  style={{ fontSize: "clamp(52px,8vw,76px)" }}
                />
                <div className="label-micro text-[13px] md:text-[14px] font-bold uppercase text-creme/80 mt-2">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROGRAMAÇÃO ===== */}
      <section id="programacao" className="px-5 py-20 md:py-28">
        <div className="max-w-content mx-auto">
          <Reveal>
            <Eyebrow>Programação</Eyebrow>
            <h2 className="font-serif font-extrabold text-vinho mt-2 leading-[1.02]" style={{ fontSize: "clamp(30px,5.5vw,54px)" }}>
              Três dias, três climas
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-grafite/75">
              Cada dia tem o seu clima, da abertura de sexta ao encerramento de mesa posta no domingo. A grade hora a hora está logo abaixo.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {dias.map((d, i) => (
              <Reveal key={d.dia} delay={i * 90}>
                <div className="text-creme rounded-3xl p-6 h-full relative overflow-hidden" style={{ background: `radial-gradient(circle at 30% 0%, ${i % 2 === 0 ? "#4E1714" : "#4A4A22"} 0%, ${i % 2 === 0 ? "#3A0F0E" : "#26260A"} 70%)` }}>
                  <img loading="lazy" src={`/brand/${d.ic}.webp`} alt="" aria-hidden="true" className="absolute -bottom-4 -right-4 w-16 opacity-25 pointer-events-none select-none" />
                  <div className="relative">
                    <div className="label-eyebrow text-[10px] font-bold uppercase text-dourado-lt">{d.dia}</div>
                    <div className="font-serif font-extrabold text-creme leading-none mt-1.5" style={{ fontSize: "clamp(38px,7vw,52px)" }}>{d.num}<span className="text-[13px] font-bold tracking-[0.16em] uppercase text-creme/60 ml-1.5 align-top">{d.mes}</span></div>
                    <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-dourado mt-4">{d.foco}</div>
                    <p className="text-[13px] leading-relaxed text-creme/80 mt-2">{d.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-dourado to-transparent my-8" aria-hidden="true" />

          <motion.div
            className="grid sm:grid-cols-3 gap-4"
            variants={programacaoVarianteContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {programacaoBlocos.map((b) => (
              <motion.div key={b.t} variants={programacaoVarianteCard} className="bg-white rounded-2xl border border-creme-soft p-6 shadow-sm h-full">
                <motion.div variants={programacaoVarianteIcone} className="w-11 h-11 rounded-full bg-telha/10 text-telha flex items-center justify-center mb-3">
                  <IconePrograma variante={b.icone} className="w-6 h-6" />
                </motion.div>
                <h3 className="font-serif font-bold text-xl text-telha">{b.t}</h3>
                <p className="text-[13.5px] leading-relaxed text-grafite/80 mt-1.5">{b.d}</p>
              </motion.div>
            ))}
          </motion.div>
          <Reveal>
            <a href="#chefs" className="inline-block mt-7 text-[13px] font-bold text-dourado hover:text-laranja">Ver os chefs confirmados →</a>
          </Reveal>
        </div>
      </section>

      {/* ===== CHEFS ===== */}
      <section id="chefs" className="py-20 md:py-28">
        <div className="max-w-content mx-auto px-5">
          <Reveal>
            <Eyebrow>Curadoria gastronômica</Eyebrow>
            <h2 className="font-serif font-extrabold text-vinho mt-2 leading-[1.02]" style={{ fontSize: "clamp(30px,5.5vw,54px)" }}>
              Personalidades do festival
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-grafite/75">
              As mãos por trás da edição do centenário, do Palco Gourmet ao Piano Bar e ao Recebendo em Casa. Quem ainda não está confirmado fica esmaecido, sem detalhe, até fechar.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative max-w-content mx-auto">
            <div ref={chefsTrackRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ WebkitMaskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)" }}>
              {chefs.filter((c) => CHEF_SURPRESA_REVELADO || c.nome !== "Claude Troisgros").map((c) => (
                <div key={c.nome} className={`flex-shrink-0 w-[248px] snap-start bg-white rounded-3xl shadow-sm border border-creme-soft overflow-hidden ${c.status === "aconfirmar" ? "opacity-80" : ""}`}>
                  <div className={`${c.cor} h-[300px] flex items-center justify-center relative overflow-hidden`} style={{ backgroundImage: "radial-gradient(circle at 50% 30%, rgba(255,255,255,.12), transparent 60%)" }}>
                    {c.foto ? (
                      <img loading="lazy" src={c.foto} alt={c.status === "aconfirmar" ? "" : c.nome} className={`absolute inset-0 w-full h-full object-cover foto-real ${c.status === "aconfirmar" ? "scale-110" : ""}`} style={c.status === "aconfirmar" ? { filter: "blur(14px) saturate(0.9)" } : undefined} />
                    ) : (
                      <div className={`w-24 h-24 rounded-full border-[1.5px] border-dourado/50 grid place-items-center relative z-10 ${c.status === "aconfirmar" ? "blur-[9px]" : ""}`}>
                        <span className="font-serif italic font-black text-creme/95 select-none" style={{ fontSize: 56, lineHeight: 1 }}>
                          {c.nome.replace(/^Chef\s+/i, "").trim().charAt(0)}
                        </span>
                      </div>
                    )}
                    {c.dia && (
                      <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.14em] px-2.5 py-1 rounded-full bg-creme/90 text-vinho z-10">{c.dia}</span>
                    )}
                    {c.status === "aconfirmar" && (
                      <span className="absolute top-3 right-3 text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded-full bg-grafite/70 text-creme z-10">a confirmar</span>
                    )}
                    {!c.foto && <img loading="lazy" src="/brand/ilustra-mesa-vinho.webp" alt="" className="absolute -right-7 -bottom-7 w-28 opacity-10 pointer-events-none" />}
                    <div className="absolute inset-0" style={{ background: c.foto ? "linear-gradient(to top, rgba(0,0,0,.55), transparent 60%)" : "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,.25) 100%)" }} />
                  </div>
                  <div className={`p-5 ${c.status === "aconfirmar" ? "blur-[6px] select-none" : ""}`} aria-hidden={c.status === "aconfirmar" || undefined}>
                    <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-dourado">{c.atracao}</div>
                    <h3 className="font-serif font-bold text-xl text-grafite mt-1">{c.nome}</h3>
                    {c.sub && <div className="text-[12px] font-semibold text-grafite/70">{c.sub}</div>}
                    {c.casa && <div className="text-[12.5px] text-grafite/60 mt-0.5">{c.casa}</div>}
                    {c.bio && <p className="text-[11.5px] text-grafite/55 leading-snug mt-1.5">{c.bio}</p>}
                    {c.link && c.status !== "aconfirmar" && (
                      <Link to={c.link} className="inline-flex items-center gap-1.5 mt-2.5 text-[11.5px] font-bold text-dourado hover:text-laranja">
                        Conheça a história {c.pronome ?? "dele"} →
                      </Link>
                    )}
                    {c.instagram && c.status !== "aconfirmar" && (
                      <div className="flex items-center gap-3 mt-2.5">
                        <a href={c.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-dourado hover:text-laranja">
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" /></svg>
                          Instagram
                        </a>
                        {c.instagram2 && (
                          <a href={c.instagram2} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-dourado hover:text-laranja">
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" /></svg>
                            Instagram
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button aria-label="Chef anterior" onClick={() => chefsTrackRef.current?.scrollBy({ left: -264, behavior: "smooth" })} className="hidden md:grid absolute left-0 top-[150px] -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-md border border-creme-soft text-vinho place-items-center hover:bg-vinho hover:text-creme transition z-10">‹</button>
            <button aria-label="Próximo chef" onClick={() => chefsTrackRef.current?.scrollBy({ left: 264, behavior: "smooth" })} className="hidden md:grid absolute right-0 top-[150px] translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-md border border-creme-soft text-vinho place-items-center hover:bg-vinho hover:text-creme transition z-10">›</button>
          </div>
        </Reveal>

        <div className="max-w-content mx-auto px-5 mt-16">
          <Reveal>
            <Eyebrow>Grade por espaço</Eyebrow>
            <h3 className="font-serif font-extrabold text-vinho mt-2 leading-[1.02]" style={{ fontSize: "clamp(24px,4.5vw,38px)" }}>
              O que rola em cada palco
            </h3>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-grafite/75">
              Hora a hora, o que já está de pé em cada espaço. O que ainda não está confirmado fica esmaecido, sem detalhe, até fechar.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex gap-2 mt-7 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {gradeEspacos.map((esp, i) => (
                <button
                  key={esp.id}
                  onClick={() => setEspacoAtivo(i)}
                  className={`shrink-0 px-4 py-2 rounded-full text-[12.5px] font-bold tracking-[0.02em] transition border ${
                    espacoAtivo === i ? "bg-vinho text-creme border-vinho" : "bg-white text-grafite/70 border-creme-soft hover:border-vinho/40"
                  }`}
                >
                  {esp.nome}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="relative mt-6">
            <div className="grid md:grid-cols-3 gap-4">
              {gradeEspacos[espacoAtivo].grade.map((g, gi) => (
                <Reveal key={`${gradeEspacos[espacoAtivo].id}-${g.dia}`} delay={gi * 90}>
                  <div className="bg-white rounded-3xl border border-creme-soft shadow-sm overflow-hidden h-full flex flex-col">
                    <div className="bg-vinho text-creme px-5 py-3.5 flex items-center justify-between">
                      <span className="font-serif font-bold text-lg">{g.dia}</span>
                    </div>
                    <div className="divide-y divide-creme-soft flex-1">
                      {g.slots.map((s, i) => (
                        <div key={i} className={`px-5 py-3 flex gap-3 ${s.status === "intervalo" ? "bg-vinho/5" : s.status === "aconfirmar" ? "opacity-75" : ""}`}>
                          <span className="text-[11px] font-bold text-dourado tabular-nums shrink-0 w-[86px] pt-0.5">{s.h}</span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div aria-hidden={s.status === "aconfirmar" || undefined} className={`text-[13px] leading-snug ${s.status === "intervalo" ? "font-medium text-vinho/50" : s.status === "aconfirmar" ? "font-medium text-grafite/40 blur-[3.5px] select-none pointer-events-none" : "font-semibold text-grafite"}`}>{s.o}</div>
                              {s.status === "aconfirmar" && <span className="shrink-0 text-[8.5px] font-bold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded bg-creme-soft text-grafite/50 mt-0.5">a confirmar</span>}
                              {s.status === "confirmado" && <span className="shrink-0 text-[8.5px] font-bold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded bg-musgo/20 text-oliva mt-0.5">confirmado</span>}
                            </div>
                            {s.subtitulo && <div className="text-[11px] text-grafite/60 mt-0.5">{s.subtitulo}</div>}
                            {s.tema && s.status !== "aconfirmar" && (
                              <p className="text-[11.5px] text-grafite/80 leading-snug mt-1 line-clamp-2">{s.tema}</p>
                            )}
                            {(s.status !== "aconfirmar") && (s.receita || (s.tema && s.tema.length > 100)) && (
                              <div className="flex items-center gap-3 mt-1">
                                {s.tema && s.tema.length > 100 && (
                                  <button
                                    type="button"
                                    onClick={() => setReceitaAberta({ titulo: s.o, tema: s.tema })}
                                    className="inline-flex items-center gap-1 text-[11px] font-bold text-dourado hover:text-laranja"
                                  >
                                    Ver mais →
                                  </button>
                                )}
                                {s.receita && (
                                  <button
                                    type="button"
                                    onClick={() => setReceitaAberta({ titulo: s.o, tema: s.tema, receita: s.receita })}
                                    className="inline-flex items-center gap-1 text-[11px] font-bold text-dourado hover:text-laranja"
                                  >
                                    Ver receita →
                                  </button>
                                )}
                              </div>
                            )}
                            {s.patrocinadorLogo && (
                              <div className={`flex items-center gap-3 mt-1.5 ${s.status === "aconfirmar" ? "blur-[3.5px] select-none pointer-events-none" : ""}`}>
                                {(Array.isArray(s.patrocinadorLogo) ? s.patrocinadorLogo : [s.patrocinadorLogo]).map((logo) => (
                                  <img
                                    key={logo}
                                    loading="lazy"
                                    src={logo}
                                    alt=""
                                    aria-hidden="true"
                                    className={`${logo.includes("heineken") || logo.includes("friboi") ? "h-12" : logo.includes("jackdaniels") ? "h-8" : "h-6"} w-auto object-contain object-left opacity-90`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALERIA ===== */}
      <GaleriaFestival />

      {/* ===== CARDÁPIO E EXPOSITORES ===== */}
      <section id="cardapio" className="px-5 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: "url(/brand/pattern-vinho.webp)", backgroundSize: "440px" }} />
        <div className="max-w-content mx-auto">
          <Reveal>
            <Eyebrow>Cardápio e expositores</Eyebrow>
            <h2 className="font-serif font-extrabold text-vinho mt-2 leading-[1.02]" style={{ fontSize: "clamp(30px,5.5vw,54px)" }}>
              Da terra para a mesa
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-grafite/75">
              Os restaurantes, bares, docerias e cafeterias desta edição ainda estão em fechamento. No sábado, a casa recebe cozinha local e coquetelaria autoral.
            </p>
          </Reveal>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-10"
            variants={produtoresVarianteContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {produtoresLocais.map((p) => (
              <motion.div
                key={p.nome}
                variants={produtoresVarianteCard}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl border border-creme-soft shadow-sm p-6 h-full flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="h-16 flex items-center justify-center">
                  <img loading="lazy" src={p.logo} alt={p.nome} className="max-h-16 max-w-full object-contain" />
                </div>
                <h3 className="font-serif font-bold text-base text-grafite leading-tight">{p.nome}</h3>
              </motion.div>
            ))}
          </motion.div>

          <Reveal>
            <p className="mt-6 text-[12.5px] text-grafite/55 leading-relaxed max-w-xl">
              Tem restrição alimentar? O cardápio final, com as opções vegetarianas e sem glúten identificadas casa por casa, sai perto da data.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-6 bg-oliva text-creme rounded-3xl p-7 md:p-8 md:flex items-center gap-8">
              <img loading="lazy" src="/brand/ic-livro.webp" alt="" className="w-16 h-16 shrink-0 mx-auto md:mx-0" />
              <div className="mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-musgo">Acervo de receitas</span>
                  <span className="text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-creme/15 text-creme/90">Em breve</span>
                </div>
                <h3 className="font-serif font-bold text-xl mt-1">30 kits, 5 receitas escritas à mão pelo Phe</h3>
                <p className="text-[13px] leading-relaxed text-creme/80 mt-2 max-w-xl">
                  Cada receita do press kit vem com a história por trás do prato. O acervo digital, aberto para todo mundo, está em produção.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <GaleriaEdicoesAnteriores />

      {/* ===== IMPACTO SOCIAL ===== */}
      <section id="social" className="px-5">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="rounded-[2rem] text-creme px-6 py-14 md:py-20 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 20%,#4A4A22 0%,#26260A 60%)" }}>
              <img loading="lazy" src="/brand/ilustra-ramo-oliva.webp" alt="" aria-hidden="true" className="hidden lg:block absolute right-0 top-0 h-full w-48 object-cover opacity-[0.07] pointer-events-none select-none" style={{ objectPosition: "right" }} />
              <img loading="lazy" src="/brand/carimbo-vinho.webp" alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-72 md:w-96 opacity-[0.13] rotate-[8deg] pointer-events-none select-none" />
              <div className="text-center relative">
                <div className="relative inline-block">
                  <div className="absolute inset-x-0 top-4 h-24 rounded-full bg-musgo opacity-25 blur-3xl -z-10" aria-hidden="true" />
                  <Eyebrow dark>Sabor que transforma</Eyebrow>
                  <div className="font-serif font-extrabold mt-3 bg-gradient-to-b from-dourado-lt to-musgo bg-clip-text text-transparent" style={{ fontSize: "clamp(56px,15vw,110px)", lineHeight: 0.9 }}>100%</div>
                </div>
                <h2 className="font-serif font-extrabold mt-1" style={{ fontSize: "clamp(24px,5vw,40px)" }}>da bilheteria revertida</h2>
                <p className="mt-4 max-w-lg mx-auto text-[15px] leading-relaxed text-creme/80">
                  Cada ingresso vendido vira trabalho de três instituições que cuidam de gente em Fortaleza.
                </p>
              </div>
              <div className="relative">
                <Instituicoes />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PATROCINADORES ===== */}
      <section id="marcas" className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-content mx-auto text-center px-5">
          <Reveal>
            <Eyebrow>Quem faz acontecer</Eyebrow>
            <h2 className="font-serif font-extrabold text-vinho mt-2" style={{ fontSize: "clamp(30px,5.5vw,52px)" }}>Nossas marcas</h2>
            <p className="mt-4 max-w-lg mx-auto text-[15px] leading-relaxed text-grafite/75">
              Quem põe a mesa junto com a gente, do patrocínio master ao premium.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-12">
            <div className="text-[13px] font-extrabold tracking-[0.22em] uppercase text-dourado mb-4 text-center">Patrocínio Master</div>
            <LogoMarquee logos={masterLogos} dur="40s" />
          </div>
          <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-dourado via-telha to-dourado my-8" aria-hidden="true" />
          <div className="mt-1">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-dourado/70 mb-4 text-center">Patrocínio Premium</div>
            <LogoMarquee logos={premiumLogos} dur="55s" reverse />
          </div>
        </Reveal>
      </section>

      {/* ===== INGRESSOS ===== */}
      <section id="ingressos" className="px-5 py-20 md:py-28">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="text-center">
              <Eyebrow center>Ingressos</Eyebrow>
              <h2 className="font-serif font-extrabold text-vinho mt-2" style={{ fontSize: "clamp(30px,5.5vw,52px)" }}>Garanta seu ingresso</h2>
              <p className="mt-4 max-w-xl mx-auto text-[15px] leading-relaxed text-grafite/75">
                A bilheteria inteira vai para três instituições de Fortaleza que cuidam de crianças, de jovens e de pacientes em tratamento.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {ingressoInfo.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-dourado to-telha h-full">
                  <div className="bg-white rounded-[calc(1rem-1.5px)] p-6 shadow-sm h-full">
                    <h3 className="font-serif font-bold text-lg text-vinho">{c.t}</h3>
                    <p className="text-[13.5px] leading-relaxed text-grafite/80 mt-1.5">{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* <Reveal>
            <div className="mt-5 text-creme rounded-3xl p-7 md:p-9 md:flex items-center justify-between gap-8 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 30% 100%,#4E1714 0%,#3A0F0E 60%)" }}>
              <img loading="lazy" src="/brand/ondas-vinho.webp" alt="" aria-hidden="true" className="absolute -top-5 -right-5 w-40 opacity-90 pointer-events-none select-none" />
              <div className="md:flex-1 relative">
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-dourado">Votação popular</div>
                <h3 className="font-serif font-bold text-2xl mt-1">Você elege a edição</h3>
                <p className="text-[13.5px] leading-relaxed text-creme/80 mt-2 max-w-md">
                  No sábado, às 15h, saem os indicados a melhor petisco e melhor serviço. Quem come também vota.
                </p>
              </div>
              <div className="relative shrink-0 mt-6 md:mt-0">
                <div className="absolute inset-0 rounded-full bg-dourado opacity-30 blur-2xl -z-10" aria-hidden="true" />
                <a href={SYMPLA} target="_blank" rel="noopener" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-dourado to-laranja text-vinho font-bold tracking-wide shadow-lg shadow-dourado/20 hover:brightness-105 transition text-center">
                  Comprar na Sympla
                </a>
              </div>
            </div>
          </Reveal> */}
        </div>
      </section>

      {/* ===== VISITE ===== */}
      <section id="visite" className="px-5 py-20 md:py-24">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="text-center">
              <Eyebrow center>Como chegar e visitar</Eyebrow>
              <h2 className="font-serif font-extrabold text-vinho mt-2" style={{ fontSize: "clamp(30px,5.5vw,52px)" }}>Datas, local e regras</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 mt-10 items-start">
            <Reveal>
              <div className="text-creme rounded-3xl p-7 md:p-9 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 70% 0%,#4A4A22 0%,#26260A 65%)" }}>
                <img loading="lazy" src="/brand/ondas-oliva.webp" alt="" aria-hidden="true" className="absolute top-0 right-0 w-36 opacity-25 pointer-events-none select-none" />
                <img loading="lazy" src="/brand/carimbo-vinho.webp" alt="" aria-hidden="true" className="absolute bottom-4 right-4 w-48 opacity-[0.15] rotate-6 pointer-events-none select-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-musgo">
                    <img loading="lazy" src="/brand/ic-graos.webp" alt="" aria-hidden="true" className="w-6 h-6" /> Datas e horários
                  </div>
                  <div className="font-serif font-extrabold mt-2" style={{ fontSize: "clamp(26px,5vw,40px)" }}>18, 19 e 20 de setembro</div>
                  <div className="text-[14px] text-creme/80 mt-1">Sexta a domingo, das 15h às 22h</div>
                  <div className="h-px bg-musgo/25 my-6" />
                  <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-musgo">Onde</div>
                  <div className="text-[15px] font-semibold mt-1.5">La Maison Coliseu</div>
                  <div className="text-[13.5px] text-creme/80 leading-relaxed">Av. Eng. Luiz Vieira, 555, Papicu, Fortaleza. O local conta com opções de estacionamento; chegue com antecedência.</div>
                  <div className="flex flex-wrap gap-3 mt-5">
                    <a href={MAPS} target="_blank" rel="noopener" className="px-5 py-2.5 rounded-full bg-musgo text-oliva font-bold text-[13px] hover:brightness-105 transition">Google Maps</a>
                    <a href={WAZE} target="_blank" rel="noopener" className="px-5 py-2.5 rounded-full border border-musgo/50 text-musgo font-bold text-[13px] hover:bg-musgo hover:text-oliva transition">Waze</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-3 relative">
                <img loading="lazy" src="/brand/ilustra-mesa-oliva.webp" alt="" aria-hidden="true" className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none select-none -z-10" />
                {regras.map((r) => (
                  <div key={r.t} className="bg-white rounded-2xl border border-creme-soft p-5 shadow-sm">
                    <h3 className="font-serif font-bold text-lg text-vinho">{r.t}</h3>
                    <p className="text-[13.5px] leading-relaxed text-grafite/80 mt-1">{r.d}</p>
                  </div>
                ))}
                <div className="rounded-2xl border border-dashed border-creme-soft p-5 text-center">
                  <p className="text-[12.5px] text-grafite/60">Vem de outra cidade? As parcerias de hospedagem e as dicas de chegada saem em breve.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="px-5 pb-20 md:pb-24 relative overflow-hidden">
        <img loading="lazy" src="/brand/ilustra-ramo-vinho.webp" alt="" aria-hidden="true" className="hidden lg:block absolute right-0 top-0 h-full w-40 object-cover opacity-[0.07] pointer-events-none select-none" style={{ objectPosition: "right" }} />
        <div className="max-w-2xl mx-auto relative">
          <Reveal>
            <Eyebrow center>Dúvidas</Eyebrow>
            <h2 className="font-serif font-extrabold text-vinho mt-2 text-center" style={{ fontSize: "clamp(28px,5.5vw,46px)" }}>Perguntas frequentes</h2>
          </Reveal>
          <div className="mt-8">
            {faq.map(([q, a], idx) => (
              <Reveal key={q}>
                <details className="group bg-white rounded-2xl border border-creme-soft px-5 py-4 open:border-dourado/50 open:shadow-[-6px_0_18px_-8px_rgba(216,153,47,.35)] mb-3">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-serif font-bold text-[16px] md:text-[17px] text-vinho">
                    <span className="flex items-baseline gap-3">
                      <span className="font-serif font-bold text-dourado/55 text-sm shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                      {q}
                    </span>
                    <span className="text-dourado text-2xl leading-none shrink-0 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pl-8 text-[14px] leading-relaxed text-grafite/80">{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== B2B E IMPRENSA ===== */}
      <section id="b2b" className="px-5 pb-24">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="rounded-[2rem] text-creme px-6 py-14 md:py-16 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%,#4E1714 0%,#3A0F0E 60%)" }}>
              <img loading="lazy" src="/brand/carimbo-oliva.webp" alt="" aria-hidden="true" className="absolute -top-16 -left-16 w-72 opacity-[0.10] -rotate-12 pointer-events-none select-none hidden md:block" />
              <div className="text-center max-w-2xl mx-auto relative">
                <Eyebrow center dark>B2B e imprensa</Eyebrow>
                <h2 className="font-serif font-extrabold mt-2 leading-tight" style={{ fontSize: "clamp(28px,5vw,46px)" }}>Seja parte da história</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-creme/80">
                  Três dias com um público adulto e qualificado dentro de casa. Escolha por onde falar com a gente.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-10 relative">
                <div className="bg-white/[0.04] border border-dourado/20 rounded-2xl p-6 flex flex-col">
                  <div className="font-serif italic text-dourado/40 text-3xl leading-none mb-1">01</div>
                  <h3 className="font-serif font-bold text-xl text-dourado">Marcas e patrocínio</h3>
                  <p className="text-[13px] leading-relaxed text-creme/80 mt-2 flex-1">Coloque sua marca na mesa. Receba o mídia kit com audiência, alcance e cotas comerciais.</p>
                  {leadOpen === "patrocinio" ? (
                    <LeadForm tipo="patrocinio" onClose={() => setLeadOpen(null)} />
                  ) : (
                    <button onClick={() => setLeadOpen("patrocinio")} className="px-5 py-3 rounded-full bg-dourado text-vinho font-bold text-[13px] text-center hover:brightness-105 transition mt-5">Falar com o time</button>
                  )}
                </div>
                <div className="bg-white/[0.04] border border-dourado/20 rounded-2xl p-6 flex flex-col">
                  <div className="font-serif italic text-dourado/40 text-3xl leading-none mb-1">02</div>
                  <h3 className="font-serif font-bold text-xl text-dourado">Restaurantes e expositores</h3>
                  <p className="text-[13px] leading-relaxed text-creme/80 mt-2 flex-1">Restaurante, bar, cafeteria, doceria ou produtor? Candidate-se para expor nesta edição.</p>
                  {leadOpen === "expositor" ? (
                    <LeadForm tipo="expositor" onClose={() => setLeadOpen(null)} />
                  ) : (
                    <button onClick={() => setLeadOpen("expositor")} className="px-5 py-3 rounded-full border border-dourado/60 text-dourado font-bold text-[13px] text-center hover:bg-dourado hover:text-vinho transition mt-5">Quero expor</button>
                  )}
                </div>
                <div className="bg-white/[0.04] border border-dourado/20 rounded-2xl p-6 flex flex-col">
                  <div className="font-serif italic text-dourado/40 text-3xl leading-none mb-1">03</div>
                  <h3 className="font-serif font-bold text-xl text-dourado">Imprensa</h3>
                  <p className="text-[13px] leading-relaxed text-creme/80 mt-2 flex-1">Credenciamento de jornalistas, contato da assessoria e materiais de divulgação do festival.</p>
                  {leadOpen === "imprensa" ? (
                    <LeadForm tipo="imprensa" onClose={() => setLeadOpen(null)} />
                  ) : (
                    <button onClick={() => setLeadOpen("imprensa")} className="px-5 py-3 rounded-full border border-dourado/60 text-dourado font-bold text-[13px] text-center hover:bg-dourado hover:text-vinho transition mt-5">Credenciamento</button>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="px-5 pb-24 text-center">
        <div className="max-w-content mx-auto">
          <Reveal>
            <h2 className="font-serif font-extrabold text-vinho leading-tight" style={{ fontSize: "clamp(34px,7vw,72px)" }}>
              Garanta seu lugar<br /><span className="text-dourado italic">à mesa</span>
            </h2>
            <p className="mt-4 text-[15px] text-grafite/75">Ingressos pela Sympla. Estudantes de gastronomia têm gratuidade.</p>
            <a href={SYMPLA} target="_blank" rel="noopener" className="inline-block mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-dourado to-laranja text-vinho font-bold tracking-wide shadow-lg shadow-dourado/30 hover:brightness-105 transition">
              Comprar ingresso
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== INSTAGRAM ===== */}
      <section className="px-5 py-20 md:py-24 bg-[#2a0b0a] text-creme relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(/brand/pattern-vinho.webp)", backgroundSize: "260px" }} aria-hidden="true" />
        <div className="max-w-content mx-auto text-center relative">
          <Eyebrow center dark>Nos bastidores</Eyebrow>
          <h2 className="font-serif font-extrabold mt-2" style={{ fontSize: "clamp(28px,5.5vw,48px)" }}>
            Siga <span className="italic text-dourado">@festivalcostumegourmet</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-[14px] leading-relaxed text-creme/70">
            A montagem por dentro, os chefs que vão sendo confirmados e o que ainda ninguém viu, tudo primeiro no Instagram.
          </p>
          <div className="grid grid-cols-3 gap-1.5 md:gap-2 mt-9 max-w-2xl mx-auto">
            {instagramPreview.map((src, i) => (
              <a key={src} href="https://instagram.com/festivalcostumegourmet" target="_blank" rel="noopener" className="group relative aspect-square overflow-hidden">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" style={i % 2 === 0 ? { filter: "url(#duotone-vl)" } : undefined} />
                <div className="absolute inset-0 bg-vinho/0 group-hover:bg-vinho/40 transition-colors duration-300 grid place-items-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-creme opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-creme/40">Prévia com imagens do festival · não é um feed sincronizado ao vivo</p>
          <a href="https://instagram.com/festivalcostumegourmet" target="_blank" rel="noopener" className="inline-block mt-7 px-8 py-3.5 rounded-full bg-gradient-to-r from-dourado to-laranja text-vinho font-bold tracking-wide shadow-lg shadow-dourado/20 hover:brightness-105 transition">
            Seguir no Instagram
          </a>
        </div>
      </section>

      {/* ===== NEWSLETTER / COMUNIDADE ===== */}
      <section id="comunidade" className="px-5 py-16 md:py-20 bg-creme">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <Eyebrow center>Engajamento</Eyebrow>
            <h2 className="font-serif font-extrabold text-vinho mt-2 leading-[1.05]" style={{ fontSize: "clamp(24px,4.5vw,38px)" }}>
              Saiba antes de todo mundo
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-grafite/75">
              Entre no nosso canal do Instagram e receba antes de todo mundo: chefs confirmados, abertura da bilheteria e a programação de cada dia.
            </p>
            <a href={NEWSLETTER} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 rounded-full bg-vinho text-creme font-bold text-[13.5px] tracking-wide hover:bg-[#4E1714] transition">
              Quero receber novidades
            </a>
          </div>
        </Reveal>
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
          <div className="flex flex-col items-center gap-3 text-[13px] text-creme/70">
            <a href="https://instagram.com/festivalcostumegourmet" target="_blank" rel="noopener" className="hover:text-dourado">Instagram <b className="text-dourado">@festivalcostumegourmet</b></a>
            <a href="mailto:festivalsaoluiz@mslz.com.br" target="_blank" rel="noopener" className="hover:text-dourado">Contato  <b className="text-dourado">festivalsaoluiz@mslz.com.br</b></a>
          </div>
          <div className="text-[11px] leading-relaxed text-creme/45 mt-7">
            Festival Costume Gourmet 2026 · Apresentado pelo São Luiz Supermercado, 100 anos<br />
            La Maison Coliseu · Av. Eng. Luiz Vieira, 555, Papicu · Fortaleza, Ceará
          </div>
        </div>
      </footer>

      {/* sticky CTA mobile */}
      {scrolled && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-vinho/95 backdrop-blur border-t border-dourado/25 md:hidden">
          <a href={SYMPLA} target="_blank" rel="noopener" className="block text-center px-6 py-3 rounded-full bg-gradient-to-r from-dourado to-laranja text-vinho font-bold tracking-wide">
            Garantir meu ingresso
          </a>
        </div>
      )}

      {receitaAberta && (
        <ReceitaModal
          titulo={receitaAberta.titulo}
          tema={receitaAberta.tema}
          receita={receitaAberta.receita}
          onClose={() => setReceitaAberta(null)}
        />
      )}
    </div>
  );
}
