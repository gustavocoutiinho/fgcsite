export interface ChefArticleSection {
  titulo: string;
  paragrafos: string[];
}

export interface ChefProfileData {
  slug: string;
  primeiroNome: string;
  resto: string;
  dia: string;
  foto?: string;
  cor: string;
  bioCurta: string;
  metaDescription: string;
  tituloPagina: string;
  artigo: ChefArticleSection[];
}

export const chefProfiles: Record<string, ChefProfileData> = {
  "daniel-sabba": {
    slug: "daniel-sabba",
    primeiroNome: "Daniel",
    resto: "Sabbá",
    dia: "SEXTA",
    foto: "/chefs/daniel-sabba.webp",
    cor: "bg-bordo",
    bioCurta: "Chef paraense radicado em Fortaleza há 6 anos, dono do Sabbar (1º bar de tapas da cidade) e vencedor de duelo contra Felipe Bronze no GNT.",
    metaDescription: "Conheça Daniel Sabbá, chef paraense do Sabbar em Fortaleza, vencedor do reality No Fogo com Bronze, que comanda o Palco Gourmet na abertura do Festival Costume Gourmet 2026.",
    tituloPagina: "Daniel Sabbá no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Da Amazônia ao Ceará: a trajetória de Daniel Sabbá",
        paragrafos: [
          "Daniel Benayon Oliveira Sabbá nasceu em Belém, no Pará, terra de sabores intensos, rios fartos e uma cultura gastronômica que carrega identidade própria dentro do Brasil. É de lá que vem boa parte do que o chef leva hoje para a cozinha: o gosto por ingredientes amazônicos, o respeito pela técnica do fogo e uma forma de cozinhar que não esconde a origem, pelo contrário, faz questão de contá-la a cada prato.",
          "Há seis anos, Daniel decidiu construir sua história profissional em Fortaleza. A cidade o recebeu, nas palavras do próprio chef, com um abraço que ele soube retribuir na cozinha: transformou a vivência cearense em terreno fértil para amadurecer um projeto autoral, sem abrir mão das raízes paraenses que sempre fizeram parte de sua identidade. Essa combinação, a bagagem amazônica somada à vivência cearense, é hoje a assinatura que o diferencia no cenário gastronômico local.",
          "Além de chef, Daniel Sabbá construiu reputação como pitmaster, especialista na técnica do churrasco à americana e da defumação, uma área que exige domínio fino de tempo, temperatura e leitura da carne. Essa expertise foi reconhecida oficialmente: ele é juiz certificado pela Kansas City Barbeque Society (KCBS), uma das principais organizações internacionais de referência para quem trabalha com churrasco e brasa em alto nível. É um tipo de credencial que poucos cozinheiros no Ceará possuem, e que reforça o motivo pelo qual seu nome circula com naturalidade entre os grandes eventos gastronômicos da região.",
        ],
      },
      {
        titulo: "Sabbar: o primeiro bar de tapas de Fortaleza",
        paragrafos: [
          "O endereço onde Daniel Sabbá coloca sua cozinha em prática é o Sabbar, instalado na Avenida Dom Luís, 1085, no Meireles, dentro do Shopping Alamanda. A casa se apresenta como o primeiro bar de tapas de Fortaleza, uma proposta que vai além do prato principal e aposta em porções pensadas para compartilhar, petiscar e prolongar a experiência à mesa, um formato que dialoga diretamente com a cultura espanhola das tapas, mas ganha camadas amazônicas no recheio, no tempero e na técnica.",
          "O projeto tem assinatura de curadoria da DNX Hotelaria, com design do arquiteto Afonso Tomoda, CEO do escritório Tomoda Arquitetura. O resultado é um ambiente que mistura estilos industrial, rústico e moderno, com cores, formas e bastante vegetação distribuídas entre um amplo salão ao ar livre, madeira à vista e uma cozinha industrial com grande janela, pensada justamente para que o cliente acompanhe o preparo dos pratos em tempo real, quase como se estivesse sentado à beira do fogão. O mobiliário reforça essa personalidade: poltronas e cadeiras diferentes entre si fazem com que cada canto da casa tenha um clima próprio, evitando a sensação de espaço padronizado.",
          "Na cozinha, Daniel une raízes brasileiras, sobretudo os ingredientes e sabores típicos do Pará, à culinária espanhola que dá nome ao conceito de bar de tapas. É um cardápio que não tenta ser uma cópia de outra tradição, mas uma conversa entre duas culturas gastronômicas distantes geograficamente e próximas na forma como valorizam produto fresco, técnica de fogo e generosidade no prato. O reconhecimento do público tem acompanhado a proposta: no Tripadvisor, o Sabbar aparece avaliado com nota 4,9 de 5, entre a posição 200 de quase 1.900 restaurantes listados em Fortaleza, um indicador e tanto para uma casa relativamente nova na cidade.",
        ],
      },
      {
        titulo: "A vitória contra Felipe Bronze: quando a brasa fala mais alto",
        paragrafos: [
          "Em junho de 2026, o nome de Daniel Sabbá ganhou projeção nacional. Ele foi um dos participantes do reality show gastronômico No Fogo com Bronze, exibido pelo canal GNT e pela plataforma Globoplay, atração que coloca cozinheiros de fora do eixo Rio-São Paulo em duelos diretos, às cegas, contra o renomado chef Felipe Bronze, um dos nomes mais premiados da alta gastronomia brasileira.",
          "No episódio batizado de Voando para o Pará, exibido numa quarta-feira, dia 10 de junho de 2026, às 21h45, Daniel e Felipe Bronze prepararam filhote (peixe típico da culinária amazônica) na brasa, cada um à sua maneira. Um júri especializado avaliou as duas versões em teste cego, sem saber qual prato pertencia a qual chef. O resultado favoreceu Daniel Sabbá, que levou o troféu da edição e um prêmio de R$ 10 mil, superando um adversário de peso justamente na técnica que mais domina: o trato com o fogo.",
          "Ao comentar a experiência, o chef definiu a passagem pelo programa como algo intenso e ao mesmo tempo prazeroso, e disse sentir orgulho de levar essa conquista para quem acompanha e curte o trabalho que ele desenvolve em Fortaleza. É um marco simbólico importante: mostra que a técnica amazônica de churrasco e defumação que ele pratica no dia a dia do Sabbar tem lastro suficiente para vencer, num critério cego e imparcial, um dos chefs mais respeitados do país.",
        ],
      },
      {
        titulo: "Daniel Sabbá no Festival Costume Gourmet 2026",
        paragrafos: [
          "É esse repertório, a bagagem amazônica, o domínio de brasa e defumação, a experiência de vencer sob pressão em rede nacional e a vivência à frente de uma casa autoral em Fortaleza, que Daniel Sabbá leva ao Festival Costume Gourmet 2026. Ele se apresenta no Palco Gourmet, o espaço de cozinha show do festival, onde um chef diferente assume o comando a cada dia do evento, cozinhando ao vivo diante do público. A apresentação de Daniel acontece justamente na sexta-feira, dia de abertura do festival, um convite para quem quiser ver de perto como um pitmaster certificado internacionalmente traduz o fogo amazônico em espetáculo gastronômico.",
          "O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza. O evento é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026, e reúne três espaços centrais de experiência: além do Palco Gourmet, há o Piano Bar, dedicado a drinks e música ao vivo, e o Recebendo em Casa, um jantar intimista em mesa para 30 pessoas com chef convidado. Toda a renda da bilheteria, 100%, é revertida para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC), o que faz do festival também um gesto coletivo de cidade em torno de causas concretas.",
          "Ver Daniel Sabbá no Palco Gourmet é, portanto, mais do que assistir a uma demonstração culinária: é acompanhar de perto o trabalho de um chef que carrega o Pará no tempero, aprendeu a fazer de Fortaleza sua casa e provou, diante das câmeras e de um júri imparcial, que sabe o que faz quando o assunto é fogo. Sob o tema Sabores de uma bela história, o festival encontra em sua trajetória exatamente o tipo de narrativa que dá sentido ao nome: histórias reais, construídas com trabalho, técnica e identidade, servidas à mesa para quem estiver presente.",
        ],
      },
    ],
  },
  "brunno-malheiros": {
    slug: "brunno-malheiros",
    primeiroNome: "Brunno",
    resto: "Malheiros",
    dia: "SEXTA",
    foto: "/chefs/brunno-malheiros.webp",
    cor: "bg-oliva",
    bioCurta: "Do bairro do Papicu ao pódio mundial do panetone: Brunno Malheiros, da Cheiro do Pão, chega ao Palco Gourmet do Festival Costume Gourmet 2026.",
    metaDescription: "Conheça Brunno Malheiros, padeiro cearense da Cheiro do Pão, campeão nacional de panetone e presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026.",
    tituloPagina: "Brunno Malheiros no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Quem é Brunno Malheiros, o padeiro cearense que virou notícia nacional",
        paragrafos: [
          "Fortaleza tem, no bairro do Papicu, um endereço que faz parte da vida gastronômica da cidade há praticamente seis anos: a padaria Cheiro do Pão. Por trás do balcão e, principalmente, por trás da bancada onde nascem os fermentos, está Brunno Malheiros, empresário e padeiro cearense que transformou uma paixão de infância em um dos nomes mais respeitados da panificação artesanal do Brasil hoje.",
          "A relação de Brunno com o pão não começou num curso de gastronomia chique nem numa cozinha de restaurante. Começou em casa, dentro da própria família. Ele é neto de Carlos Malheiros, nome histórico da panificação em Fortaleza e dono da tradicional Casa Plaza, no bairro do Cocó, falecido em agosto de 2023, aos 78 anos. Foi observando o avô que o menino Brunno se encantou pela ideia de que farinha, água e fermento podem virar, com tempo e cuidado, um alimento vivo do início ao fim. Reportagens sobre sua trajetória contam que, após a separação dos pais quando ele tinha 7 anos, o tempo dedicado a aprender o ofício da padaria só cresceu, e o que era brincadeira de neto foi virando ofício.",
          "Mais adiante, Brunno buscou se qualificar fora do Ceará, passando por cursos de panificação em outros estados antes de estruturar o próprio negócio. É esse percurso, entre a bancada do avô e a formação técnica que ele foi atrás por conta própria, que explica por que a Cheiro do Pão nunca foi tratada como um empreendimento qualquer: para Brunno, panificação é ofício de família e, ao mesmo tempo, disciplina que se estuda e se aprimora a vida inteira.",
        ],
      },
      {
        titulo: "Cheiro do Pão: de duas fornadas por dia a referência na panificação artesanal",
        paragrafos: [
          "A história da marca começou antes mesmo de existir uma loja. Em 2016, um professor teria dito a Brunno uma frase simples que acabou virando lema de vida e, depois, nome de empresa: \"siga o cheiro do pão\". A ideia ficou guardada até que, em 2020, em plena pandemia, momento em que tanta gente recuou dos próprios planos, Brunno abriu oficialmente a Cheiro do Pão no Papicu, em Fortaleza. Os primeiros tempos foram modestos: poucos clientes e duas fornadas por dia, segundo relatos da própria trajetória do negócio.",
          "De lá pra cá, a padaria deixou de ser um projeto pequeno de bairro para se tornar uma referência local, nacional e, mais recentemente, internacional na panificação artesanal. Em julho de 2026 a casa completa seis anos de história, e o crescimento não aconteceu por acaso: veio de reinvestimento constante em equipamento, ingrediente e conhecimento, e da mesma obsessão por qualidade que Brunno descreve como a de alguém \"eternamente insatisfeito\", sempre em busca do próximo desafio técnico.",
          "O fio condutor da marca segue sendo o que Brunno aprendeu ainda menino com o avô Carlos Malheiros: a ideia de que servir é um privilégio. Em entrevistas, ele costuma resumir a filosofia da casa dizendo que o melhor retorno do negócio não é financeiro, é ver o cliente satisfeito com o que sai do forno. Hoje a Cheiro do Pão despacha produtos para todo o Brasil, incluindo os panetones que se tornaram o carro-chefe da casa, provando que um empreendimento nascido pequeno, no meio de uma crise sanitária, pode crescer sem perder a essência artesanal que o fez nascer.",
        ],
      },
      {
        titulo: "Os panetones que colocaram o Ceará no mapa da confeitaria mundial",
        paragrafos: [
          "Se a Cheiro do Pão já era uma boa padaria de bairro, foi o panetone que a transformou em fenômeno. Brunno passou a se dedicar a sério ao produto a partir de 2021 e 2022, período em que, insatisfeito com os primeiros resultados, investiu pesado: trocou maquinário, revisou ingredientes e chegou a contratar o especialista espanhol Massimiliano Liberatore para ajudar a calibrar a receita. Foram cerca de seis meses de ajustes e testes até o panetone da casa chegar ao ponto que Brunno considerava digno de competir.",
          "O segredo, segundo o próprio padeiro, está no lievito madre, o fermento natural que ele mesmo cultiva e mantém vivo. Em entrevistas técnicas, Brunno chega a afirmar que esse fermento responde por 80 a 90 por cento do resultado final do panetone. O processo é longo e exigente: o primo impasto (a primeira mistura, com farinha, açúcar, gemas, água e manteiga) fermenta de 12 a 16 horas a 26 graus. Depois vem uma segunda mistura, com o acréscimo de recheios, seguida de uma fermentação final de 3 a 4 horas em ambiente de temperatura e umidade controladas. Por fim, o panetone esfria de cabeça para baixo, técnica clássica que garante a estrutura da massa aerada.",
          "O panetone premiado da casa é do estilo escarpato (sem cobertura, com corte em cruz no topo), pesa 550 gramas e leva laranja siciliana, passas maceradas em rum, chocolate e pistache. Com essa receita, Brunno conquistou o título de Melhor Panetone Clássico Milanês do Brasil na seleção nacional da Coppa Del Mondo Del Panettone, em 2022 e 2023, e chegou entre os dez melhores do mundo nas finais internacionais realizadas na Itália, também em 2022, 2023 e novembro de 2024.",
        ],
      },
      {
        titulo: "Do Fantástico ao Mundial de Panetone: o reconhecimento que veio de fora do Ceará",
        paragrafos: [
          "O currículo internacional de Brunno Malheiros ganhou um capítulo histórico em outubro de 2025, quando ele liderou a primeira equipe brasileira a disputar o Panettone World Championship, em Milão, na Itália, ao lado de Joze Nilson Diniz, Déborah Zanzini e Matheus Andrade. A equipe brasileira competiu contra times de 12 países e, depois de mais de 300 horas de preparação da receita, trouxe para casa o segundo lugar mundial na categoria de panetone de chocolate e o quarto lugar na categoria de panetone clássico milanês, um resultado que colocou definitivamente o nome do Ceará no radar da confeitaria internacional.",
          "O reconhecimento não parou nas competições. Brunno recebeu o título de Embaixador do Pão pela associação francesa Ambassadeurs du Pain, entidade que conta com apenas seis representantes no Brasil, e foi convidado a integrar a Academia de Mestres do Fermento Natural e do Panettone Italiano, marcando a primeira participação de um brasileiro nesse grupo. Sua trajetória também ganhou as telas da televisão aberta: Brunno foi tema de uma reportagem no quadro Show da Vida, do Fantástico, levando a história da Cheiro do Pão para o público de todo o país.",
          "É essa combinação de técnica apurada, obsessão por qualidade e origem afetiva, o menino que aprendeu o ofício com o avô, que faz de Brunno Malheiros um caso raro: um padeiro de bairro que, sem abandonar a bancada de Fortaleza, chegou ao pódio mundial do panetone e virou referência para quem estuda panificação artesanal no Brasil inteiro.",
        ],
      },
      {
        titulo: "Brunno Malheiros no Festival Costume Gourmet 2026",
        paragrafos: [
          "É esse padeiro, com uma história construída fermento a fermento no Papicu, que o Festival Costume Gourmet 2026 traz para o Palco Gourmet, o espaço de cozinha show do evento, onde a cada dia um chef diferente cozinha ao vivo para o público. Brunno se apresenta na sexta-feira do festival, dia 18 de setembro, levando para o palco a mesma dedicação técnica que o consagrou nas competições internacionais de panetone.",
          "O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, justamente o bairro onde fica a Cheiro do Pão. O evento é apresentado pelo São Luiz Supermercado, que completa 100 anos em 2026, e tem uma característica que o torna especial: cem por cento da renda da bilheteria é revertida para três instituições sociais de Fortaleza, o IPREDE, o Instituto Povo do Mar e o Instituto do Câncer do Ceará. Além do Palco Gourmet, o público encontra o Piano Bar, com drinques e música ao vivo, e o Recebendo em Casa, jantar intimista para 30 pessoas com chef convidado.",
          "Ter Brunno Malheiros entre os nomes do Palco Gourmet reforça o tom da programação de 2026: valorizar quem construiu carreira e reputação a partir de Fortaleza, sem perder o vínculo com a cidade e com a própria história. Para quem acompanha a trajetória do padeiro desde as duas fornadas diárias do início até o pódio mundial em Milão, ver esse percurso em cena ao vivo, num festival que devolve sua renda para causas sociais da cidade, fecha um ciclo que combina talento cearense, gastronomia de verdade e propósito coletivo.",
        ],
      },
    ],
  },
  "felipe-caputo": {
    slug: "felipe-caputo",
    primeiroNome: "Felipe",
    resto: "Caputo",
    dia: "SÁBADO",
    foto: "/chefs/felipe-caputo.webp",
    cor: "bg-vinho",
    bioCurta: "Chef, professor e criador de conteúdo por trás da \"cozinha sofisticadamente simples\", Felipe Caputo sobe ao Palco Gourmet no sábado do Festival Costume Gourmet 2026.",
    metaDescription: "Conheça Felipe Caputo, chef e professor de gastronomia funcional, confirmado no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Felipe Caputo no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Quem é Felipe Caputo",
        paragrafos: [
          "Felipe Caputo construiu nome na gastronomia brasileira por um caminho pouco convencional: não veio da cozinha de um restaurante clássico de fine dining nem seguiu a trajetória tradicional de brigada francesa. Natural de Belo Horizonte, ele se apresenta hoje como chef, criador de conteúdo digital e professor de cozinha, um perfil que mistura técnica de cozinha profissional com a linguagem direta de quem ensina milhares de pessoas a cozinhar melhor em casa.",
          "Sua marca é uma frase que resume a filosofia inteira do trabalho: cozinha sofisticadamente simples. A ideia por trás dela é desmontar a crença de que um prato bonito, saboroso e equilibrado só sai da mão de quem estudou anos numa escola de alta gastronomia. Caputo defende o oposto: que técnicas acessíveis, ingredientes do dia a dia e um pouco de repertório certo bastam para elevar qualquer refeição caseira a um patamar de restaurante, sem complicar a rotina de quem cozinha nem pesar no bolso.",
          "É esse discurso, misto de gastronomia funcional, cozinha de inspiração mediterrânea e praticidade, que fez seu nome circular para além dos círculos gastronômicos tradicionais e chegar a um público bem maior do que costuma acompanhar chefs de cozinha autoral.",
        ],
      },
      {
        titulo: "Da Califórnia a Nova York: uma formação fora da curva",
        paragrafos: [
          "A base técnica de Felipe Caputo vem de fora do Brasil. Ele se formou em Nutrição Culinária e Alimentação Crudívora pelo Matthew Kenney Culinary Institute, em Los Angeles, um dos institutos de referência mundial quando o assunto é cozinha à base de plantas e técnicas de raw food, correntes que ganharam força justamente por unir rigor técnico a uma proposta de alimentação mais funcional e consciente.",
          "Depois da formação, veio a experiência prática em ambientes de alta exigência: Caputo cozinhou no Soho House de Malibu, um dos clubes privados mais conhecidos do circuito americano, e passou pelo AbcV, restaurante nova-iorquino assinado pelo chef Jean-Georges Vongerichten, nome que dispensa apresentações no cenário da gastronomia internacional. Passar por cozinhas desse padrão, mesmo em papéis de apoio, expõe qualquer cozinheiro a um nível de organização, disciplina e exigência de sabor que dificilmente se aprende em outro lugar.",
          "É essa combinação, formação técnica especializada somada à vivência em cozinhas de restaurantes badalados nos Estados Unidos, que dá lastro ao discurso de simplicidade de Caputo: simplificar, no caso dele, não é desconhecer a técnica, é dominá-la o suficiente para saber o que pode ser cortado sem perder o resultado final.",
        ],
      },
      {
        titulo: "Greentable: da inovação de produto ao prato do dia a dia",
        paragrafos: [
          "Hoje Felipe Caputo ocupa o cargo de Head de Inovação e Produto na Greentable, marca de alimentação saudável que opera em São Paulo com restaurante, delivery e uma linha de produtos congelados. Na função, ele responde pelo desenvolvimento do cardápio tanto do lado de restaurante quanto da linha de congelados, ou seja, pensa o prato tanto para quem janta no salão quanto para quem vai esquentar a refeição em casa depois de um dia corrido.",
          "Esse tipo de trabalho exige um tipo de habilidade que poucos chefs de cozinha autoral desenvolvem: criar um prato que funcione bem recém-saído da cozinha e que ainda assim resista ao congelamento e ao reaquecimento sem perder textura, sabor e apresentação. É um exercício de engenharia de sabor tanto quanto de criatividade, e explica por que a proposta de Caputo sempre soa prática, mesmo quando o resultado final é sofisticado.",
          "A escolha por uma marca de alimentação saudável e funcional também não é acidental: ela dialoga diretamente com a formação em alimentação crudívora e com o discurso de cozinha nutritiva que Caputo constrói há anos em suas redes e em suas aulas. Do laboratório de produto ao prato de todo dia, a lógica é sempre a mesma: sabor de verdade sem abrir mão de comer bem no cotidiano.",
        ],
      },
      {
        titulo: "Escola do Caputo e o alcance de um criador de conteúdo gastronômico",
        paragrafos: [
          "Paralelamente à Greentable, Felipe Caputo mantém há mais de quatro anos um trabalho como instrutor de cozinha, ensinando pelo Brasil e também em cidades como Miami e Nova York. Sua escola digital, batizada de Escola do Caputo, já reuniu milhares de alunos interessados em aprender receitas nutritivas, descomplicadas e não convencionais para o dia a dia, prova de que o formato online de ensino de gastronomia encontrou nele um dos seus nomes de maior alcance no Brasil.",
          "Esse alcance também aparece nas redes sociais, onde Caputo soma centenas de milhares de seguidores somando as diferentes plataformas, com destaque para o Instagram e para um canal no YouTube com mais de cem mil inscritos. É um público construído em cima de conteúdo prático, receitas reproduzíveis e uma didática que não intimida quem não tem nenhuma experiência de cozinha profissional, algo raro entre chefs que vêm de uma formação técnica tão internacional quanto a dele.",
          "Esse trânsito natural entre a cozinha profissional e a tela do celular é, talvez, a característica mais particular da carreira de Felipe Caputo: ele fala a língua de quem cozinha em casa sem nunca abrir mão do vocabulário técnico de quem passou por cozinhas de restaurante em Los Angeles e Nova York. É uma ponte que poucos profissionais da gastronomia conseguem construir com naturalidade.",
        ],
      },
      {
        titulo: "Felipe Caputo no Festival Costume Gourmet 2026",
        paragrafos: [
          "Essa combinação de técnica, praticidade e domínio de palco é exatamente o que o Palco Gourmet do Festival Costume Gourmet pede de seus convidados. O espaço funciona como uma cozinha show, formato em que um chef diferente cozinha ao vivo a cada dia de evento, na frente do público, explicando processo, decisão e sabor em tempo real, muito próximo do que Caputo já faz rotineiramente em suas aulas e em seu conteúdo digital.",
          "Felipe Caputo já está confirmado na grade do festival e se apresenta no sábado, com patrocínio do São Luiz Supermercado. A presença dele soma-se a um evento que acontece de 18 a 20 de setembro de 2026, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira 555, no Papicu, em Fortaleza, reunindo o Palco Gourmet a outros dois espaços centrais da programação: o Piano Bar, com drinks e música ao vivo, e o Recebendo em Casa, jantar intimista em mesa para 30 pessoas com chef convidado.",
          "O Festival Costume Gourmet 2026 é apresentado pelo São Luiz Supermercado, rede que celebra 100 anos de história em 2026, e carrega um propósito que vai além do prato: 100% da renda da bilheteria é revertida para três instituições sociais de Fortaleza, o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC). Assim, quando Felipe Caputo subir ao Palco Gourmet no sábado para cozinhar diante do público cearense, o prato servido carrega também esse propósito social, coerente com uma edição que tem como mote 'Sabores de uma bela história'.",
        ],
      },
    ],
  },
  "thales-romao": {
    slug: "thales-romao",
    primeiroNome: "Thales",
    resto: "Romão",
    dia: "SEXTA",
    foto: "/chefs/thales-romao.webp",
    cor: "bg-[#8a3d18]",
    bioCurta: "Do Crato para o litoral de Fortaleza: o chef do NOM Frutos do Mar e da padaria Molino sobe ao Palco Gourmet na sexta do Costume Gourmet 2026.",
    metaDescription: "Conheça Thales Romão, chef do NOM Frutos do Mar e da padaria Molino em Fortaleza, que sobe ao Palco Gourmet na sexta do Festival Costume Gourmet 2026.",
    tituloPagina: "Thales Romão no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Do Crato para as cozinhas de Fortaleza",
        paragrafos: [
          "Antes de comandar uma cozinha profissional, Thales Romão foi, como tanta gente da sua geração, um espectador de televisão que se apaixonou pela gastronomia assistindo ao MasterChef Brasil. Natural do Crato, no interior do Ceará, ele viu naquele formato de competição algo que ultrapassava o entretenimento: uma porta de entrada para um ofício que exige técnica, disciplina e, sobretudo, paciência para errar até acertar. Foi esse interesse, nascido diante da tela, que o levou a transformar curiosidade em formação séria.",
          "Hoje Thales soma mais de dez anos de experiência profissional na cozinha, um percurso construído em restaurantes, bistrôs e projetos autorais que passaram por sua trajetória antes da fase atual, à frente do NOM Frutos do Mar, em Fortaleza. É um caminho que não se resume a um único endereço: fala de alguém que testou formatos, aprendeu com o cotidiano de casas diferentes e foi lapidando um estilo próprio de cozinhar o litoral cearense.",
          "A base técnica veio de uma formação consistente. Thales é graduado e pós-graduado em Gastronomia pela Unifanor Wyden, e complementou o repertório com um período de estudos técnicos no Senac Campos do Jordão, um dos polos de ensino gastronômico mais respeitados do país, historicamente associado à cozinha francesa clássica e à panificação de alto nível. Essa combinação entre formação acadêmica cearense e vivência técnica em São Paulo ajuda a explicar por que seu trabalho hoje transita com naturalidade entre o produto regional e a técnica contemporânea: ele não abandona a origem para operar com rigor, faz as duas coisas ao mesmo tempo.",
        ],
      },
      {
        titulo: "NOM Frutos do Mar: uma casa com endereço certo no litoral cearense",
        paragrafos: [
          "Desde julho de 2025, Thales Romão lidera a cozinha do NOM Frutos do Mar, na Rua Leonardo Mota, no bairro Meireles, em Fortaleza. A casa integra o portfólio do Grupo Illa, que opera outros endereços na cidade, e nasceu com uma proposta clara: consolidar uma identidade gastronômica em torno do pescado, tratando os frutos do mar não como coadjuvantes do cardápio, mas como o centro de tudo o que ali se cozinha.",
          "O conceito do NOM se apoia em um critério que hoje é quase um diferencial competitivo em qualquer cozinha séria: cadeias curtas de fornecimento e contato direto com pescadores. Em vez de depender de intermediários distantes, a casa busca aproximar a mesa do mar, reduzindo etapas entre a captura e o prato. Essa escolha impacta não só o frescor do que chega à cozinha, mas também a relação da casa com a economia pesqueira local, algo que ganha peso especial num estado onde o litoral é parte estrutural da identidade cultural e econômica.",
          "Na cozinha, essa filosofia aparece em pratos que equilibram técnica contemporânea e produto regional. O arroz de frutos do mar, por exemplo, é preparado com arroz cateto em caldo concentrado, camarões e mini lulas, finalizado com limão e uma espuma cremosa que dá leveza ao prato. Já o camarão com coco combina risoto de leite de coco, camarão grelhado, abacaxi caramelizado e uma farofa de camarão seco, um jogo de doce e salgado bem resolvido. O polvo com batata chega à mesa com nhoque frito, purê de cenoura e óleo de ervas, e o peixe em crosta de focaccia, envolto numa massa crocante, é servido com massa, molho de abóbora, amêndoas e ervas frescas. São pratos que carregam técnica sem se afastar do litoral que os inspira.",
          "Em abril de 2026, o restaurante lançou um novo menu executivo, também assinado por Thales, estruturado em três tempos (entrada, prato principal e sobremesa). O objetivo declarado pelo chef foi aprofundar a identidade da casa, que tem forte ligação com o mar, oferecendo opções mais leves no dia a dia sem abrir mão da qualidade do produto fresco. O novo menu trouxe peixe do dia com purê de legumes e chips de mandioca, ragu de camarão grelhado com molho bisque, risoto cremoso de palmito com farofa cítrica e uma versão de cacio e pepe que pode ser servida com camarão ou filé mignon, além de sobremesas como pavlova tropical com frutas amarelas, mousse de maracujá e um crocante de mel com sorvete de castanha. Sobre a forma como conduz esse trabalho, o próprio chef resume: \"Trabalhamos com ingredientes locais e buscamos aplicar técnicas que valorizem suas características\", uma frase simples que sintetiza bem o método por trás do cardápio.",
          "Vale registrar também que a equipe da cozinha do NOM é formada majoritariamente por profissionais com formação em Gastronomia e por cozinheiros vindos da escola social M Dias, o que indica uma casa preocupada não só com o resultado no prato, mas também com formação de mão de obra e oportunidade dentro do próprio setor em Fortaleza.",
        ],
      },
      {
        titulo: "Molino: o outro lado do ofício, entre farinha e fermento",
        paragrafos: [
          "Se o NOM Frutos do Mar mostra a face marítima do trabalho de Thales Romão, a padaria artesanal Molino revela outra dimensão do seu ofício: a panificação. Não é um desvio de percurso. Thales atua como professor de panificação avançada na Unifanor Wyden e na Unifametro, o que situa o pão e a fermentação como um eixo tão relevante em sua formação quanto os frutos do mar que hoje lidera no restaurante. Quem cozinha peixe com essa atenção ao detalhe e também ensina fermentação em sala de aula tende a levar para qualquer projeto autoral o mesmo cuidado técnico: entender o ingrediente antes de manipulá-lo.",
          "A existência da Molino ao lado do NOM ajuda a compor um retrato mais completo do chef: alguém que não se contenta em ser especialista em uma única frente da cozinha. Entre o salgado do mar e o fermento do pão, Thales Romão constrói uma carreira em que cada projeto amplia o repertório do outro, e isso é raro de ver reunido na mesma pessoa dentro do cenário gastronômico cearense.",
        ],
      },
      {
        titulo: "Da sala de aula ao reconhecimento: o chef que também ensina",
        paragrafos: [
          "Um detalhe da trajetória de Thales Romão costuma passar despercebido em coberturas mais rápidas sobre o seu trabalho: ele é professor. Além de comandar cozinhas profissionais, leciona panificação avançada na Unifanor Wyden e na Unifametro, formando a próxima geração de profissionais no mesmo tipo de rigor técnico que aplica no dia a dia do NOM. É um movimento de mão dupla: a experiência de restaurante alimenta o que ele ensina, e o exercício de explicar o ofício em sala de aula, por sua vez, obriga a organizar o próprio conhecimento com mais clareza.",
          "Esse investimento na formação foi reconhecido institucionalmente: Thales recebeu o prêmio acadêmico \"The Best Chef\", concedido pela Unifametro, uma distinção que reforça o peso do seu trabalho também como educador, e não apenas como chef à frente de uma cozinha comercial.",
          "A trajetória também inclui participação em eventos que ajudam a construir rede profissional e repertório técnico, como o CASACOR Ceará e o próprio Costume Gourmet, plataformas que colocam o chef em contato direto com outros profissionais da gastronomia, arquitetura e design, e que normalmente funcionam como vitrine e também como laboratório de novas ideias para quem participa.",
        ],
      },
      {
        titulo: "Thales Romão no Palco Gourmet do Festival Costume Gourmet 2026",
        paragrafos: [
          "É justamente esse histórico de participação em eventos gastronômicos que faz da presença de Thales Romão no Festival Costume Gourmet 2026 algo natural, e não uma estreia. O festival acontece entre os dias 18 e 20 de setembro de 2026, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026, uma efeméride que dá ao evento um peso simbólico especial nesta edição.",
          "O Costume Gourmet é estruturado em três espaços centrais. O Palco Gourmet funciona como uma cozinha show, onde um chef diferente cozinha ao vivo a cada dia de evento, expondo ao público não só o prato pronto, mas o processo, a técnica e as escolhas por trás dele. Há também o Piano Bar, dedicado a drinks e música ao vivo, e o Recebendo em Casa, um jantar intimista para até 30 pessoas conduzido por um chef convidado, no formato mais próximo possível de uma mesa de casa, ainda que dentro da estrutura do festival.",
          "Thales Romão se apresenta no Palco Gourmet na sexta do festival, levando para o público em tempo real a mesma lógica que aplica na cozinha do NOM Frutos do Mar: produto do litoral cearense tratado com técnica, atenção ao detalhe e respeito pela cadeia que traz o peixe do mar até o prato. É provável que o público reconheça ali ecos do cardápio que já assina em Fortaleza, adaptados ao formato de show cooking, mais direto e mais exposto ao olhar de quem assiste.",
          "Uma frase do próprio chef, usada no site oficial do festival, resume bem o espírito com que ele encara esse tipo de apresentação ao vivo: \"Transforme o impossível em pequenos possíveis\". É uma síntese que também descreve boa parte da carreira de Thales até aqui, entre a cozinha do mar e a padaria, entre a sala de aula e o fogão, sempre resolvendo, um passo de cada vez, o que parecia distante no início.",
          "Vale lembrar que o Costume Gourmet tem uma característica que o diferencia de boa parte dos eventos gastronômicos do país: 100% da renda da bilheteria é revertida para três instituições sociais de Fortaleza, o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC). Isso significa que assistir Thales Romão cozinhar ao vivo no Palco Gourmet, na sexta do festival, é também parte de um gesto coletivo maior, que transforma gastronomia em apoio direto a causas sociais da cidade onde o chef construiu sua carreira. Mais informações sobre a programação completa estão disponíveis no site oficial do evento, costumegourmet.minerbz.com.br.",
        ],
      },
    ],
  },
  "chef-well": {
    slug: "chef-well",
    primeiroNome: "Chef",
    resto: "Well",
    dia: "DOMINGO",
    foto: "/chefs/well.webp",
    cor: "bg-vinho",
    bioCurta: "Semifinalista do MasterChef Confeitaria, o cearense Chef Well comanda a Cozinha Show no domingo do Festival Costume Gourmet 2026.",
    metaDescription: "Conheça a trajetória de Wellington Teixeira, o Chef Well, semifinalista do MasterChef Confeitaria, e sua presença na Cozinha Show do Festival Costume Gourmet 2026.",
    tituloPagina: "Chef Well no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Quem é o Chef Well",
        paragrafos: [
          "Wellington Teixeira, o Chef Well, é um cozinheiro cearense de Fortaleza que nos últimos anos se tornou um dos nomes mais comentados da confeitaria brasileira depois de uma passagem marcante pelo MasterChef Confeitaria. Filho de mãe mineira e pai cearense, ele soma quase dez anos de estrada na cozinha, período em que passou por restaurantes, salas de aula e projetos de consultoria antes de se tornar também criador de conteúdo sobre gastronomia. Hoje concentra boa parte do trabalho em consultoria para casas de alto padrão e em pesquisa de chocolate, área que escolheu como especialidade depois de anos testando técnicas clássicas ao lado de ingredientes brasileiros.",
          "O que chama atenção na trajetória de Chef Well não é só a técnica apurada, é o discurso por trás dos pratos. Ele defende, com insistência, que o Nordeste tem ingredientes e tradições culinárias sofisticadas o bastante para dialogar de igual para igual com a alta confeitaria francesa, sem precisar imitar nada de fora. Essa bandeira acompanhou toda a sua passagem pela competição nacional que o projetou, e é também o fio que conecta a história pessoal dele, construída em Fortaleza, à cozinha que apresenta hoje ao público.",
        ],
      },
      {
        titulo: "Da vontade de ser biólogo marinho à cozinha de casa",
        paragrafos: [
          "Antes de vestir dólmã, Wellington tinha outro sonho. Na adolescência, imaginava seguir carreira como biólogo marinho, fascinado pelo universo do mar, algo que faz sentido para quem cresceu numa capital litorânea como Fortaleza. O caminho, porém, mudou de rota: a falta de oportunidades concretas naquela área, somada à influência de amigos que seguiam outros planos, fez com que ele procurasse um rumo profissional diferente. A cozinha, que até então era só um hobby cultivado desde criança, ganhou espaço aos poucos e virou projeto de vida.",
          "Foi assim que ele decidiu se formar em Hotelaria, curso que deu base técnica para a entrada no mercado de restaurantes. Curiosamente, a formação de Wellington não parou por aí: ele também cursou cinema pela Movimento Criativo, na Universidade Federal do Ceará, um interesse paralelo que ajuda a explicar a naturalidade com que hoje ele transita entre a cozinha e a produção de conteúdo, gravando e editando boa parte do material que compartilha sobre confeitaria. O primeiro contato mais sério com a confeitaria aconteceu dentro de um restaurante, já no início da vida profissional, quando percebeu que a área de doces e sobremesas era onde queria se especializar de verdade. Dali em diante, o que era hobby de infância se transformou em ofício, e o ofício, em identidade profissional.",
        ],
      },
      {
        titulo: "Entre botecos e consultorias: os bastidores da carreira",
        paragrafos: [
          "Ao longo de quase uma década de carreira, Chef Well acumulou passagens como cozinheiro de restaurante, professor de cursos de gastronomia e consultor de casas que buscavam reorganizar cozinha, cardápio e operação. É esse trânsito entre a prática do fogão e a sala de aula que dá a ele um jeito didático de falar sobre o ofício, sempre disposto a explicar o porquê das coisas, não só o como. Antes de disputar o MasterChef Confeitaria, ele já era sócio do Muvuco Boteco do Mar, casa que também tem à frente Pedro Paulo e Diego Freire. O trio, inclusive, tinha um combinado bem-humorado entre amigos: quem fosse selecionado para o MasterChef seria treinado pelos outros dois antes das gravações, um detalhe que mostra como a trajetória de Wellington sempre esteve entrelaçada a uma rede de parceiros da gastronomia cearense.",
          "Hoje, o trabalho de consultoria ocupa um espaço importante na rotina dele, principalmente em restaurantes de padrão mais alto que buscam ajuste fino de cardápio e de processo. Nas entrevistas que deu depois de ficar conhecido nacionalmente, Wellington tem sido franco sobre os bastidores do mercado gastronômico de Fortaleza: aponta que boa parte das casas que fecharam as portas nos últimos anos investiu pesado na sala, no ambiente 'instagramável', e deixou em segundo plano a estrutura da cozinha, a organização da equipe e as condições de trabalho de quem cozinha. Para ele, esse desequilíbrio entre aparência e operação é um dos principais motivos por trás do fechamento de estabelecimentos que, à primeira vista, pareciam bem-sucedidos.",
        ],
      },
      {
        titulo: "MasterChef Confeitaria: os dias que validaram uma carreira",
        paragrafos: [
          "O grande salto de visibilidade na carreira de Chef Well veio com sua participação no MasterChef Confeitaria, edição do programa voltada exclusivamente a profissionais de doces e sobremesas, exibida pela Band a partir de novembro de 2024 com um time de doze confeiteiros. Wellington foi selecionado entre esse grupo restrito e passou 40 dias em São Paulo durante as gravações, um período intenso de provas, pressão e criação que ele descreve como um divisor de águas na própria carreira. Mais do que uma disputa por prêmio, o programa funcionou, nas palavras dele, como uma validação pública de um trabalho que já vinha sendo construído havia anos longe das câmeras.",
          "Dentro da competição, Wellington se destacou justamente por unir a técnica clássica da confeitaria francesa a sabores e ingredientes brasileiros, numa combinação que os jurados destacaram como um diferencial do seu estilo. Ele chegou à fase semifinal do programa, resultado que reforçou seu nome no cenário nacional da gastronomia e abriu portas que iam muito além da cozinha, incluindo convites para eventos, parcerias e um público crescente nas redes sociais, hoje somando centenas de milhares de seguidores atentos ao seu trabalho.",
        ],
      },
      {
        titulo: "Um cearense reescrevendo estereótipos com técnica francesa e sabor brasileiro",
        paragrafos: [
          "Um dos objetivos que Wellington assumiu publicamente ao entrar no MasterChef Confeitaria foi o de contestar estereótipos ainda comuns sobre a culinária nordestina, muitas vezes reduzida no imaginário nacional a poucos pratos típicos, sem o reconhecimento de sua sofisticação. Ao apresentar sobremesas que cruzam a técnica clássica francesa com ingredientes de origem local, ele reivindica um lugar de protagonismo para o Nordeste dentro de um universo, o da alta confeitaria, historicamente associado a referências europeias. Essa postura também aparece nas críticas que ele costuma fazer ao mercado de ingredientes: em entrevistas, chegou a apontar o pistache como um produto superestimado, defendendo que a castanha de caju, tão presente na cultura nordestina, tem qualidade equivalente ou superior, mas acaba marginalizada por conta do marketing global em torno de produtos importados e da força da produção em larga escala em regiões como a Califórnia.",
          "Esse tipo de posicionamento aproxima Chef Well de um movimento maior dentro da gastronomia brasileira contemporânea, o de cozinheiros que pesquisam especiarias, frutas e técnicas de tradições regionais para reposicionar o que é considerado nobre ou sofisticado à mesa. Não é discurso vazio: é um trabalho de pesquisa que ele descreve como constante, revisitando ingredientes e memórias afetivas da própria infância no Ceará para transformá-los em criações de confeitaria fina, sem perder a raiz que os originou.",
        ],
      },
      {
        titulo: "Os próximos passos: confeitaria própria e marca de chocolate",
        paragrafos: [
          "Com a visibilidade conquistada no MasterChef Confeitaria, Wellington vem estruturando os próximos passos da carreira. Um deles é a criação de uma marca de chocolate com seu próprio nome, projeto que já está em desenvolvimento e reflete a especialização que ele vem cultivando há anos nessa área específica da confeitaria. O outro é um plano mais amplo: abrir sua própria confeitaria, casa que pretende inaugurar em breve e que deve concentrar, num único endereço, tudo o que ele defende publicamente sobre unir técnica francesa e identidade brasileira em cada doce.",
          "Enquanto esses projetos avançam, Chef Well segue dividindo o tempo entre consultorias, produção de conteúdo digital e participações em eventos gastronômicos, sempre carregando consigo o mesmo argumento que apresentou ao país durante o programa: o de que a confeitaria brasileira, e em especial a cearense, tem repertório de sobra para deixar de ser coadjuvante e assumir protagonismo nas mesas mais exigentes do país.",
        ],
      },
      {
        titulo: "Chef Well no Festival Costume Gourmet 2026",
        paragrafos: [
          "É com essa bagagem, de semifinalista do MasterChef Confeitaria a consultor e pesquisador de sabores cearenses, que Chef Well chega ao Festival Costume Gourmet 2026. O evento acontece entre os dias 18 e 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. Wellington se apresenta na Cozinha Show, o palco montado justamente para receber, a cada dia do festival, um chef diferente cozinhando ao vivo diante do público, num formato pensado para aproximar quem cozinha de quem come, sem cortina entre os dois. A apresentação dele está marcada para o domingo, encerrando o fim de semana de festival com a energia de um cozinheiro que aprendeu, desde muito jovem em Fortaleza, a transformar ingrediente simples em experiência de sobremesa.",
          "A presença de Chef Well reforça o caráter do Festival Costume Gourmet como uma vitrine da gastronomia cearense contemporânea, e não apenas um evento de entretenimento. Vale lembrar que o festival tem também uma dimensão social importante: 100% da renda da bilheteria é revertida para três instituições sociais de Fortaleza, o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC). Além da Cozinha Show, o público encontra o Piano Bar, com drinks e música ao vivo, e o Recebendo em Casa, jantar intimista para 30 pessoas com chef convidado. Ver um cearense com a trajetória de Chef Well subindo ao palco da Cozinha Show é, de certa forma, o próprio resumo do festival: talento local, formado nas cozinhas e nas ruas de Fortaleza, ganhando o palco que merece, em nome de uma causa que também é da cidade.",
        ],
      },
    ],
  },
  "chef-zinda": {
    slug: "chef-zinda",
    primeiroNome: "Chef",
    resto: "Zinda",
    dia: "DOMINGO",
    foto: "/chefs/chef-zinda.webp",
    cor: "bg-bordo",
    bioCurta: "Da cozinha parisiense ao litoral do Ceará: a chef Zinda comanda o La France há mais de 20 anos e leva sua trajetória francesa ao Festival Costume Gourmet 2026.",
    metaDescription: "Conheça a chef Zinda, do restaurante La France em Fortaleza, entre os 100 melhores do Brasil em 2026 e presença confirmada no Festival Costume Gourmet.",
    tituloPagina: "Chef Zinda no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Quem é a chef por trás do La France",
        paragrafos: [
          "Fortaleza tem alguns endereços de comida que resistem ao tempo justamente porque nasceram de uma história pessoal, não de uma tendência de temporada. É o caso do restaurante La France, comandado pela chef Zinda Carvalho num casarão discreto do bairro Meireles. Em julho de 2026, a casa apareceu entre os 100 melhores restaurantes do Brasil na 5ª edição do ranking da Casual Exame, uma confirmação pública de algo que os clientes fiéis do La France já sabiam havia anos: aquela cozinha tem um padrão que não oscila.",
          "Zinda é conhecida em Fortaleza como uma cozinheira de poucas palavras e muito fogão. Ela não construiu o La France como uma vitrine de tendências gastronômicas, mas como a extensão de um aprendizado real, adquirido dentro de cozinhas de restaurante na França antes de ela se instalar de vez no Ceará. Essa origem explica por que, décadas depois, o cardápio ainda carrega as referências francesas como espinha dorsal, ainda que o tempero cearense também tenha espaço na casa.",
          "Ao comentar a entrada do restaurante na lista nacional, Zinda resumiu o próprio jeito de trabalhar numa frase simples: estar entre os 100 melhores do Brasil representa reconhecimento, mas é uma coisa que a casa já faz diariamente, com prazer, para os clientes de sempre. É uma declaração que diz muito sobre o tipo de chef que ela é: mais interessada em manter o padrão de um prato bem feito todos os dias do que em correr atrás de holofote.",
        ],
      },
      {
        titulo: "Da cozinha parisiense à Praia de Caponga",
        paragrafos: [
          "A trajetória de Zinda começa fora do Brasil. Ela viveu em Paris e trabalhou em restaurantes franceses por um bom tempo, período em que absorveu não só técnicas de cozinha, mas também um jeito de tratar o produto e o cliente que viria a se tornar a marca registrada do La France. Não foi uma passagem turística: foi vivência de cozinha profissional francesa, no dia a dia, com tudo que isso exige de disciplina e repetição.",
          "No fim dos anos 1980, Zinda se mudou com o marido para a Praia de Caponga, no litoral cearense, trocando a rotina parisiense pelo mar do Ceará. Foi uma escolha de vida que, à primeira vista, parece um contraste completo (Paris de um lado, uma praia de pescadores do outro), mas que na prática funcionou como o elo entre duas cozinhas: a técnica francesa que ela trouxe na bagagem e a fartura de peixe e fruto do mar fresco que o litoral cearense oferece todos os dias.",
          "É desse cruzamento que nasce a identidade do La France até hoje: uma casa que exibe fortes referências francesas na técnica e no cardápio, mas que busca no mar do Ceará boa parte da matéria-prima que sustenta os pratos mais elogiados da casa, sobretudo os de peixe e frutos do mar.",
        ],
      },
      {
        titulo: "La France: a casa que virou referência de cozinha francesa em Fortaleza",
        paragrafos: [
          "O La France funciona na rua Silva Jatahy, 982, no Meireles, um dos bairros mais tradicionais de Fortaleza para gastronomia. Por fora, a casa não tenta impressionar: a decoração é simples, quase discreta. Por dentro, esconde um cardápio bem mais refinado do que a fachada sugere, algo que quem frequenta o restaurante há anos já aprendeu a esperar e que surpreende quem entra pela primeira vez.",
          "O restaurante tem registro formal como pessoa jurídica desde o ano 2000, o que ajuda a situar o início dessa história em Fortaleza: são mais de duas décadas de casa aberta, funcionando praticamente sempre no mesmo endereço, com o mesmo comando na cozinha. Não é o tipo de restaurante que troca de conceito a cada ano para acompanhar modismo; é o tipo que constrói reputação lentamente, prato após prato, geração de cliente após geração de cliente.",
          "A cozinha do La France exibe fortes referências francesas, o que já rendeu à casa menções em publicações como a revista Veja, mas não é um restaurante fechado a outras influências: pratos brasileiros também têm espaço no cardápio, numa convivência que reflete a própria trajetória de Zinda entre dois países e duas tradições de mesa. O resultado mais celebrado, ano após ano, continua sendo a cozinha de peixes e frutos do mar, tratada com o rigor técnico que ela levou da França e a qualidade da matéria-prima que só o litoral cearense garante.",
          "Como muitas casas tradicionais de Fortaleza, o La France também segue o costume de fechar as portas por um período no meio do ano para férias coletivas da equipe, um detalhe pequeno que diz bastante sobre o tipo de operação: uma casa de dono presente, com time fixo, não uma franquia de fórmula repetida.",
        ],
      },
      {
        titulo: "Entre os 100 melhores restaurantes do Brasil",
        paragrafos: [
          "Em julho de 2026, o La France passou a integrar oficialmente a lista dos 100 melhores restaurantes do Brasil, na 5ª edição do ranking promovido pela Casual Exame, uma das principais referências do país quando o assunto é mapear a gastronomia nacional fora do eixo óbvio das grandes capitais do Sudeste. A presença de Fortaleza nessa lista, com uma casa comandada por uma chef que constrói cozinha francesa com produto cearense, reforça um movimento que vem ganhando força: o de reconhecer que gastronomia de alto nível no Brasil não está concentrada em um único lugar.",
          "Para Zinda, a entrada na lista foi recebida com o mesmo pé no chão que parece guiar toda a sua carreira. Em suas palavras, estar entre os 100 melhores do Brasil representa reconhecimento, mas é uma coisa que a casa já faz diariamente, com muito prazer, para os clientes de sempre. É uma resposta que não nega a importância do prêmio, mas também não deixa a rotina da cozinha refém dele: o padrão do restaurante, segundo ela mesma, já era esse antes do ranking e continua sendo depois.",
          "Esse tipo de reconhecimento nacional tem um efeito concreto para a cena gastronômica local: coloca luz sobre um nome que já era respeitado dentro de Fortaleza, mas que passa a ser conhecido por um público de fora do Ceará, curioso para experimentar de perto uma cozinha que soma décadas de história francesa com o litoral cearense.",
        ],
      },
      {
        titulo: "Zinda no Festival Costume Gourmet 2026",
        paragrafos: [
          "É justamente essa combinação de trajetória pessoal, técnica francesa e ingrediente cearense que leva a chef Zinda ao Festival Costume Gourmet 2026, que acontece de 18 a 20 de setembro no La Maison Coliseu, no Papicu, em Fortaleza. Apresentado pelo São Luiz Supermercado, que celebra 100 anos em 2026, o festival reúne num só evento boa parte do talento gastronômico da cidade, com toda a renda da bilheteria revertida para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
          "No domingo do festival, Zinda sobe ao Palco Gourmet, o espaço de cozinha show onde, a cada dia, um chef diferente cozinha ao vivo para o público, dentro do bloco batizado de \"Sabor de uma história\". O nome do bloco poucas vezes fez tanto sentido: a presença dela ali resume literalmente uma história de sabor construída entre Paris, a Praia de Caponga e o Meireles, décadas de cozinha que agora ganham um palco também para o público que talvez nunca tenha entrado no La France.",
          "Ver Zinda cozinhando ao vivo no Costume Gourmet é uma chance rara de acompanhar de perto o trabalho de uma chef que normalmente está atrás das portas de uma casa discreta, sem holofote, fazendo todos os dias o mesmo prato com o mesmo cuidado que a levou aos 100 melhores restaurantes do Brasil. Para quem quer entender por que Fortaleza tem tanto a dizer sobre gastronomia, seguir a programação completa do festival em costumegourmet.minerbz.com.br é um bom ponto de partida, e ver Zinda no Palco Gourmet, um dos motivos para não perder o domingo do evento.",
        ],
      },
    ],
  },
  "pepe-e-diego": {
    slug: "pepe-e-diego",
    primeiroNome: "Pepê",
    resto: "e Diego Freire",
    dia: "DOMINGO",
    foto: "/chefs/pepe.webp",
    cor: "bg-[#8a3d18]",
    bioCurta: "Pepê e Diego Freire, da dupla por trás do Muvuco Boteco do Mar, levam peixe fresco, ikejime e sabor de boteco cearense pro Palco Gourmet do festival.",
    metaDescription: "Conheça Pepê e Diego Freire, do Muvuco Boteco do Mar e da Z-Boys Pizza, dupla de Fortaleza que cozinha ao vivo no Festival Costume Gourmet 2026.",
    tituloPagina: "Pepê e Diego Freire no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Dois cozinheiros, uma mesa só",
        paragrafos: [
          "Fortaleza tem uma dupla que decidiu, há alguns anos, transformar peixe fresco e informalidade de boteco em ofício sério. Pepê e Diego Freire são os nomes por trás do Muvuco Boteco do Mar, casa que virou parada obrigatória para quem quer comer bem perto da orla cearense sem se preocupar com formalidades de talheres e taças. Os dois se conheceram trabalhando na cozinha do restaurante Mayú e levaram para o próprio negócio a mesma exigência técnica aprendida ali, só que servida num ambiente descontraído, de mesa de boteco, cerveja gelada e conversa alta. Em setembro de 2026, essa dupla sobe ao Palco Gourmet do Festival Costume Gourmet, em Fortaleza, pra cozinhar ao vivo diante do público, um convite que resume bem o que fazem todos os dias: pegar o que o mar e o litoral cearense oferecem de mais fresco e transformar isso em prato de gente que gosta de comer bem sem cerimônia.",
        ],
      },
      {
        titulo: "Da necessidade ao ofício: as origens de Diego Freire",
        paragrafos: [
          "Diego Freire nasceu e cresceu em Fortaleza, numa família de comerciantes. Filho caçula, teve uma infância marcada por uma ausência prática que acabou virando origem de carreira: com os pais trabalhando fora boa parte do dia, ele e o irmão precisavam se virar sozinhos em casa, inclusive na hora de comer. Foi ali, preparando lanches simples pra resolver a própria fome, que nasceu o interesse por cozinha, um interesse que não veio de nenhum parente cozinheiro profissional (embora vários da família cozinhassem bem em casa) nem de uma tradição familiar ligada à gastronomia. A inspiração de negócio, essa sim, veio dos avós, que tinham comércio próprio em Fortaleza, no ramo de couro e bijuterias: a ideia de tocar o próprio empreendimento estava no sangue, só faltava decidir em qual área.",
          "Essa decisão veio ainda no ensino médio. Diego tinha outras opções na mesa, entre elas arquitetura e engenharia civil, caminhos mais \"esperados\" pra quem cresce cercado de comércio de família. Escolheu cozinha mesmo assim, por amor declarado ao ofício, e tratou a escolha com a seriedade de quem sabia que precisaria construir tudo sozinho, sem mentor de berço nem sobrenome de peso na gastronomia. O resultado foi um caminho construído bastante na base da pesquisa autodidata, testando, errando e ajustando, além da formação formal que viria a seguir.",
        ],
      },
      {
        titulo: "Formação e a escola dos grandes",
        paragrafos: [
          "A formação de Diego passou pelo curso técnico de cozinha do Senac, feito ao mesmo tempo em que cursava a faculdade de Gastronomia, uma rotina dupla que já dava pistas do tipo de disciplina que ele levaria pra carreira. Fez ainda um treinamento intensivo, de oito horas por dia durante um ano inteiro, de preparação pra Copa do Mundo das Profissões, competição que reúne jovens profissionais de várias áreas técnicas, contando com instrutores renomados no processo, entre eles o confeiteiro Lucas Corazza. Depois de formado, virou professor no próprio Senac, ensinando pra novas turmas o que tinha acabado de aprender, e passou a liderar a cozinha do restaurante Mayú, o Senac Reference de Fortaleza, experiência que se tornaria referência decisiva na trajetória dele.",
          "Foi ainda nesse período de formação que Diego buscou uma especialização pouco comum em Fortaleza: um curso de ikejime, a técnica japonesa de abate de peixe que preza pelo bem estar do animal e pela qualidade final da carne, atordoando o peixe rapidamente e drenando o sangue de forma eficiente logo depois da captura. Ele fez esse treinamento com Rodolfo Vilar, do Projeto A.Mar, em Ilhabela, litoral de São Paulo, um dos polos de referência no Brasil pra quem quer aprender a técnica na prática, ao lado de pescadores e outros cozinheiros interessados no mesmo assunto.",
        ],
      },
      {
        titulo: "Pepê: o parceiro de longa data",
        paragrafos: [
          "Pepê, cujo nome completo é Pedro Paulo de Menezes, trilhou parte desse mesmo caminho ao lado de Diego. Passou por restaurantes renomados de Fortaleza antes de se tornar sócio do Muvuco. Assim como o parceiro, participou do curso do Projeto A.Mar em Ilhabela, com Rodolfo Vilar, o que reforça que a adoção do ikejime no Muvuco não foi capricho de um só sócio, e sim decisão compartilhada pelos dois cozinheiros que assinam a cozinha da casa. Pepê é hoje um dos proprietários do Muvuco Boteco do Mar e parte da assinatura por trás de pratos que viraram marca registrada da casa, caso da coxinha de polvo, tida como a única de Fortaleza feita com esse ingrediente.",
        ],
      },
      {
        titulo: "Muvuco Boteco do Mar: peixe fresco, ikejime e coxinha de polvo",
        paragrafos: [
          "O Muvuco Boteco do Mar nasceu da união de quatro sócios: Diego Freire e Pepê cuidando da cozinha, Guido Azevedo e João Victor Barros respondendo pela parte administrativa do negócio. A proposta desde o início foi clara: juntar cozinha de padrão alto com clima de boteco, informal, sem frescura, mas com prato bem executado na mesa. O nome \"muvuco\" é gíria de pescador, usada pra descrever os lugares onde o peixe se esconde entre pedras e corais, o esconderijo que garante fartura pra quem sabe pescar. Faz todo sentido pra uma casa que tem no peixe fresco e nos frutos do mar sua razão de existir.",
          "É ali que o ikejime aprendido em Ilhabela vira rotina de cozinha, em parceria com pescadores locais, como o Adriano, conhecido como \"Banana\", que fornece parte do peixe que chega à casa. O resultado é um cardápio construído em cima de peixe na brasa, tapioca, e pratos tradicionais nordestinos como a panelada, ao lado de criações autorais da casa, caso da já citada coxinha de polvo. É essa combinação de técnica apurada com repertório popular cearense que fez do Muvuco, instalado na rua Coronel Alves Teixeira, no bairro Dionísio Torres, em Fortaleza, um dos botecos mais comentados da cidade nos últimos tempos, com fila de espera em boa parte das noites de funcionamento.",
        ],
      },
      {
        titulo: "Z-Boys Pizza: a outra casa de Diego",
        paragrafos: [
          "Diego Freire também é sócio da Z-Boys Pizza, casa em frente à praia de Iracema, na avenida Beira Mar, que se dedica a um universo culinário bem diferente do Muvuco: a pizza. Ali, a proposta é uma releitura da tradição napolitana com toques de inovação, caso da massa com borda inspirada no estilo nova-iorquino e coberturas criativas que fogem do óbvio. Tocar dois negócios ao mesmo tempo, um de peixe e frutos do mar, outro de pizza, com conceitos e públicos distintos, diz bastante sobre a disposição de Diego de se colocar à prova em frentes diferentes da cozinha, em vez de se acomodar num único formato de restaurante depois que a fórmula já deu certo.",
        ],
      },
      {
        titulo: "Panelada pra 900 pessoas e a lista Forbes Under 30",
        paragrafos: [
          "O reconhecimento pelo trabalho começou a aparecer nos últimos anos, tanto puxado pela cozinha quanto por ações que colocaram Diego em contato direto com a cidade. Foi ele quem assumiu o desafio de preparar panelada para 900 pessoas na Câmara Municipal de Vereadores de Fortaleza, durante a Semana Regional da Gastronomia, um feito de logística e organização de cozinha que poucos cozinheiros da idade dele teriam coragem de aceitar. Mais recentemente, Diego Freire entrou na lista Forbes Under 30 de 2025, na categoria gastronomia, reconhecimento reservado a jovens profissionais que já mostraram resultado consistente antes dos 30 anos, o que confirma o que quem acompanha a cena gastronômica de Fortaleza já vinha percebendo: o trabalho tocado a quatro mãos no Muvuco (e a mais duas, contando a Z-Boys Pizza) deixou de ser aposta e virou case de sucesso.",
        ],
      },
      {
        titulo: "Pepê e Diego no Palco Gourmet do Festival Costume Gourmet 2026",
        paragrafos: [
          "É esse repertório, construído entre a cozinha técnica aprendida no Mayú, o rigor do ikejime trazido de Ilhabela e o sabor descomplicado de boteco de praia, que Pepê e Diego levam pro Palco Gourmet do Festival Costume Gourmet 2026. No domingo do festival, com patrocínio da Netumar, os dois cozinham ao vivo diante do público que passa pelo La Maison Coliseu, no Papicu, entre 18 e 20 de setembro. A frase que resume a presença da dupla no evento, \"cozinheiro registrando memórias\", cai bem pra quem construiu carreira exatamente assim: registrando na receita a lembrança de casa, de pai e mãe trabalhando fora, de avós comerciantes, de mestre que ensinou o caminho certo, e de um peixe pescado com respeito virando prato de gente feliz.",
          "O Festival Costume Gourmet 2026 é apresentado pelo São Luiz Supermercado, que completa 100 anos no mesmo ano, e reverte 100% da renda da bilheteria pra três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar e o Instituto do Câncer do Ceará. Além do Palco Gourmet, onde Pepê e Diego se apresentam, o evento reúne também o Piano Bar, com drinks e música ao vivo, e o Recebendo em Casa, jantar intimista para 30 pessoas com chef convidado. Ver a dupla do Muvuco e da Z-Boys Pizza nesse palco é a confirmação de que a boa cozinha cearense, a que nasce de necessidade, se refina com técnica e termina em mesa cheia, tem espaço garantido nas grandes vitrines gastronômicas da cidade.",
        ],
      },
    ],
  },
  "georgia-santiago": {
    slug: "georgia-santiago",
    primeiroNome: "Georgia",
    resto: "Santiago",
    dia: "SEXTA",
    foto: "/chefs/georgia-santiago.webp",
    cor: "bg-oliva",
    bioCurta: "Georgia Santiago nasceu em Fortaleza (CE) e, apesar de formada em Publicidade e Propaganda, não atuou na área: preferiu o caminho da fotografia ao final da faculdade.",
    metaDescription: "Conheça Georgia Santiago, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Georgia Santiago no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Georgia Santiago",
        paragrafos: [
          "Georgia Santiago nasceu em Fortaleza (CE) e, apesar de formada em Publicidade e Propaganda, não atuou na área: preferiu o caminho da fotografia ao final da faculdade. Atuou em todos os jornais da capital cearense, sendo premiada e reconhecida em sua profissão. Foi em 2013 que, ao deixar o Brasil, decidiu se aventurar em terras europeias, escolhendo como país a França, onde morou durante 5 anos.",
          "Autodidata na gastronomia, começou trabalhando em bistrôs franceses até que, em 2015, deu início a longas jornadas de trabalho em restaurantes estrelados. Trabalhou no Au Crocodile, em Strasbourg, foi ao Japão para estágios em Tóquio por 1 mês e esteve, pelo mesmo período, no restaurante triplamente estrelado Maaemo, em Oslo, na Noruega.",
          "Em 2016 escolheu Paris para aprofundar ainda mais sua carreira e permaneceu no aclamado restaurante Septime, 11º melhor restaurante do mundo, por dois anos. De volta ao Brasil, teve passagem pelo restaurante Oro, no Rio de Janeiro, a convite do chef Felipe Bronze, e hoje, residindo na capital cearense, é chef e curadora de vinhos em seu bistrô, o Muá Tuá Bistrot, há 5 anos.",
        ],
      },
      {
        titulo: "Georgia Santiago no Festival Costume Gourmet 2026",
        paragrafos: [
          "Georgia Santiago se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "chef-zena": {
    slug: "chef-zena",
    primeiroNome: "Chef",
    resto: "Zena",
    dia: "SEXTA",
    foto: "/chefs/zena.webp",
    cor: "bg-vinho",
    bioCurta: "Ícone da gastronomia popular cearense, Chef Zena, como é carinhosamente conhecida Zenilda Bezerra, construiu uma trajetória de mais de cinco décadas dedicada à cozinha afetiva e aos sabores que fazem parte da memória de Fortaleza.",
    metaDescription: "Conheça Chef Zena, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Chef Zena no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Chef Zena",
        paragrafos: [
          "Ícone da gastronomia popular cearense, Chef Zena, como é carinhosamente conhecida Zenilda Bezerra, construiu uma trajetória de mais de cinco décadas dedicada à cozinha afetiva e aos sabores que fazem parte da memória de Fortaleza. À frente do tradicional Restaurante Zena, no Centro da cidade, tornou-se referência por sua comida caseira, generosa e cheia de identidade.",
          "Com receitas que atravessam gerações, Zena representa uma cozinha feita de memória, tradição e afeto: um verdadeiro patrimônio da gastronomia cearense.",
        ],
      },
      {
        titulo: "Chef Zena no Festival Costume Gourmet 2026",
        paragrafos: [
          "Chef Zena se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "edil-costa": {
    slug: "edil-costa",
    primeiroNome: "Edil",
    resto: "Costa",
    dia: "SÁBADO",
    foto: "/chefs/edil-costa.webp",
    cor: "bg-[#8a3d18]",
    bioCurta: "Edil Costa é chef de cozinha, graduado e mestre em Gastronomia, além de colunista do jornal O Povo e apresentador do programa Entre Papos e Sabores, da TV Cidade.",
    metaDescription: "Conheça Edil Costa, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Edil Costa no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Edil Costa",
        paragrafos: [
          "Edil Costa é chef de cozinha, graduado e mestre em Gastronomia, além de colunista do jornal O Povo e apresentador do programa Entre Papos e Sabores, da TV Cidade. Após mais de 30 anos como executivo em grandes empresas, dedicou-se integralmente à gastronomia, criando o curso de pós-graduação em Gastronomia da Unifor e fundando o Espaço Gastronomia Edil Costa, que já formou mais de 3.500 alunos em três anos.",
          "Seu trabalho une técnica, pesquisa e identidade regional, valorizando ingredientes e tradições do Nordeste em diálogo com a cozinha internacional. Edil também realiza cursos temáticos, experiências corporativas e projetos de enogastronomia pelo mundo, sempre com uma abordagem autoral e criativa que conecta cultura, sabor e vivência.",
        ],
      },
      {
        titulo: "Edil Costa no Festival Costume Gourmet 2026",
        paragrafos: [
          "Edil Costa se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "maria-braz": {
    slug: "maria-braz",
    primeiroNome: "Maria",
    resto: "Braz",
    dia: "SEXTA",
    foto: "/chefs/maria-braz.webp",
    cor: "bg-bordo",
    bioCurta: "Maria Braz é a terceira geração da família à frente da gestão da São Braz Bebidas, empresa nordestina com 50 anos de história no setor de vinhos.",
    metaDescription: "Conheça Maria Braz, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Maria Braz no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Maria Braz",
        paragrafos: [
          "Maria Braz é a terceira geração da família à frente da gestão da São Braz Bebidas, empresa nordestina com 50 anos de história no setor de vinhos. Formada em Direito e Enologia, atua como diretora das áreas administrativa, jurídica e de marketing da empresa.",
        ],
      },
      {
        titulo: "Maria Braz no Festival Costume Gourmet 2026",
        paragrafos: [
          "Maria Braz se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "marbenia": {
    slug: "marbenia",
    primeiroNome: "Marbênia",
    resto: "Gonçalves",
    dia: "SEXTA",
    foto: "/chefs/marbenia.webp",
    cor: "bg-vinho",
    bioCurta: "Marbênia Gonçalves é sommelière ABS ASI de Vinhos e Cerveja, com certificações WSET nos níveis 1, 2 e 3, além de Tea Sommelière.",
    metaDescription: "Conheça Marbênia Gonçalves, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Marbênia Gonçalves no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Marbênia Gonçalves",
        paragrafos: [
          "Marbênia Gonçalves é sommelière ABS ASI de Vinhos e Cerveja, com certificações WSET nos níveis 1, 2 e 3, além de Tea Sommelière. Atua como juíza de vinhos e é colunista do @opovomais e do Regulatório Yduqs.",
        ],
      },
      {
        titulo: "Marbênia Gonçalves no Festival Costume Gourmet 2026",
        paragrafos: [
          "Marbênia Gonçalves se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "leiliane": {
    slug: "leiliane",
    primeiroNome: "Leiliane",
    resto: "Pinheiro",
    dia: "SEXTA",
    foto: "/chefs/leiliane.webp",
    cor: "bg-oliva",
    bioCurta: "Leiliane Pinheiro é fundadora da Confraria Wineladies, juíza de vinhos e sommelière internacional formada pela FISAR (Federazione Italiana Sommelier Albergatori Ristoratori) e pela IWTO (International Wine Tasters Organization), também certificada pela instituição londrina WSET (Wine & Spirits Education Trust) nos níveis 1 e 2 em Vinhos e Destilados, além da certificação WSET 1 em Saquê.",
    metaDescription: "Conheça Leiliane Pinheiro, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Leiliane Pinheiro no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Leiliane Pinheiro",
        paragrafos: [
          "Leiliane Pinheiro é fundadora da Confraria Wineladies, juíza de vinhos e sommelière internacional formada pela FISAR (Federazione Italiana Sommelier Albergatori Ristoratori) e pela IWTO (International Wine Tasters Organization), também certificada pela instituição londrina WSET (Wine & Spirits Education Trust) nos níveis 1 e 2 em Vinhos e Destilados, além da certificação WSET 1 em Saquê. Soma ainda diversos cursos e vivências no Brasil e no exterior (França, Portugal, Itália, Chile e Argentina).",
          "Com formação em Marketing e experiência comercial desde 2005 no universo das bebidas, sempre focada em planejamento e execução comercial, é há mais de 18 anos responsável pelo comercial da Importadora Interfood, uma das maiores importadoras de vinhos e destilados do Brasil, no estado do Ceará.",
        ],
      },
      {
        titulo: "Leiliane Pinheiro no Festival Costume Gourmet 2026",
        paragrafos: [
          "Leiliane Pinheiro se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "karime-loureiro": {
    slug: "karime-loureiro",
    primeiroNome: "Karime",
    resto: "Loureiro",
    dia: "SEXTA",
    foto: "/chefs/karime-loureiro.webp",
    cor: "bg-bordo",
    bioCurta: "Karime Loureiro é comunicadora, sommelier internacional e reconhecida nacionalmente como a Embaixadora das Borbulhas.",
    metaDescription: "Conheça Karime Loureiro, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Karime Loureiro no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Karime Loureiro",
        paragrafos: [
          "Karime Loureiro é comunicadora, sommelier internacional e reconhecida nacionalmente como a Embaixadora das Borbulhas. Certificada como Champagne Expert pela IWTO e pela ABS-RS, assina a única coluna do Brasil dedicada exclusivamente aos espumantes, publicada no jornal O Povo.",
          "Criadora de projetos como o \"Harmonize Comigo\", em que recebe chefs convidados para experiências de harmonização ao vivo, Karime já visitou mais de 150 vinícolas ao redor do mundo, levando para seus conteúdos e palestras uma visão sensível, acessível e apaixonada sobre o universo dos vinhos e espumantes.",
        ],
      },
      {
        titulo: "Karime Loureiro no Festival Costume Gourmet 2026",
        paragrafos: [
          "Karime Loureiro se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "izabela-fiuza": {
    slug: "izabela-fiuza",
    primeiroNome: "Izabela",
    resto: "Fiúza",
    dia: "SEXTA",
    foto: "/chefs/isabela-fiuza.webp",
    cor: "bg-oliva",
    bioCurta: "Izabela Fiúza é chef e diretora de Gastronomia do La Maison, referência na gastronomia e no mercado de eventos de Fortaleza.",
    metaDescription: "Conheça Izabela Fiúza, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Izabela Fiúza no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Izabela Fiúza",
        paragrafos: [
          "Izabela Fiúza é chef e diretora de Gastronomia do La Maison, referência na gastronomia e no mercado de eventos de Fortaleza. Herdeira de uma tradição familiar construída em torno do prazer de receber, imprime seu olhar à frente da cozinha da casa, unindo sabor, memória e sofisticação. Também se destaca por sua atuação em iniciativas sociais, como o projeto Macarrão Amigo, criado durante a pandemia para levar refeições a pessoas em situação de vulnerabilidade.",
        ],
      },
      {
        titulo: "Izabela Fiúza no Festival Costume Gourmet 2026",
        paragrafos: [
          "Izabela Fiúza se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "bia-araujo": {
    slug: "bia-araujo",
    primeiroNome: "Bia",
    resto: "Araújo",
    dia: "SEXTA",
    foto: "/chefs/bia-araujo.webp",
    cor: "bg-vinho",
    bioCurta: "Bia Araújo é uma maranhense apaixonada pelo Ceará, pelos ingredientes e sabores que cercam o sertão e o mar.",
    metaDescription: "Conheça Bia Araújo, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Bia Araújo no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Bia Araújo",
        paragrafos: [
          "Bia Araújo é uma maranhense apaixonada pelo Ceará, pelos ingredientes e sabores que cercam o sertão e o mar. Com autenticidade e personalidade, vem se destacando há quase 15 anos no mercado gastronômico de forma respeitosa e com comida de verdade. Transita entre cozinhas, eventos, empreendedorismo e comunicação com a mesma paixão de sempre, carregando a gastronomia no colo.",
        ],
      },
      {
        titulo: "Bia Araújo no Festival Costume Gourmet 2026",
        paragrafos: [
          "Bia Araújo se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "mona": {
    slug: "mona",
    primeiroNome: "Mona",
    resto: "",
    dia: "SEXTA",
    foto: "/chefs/mona.webp",
    cor: "bg-bordo",
    bioCurta: "Mona é um dos nomes à frente da As Netas de Olga, confeitaria de Juazeiro do Norte que transforma receitas, memórias e afetos em sabores.",
    metaDescription: "Conheça Mona, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Mona no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Mona",
        paragrafos: [
          "Mona é um dos nomes à frente da As Netas de Olga, confeitaria de Juazeiro do Norte que transforma receitas, memórias e afetos em sabores. À frente do negócio, leva adiante uma história familiar marcada pela tradição e pelo prazer de receber, valorizando a gastronomia afetiva e os ingredientes que carregam a identidade do Cariri.",
        ],
      },
      {
        titulo: "Mona no Festival Costume Gourmet 2026",
        paragrafos: [
          "Mona se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "joao-filho": {
    slug: "joao-filho",
    primeiroNome: "João",
    resto: "Filho",
    dia: "SEXTA",
    foto: "/chefs/joao-filho.webp",
    cor: "bg-[#8a3d18]",
    bioCurta: "1º Beer Sommelier do Ceará (Science of Beer, 2012), João Filho atua desde então em treinamento, consultoria e educação cervejeira.",
    metaDescription: "Conheça João Filho, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "João Filho no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre João Filho",
        paragrafos: [
          "1º Beer Sommelier do Ceará (Science of Beer, 2012), João Filho atua desde então em treinamento, consultoria e educação cervejeira. Foi um dos idealizadores e professores do curso de Beer Sommelier do Senac/CE (2017/2018), professor do curso de Cultura Cervejeira na pós-graduação de Gastronomia da Unifanor e professor da disciplina de Gestão de Alimentos e Bebidas do curso de Gastronomia da Uninta.",
          "Foi sommelier de cervejas da Cervejaria 5 Elementos e do Giz Cozinha Bohemia. Recebeu, em 2013, o prêmio da Veja Fortaleza de melhor carta de cerveja pelo trabalho realizado no Moleskine Gastrobar, e escreve para a coluna de cerveja do jornal O Povo, no caderno Comes & Bebes.",
        ],
      },
      {
        titulo: "João Filho no Festival Costume Gourmet 2026",
        paragrafos: [
          "João Filho se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "matu-macedo": {
    slug: "matu-macedo",
    primeiroNome: "Matu",
    resto: "Macêdo",
    dia: "SÁBADO",
    foto: "/chefs/matu-macedo.webp",
    cor: "bg-vinho",
    bioCurta: "Chef pâtissière, professora da Universidade Federal do Ceará (UFC) e consultora gastronômica, Matu Macêdo é uma das grandes referências da gastronomia cearense.",
    metaDescription: "Conheça Matu Macêdo, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Matu Macêdo no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Matu Macêdo",
        paragrafos: [
          "Chef pâtissière, professora da Universidade Federal do Ceará (UFC) e consultora gastronômica, Matu Macêdo é uma das grandes referências da gastronomia cearense. Mestre em Ciências Gastronômicas em Lisboa e doutora em Patrimônios Culturais Alimentares pela Universidade de Coimbra, dedica sua trajetória à valorização da identidade e da cultura alimentar do Ceará.",
          "À frente de uma carreira marcada pelo ensino, pesquisa e difusão da gastronomia, apresentou por 24 anos o programa Nossa Cozinha, na TV Jangadeiro, e foi pioneira na criação de uma escola de culinária em Fortaleza. Seu trabalho conecta conhecimento, memória afetiva e ingredientes locais, valorizando os sabores que fazem parte da história cearense.",
        ],
      },
      {
        titulo: "Matu Macêdo no Festival Costume Gourmet 2026",
        paragrafos: [
          "Matu Macêdo se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "ralfo": {
    slug: "ralfo",
    primeiroNome: "Ralfo",
    resto: "Ifanger",
    dia: "SÁBADO",
    foto: "/chefs/ralfo.webp",
    cor: "bg-bordo",
    bioCurta: "A trajetória do chef Ralfo Ifanger na gastronomia começou ainda na infância, por influência de sua mãe, que logo percebeu seu talento vocacional e o incentivou a se graduar pelo prestigiado Senac de Águas de São Pedro.",
    metaDescription: "Conheça Ralfo Ifanger, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Ralfo Ifanger no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Ralfo Ifanger",
        paragrafos: [
          "A trajetória do chef Ralfo Ifanger na gastronomia começou ainda na infância, por influência de sua mãe, que logo percebeu seu talento vocacional e o incentivou a se graduar pelo prestigiado Senac de Águas de São Pedro. Após consolidar sua formação, acumulou bagagem em restaurantes renomados de São Paulo e Campinas, além de atuar na consultoria de um grande grupo nacional, viajando o Brasil para ajustar cardápios regionais e liderar aberturas de casas.",
          "Buscou expansão internacional em uma temporada na Austrália, experiência que aprimorou seu idioma e enriqueceu seu repertório cultural com vivências em cozinhas do exterior. De volta ao Brasil, fixou raízes definitivas em Fortaleza, onde construiu sua família e estabeleceu sua carreira executiva.",
          "Hoje, Ralfo Ifanger é sócio e chef executivo do grupo Evol, à frente da cozinha do Parrilleiro. Versátil e com histórico consolidado na culinária italiana, nos últimos anos voltou sua expertise para o universo das carnes, dominando processos de acompanhamento e técnicas de maturação. Sob sua liderança, a casa se consolida hoje como a maior referência em dry aged de Fortaleza.",
        ],
      },
      {
        titulo: "Ralfo Ifanger no Festival Costume Gourmet 2026",
        paragrafos: [
          "Ralfo Ifanger se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "marco-frossard": {
    slug: "marco-frossard",
    primeiroNome: "Marco",
    resto: "Frossard",
    dia: "SÁBADO",
    foto: "/chefs/marco-frossard.webp",
    cor: "bg-[#8a3d18]",
    bioCurta: "Chef com atuação na gastronomia profissional e especialista em técnicas e tecnologias para cozinhas profissionais, Marco Frossard une conhecimento técnico, criatividade e paixão pela cozinha à frente de demonstrações e experiências gastronômicas, explorando diferentes possibilidades de preparo e valorizando a eficiência sem abrir mão de sabor e qualidade.",
    metaDescription: "Conheça Marco Frossard, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Marco Frossard no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Marco Frossard",
        paragrafos: [
          "Chef com atuação na gastronomia profissional e especialista em técnicas e tecnologias para cozinhas profissionais, Marco Frossard une conhecimento técnico, criatividade e paixão pela cozinha à frente de demonstrações e experiências gastronômicas, explorando diferentes possibilidades de preparo e valorizando a eficiência sem abrir mão de sabor e qualidade.",
          "Com atuação junto à Rational Nordeste, também se destaca pela disseminação de novas tecnologias e soluções para a gastronomia profissional.",
        ],
      },
      {
        titulo: "Marco Frossard no Festival Costume Gourmet 2026",
        paragrafos: [
          "Marco Frossard se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "barbara-saunders": {
    slug: "barbara-saunders",
    primeiroNome: "Barbara",
    resto: "Saunders",
    dia: "SÁBADO",
    foto: "/chefs/barbara-saunders.webp",
    cor: "bg-vinho",
    bioCurta: "Bárbara Saunders é chef, empresária e fundadora da Cacao Confeitaria Saudável, marca cearense que nasceu com a proposta de provar que alimentação saudável pode ser saborosa, inclusiva e cheia de afeto.",
    metaDescription: "Conheça Barbara Saunders, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Barbara Saunders no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Barbara Saunders",
        paragrafos: [
          "Bárbara Saunders é chef, empresária e fundadora da Cacao Confeitaria Saudável, marca cearense que nasceu com a proposta de provar que alimentação saudável pode ser saborosa, inclusiva e cheia de afeto. Formada em Administração, transformou uma necessidade pessoal em propósito profissional e, ao lado do marido e sócio, Pedro Jorge de Lima, construiu um grupo que hoje reúne a Cacao, a Cacao Fresh e outras operações. Sua gastronomia valoriza sabor, criatividade e inclusão, com criações sem glúten, sem lactose e sem açúcar refinado.",
        ],
      },
      {
        titulo: "Barbara Saunders no Festival Costume Gourmet 2026",
        paragrafos: [
          "Barbara Saunders se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "fernanda-dantas": {
    slug: "fernanda-dantas",
    primeiroNome: "Fernanda",
    resto: "Dantas",
    dia: "SÁBADO",
    foto: "/chefs/fernanda-dantas.webp",
    cor: "bg-oliva",
    bioCurta: "Fernanda Dantas é empresária e fundadora da Coktelitas, referência cearense em coquetelaria e experiências de bar para eventos.",
    metaDescription: "Conheça Fernanda Dantas, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Fernanda Dantas no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Fernanda Dantas",
        paragrafos: [
          "Fernanda Dantas é empresária e fundadora da Coktelitas, referência cearense em coquetelaria e experiências de bar para eventos. Há mais de 20 anos à frente da marca, construiu uma trajetória marcada pela inovação, hospitalidade e valorização da mixologia. Hoje, a Coktelitas atua no mercado de eventos premium, desenvolvendo experiências que unem drinks autorais, criatividade e excelência em serviço.",
        ],
      },
      {
        titulo: "Fernanda Dantas no Festival Costume Gourmet 2026",
        paragrafos: [
          "Fernanda Dantas se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "carol-barreto": {
    slug: "carol-barreto",
    primeiroNome: "Carol",
    resto: "Barreto",
    dia: "SÁBADO",
    foto: "/chefs/carol-barreto.webp",
    cor: "bg-vinho",
    bioCurta: "Carol Barreto é formada em Gastronomia, Confeitaria e Panificação, com experiência em renomados restaurantes como DOM, Famiglia Mancini e La Casserole.",
    metaDescription: "Conheça Carol Barreto, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Carol Barreto no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Carol Barreto",
        paragrafos: [
          "Carol Barreto é formada em Gastronomia, Confeitaria e Panificação, com experiência em renomados restaurantes como DOM, Famiglia Mancini e La Casserole. Barista e sommelière formada, encontrou no universo do café uma de suas grandes paixões e atua há mais de uma década no segmento. Atualmente, integra o Grupo 3 Corações, onde trabalha com treinamentos e experiências de consumo, aproximando técnica, café e hospitalidade.",
        ],
      },
      {
        titulo: "Carol Barreto no Festival Costume Gourmet 2026",
        paragrafos: [
          "Carol Barreto se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "marcelo-pimentel": {
    slug: "marcelo-pimentel",
    primeiroNome: "Marcelo",
    resto: "Pimentel",
    dia: "SÁBADO",
    foto: "/chefs/marcelo-pimentel.webp",
    cor: "bg-bordo",
    bioCurta: "Marcelo Pimentel é empresário e fundador do Pim Food Group.",
    metaDescription: "Conheça Marcelo Pimentel, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Marcelo Pimentel no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Marcelo Pimentel",
        paragrafos: [
          "Marcelo Pimentel é empresário e fundador do Pim Food Group. Construiu sua trajetória no setor de gastronomia a partir do Barney's Burger, criado em Fortaleza em 2011. Hoje está à frente de marcas como Barney's, Butcher's 746, Olli's Burger, Estela Pizza e JU Omakase, combinando gestão, inovação, experiência do cliente e construção de marcas no setor de alimentação.",
        ],
      },
      {
        titulo: "Marcelo Pimentel no Festival Costume Gourmet 2026",
        paragrafos: [
          "Marcelo Pimentel se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "julia-zimmerman": {
    slug: "julia-zimmerman",
    primeiroNome: "Julia",
    resto: "Zimmerman",
    dia: "SÁBADO",
    foto: "/chefs/julia-zimmermann.webp",
    cor: "bg-oliva",
    bioCurta: "Julia Zimmermann é chef confeiteira de Fortaleza (CE), apaixonada pelo universo da gastronomia.",
    metaDescription: "Conheça Julia Zimmerman, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Julia Zimmerman no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Julia Zimmerman",
        paragrafos: [
          "Julia Zimmermann é chef confeiteira de Fortaleza (CE), apaixonada pelo universo da gastronomia. Sua trajetória é marcada pela dedicação à confeitaria e pela busca por técnicas e sabores sofisticados. À frente de produções como entremets e sobremesas artesanais, se destaca pela delicadeza e criatividade em seus doces, valorizando o equilíbrio de sabores e a apresentação. Já atuou também como professora em cursos de confeitaria, compartilhando conhecimentos e experiências com novos apaixonados pela gastronomia.",
        ],
      },
      {
        titulo: "Julia Zimmerman no Festival Costume Gourmet 2026",
        paragrafos: [
          "Julia Zimmerman se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "mauro-tirabosco": {
    slug: "mauro-tirabosco",
    primeiroNome: "Mauro",
    resto: "Tirabosco",
    dia: "DOMINGO",
    foto: "/chefs/mauro-tirabosto.webp",
    cor: "bg-bordo",
    bioCurta: "Mauro Tirabosco é mixologista argentino, formado pela Universidad del Cóctel, em Buenos Aires.",
    metaDescription: "Conheça Mauro Tirabosco, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Mauro Tirabosco no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Mauro Tirabosco",
        paragrafos: [
          "Mauro Tirabosco é mixologista argentino, formado pela Universidad del Cóctel, em Buenos Aires. Possui especializações em ABC da Coquetelaria, Vermouths, Pisco, Flair, Administração de Bares e Coquetelaria Criativa. Atualmente, atua como Head de Bar do Grupo Host, onde é responsável pela criação de drinks, treinamento e desenvolvimento das equipes de bar, unindo técnica, criatividade e inovação em suas criações.",
        ],
      },
      {
        titulo: "Mauro Tirabosco no Festival Costume Gourmet 2026",
        paragrafos: [
          "Mauro Tirabosco se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "luiz-de-franca": {
    slug: "luiz-de-franca",
    primeiroNome: "Luiz",
    resto: "de França",
    dia: "SÁBADO",
    foto: "/chefs/luiz-de-franca.webp",
    cor: "bg-vinho",
    bioCurta: "Chef Luiz de França é chef, professor e consultor gastronômico cearense, formado pelo Le Cordon Bleu São Paulo.",
    metaDescription: "Conheça Luiz de França, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Luiz de França no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Luiz de França",
        paragrafos: [
          "Chef Luiz de França é chef, professor e consultor gastronômico cearense, formado pelo Le Cordon Bleu São Paulo. Sua cozinha aproxima a técnica francesa dos ingredientes e da cultura brasileira, com uma atuação marcada pela educação, sustentabilidade e valorização da gastronomia local.",
        ],
      },
      {
        titulo: "Luiz de França no Festival Costume Gourmet 2026",
        paragrafos: [
          "Luiz de França se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "dani-gondim": {
    slug: "dani-gondim",
    primeiroNome: "Dani",
    resto: "Gondim",
    dia: "SÁBADO",
    foto: "/chefs/dani-gondim.webp",
    cor: "bg-bordo",
    bioCurta: "Dani Gondim é multiartista cearense, empreendedora e apaixonada por gastronomia.",
    metaDescription: "Conheça Dani Gondim, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Dani Gondim no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Dani Gondim",
        paragrafos: [
          "Dani Gondim é multiartista cearense, empreendedora e apaixonada por gastronomia. Com uma trajetória que passa pela moda, televisão e criação de conteúdo, também se destaca na cozinha, onde transforma receitas em experiências afetivas e cheias de personalidade. Já participou de importantes eventos gastronômicos de Fortaleza, como o Festival Costume Gourmet, levando para a mesa seu olhar criativo e seu jeito leve de receber.",
        ],
      },
      {
        titulo: "Dani Gondim no Festival Costume Gourmet 2026",
        paragrafos: [
          "Dani Gondim se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "felipe-cicconato": {
    slug: "felipe-cicconato",
    primeiroNome: "Felipe",
    resto: "Cicconato",
    dia: "SÁBADO",
    foto: "/chefs/felipe-cicconato.webp",
    cor: "bg-[#8a3d18]",
    bioCurta: "Felipe Cicconato é chef confeiteiro do Grupo Illa e chef chocolatier da Barry Callebaut.",
    metaDescription: "Conheça Felipe Cicconato, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Felipe Cicconato no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Felipe Cicconato",
        paragrafos: [
          "Felipe Cicconato é chef confeiteiro do Grupo Illa e chef chocolatier da Barry Callebaut. Especialista em confeitaria e chocolate, alia técnica, criatividade e precisão em criações que valorizam sabor, textura e apresentação. Sua atuação traduz a alta confeitaria em experiências sofisticadas e autorais, com o chocolate como um dos grandes protagonistas de seu trabalho.",
        ],
      },
      {
        titulo: "Felipe Cicconato no Festival Costume Gourmet 2026",
        paragrafos: [
          "Felipe Cicconato se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "frederico-jayme": {
    slug: "frederico-jayme",
    primeiroNome: "Frederico",
    resto: "Jayme",
    dia: "SÁBADO",
    foto: "/chefs/frederico-jayme.webp",
    cor: "bg-vinho",
    bioCurta: "Chef Frederico Jayme é proprietário do restaurante Amecari, em Fortaleza.",
    metaDescription: "Conheça Frederico Jayme, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Frederico Jayme no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Frederico Jayme",
        paragrafos: [
          "Chef Frederico Jayme é proprietário do restaurante Amecari, em Fortaleza. Formado em International Culinary Arts pela University of West London, soma 12 anos de trajetória profissional no Reino Unido e desenvolve uma cozinha que valoriza ingredientes brasileiros, especialmente cearenses, combinados a técnicas e referências internacionais.",
        ],
      },
      {
        titulo: "Frederico Jayme no Festival Costume Gourmet 2026",
        paragrafos: [
          "Frederico Jayme se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "matheus-vieira": {
    slug: "matheus-vieira",
    primeiroNome: "Matheus",
    resto: "Vieira",
    dia: "DOMINGO",
    foto: "/chefs/matheus-vieira.webp",
    cor: "bg-oliva",
    bioCurta: "Chef, gastrônomo e empreendedor cearense, formado em Gastronomia pela Universidade Federal do Ceará (UFC), Matheus Vieira soma 15 anos de experiência no mercado gastronômico.",
    metaDescription: "Conheça Matheus Vieira, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Matheus Vieira no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Matheus Vieira",
        paragrafos: [
          "Chef, gastrônomo e empreendedor cearense, formado em Gastronomia pela Universidade Federal do Ceará (UFC), Matheus Vieira soma 15 anos de experiência no mercado gastronômico. Atuou por 10 anos como professor, instrutor e consultor de gastronomia e confeitaria, além de trabalhar na preparação de competidores para concursos profissionais. Especialista em gestão de eventos e entretenimento, dedica-se hoje ao desenvolvimento de projetos autorais que unem técnica, identidade brasileira e experiências gastronômicas.",
        ],
      },
      {
        titulo: "Matheus Vieira no Festival Costume Gourmet 2026",
        paragrafos: [
          "Matheus Vieira se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "elcio-e-bia-nagano": {
    slug: "elcio-e-bia-nagano",
    primeiroNome: "Elcio e Bia",
    resto: "Nagano",
    dia: "DOMINGO",
    foto: "/chefs/elcio-e-bia-nagano.webp",
    cor: "bg-bordo",
    bioCurta: "Engenheiro mecânico pela Unesp (Universidade Estadual Paulista), pós-graduado em Administração de Empresas pela FAAP (Fundação Armando Álvares Penteado) e mestrando em Turismo pela UECE (Universidade Estadual do Ceará), Elcio Nagano tem 62 anos, é casado e reside em Fortaleza.",
    metaDescription: "Conheça Elcio e Bia Nagano, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Elcio e Bia Nagano no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Elcio Nagano",
        paragrafos: [
          "Engenheiro mecânico pela Unesp (Universidade Estadual Paulista), pós-graduado em Administração de Empresas pela FAAP (Fundação Armando Álvares Penteado) e mestrando em Turismo pela UECE (Universidade Estadual do Ceará), Elcio Nagano tem 62 anos, é casado e reside em Fortaleza.",
          "Aprendeu a cozinhar na infância com os pais e avós, todos japoneses e ótimos cozinheiros, o que explica sua maior especialidade: a gastronomia japonesa e asiática. Desenvolveu a atividade gastronômica como hobby quando morava em São Paulo, frequentando cursos em entidades como Senac, Gendai Restaurantes Japoneses e Ginza Espaço das Artes. Ao se mudar para Fortaleza, em 1998, passou a se dedicar exclusivamente à gastronomia.",
          "Em 2000, abriu o Kingyo Restaurant ao lado da esposa, a nutricionista Miriam Kina, eleito melhor restaurante japonês de Fortaleza pelo júri da revista Veja durante os 9 anos consecutivos de sua existência. Em 2002, abriu, também com Miriam Kina e o cunhado Alexandre Kina, o restaurante Kina, no Shopping Del Paseo, que segue em funcionamento com 3 unidades em Fortaleza.",
          "Hoje, além de chef e empresário do ramo de alimentação, é professor de Gastronomia no Centro Universitário Uninta de Sobral, no Espaço Gastronomia Edil Costa e na Unifor, colunista gastronômico do jornal O Povo, consultor gastronômico e responsável por uma empresa de catering, palestras e cursos de gastronomia. Participa também do movimento Ceará à Mesa, ao lado dos chefs Fernando Barroso e Bernard Twardy, iniciativa que valoriza os insumos cearenses e resultou em um livro lançado em 21 de agosto de 2023.",
        ],
      },
      {
        titulo: "Bia Nagano",
        paragrafos: [
          "Formada em Administração pela UFC, Bia Nagano cresceu no universo da gastronomia: os pais já tiveram restaurantes na cidade e, hoje, é uma das sócias do Kina, que já existe há 23 anos. Além do trabalho à frente do restaurante, também atua como influenciadora digital.",
        ],
      },
      {
        titulo: "Elcio e Bia Nagano no Festival Costume Gourmet 2026",
        paragrafos: [
          "Elcio e Bia Nagano se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "rafael-kim": {
    slug: "rafael-kim",
    primeiroNome: "Rafael",
    resto: "Kim",
    dia: "DOMINGO",
    foto: "/chefs/rafael-kim.webp",
    cor: "bg-vinho",
    bioCurta: "Rafa Kim, chef proprietário do Manur Izakaya, é paulistano e descendente de coreanos, e encontrou no Ceará o lugar para construir sua história na gastronomia.",
    metaDescription: "Conheça Rafael Kim, presença confirmada no Palco Gourmet do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Rafael Kim no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Rafael Kim",
        paragrafos: [
          "Rafa Kim, chef proprietário do Manur Izakaya, é paulistano e descendente de coreanos, e encontrou no Ceará o lugar para construir sua história na gastronomia. Há 10 anos vivendo no estado, tornou-se apaixonado por sua cultura, seus ingredientes e a riqueza de sabores que o Ceará oferece. À frente do Manur, traz para Fortaleza os sabores e a essência das cozinhas asiáticas em suas formas originais, explorando novas possibilidades e contribuindo para inovar e movimentar o cenário gastronômico cearense.",
        ],
      },
      {
        titulo: "Rafael Kim no Festival Costume Gourmet 2026",
        paragrafos: [
          "Rafael Kim se apresenta no Palco Gourmet do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "marco-ferrari": {
    slug: "marco-ferrari",
    primeiroNome: "Marco",
    resto: "Ferrari",
    dia: "DOMINGO",
    foto: "/chefs/marco-ferrari.webp",
    cor: "bg-vinho",
    bioCurta: "Marco Ferrari é sommelier profissional, professor e consultor de vinhos, considerado um dos pioneiros na formação e difusão da cultura do vinho no Ceará.",
    metaDescription: "Conheça Marco Ferrari, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Marco Ferrari no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Marco Ferrari",
        paragrafos: [
          "Marco Ferrari é sommelier profissional, professor e consultor de vinhos, considerado um dos pioneiros na formação e difusão da cultura do vinho no Ceará. Italiano, nascido no Piemonte, soma mais de 25 anos de experiência no universo dos vinhos, com especializações em enologia italiana e vinhos de Bordeaux. Foi eleito Melhor Sommelier do Ceará pela revista Prazeres da Mesa em 2012 e 2013, e atua também como professor, palestrante e embaixador de importantes vinícolas.",
        ],
      },
      {
        titulo: "Marco Ferrari no Festival Costume Gourmet 2026",
        paragrafos: [
          "Marco Ferrari se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "clovis-holanda": {
    slug: "clovis-holanda",
    primeiroNome: "Clóvis",
    resto: "Holanda",
    dia: "DOMINGO",
    foto: "/chefs/clovis-holanda.webp",
    cor: "bg-oliva",
    bioCurta: "Clóvis Holanda é jornalista, colunista e editor de Cultura e Entretenimento do O Povo, com atuação destacada na cobertura de comportamento, gastronomia, cultura e lifestyle no Ceará.",
    metaDescription: "Conheça Clóvis Holanda, presença confirmada no Piano Bar do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Clóvis Holanda no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Clóvis Holanda",
        paragrafos: [
          "Clóvis Holanda é jornalista, colunista e editor de Cultura e Entretenimento do O Povo, com atuação destacada na cobertura de comportamento, gastronomia, cultura e lifestyle no Ceará. À frente de sua coluna, acompanha e dá visibilidade a personagens, chefs, restaurantes e experiências que movimentam a cena gastronômica e cultural de Fortaleza. Também atua na curadoria e realização de experiências que aproximam gastronomia, vinhos, arte e cultura.",
        ],
      },
      {
        titulo: "Clóvis Holanda no Festival Costume Gourmet 2026",
        paragrafos: [
          "Clóvis Holanda se apresenta no Piano Bar do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "marina-araujo": {
    slug: "marina-araujo",
    primeiroNome: "Marina",
    resto: "Araújo",
    dia: "DOMINGO",
    foto: "/chefs/marina-araujo.webp",
    cor: "bg-oliva",
    bioCurta: "Empresária, pesquisadora e cozinheira, Marina Araújo atua na interseção entre alimento, afeto e território.",
    metaDescription: "Conheça Marina Araújo, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Marina Araújo no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Marina Araújo",
        paragrafos: [
          "Empresária, pesquisadora e cozinheira, Marina Araújo atua na interseção entre alimento, afeto e território. Foi diretora do Mercado AlimentaCE, política pública que desenvolve experiências que conectam pessoas por meio da cultura alimentar, dos saberes ancestrais, da hospitalidade e de narrativas que fortalecem a comunidade.",
        ],
      },
      {
        titulo: "Marina Araújo no Festival Costume Gourmet 2026",
        paragrafos: [
          "Marina Araújo se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "gabi-barreto": {
    slug: "gabi-barreto",
    primeiroNome: "Gabi",
    resto: "Barreto",
    dia: "DOMINGO",
    foto: "/chefs/gabi-barreto.webp",
    cor: "bg-bordo",
    bioCurta: "Chef Gabriela Barreto é uma jovem chef cearense e personal chef, com uma trajetória marcada pela busca por técnica, criatividade e experiências gastronômicas personalizadas.",
    metaDescription: "Conheça Gabi Barreto, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Gabi Barreto no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Gabi Barreto",
        paragrafos: [
          "Chef Gabriela Barreto é uma jovem chef cearense e personal chef, com uma trajetória marcada pela busca por técnica, criatividade e experiências gastronômicas personalizadas. Medalhista de bronze nas Competições Senac de Educação Profissional de 2023, representando o Ceará, atua na criação de menus, eventos e experiências exclusivas, valorizando ingredientes, sabores e a cozinha feita sob medida para cada ocasião.",
        ],
      },
      {
        titulo: "Gabi Barreto no Festival Costume Gourmet 2026",
        paragrafos: [
          "Gabi Barreto se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "renata": {
    slug: "renata",
    primeiroNome: "Renata",
    resto: "Azúcar",
    dia: "DOMINGO",
    foto: "/chefs/renata-azucar.webp",
    cor: "bg-vinho",
    bioCurta: "Renata é fundadora da Azúcar, marca de doces artesanais e cafeteria de Fortaleza.",
    metaDescription: "Conheça Renata Azúcar, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Renata Azúcar no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Renata Azúcar",
        paragrafos: [
          "Renata é fundadora da Azúcar, marca de doces artesanais e cafeteria de Fortaleza. Formada em Gastronomia, transformou receitas de família em um negócio que valoriza a confeitaria artesanal, o cuidado nos detalhes e o sabor afetivo. À frente da Azúcar, construiu uma identidade marcada pela delicadeza, qualidade e pelo prazer de transformar doces em experiências.",
        ],
      },
      {
        titulo: "Renata Azúcar no Festival Costume Gourmet 2026",
        paragrafos: [
          "Renata Azúcar se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
  "lia-quindere": {
    slug: "lia-quindere",
    primeiroNome: "Lia",
    resto: "Quinderé",
    dia: "DOMINGO",
    foto: "/chefs/lia-quindere.webp",
    cor: "bg-[#8a3d18]",
    bioCurta: "Lia Quinderé é chef pâtissière, empresária e fundadora da Sucré, uma das marcas de confeitaria de maior destaque do Ceará.",
    metaDescription: "Conheça Lia Quinderé, presença confirmada no Recebendo em Casa do Festival Costume Gourmet 2026, em Fortaleza.",
    tituloPagina: "Lia Quinderé no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Sobre Lia Quinderé",
        paragrafos: [
          "Lia Quinderé é chef pâtissière, empresária e fundadora da Sucré, uma das marcas de confeitaria de maior destaque do Ceará. Formada pela renomada Le Cordon Bleu, em Paris, e especializada em Cake Design pela Wilton School, em Chicago, construiu sua trajetória unindo técnica francesa, criatividade e valorização dos ingredientes brasileiros e cearenses. Reconhecida nacionalmente, foi eleita Chef Pâtissière do Ano pela Prazeres da Mesa em 2013 e 2015, consolidando seu nome entre os grandes talentos da confeitaria brasileira.",
        ],
      },
      {
        titulo: "Lia Quinderé no Festival Costume Gourmet 2026",
        paragrafos: [
          "Lia Quinderé se apresenta no Recebendo em Casa do Festival Costume Gourmet 2026. O Festival Costume Gourmet 2026 acontece de 18 a 20 de setembro, no La Maison Coliseu, na Avenida Engenheiro Luiz Vieira, 555, no Papicu, em Fortaleza, e é apresentado pelo São Luiz Supermercado, rede que completa 100 anos em 2026. O evento reúne três espaços centrais de experiência, o Palco Gourmet, o Piano Bar e o Recebendo em Casa, e reverte 100% da renda da bilheteria para três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC).",
        ],
      },
    ],
  },
};
