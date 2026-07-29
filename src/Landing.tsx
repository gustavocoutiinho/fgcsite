import { Fragment, useEffect, useRef, useState, type ReactNode, type CSSProperties, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";

const SYMPLA =
  "https://www.sympla.com.br/evento/festival-costume-gourmet/3512927";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=La+Maison+Coliseu+Av+Eng+Luiz+Vieira+555+Papicu+Fortaleza";
const WAZE = "https://waze.com/ul?q=La%20Maison%20Coliseu%20Av%20Eng%20Luiz%20Vieira%20555%20Papicu%20Fortaleza";
const NEWSLETTER = "https://www.instagram.com/channel/AbYOJmngcLM_wj4b/";
const LEADS_API = "https://festival-costume-gourmet.vercel.app/api/leads-b2b";
/* liga quando o chef convidado de sexta for divulgado nas redes; até lá, some do site sem apagar o trabalho */
const CHEF_SURPRESA_REVELADO = false;
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
  { nome: "Recebendo em Casa", tag: "Experiência premium", desc: "Mesa para 30 pessoas, serviço completo e um chef convidado servindo pratos e sobremesa. Vagas limitadas por horário.", img: "/espacos/recebendo-em-casa.webp", selo: "ic-ramo" as const },
  { nome: "Palco Gourmet Gerações", tag: "Cozinha show", desc: "Aulas e demonstrações ao vivo com chefs exclusivos, transmitidas em telão para todo o público.", img: "/espacos/palco-gourmet.webp" },
  { nome: "Piano Bar", tag: "Vinhos e música", desc: "Drinks, degustação e harmonização com sommelier, ao som de música ao vivo a cada noite.", img: "/espacos/piano-bar.webp", duotone: "duotone-om", selos: ["ic-rolha", "ic-sacarolha"] as const },
];

const numeros = [
  { to: 3, prefix: "", suffix: "", l: "dias de festa", glow: "#D8992F" },
  { to: 20, prefix: "+", suffix: "", l: "chefs confirmados", glow: "#DC463C" },
  { to: 3, prefix: "", suffix: "", l: "espaços", glow: "#A0A04E" },
  { to: 30, prefix: "+", suffix: "", l: "marcas parceiras", glow: "#D8992F" },
  { to: 100, prefix: "", suffix: "%", l: "da renda vira doação", glow: "#DC463C", hero: true },
];

