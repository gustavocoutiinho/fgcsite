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
    dia: "SÁBADO",
    cor: "bg-[#8a3d18]",
    bioCurta: "Do Crato para o litoral de Fortaleza: o chef do NOM Frutos do Mar e da padaria Molino sobe ao Palco Gourmet no sábado do Costume Gourmet 2026.",
    metaDescription: "Conheça Thales Romão, chef do NOM Frutos do Mar e da padaria Molino em Fortaleza, que sobe ao Palco Gourmet no sábado do Festival Costume Gourmet 2026.",
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
          "Thales Romão se apresenta no Palco Gourmet no sábado do festival, levando para o público em tempo real a mesma lógica que aplica na cozinha do NOM Frutos do Mar: produto do litoral cearense tratado com técnica, atenção ao detalhe e respeito pela cadeia que traz o peixe do mar até o prato. É provável que o público reconheça ali ecos do cardápio que já assina em Fortaleza, adaptados ao formato de show cooking, mais direto e mais exposto ao olhar de quem assiste.",
          "Uma frase do próprio chef, usada no site oficial do festival, resume bem o espírito com que ele encara esse tipo de apresentação ao vivo: \"Transforme o impossível em pequenos possíveis\". É uma síntese que também descreve boa parte da carreira de Thales até aqui, entre a cozinha do mar e a padaria, entre a sala de aula e o fogão, sempre resolvendo, um passo de cada vez, o que parecia distante no início.",
          "Vale lembrar que o Costume Gourmet tem uma característica que o diferencia de boa parte dos eventos gastronômicos do país: 100% da renda da bilheteria é revertida para três instituições sociais de Fortaleza, o IPREDE, o Instituto Povo do Mar (IPOM) e o Instituto do Câncer do Ceará (ICC). Isso significa que assistir Thales Romão cozinhar ao vivo no Palco Gourmet, no sábado do festival, é também parte de um gesto coletivo maior, que transforma gastronomia em apoio direto a causas sociais da cidade onde o chef construiu sua carreira. Mais informações sobre a programação completa estão disponíveis no site oficial do evento, costumegourmet.minerbz.com.br.",
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
    cor: "bg-[#8a3d18]",
    bioCurta: "Pepê e Diego Freire, da dupla por trás do Muvuco Boteco do Mar, levam peixe fresco, ikejime e sabor de boteco cearense pro Palco Gourmet do festival.",
    metaDescription: "Conheça Pepê e Diego Freire, do Muvuco Boteco do Mar e da Z-Boys Pizza, dupla de Fortaleza que cozinha ao vivo no Festival Costume Gourmet 2026.",
    tituloPagina: "Pepê e Diego Freire no Festival Costume Gourmet 2026",
    artigo: [
      {
        titulo: "Dois cozinheiros, uma mesa só",
        paragrafos: [
          "Fortaleza tem uma dupla que decidiu, há alguns anos, transformar peixe fresco e informalidade de boteco em ofício sério. Pepê e Diego Freire são os nomes por trás do Muvuco Boteco do Mar, casa que virou parada obrigatória para quem quer comer bem perto da orla cearense sem se preocupar com formalidades de talheres e taças. Os dois se conheceram trabalhando na cozinha do chef Ivan Prado, um dos nomes mais respeitados da gastronomia cearense, e levaram para o próprio negócio a mesma exigência técnica aprendida ali, só que servida num ambiente descontraído, de mesa de boteco, cerveja gelada e conversa alta. Em setembro de 2026, essa dupla sobe ao Palco Gourmet do Festival Costume Gourmet, em Fortaleza, pra cozinhar ao vivo diante do público, um convite que resume bem o que fazem todos os dias: pegar o que o mar e o litoral cearense oferecem de mais fresco e transformar isso em prato de gente que gosta de comer bem sem cerimônia.",
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
          "A formação de Diego passou pelo curso técnico de cozinha do Senac, feito ao mesmo tempo em que cursava a faculdade de Gastronomia, uma rotina dupla que já dava pistas do tipo de disciplina que ele levaria pra carreira. Fez ainda um treinamento intensivo, de oito horas por dia durante um ano inteiro, de preparação pra Copa do Mundo das Profissões, competição que reúne jovens profissionais de várias áreas técnicas, contando com instrutores renomados no processo, entre eles o confeiteiro Lucas Corazza. Depois de formado, virou professor no próprio Senac, ensinando pra novas turmas o que tinha acabado de aprender, e passou a liderar a cozinha do restaurante Mayú, o Senac Reference de Fortaleza, sob supervisão do chef executivo Ivan Prado, nome que se tornaria referência decisiva na trajetória dele.",
          "Ivan Prado não é uma figura qualquer no cenário gastronômico cearense. Tem certificação ProChef pelo Culinary Institute of America, nos Estados Unidos, já trabalhou ao lado de nomes como Alex Atala, Alberto Landgraf e Flávia Quaresma, e se notabilizou em Fortaleza como chef executivo do Zoi, do grupo Colosso, restaurante que entrou na lista dos 100 melhores do Brasil da revista Exame em 2023. À frente do Mayú, montou o primeiro restaurante da cidade com conceito de menu degustação, valorizando os três biomas do Ceará (mar, serra e sertão) num cardápio que se renova a cada três meses. Ter passado pela cozinha de um chef desse calibre, tanto Diego quanto Pepê, deixou marca visível no rigor técnico que os dois levariam pro próprio negócio.",
          "Foi ainda nesse período de formação que Diego buscou uma especialização pouco comum em Fortaleza: um curso de ikejime, a técnica japonesa de abate de peixe que preza pelo bem estar do animal e pela qualidade final da carne, atordoando o peixe rapidamente e drenando o sangue de forma eficiente logo depois da captura. Ele fez esse treinamento com Rodolfo Vilar, do Projeto A.Mar, em Ilhabela, litoral de São Paulo, um dos polos de referência no Brasil pra quem quer aprender a técnica na prática, ao lado de pescadores e outros cozinheiros interessados no mesmo assunto.",
        ],
      },
      {
        titulo: "Pepê: o parceiro que também aprendeu com Ivan Prado",
        paragrafos: [
          "Pepê, cujo nome completo é Pedro Paulo de Menezes, trilhou parte desse mesmo caminho ao lado de Diego. Também foi aprendiz do chef Ivan Prado e passou por restaurantes renomados de Fortaleza antes de se tornar sócio do Muvuco. Assim como o parceiro, participou do curso do Projeto A.Mar em Ilhabela, com Rodolfo Vilar, o que reforça que a adoção do ikejime no Muvuco não foi capricho de um só sócio, e sim decisão compartilhada pelos dois cozinheiros que assinam a cozinha da casa. Pepê é hoje um dos proprietários do Muvuco Boteco do Mar e parte da assinatura por trás de pratos que viraram marca registrada da casa, caso da coxinha de polvo, tida como a única de Fortaleza feita com esse ingrediente.",
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
          "É esse repertório, construído entre a cozinha técnica aprendida com Ivan Prado, o rigor do ikejime trazido de Ilhabela e o sabor descomplicado de boteco de praia, que Pepê e Diego levam pro Palco Gourmet do Festival Costume Gourmet 2026. No domingo do festival, com patrocínio da Netumar, os dois cozinham ao vivo diante do público que passa pelo La Maison Coliseu, no Papicu, entre 18 e 20 de setembro. A frase que resume a presença da dupla no evento, \"cozinheiro registrando memórias\", cai bem pra quem construiu carreira exatamente assim: registrando na receita a lembrança de casa, de pai e mãe trabalhando fora, de avós comerciantes, de mestre que ensinou o caminho certo, e de um peixe pescado com respeito virando prato de gente feliz.",
          "O Festival Costume Gourmet 2026 é apresentado pelo São Luiz Supermercado, que completa 100 anos no mesmo ano, e reverte 100% da renda da bilheteria pra três instituições sociais de Fortaleza: o IPREDE, o Instituto Povo do Mar e o Instituto do Câncer do Ceará. Além do Palco Gourmet, onde Pepê e Diego se apresentam, o evento reúne também o Piano Bar, com drinks e música ao vivo, e o Recebendo em Casa, jantar intimista para 30 pessoas com chef convidado. Ver a dupla do Muvuco e da Z-Boys Pizza nesse palco é a confirmação de que a boa cozinha cearense, a que nasce de necessidade, se refina com técnica e termina em mesa cheia, tem espaço garantido nas grandes vitrines gastronômicas da cidade.",
        ],
      },
    ],
  },
};