const chefs = [
  { nome: "Claude Troisgros", casa: "São Luiz", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-vinho", foto: "/chefs/claude-troisgros.webp", link: "/chefs/claude-troisgros" },
  { nome: "Daniel Sabbá", casa: "", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-bordo", instagram: "https://instagram.com/danielsabba", link: "/chefs/daniel-sabba" },
  { nome: "Brunno Malheiros", casa: "Cheiro do Pão", atracao: "Palco Gourmet", dia: "SEX", cor: "bg-oliva", link: "/chefs/brunno-malheiros" },
  { nome: "Felipe Caputo", casa: "São Luiz", atracao: "Palco Gourmet", dia: "SAB", cor: "bg-vinho", instagram: "https://instagram.com/felipecaputo", link: "/chefs/felipe-caputo" },
  { nome: "Thales Romão", casa: "NOM · Molino Padaria Artesanal", atracao: "Palco Gourmet", dia: "SAB", cor: "bg-[#8a3d18]", instagram: "https://instagram.com/thalesromao_", bio: "Transforme o impossível em pequenos possíveis", link: "/chefs/thales-romao" },
  { nome: "Chef Well", sub: "Wellington Teixeira", casa: "MasterChef Confeitaria", atracao: "Cozinha show", dia: "DOM", cor: "bg-vinho", foto: "/chefs/well.webp", instagram: "https://instagram.com/well.chef", link: "/chefs/chef-well" },
  { nome: "Matheus Vieira", casa: "Arroz Tio João", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-oliva", foto: "/chefs/matheus-vieira.webp", instagram: "https://instagram.com/chefmatheusvieira", bio: "Cozinheiro, professor e empreendedor · Fortaleza, CE" },
  { nome: "Chef Zinda", casa: "La France", atracao: "Sabor de uma história", dia: "DOM", cor: "bg-bordo", link: "/chefs/chef-zinda", pronome: "dela" },
  { nome: "Pepê e Diego", sub: "@muvucoboteco · @zboyspizza", casa: "Netumar", atracao: "Palco Gourmet", dia: "DOM", cor: "bg-[#8a3d18]", instagram: "https://instagram.com/pepemva", bio: "Cozinheiro registrando memórias", link: "/chefs/pepe-e-diego", pronome: "deles" },
  { nome: "Phe", casa: "Curadoria gastronômica", atracao: "Embaixador", dia: "", cor: "bg-telha" },
];

const instituicoes = [
  {
    sigla: "IPREDE",
    nome: "Instituto da Primeira Infância",
    vira: "futuro",
    desc: "Há 40 anos cuida da saúde, da nutrição e do desenvolvimento de crianças na primeira infância e apoia mães em situação de vulnerabilidade, em Fortaleza.",
    site: "https://iprede.org.br/",
  },
  {
    sigla: "IPOM",
    nome: "Instituto Povo do Mar",
    vira: "educação",
    desc: "Transforma a vida de crianças e adolescentes da comunidade do Vicente Pinzón, no litoral de Fortaleza, com esporte, arte e educação.",
    site: "https://institutopovodomar.org.br/",
  },
  {
    sigla: "ICC",
    nome: "Instituto do Câncer do Ceará",
    vira: "cuidado",
    desc: "Leva tratamento a pacientes com câncer no Ceará e mantém a Casa Vida, que acolhe famílias que vêm a Fortaleza em busca de tratamento oncológico.",
    site: "https://icc.org.br/",
  },
];

const masterLogos = [
  "dorigem", "emape", "granja-regina", "merci",
  "sao-jose", "tijuca", "opcao", "santa-clara", "stella-artois",
].map((n) => `/patrocinadores/master-${n}.webp`);

const premiumLogos = [
  "5-elementos", "avine", "br-spices", "brutal-fruit", "imac", "la-maison", "lays", "madi",
  "naturagua", "netumar", "nossa-fruta", "prokitchen", "pronto-carne", "sabor-vida", "vale-fertil",
].map((n) => `/patrocinadores/premium-${n}.webp`);

const faq = [
  ["Posso comprar por dia ou o combo dos três dias?", "Os dois. Tem ingresso por dia e o combo para os três dias de festival."],
  ["Como acesso o evento depois de comprar?", "A compra é pela Sympla. Na bilheteria, você apresenta o ingresso pelo celular e retira a pulseira de acesso."],
  ["Quantos ingressos posso comprar?", "Quantos quiser. Não há limite por pessoa."],
  ["Posso levar crianças?", "Sim, é um ambiente para toda a família. Recomendamos que menores estejam acompanhados dos responsáveis."],
  ["Tem estacionamento?", "O local conta com opções de estacionamento. Chegue com antecedência para maior comodidade."],
  ["Posso sair e voltar no mesmo dia?", "Pode, é só usar a pulseira de acesso entregue na entrada."],
];

const galeria = ["/espacos/piano-bar.webp", ...["g02", "g03", "g04", "g05", "g06", "g07", "g08"].map((n) => `/galeria/${n}.webp`)];

const instagramPreview = ["/galeria/g03.webp", "/galeria/g04.webp", "/galeria/g06.webp", "/galeria/g08.webp", "/espacos/piano-bar.webp", "/espacos/palco-gourmet.webp"];

const dias = [
  { dia: "Sexta", num: "18", mes: "SET", foco: "Noite de abertura", desc: CHEF_SURPRESA_REVELADO ? "Abertura do festival com Claude Troisgros no Palco Gourmet e o Piano Bar a noite toda." : "Abertura do festival com um chef convidado surpresa no Palco Gourmet e o Piano Bar a noite toda.", ic: "ic-vinho" },
  { dia: "Sábado", num: "19", mes: "SET", foco: "Palco dos chefs", desc: "Cozinha show, ativações das marcas e o anúncio dos indicados às 15h no palco principal.", ic: "ic-queijo" },
  { dia: "Domingo", num: "20", mes: "SET", foco: "Recebendo em Casa", desc: "Encerramento com a experiência intimista de mesa posta e chef convidado.", ic: "ic-cafe" },
];

const programacaoBlocos = [
  { t: "Cozinha Show", d: "No Palco Gourmet Gerações, um chef diferente cozinha ao vivo a cada dia, com transmissão em telão para todo o público." },
  { t: "Festins e jantares", d: "Recebendo em Casa: mesa para 30 pessoas, serviço completo e chef convidado. Vagas limitadas, com reserva por horário." },
  { t: "Shows musicais", d: "Piano Bar ao vivo às 19h, 20h e 21h50, e o Projeto Cearal levando música instrumental cearense pelos espaços abertos." },
];

/* grade real dos 4 espaços do festival, por horário — sincronizada do cronograma ao vivo do portal interno (22/07/2026) */
const gradeEspacos: { id: string; nome: string; icon: string; grade: { dia: string; slots: { h: string; o: string; sub?: string; status: "confirmado" | "aconfirmar" | "fixo" | "intervalo" }[] }[] }[] = [
  { id: "palco", nome: "Palco Gourmet", icon: "mic", grade: [
    { dia: "Sexta", slots: [
      { h: "16h00 - 16h40", o: "Oficina de Abertura · Phê + Edil Costa", status: "aconfirmar" },
      { h: "16h40 - 17h00", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "17h00 - 17h40", o: "Daniel Sabbá", status: "aconfirmar" },
      { h: "17h40 - 18h00", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "18h00 - 18h40", o: "Sabores de uma bela História | Phelipe Carvalho + Zena", status: "aconfirmar" },
      { h: "18h40 - 19h20", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "19h20 - 20h20", o: CHEF_SURPRESA_REVELADO ? "Claude Troisgros" : "Chef convidado surpresa", sub: "São Luiz", status: "confirmado" },
      { h: "20h00 - 20h40", o: "Brunno Malheiros · Cheiro do Pão", status: "aconfirmar" },
      { h: "21h00 - 21h40", o: "Georgia Santiago - Muá Tuá", status: "aconfirmar" },
      { h: "21h40 - 22h00", o: "Fechamento", status: "fixo" },
    ]},
    { dia: "Sábado", slots: [
      { h: "16h00 - 16h40", o: "Oficina Prokichten", sub: "Prokichten", status: "aconfirmar" },
      { h: "16h40 - 17h00", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "17h00 - 18h00", o: "Sabor de uma bela história por Matu Macêdo + Phelipe Carvalho", status: "aconfirmar" },
      { h: "18h00 - 18h20", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "18h20 - 19h20", o: "Felipe Caputo", sub: "São Luiz", status: "confirmado" },
      { h: "19h20 - 19h40", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "19h40 - 20h20", o: "Rafael Kim", status: "aconfirmar" },
      { h: "20h20 - 21h00", o: "Thales Romão - NOM | Molino", status: "aconfirmar" },
      { h: "21h00 - 21h40", o: "Ralfo - Parrilleiro", status: "aconfirmar" },
      { h: "21h40 - 22h00", o: "Fechamento", status: "fixo" },
    ]},
    { dia: "Domingo", slots: [
      { h: "16h00 - 16h40", o: "Chef Well", status: "aconfirmar" },
      { h: "16h40 - 17h00", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "17h00 - 17h40", o: "Matheus Vieira", sub: "Arroz Tio João", status: "aconfirmar" },
      { h: "17h40 - 18h00", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "18h00 - 18h40", o: "Sabor de uma história · Chef Zinda + Phê", sub: "La France", status: "aconfirmar" },
      { h: "18h40 - 19h00", o: "Momento fornecedor", status: "aconfirmar" },
      { h: "19h00 - 19h40", o: "Pepê e Diego", sub: "Netumar", status: "aconfirmar" },
      { h: "19h40 - 20h00", o: "Fechamento", status: "fixo" },
    ]},
  ]},
  { id: "piano", nome: "Piano Bar", icon: "wine", grade: [
    { dia: "Sexta", slots: [
      { h: "15h50 - 16h00", o: "Welcome Drink · Happy Hour", status: "fixo" },
      { h: "16h00 - 16h50", o: "Maria São Braz - Vinhos", status: "aconfirmar" },
      { h: "16h50 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 17h50", o: "Marbenia", status: "aconfirmar" },
      { h: "17h50 - 18h00", o: "Intervalo", status: "intervalo" },
      { h: "18h00 - 18h50", o: "Leiliane", status: "aconfirmar" },
      { h: "18h50 - 19h00", o: "Intervalo", status: "intervalo" },
      { h: "19h00 - 19h50", o: "Monin", sub: "Monin", status: "confirmado" },
      { h: "19h50 - 20h00", o: "Intervalo", status: "intervalo" },
      { h: "20h00 - 20h50", o: "Jardenia | D'Origem", sub: "Dorigem", status: "aconfirmar" },
      { h: "20h50 - 21h00", o: "Intervalo", status: "intervalo" },
      { h: "21h00 - 21h50", o: "Karime Loureiro - espumantes", status: "confirmado" },
      { h: "21h50 - 22h00", o: "Fechamento", status: "fixo" },
    ]},
    { dia: "Sábado", slots: [
      { h: "15h50 - 16h00", o: "Welcome Drink · Happy Hour", status: "fixo" },
      { h: "16h00 - 16h50", o: "Drinks autorais por Coktelitas House of Drinks", status: "confirmado" },
      { h: "16h50 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 17h50", o: "Rangel Barbosa", status: "aconfirmar" },
      { h: "17h50 - 18h00", o: "Intervalo", status: "intervalo" },
      { h: "18h00 - 18h50", o: "Campari", sub: "Campari", status: "aconfirmar" },
      { h: "18h50 - 19h00", o: "Intervalo", status: "intervalo" },
      { h: "19h00 - 19h50", o: "Gengibrada do Giz", status: "aconfirmar" },
      { h: "19h50 - 20h00", o: "Intervalo", status: "intervalo" },
      { h: "20h00 - 20h50", o: "Drinks autorais por Amecari", status: "aconfirmar" },
      { h: "20h50 - 21h00", o: "Intervalo", status: "intervalo" },
      { h: "21h00 - 21h50", o: "BTCH 746 - vinho - sommelier da casa", status: "aconfirmar" },
      { h: "21h50 - 22h00", o: "Fechamento", status: "fixo" },
    ]},
    { dia: "Domingo", slots: [
      { h: "15h50 - 16h00", o: "Welcome Drink · Happy Hour", status: "fixo" },
      { h: "16h00 - 16h50", o: "Marco Ferarri", sub: "Opção", status: "aconfirmar" },
      { h: "16h50 - 17h00", o: "Intervalo", status: "intervalo" },
      { h: "17h00 - 17h50", o: "espaço para café (LOR)", status: "aconfirmar" },
      { h: "17h50 - 18h00", o: "Intervalo", status: "intervalo" },
      { h: "18h00 - 18h50", o: "Drinks autorais por Zelig", status: "confirmado" },
      { h: "18h50 - 19h00", o: "Intervalo", status: "intervalo" },
      { h: "19h00 - 19h50", o: "Drinks autorais por Ciranda Brasa", status: "confirmado" },
      { h: "19h50 - 20h00", o: "Intervalo", status: "intervalo" },
      { h: "20h00 - 20h50", o: "Drinks autorais por Jass", status: "confirmado" },
      { h: "20h50 - 21h00", o: "Intervalo", status: "intervalo" },
      { h: "21h00 - 21h50", o: "Drinks autorais por Misaki (tem uma pessoa da casa)", status: "aconfirmar" },
      { h: "21h50 - 22h00", o: "Fechamento", status: "fixo" },
    ]},
  ]},
  { id: "casa", nome: "Recebendo em Casa", icon: "home", grade: [
    { dia: "Sexta", slots: [
      { h: "16h00 - 17h30", o: "Isabela Fiúza + Phê", status: "aconfirmar" },
      { h: "17h30 - 17h50", o: "Atração · Eduardo Santos", status: "aconfirmar" },
      { h: "17h50 - 19h20", o: "Felipe Cicconato + Bia Araújo + Karime Loureiro", sub: "Opção", status: "aconfirmar" },
      { h: "19h20 - 19h40", o: "Atração · Eduardo Santos", status: "aconfirmar" },
      { h: "19h40 - 22h00", o: "Recebendo em Casa São Luiz · Convidados | Phelipe Carvalho + Lorena Machado", sub: "Netas de Olga", status: "aconfirmar" },
    ]},
    { dia: "Sábado", slots: [
      { h: "16h00 - 17h30", o: "Chef Luiz de França | Ana Paula Rezende", status: "aconfirmar" },
      { h: "17h30 - 17h50", o: "Eduardo Santos", status: "aconfirmar" },
      { h: "17h50 - 19h20", o: "Pepê + Chef Well", sub: "Heineken", status: "aconfirmar" },
      { h: "19h40 - 22h00", o: "Recebendo em Casa São Luiz · Convidados | Phelipe Carvalho + Karol Theodoro", sub: "Heineken", status: "aconfirmar" },
    ]},
    { dia: "Domingo", slots: [
      { h: "16h00 - 17h30", o: "Chef Marina Araújo + Lia Quinderé", status: "aconfirmar" },
      { h: "17h30 - 17h50", o: "Atração · Eduardo Santos", status: "aconfirmar" },
      { h: "17h50 - 19h20", o: "Gabi Barreto + Karime + Renata (Azucar)", sub: "Heineken", status: "aconfirmar" },
      { h: "19h20 - 19h40", o: "Atração · Eduardo Santos", status: "aconfirmar" },
      { h: "19h40 - 22h00", o: "Recebendo em Casa São Luiz · Convidados | Phelipe Carvalho + Netas de Olga", sub: "Opção", status: "aconfirmar" },
    ]},
  ]},
];

const produtoresLocais = [
  { nome: "Tijuca", desde: "1969", desc: "Queijo coalho e ovos, um clássico da mesa cearense.", logo: "/produtores/tijuca.webp" },
  { nome: "Emape", desde: "1963", desc: "Tradição em alimentos que atravessa gerações.", logo: "/produtores/emape.webp" },
  { nome: "Granja Regina · Merci", desde: "", desc: "Produtos de granja e doces artesanais.", logo: "/produtores/granja-regina.webp" },
  { nome: "Cachaça Viçosa", desde: "", desc: "Cachaça artesanal cearense.", logo: "/produtores/cachaca-vicosa.webp" },
  { nome: "Sabor & Vida", desde: "", desc: "Cream cheese e ricota fresquinhos.", logo: "/produtores/sabor-vida.webp" },
];


const regras = [
  { t: "Para toda a família", d: "Ambiente para todas as idades. Menores devem estar acompanhados dos responsáveis." },
  { t: "Chuva ou sol, o festival acontece", d: "O La Maison Coliseu é um espaço 100% coberto: nada muda com o tempo lá fora, do primeiro brinde ao último prato." },
];

const ingressoInfo = [
  { t: "Por dia ou combo", d: "Compre para um dia específico ou o combo com os três dias de festival. Sem limite de ingressos por pessoa." },
  { t: "Meia-entrada", d: "Meia-entrada conforme a lei, com a devida comprovação na entrada." },
  { t: "Estudante de gastronomia", d: "Gratuidade para estudantes de gastronomia, mediante apresentação da credencial." },
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
    <div ref={wrap} className="flex items-start justify-center gap-1.5 md:gap-4 mt-5 max-w-xl mx-auto">
      {units.map(([v, l], i) => (
        <Fragment key={l}>
          <div className="text-center relative w-16 md:w-20">
            <div className="absolute inset-x-0 top-0 h-12 md:h-16 rounded-full bg-dourado opacity-20 blur-2xl -z-10" aria-hidden="true" />
            <div data-unit className="font-serif font-extrabold text-dourado tabular-nums" style={{ fontSize: "clamp(32px,9vw,60px)", lineHeight: 1 }}>{v}</div>
            <div className="text-[9px] md:text-[11px] font-bold tracking-[0.16em] uppercase text-creme/60 mt-2">{l}</div>
          </div>
          {i < units.length - 1 && <Sparkle className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-dourado/50 mt-3 md:mt-4 shrink-0" />}
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
      <div key={cur.sigla} className="cfade relative mt-7 max-w-xl mx-auto bg-white/[0.04] border border-musgo/25 rounded-3xl p-8 md:p-10 text-center overflow-hidden">
        <div className="absolute top-0 left-0 h-[3px] bg-musgo fillbar" />
        <div className="absolute inset-x-8 top-6 h-16 rounded-full bg-musgo opacity-20 blur-2xl -z-10" aria-hidden="true" />
        <div className="font-serif font-extrabold text-dourado" style={{ fontSize: "clamp(30px,7vw,44px)" }}>{cur.sigla}</div>
        <div className="text-creme font-semibold text-[15px] mt-1">{cur.nome}</div>
        <p className="text-creme/80 text-[14px] leading-relaxed mt-4 max-w-md mx-auto">{cur.desc}</p>
        <a href={cur.site} target="_blank" rel="noopener" className="inline-block mt-7 px-7 py-3 rounded-full bg-musgo/90 text-oliva font-bold text-[13px] tracking-wide hover:bg-musgo transition">
          Conhecer o {cur.sigla}
        </a>
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
  const heroRef = useRef<HTMLDivElement>(null);
  const chefsTrackRef = useRef<HTMLDivElement>(null);
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
          <a href="#topo" className="flex items-center gap-2.5">
            <img src="/brand/logo-fcg.webp" alt="Festival Costume Gourmet" className="h-9 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold tracking-wide text-grafite/80">
            {navLinks.slice(0, 7).map(([href, label]) => (
              <a key={href} href={href} className="hover:text-dourado transition">{label}</a>
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
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-2.5 text-[14px] font-bold text-vinho hover:text-dourado border-b border-creme-soft">{label}</a>
              ))}
            </div>
          </div>
        )}
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
            O festival de gastronomia que celebra os 100 anos do São Luiz. Chefs, degustações, música e experiências, no La Maison Coliseu, em Fortaleza.
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
        </div>
      </section>

      {/* ===== CONTAGEM REGRESSIVA ===== */}
      <section className="px-5 -mt-4 md:-mt-8 relative z-10">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="rounded-[2rem] text-creme px-5 py-8 md:py-10 shadow-xl shadow-oliva/30 relative overflow-hidden" style={{ background: "radial-gradient(circle at 50% 40%, #4A4A22 0%, #26260A 65%)" }}>
              <Eyebrow center dark>Contagem regressiva</Eyebrow>
              <Countdown />
              <div className="text-center text-[12px] text-creme/60 mt-5">18 a 20 de setembro · Fortaleza</div>
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
                  <div className="label-eyebrow font-bold uppercase text-dourado text-[11px]">Chef convidado</div>
                  <h3 className="font-serif font-extrabold text-vinho mt-1.5" style={{ fontSize: "clamp(26px,4.5vw,38px)" }}>Claude <span className="italic text-dourado">Troisgros</span></h3>
                  <p className="text-[14px] leading-relaxed text-grafite/75 mt-2 max-w-xl">
                    Herdeiro de uma das famílias mais importantes da gastronomia francesa, mora no Brasil desde 1979 e passa pelo Costume Gourmet nesta sexta-feira.
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
                História e legado
              </h2>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-grafite/80">
              O Festival Costume Gourmet nasce da trajetória centenária do São Luiz Supermercado, que completa 100 anos em 2026.
            </p>
            <blockquote className="relative my-6 pl-6 border-l-2 border-dourado">
              <span className="absolute -left-1 -top-5 font-serif text-dourado/25 text-6xl select-none" aria-hidden="true">"</span>
              <p className="font-serif italic text-vinho text-xl md:text-2xl leading-snug">legado, experiência e futuro dividindo a mesma mesa.</p>
            </blockquote>
            <p className="mt-4 text-[15px] leading-relaxed text-grafite/80">
              Marcas, produtores, chefs, especialistas e consumidores reunidos em torno do que valoriza origem, qualidade e propósito. A curadoria se inspira na cena gastronômica cearense, onde cada receita carrega memória e cada aroma desperta lembranças.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="flex gap-3 items-start">
                <img loading="lazy" src="/brand/ic-ramo.webp" alt="" aria-hidden="true" className="w-9 h-9 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[13px] font-bold text-vinho">Sustentabilidade na prática</div>
                  <p className="text-[12.5px] text-grafite/70 leading-snug mt-0.5">Damos palco a produtores locais de décadas, como a Tijuca (desde 1969) e a Emape (desde 1963), valorizando origem e cadeia curta ao invés de importar de fora.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <img loading="lazy" src="/brand/ic-livro.webp" alt="" aria-hidden="true" className="w-9 h-9 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[13px] font-bold text-vinho">Prêmio Sabores da Cidade</div>
                  <p className="text-[12.5px] text-grafite/70 leading-snug mt-0.5">O festival recebe no palco a cerimônia do Prêmio Sabores da Cidade, que elege os melhores da gastronomia cearense em diversas categorias.</p>
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
              Nossos espaços
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-grafite/75">
              Cada espaço é uma forma diferente de viver o festival, do palco à mesa que recebe você como em casa.
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
                        <img loading="lazy" src={`/brand/${e.selos[0]}.webp`} alt="" aria-hidden="true" className="absolute -bottom-3 left-3 w-11 -rotate-6 drop-shadow-md pointer-events-none select-none" />
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
      <section className="px-5">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="rounded-[2rem] text-creme px-6 py-14 md:py-20 text-center relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 35%,#4E1714 0%,#3A0F0E 55%,#2A0A09 100%)" }}>
              <div className="absolute inset-0 -z-0 opacity-[0.07]" style={{ backgroundImage: "url(/brand/ilustra-mesa-vinho.webp)", backgroundSize: "520px", backgroundPosition: "center" }} />
              <div className="absolute inset-0 -z-0 opacity-[0.04]" style={{ backgroundImage: "url(/brand/pattern-vinho.webp)", backgroundSize: "300px", filter: "grayscale(1) contrast(1.2)", mixBlendMode: "overlay" }} />
              <div className="relative">
                <Eyebrow dark>Uma edição histórica</Eyebrow>
                <h2 className="font-serif font-extrabold mt-3 leading-tight" style={{ fontSize: "clamp(28px,5.5vw,52px)" }}>
                  100 anos celebrados<br />em 3 dias de festa
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-11 max-w-4xl mx-auto">
                  {numeros.map((s) => (
                    <div key={s.l} className={`relative ${s.hero ? "col-span-2 md:col-span-1" : ""}`}>
                      <div className="absolute inset-x-2 top-1 h-14 rounded-full opacity-25 blur-2xl -z-10" style={{ background: s.glow }} aria-hidden="true" />
                      <CountUp
                        to={s.to} prefix={s.prefix} suffix={s.suffix}
                        className={`font-serif font-extrabold tabular-nums block ${s.hero ? "text-telha" : "text-dourado"}`}
                        style={{ fontSize: s.hero ? "clamp(56px,13vw,88px)" : "clamp(36px,7vw,52px)" }}
                      />
                      <div className="label-micro text-[11px] text-creme/70 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
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
              Cada dia tem a sua vibe, do protagonismo feminino da sexta ao encerramento intimista de domingo. A grade completa por horário será anunciada em breve.
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

          <div className="grid sm:grid-cols-2 gap-4">
            {programacaoBlocos.map((b, i) => (
              <Reveal key={b.t} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-creme-soft p-6 shadow-sm h-full">
                  <h3 className="font-serif font-bold text-xl text-telha">{b.t}</h3>
                  <p className="text-[13.5px] leading-relaxed text-grafite/80 mt-1.5">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
              Os chefs do festival
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-grafite/75">
              Prévia do line-up: os chefs ainda estão em fechamento com o time, por isso os cards aparecem esmaecidos por enquanto.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative max-w-content mx-auto">
            <div ref={chefsTrackRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-4 select-none pointer-events-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ WebkitMaskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)", filter: "blur(3.5px)", opacity: 0.55 }}>
              {chefs.filter((c) => CHEF_SURPRESA_REVELADO || c.nome !== "Claude Troisgros").map((c) => (
                <div key={c.nome} className="flex-shrink-0 w-[248px] snap-start bg-white rounded-3xl shadow-sm border border-creme-soft overflow-hidden">
                  <div className={`${c.cor} h-56 flex items-center justify-center relative overflow-hidden`} style={{ backgroundImage: "radial-gradient(circle at 50% 30%, rgba(255,255,255,.12), transparent 60%)" }}>
                    {c.foto ? (
                      <img loading="lazy" src={c.foto} alt={c.nome} className="absolute inset-0 w-full h-full object-cover foto-real" />
                    ) : (
                      <div className="w-24 h-24 rounded-full border-[1.5px] border-dourado/50 grid place-items-center relative z-10">
                        <span className="font-serif italic font-black text-creme/95 select-none" style={{ fontSize: 56, lineHeight: 1 }}>
                          {c.nome.replace(/^Chef\s+/i, "").trim().charAt(0)}
                        </span>
                      </div>
                    )}
                    {c.dia && (
                      <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.14em] px-2.5 py-1 rounded-full bg-creme/90 text-vinho z-10">{c.dia}</span>
                    )}
                    {!c.foto && <img loading="lazy" src="/brand/ilustra-mesa-vinho.webp" alt="" className="absolute -right-7 -bottom-7 w-28 opacity-10 pointer-events-none" />}
                    <div className="absolute inset-0" style={{ background: c.foto ? "linear-gradient(to top, rgba(0,0,0,.55), transparent 60%)" : "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,.25) 100%)" }} />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-dourado">{c.atracao}</div>
                    <h3 className="font-serif font-bold text-xl text-grafite mt-1">{c.nome}</h3>
                    {c.sub && <div className="text-[12px] font-semibold text-grafite/70">{c.sub}</div>}
                    {c.casa && <div className="text-[12.5px] text-grafite/60 mt-0.5">{c.casa}</div>}
                    {c.bio && <p className="text-[11.5px] text-grafite/55 leading-snug mt-1.5">{c.bio}</p>}
                    {c.link && (
                      <Link to={c.link} className="inline-flex items-center gap-1.5 mt-2.5 text-[11.5px] font-bold text-dourado hover:text-laranja">
                        Conheça a história {c.pronome ?? "dele"} →
                      </Link>
                    )}
                    {c.instagram && (
                      <a href={c.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 mt-2.5 text-[11.5px] font-bold text-dourado hover:text-laranja">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" /></svg>
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button aria-label="Chef anterior" onClick={() => chefsTrackRef.current?.scrollBy({ left: -264, behavior: "smooth" })} className="hidden md:grid absolute left-0 top-[104px] -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-md border border-creme-soft text-vinho place-items-center hover:bg-vinho hover:text-creme transition z-10">‹</button>
            <button aria-label="Próximo chef" onClick={() => chefsTrackRef.current?.scrollBy({ left: 264, behavior: "smooth" })} className="hidden md:grid absolute right-0 top-[104px] translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-md border border-creme-soft text-vinho place-items-center hover:bg-vinho hover:text-creme transition z-10">›</button>
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="bg-vinho text-creme px-6 py-3 rounded-full shadow-lg text-center">
                <div className="text-[12px] font-bold tracking-wide">Line-up em fechamento</div>
                <div className="text-[11px] text-creme/70">Os chefs confirmados são revelados perto do evento</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="max-w-content mx-auto px-5 mt-16">
          <Reveal>
            <Eyebrow>Grade por espaço</Eyebrow>
            <h3 className="font-serif font-extrabold text-vinho mt-2 leading-[1.02]" style={{ fontSize: "clamp(24px,4.5vw,38px)" }}>
              O que rola em cada palco
            </h3>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-grafite/75">
              Prévia do cronograma: a grade ainda está em fechamento com o time, por isso os detalhes aparecem esmaecidos por enquanto.
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
            <div className="grid md:grid-cols-3 gap-4 select-none pointer-events-none" style={{ filter: "blur(3.5px)", opacity: 0.55 }}>
              {gradeEspacos[espacoAtivo].grade.map((g, gi) => (
                <Reveal key={`${gradeEspacos[espacoAtivo].id}-${g.dia}`} delay={gi * 90}>
                  <div className="bg-white rounded-3xl border border-creme-soft shadow-sm overflow-hidden h-full flex flex-col">
                    <div className="bg-vinho text-creme px-5 py-3.5 flex items-center justify-between">
                      <span className="font-serif font-bold text-lg">{g.dia}</span>
                    </div>
                    <div className="divide-y divide-creme-soft flex-1">
                      {g.slots.map((s, i) => (
                        <div key={i} className={`px-5 py-3 flex gap-3 ${s.status === "intervalo" ? "opacity-50" : ""}`}>
                          <span className="text-[11px] font-bold text-dourado tabular-nums shrink-0 w-[86px] pt-0.5">{s.h}</span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className={`text-[13px] leading-snug ${s.status === "intervalo" ? "text-grafite/50" : "font-semibold text-grafite"}`}>{s.o}</div>
                              {s.status === "aconfirmar" && <span className="shrink-0 text-[8.5px] font-bold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded bg-creme-soft text-grafite/50 mt-0.5">a confirmar</span>}
                              {s.status === "confirmado" && <span className="shrink-0 text-[8.5px] font-bold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded bg-musgo/20 text-oliva mt-0.5">confirmado</span>}
                            </div>
                            {s.sub && <div className="text-[11.5px] text-grafite/55">{s.sub}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="bg-vinho text-creme px-6 py-3 rounded-full shadow-lg text-center">
                <div className="text-[12px] font-bold tracking-wide">Grade em fechamento</div>
                <div className="text-[11px] text-creme/70">A programação completa é revelada perto do evento</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALERIA ===== */}
      <section id="galeria" className="px-5 pb-4 md:pb-8 relative overflow-hidden">
        <img loading="lazy" src="/brand/carimbo-oliva.webp" alt="" aria-hidden="true" className="absolute -bottom-20 -right-20 w-[480px] opacity-[0.10] -rotate-[8deg] pointer-events-none select-none hidden md:block" />
        <div className="max-w-content mx-auto relative">
          <Reveal>
            <Eyebrow center>Galeria</Eyebrow>
            <h2 className="font-serif font-extrabold text-vinho mt-2 text-center" style={{ fontSize: "clamp(30px,5.5vw,54px)" }}>
              O festival por dentro
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[15px] leading-relaxed text-grafite/75 text-center">
              Uma prévia dos ambientes que preparamos para esta edição.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10" style={{ gridAutoFlow: "dense" }}>
              {galeria.map((src, i) => (
                <div key={src} className={`group relative rounded-2xl overflow-hidden aspect-[4/3] frame-real foto-grain ${i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-square" : ""}`}>
                  <img
                    src={src} alt="Ambiente do festival" loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 foto-real"
                    style={i % 4 !== 1 ? { filter: "url(#duotone-vl)" } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dourado/0 opacity-0 group-hover:opacity-100 group-hover:from-dourado/30 to-transparent transition-opacity duration-500" />
                  {i === 2 && <img loading="lazy" src="/brand/ic-alho.webp" alt="" aria-hidden="true" className="absolute bottom-2 right-2 w-9 ring-2 ring-creme/40 rounded-full drop-shadow-sm pointer-events-none select-none" />}
                  {i === 5 && <img loading="lazy" src="/brand/ic-pao.webp" alt="" aria-hidden="true" className="absolute bottom-2 left-2 w-9 ring-2 ring-creme/40 rounded-full drop-shadow-sm pointer-events-none select-none" />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

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
              A curadoria de restaurantes, bares, docerias e cafeterias desta edição está em fechamento. No sábado, o festival recebe restaurantes locais e coquetelaria autoral.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
            {produtoresLocais.map((p, i) => (
              <Reveal key={p.nome} delay={i * 70}>
                <div className="bg-white rounded-2xl border border-creme-soft shadow-sm p-5 h-full flex flex-col items-center text-center">
                  <div className="h-14 flex items-center justify-center">
                    <img loading="lazy" src={p.logo} alt={p.nome} className="max-h-14 max-w-full object-contain" />
                  </div>
                  <h3 className="font-serif font-bold text-[15px] text-grafite mt-3 leading-tight">{p.nome}</h3>
                  {p.desde && <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-dourado mt-1">Desde {p.desde}</div>}
                  <p className="text-[12px] leading-relaxed text-grafite/60 mt-2">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-6 text-[12.5px] text-grafite/55 leading-relaxed max-w-xl">
              Restrição alimentar? A curadoria final do cardápio, com opções vegetarianas e sem glúten identificadas por casa, será divulgada perto da data.
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
                  Cada receita do press kit carrega a história por trás do prato. O acervo digital, aberto pra todo mundo, está em produção.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
                  Toda a renda dos ingressos vai para três instituições que cuidam de gente em Fortaleza.
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
              As marcas que fazem o festival acontecer, do patrocínio master ao premium.
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
                Toda a bilheteria é revertida para instituições sociais. Comprar ingresso aqui é também fazer o bem.
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
          <Reveal>
            <div className="mt-5 text-creme rounded-3xl p-7 md:p-9 md:flex items-center justify-between gap-8 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 30% 100%,#4E1714 0%,#3A0F0E 60%)" }}>
              <img loading="lazy" src="/brand/ondas-vinho.webp" alt="" aria-hidden="true" className="absolute -top-5 -right-5 w-40 opacity-90 pointer-events-none select-none" />
              <div className="md:flex-1 relative">
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-dourado">Votação popular</div>
                <h3 className="font-serif font-bold text-2xl mt-1">Você elege a edição</h3>
                <p className="text-[13.5px] leading-relaxed text-creme/80 mt-2 max-w-md">
                  No sábado, às 15h, saem os indicados a melhor petisco e melhor serviço, com o público participando da escolha.
                </p>
              </div>
              <div className="relative shrink-0 mt-6 md:mt-0">
                <div className="absolute inset-0 rounded-full bg-dourado opacity-30 blur-2xl -z-10" aria-hidden="true" />
                <a href={SYMPLA} target="_blank" rel="noopener" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-dourado to-laranja text-vinho font-bold tracking-wide shadow-lg shadow-dourado/20 hover:brightness-105 transition text-center">
                  Comprar na Sympla
                </a>
              </div>
            </div>
          </Reveal>
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
                  <p className="text-[12.5px] text-grafite/60">Vem de outra cidade? Em breve divulgaremos parcerias de hospedagem e dicas de acesso.</p>
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
                  Um público adulto e qualificado reunido em três dias. Escolha por onde falar com a gente.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-10 relative">
                <div className="bg-white/[0.04] border border-dourado/20 rounded-2xl p-6 flex flex-col">
                  <div className="font-serif italic text-dourado/40 text-3xl leading-none mb-1">01</div>
                  <h3 className="font-serif font-bold text-xl text-dourado">Marcas e patrocínio</h3>
                  <p className="text-[13px] leading-relaxed text-creme/80 mt-2 flex-1">Conecte sua marca ao festival. Receba o mídia kit com audiência, alcance e cotas comerciais.</p>
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
            Acompanhe os bastidores da montagem, os chefs confirmados e as novidades da edição do centenário direto no Instagram.
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
              Fique por dentro de cada novidade
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-grafite/75">
              Entre no nosso canal do Instagram e receba em primeira mão: chefs confirmados, abertura da bilheteria e programação por dia.
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
            <a href="https://wa.me/5585999842234" target="_blank" rel="noopener" className="hover:text-dourado">Comercial <b className="text-dourado">(85) 99984-2234</b></a>
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
    </div>
  );
}
