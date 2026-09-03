// ============================================================================
//  CONFIGURAÇÃO DO SITE — edite APENAS este arquivo para trocar os dados.
//  Tudo que está marcado com  // TROCAR  é placeholder.
// ============================================================================

export const casal = {
  noiva: 'Laisa',
  noivo: 'Matteo',
  monograma: 'LM', // usado só se a imagem abaixo não carregar
  monogramaImg: '/img/monograma.png', // o selo LM do convite, com fundo transparente
}

// Data e hora da CERIMÔNIA. Formato: ano, mês-1, dia, hora, minuto
// ATENÇÃO: o mês começa em 0 — maio = 4.
export const dataCasamento = new Date(2027, 4, 8, 15, 0)

export const dataFormatada = {
  curta: '08.05.2027',
  longa: '8 de maio de 2027',
  hora: '15h',
}

// ---------------------------------------------------------------------------
//  TEXTOS
// ---------------------------------------------------------------------------

export const contagem = {
  titulo: 'Contamos os dias…',
  paragrafos: [
    'É uma alegria imensa ter você fazendo parte desse momento!',
    'Neste site, você vai encontrar todos os detalhes do nosso casamento: data, local, traje, lista de presentes e tudo mais que preparamos com carinho.',
    'Estamos ansiosos para viver esse dia inesquecível ao lado de vocês!',
  ],
  assinatura: 'Com amor, Laisa e Matteo',
  rodape: 'até o pôr do sol que receberá o nosso "sim".',
}

export const historia = {
  titulo: 'Onde tudo começou…',
  versiculo: '',
  referencia: '',
  paragrafos: [
    'Tudo começou com um olhar… e uma caipirinha. Era 8 de novembro de 2020, em meio à pandemia, quando Laisa resolveu quebrar a quarentena e ir a uma festa. Ela jamais imaginaria que aquela decisão mudaria sua vida para sempre.',
    'Alguns minutos depois, Matteo chegou. Nós ainda não nos conhecíamos, mas, de alguma forma, nossos olhares começaram a se encontrar. Discretamente, tentávamos disfarçar cada troca de olhares, como se ninguém estivesse percebendo. Mas nossos amigos, que hoje podemos chamar de cupidos oficiais dessa história, perceberam. E decidiram dar uma ajudinha.',
    'Matteo estava preparando caipirinhas quando uma amiga perguntou se Laisa poderia ajudá-lo. E foi aí que aconteceu: assim que ela percebeu que era ele, o coração já bateu mais forte. Entre frutas, gelo e uma boa dose de coragem, começamos a conversar.',
    'E, curiosamente, a caipirinha que Matteo fez naquela noite foi simplesmente a melhor que Laisa já tomou na vida. Talvez fosse a receita… ou talvez fosse o ingrediente especial que aquela noite carregava.',
    'Depois daquela caipirinha, começamos a conversar e não paramos mais. O que começou com olhares tímidos em uma festa se transformou em conversas intermináveis, encontros, risadas e cumplicidade, até que, em dezembro daquele mesmo ano, começou o nosso namoro.',
    'Desde então, seguimos escolhendo um ao outro todos os dias. Vivemos momentos incríveis, enfrentamos desafios, realizamos sonhos e construímos, pouco a pouco, a nossa história: uma história que começou de maneira inesperada, num momento tão incerto do mundo, mas que nos trouxe a certeza de que alguns encontros simplesmente acontecem na hora certa.',
    'Hoje, olhamos para trás e percebemos que aquela noite de 8 de novembro de 2020 foi apenas o primeiro capítulo de tudo o que ainda viveríamos juntos. E agora, depois de tantos capítulos, estamos prontos para escrever o nosso próximo: o nosso para sempre.',
  ],
}

export const local = {
  titulo: 'A cerimônia',
  texto:
    'Nosso grande dia acontecerá no Villa Vezzane, em Mairiporã, em meio à natureza e com uma atmosfera charmosa e acolhedora, um espaço com proposta rústico-chique, integrado à natureza, com áreas ao ar livre e cobertas.',
  nome: 'Villa Vezzane',
  endereco: 'R. Benedito Fontana, 510, Mairiporã, SP, 07627-200',
  observacao: 'Após a cerimônia, os convidados serão recepcionados no mesmo local.',
  mapa: 'https://share.google/ZHBbRfipdqdJ5BVLU',
  hospedagem:
    'A Villa Vezzane fica em Mairiporã, na serra da Cantareira, a cerca de 40 minutos de carro da zona norte de São Paulo. Na região há pousadas e hotéis para quem quiser dormir por perto. Recomendamos reservar com antecedência.', // CONFERIR distância/tempo
  estacionamento:
    'Estacionamento gratuito: área exclusiva e segura para os convidados, com acesso fácil ao espaço e monitoramento. O conforto começa desde a chegada.',
}

export const dressCode = {
  titulo: 'Dress code',
  paragrafos: [
    'Sugerimos o traje social, confortável e elegante, pensado para uma celebração ao ar livre, no clima encantador do pôr do sol.',
    'Como a cerimônia começa à tarde e segue até o entardecer, vale levar um xale ou casaco leve para quando o clima esfriar.',
    'Escolha a produção que fizer você se sentir bem, venha confortável e aproveite cada momento com a gente.',
  ],
  paletaNota:
    'Nossa paleta foi escolhida com carinho em tons de verde oliva, terracota e branco. Pedimos que esses tons (e cores muito próximas a eles) fiquem reservados para a identidade visual do nosso grande dia.',
  // Link de um board do Pinterest com referências (opcional — deixe '' para esconder o botão)
  pinterest: 'https://br.pinterest.com/', // TROCAR
  // Fotos de referência do dress code (coloque em public/img/ e aponte aqui)
  fotos: [
    { src: '/img/dresscode-1.png', alt: 'Referência de traje: tons terrosos e amarelo' },
    { src: '/img/dresscode-2.png', alt: 'Referência de traje: azul marinho' },
  ],
}

// ---------------------------------------------------------------------------
//  CAPÍTULO II — LUA DE MEL
// ---------------------------------------------------------------------------

export const luaDeMel = {
  titulo: 'Capítulo II: Lua de mel',
  paragrafos: [
    'Nossa lista de presentes foi pensada de forma um pouco diferente do tradicional. Ao invés de itens para casa, optamos por transformar esse momento em algo mais especial: a nossa lua de mel.',
    'Cada contribuição representa uma parte dessa viagem tão sonhada, seja para nos ajudar em um jantar inesquecível, um passeio especial ou simplesmente a oportunidade de vivermos juntos dias únicos.',
  ],
  chamada:
    'Você pode escolher a(s) experiência(s) que deseja nos dar como presente de casamento:',
  // Cotas de experiência. Preços ainda são placeholder — confirmar valor real de cada uma.
  // Coloque as imagens em public/img/ e aponte em `img`. Cotas sem `img` aparecem
  // como cartão só com nome e preço (usado nas cotas "brincalhonas").
  cotas: [
    { id: 'cafe', nome: 'Café da manhã dos noivos', preco: 250, img: '/img/cota-cafe.jpg' },
    { id: 'jantar', nome: 'Jantar romântico', preco: 400, img: '/img/cota-jantar.jpg' },
    { id: 'misterioso', nome: 'Passeio misterioso', preco: 450, img: '/img/cota-misterioso.jpg' },
    { id: 'aereo', nome: 'Ajuda no aéreo', preco: 900, img: '/img/cota-aereo.jpg' },
    { id: 'drink', nome: 'Experiência de drink aos noivos', preco: 150, img: '/img/cota-drink.jpg' },
    { id: 'transplante', nome: 'Cota do transplante capilar do noivo', preco: 150, img: '/img/cota-transplante.jpg' },
    { id: 'naodizer', nome: 'Só pra não dizer que não dei nada', preco: 200, img: '/img/cota-naodizer.jpg' },
    { id: 'ajudanoiva', nome: 'Cota para ajudar a noiva pagar o casamento', preco: 100, img: '/img/cota-ajudanoiva.jpg' },
    { id: 'gorjeta', nome: 'Cota da gorjeta generosa pro garçom', preco: 37.5 },
    { id: 'ressaca', nome: 'Cota do café pra cortar a ressaca no dia seguinte', preco: 22.9 },
    { id: 'buque', nome: 'Cota pra noiva jogar o buquê bem na sua direção', preco: 63.4 },
    { id: 'salto', nome: 'Cota do curativo pro salto que vai doer no fim da festa', preco: 18.75 },
  ],
  // Dados do PIX para onde o valor cai
  pix: {
    chave: '11958906445', // Mercado Pago
    tipo: 'Telefone',
    favorecido: 'Matteo Souza',
    banco: 'Mercado Pago',
    // Opcional: imagem do QR Code do PIX em public/img/qrcode-pix.png
    qrcode: '/img/qrcode-pix.png',
  },
}

// ---------------------------------------------------------------------------
//  CONFIRMAÇÃO DE PRESENÇA (RSVP)
// ---------------------------------------------------------------------------

export const rsvp = {
  titulo: 'Confirme sua presença',
  texto: 'Seu "sim" também é parte da nossa história. Por favor, confirme até',
  prazo: '30 de abril de 2027',
  aviso: 'Cada convidado(a) deverá confirmar a sua presença de forma individual.',

  // ===========================================================================
  //  COMO O FORMULÁRIO FUNCIONA
  //  'nativo'  → o convidado preenche o formulário DO SITE (com a cara do site)
  //              e a resposta cai direto na sua planilha do Google. Precisa dos
  //              IDs dos campos abaixo. É o modo recomendado.
  //  'iframe'  → mostra o formulário do Google embutido, sem precisar dos IDs.
  //              Funciona na hora, mas visualmente é a cara do Google.
  //  O passo a passo dos dois está no README.
  // ===========================================================================
  modo: 'nativo',

  // ID do formulário: aparece na URL, entre /forms/d/e/  e  /viewform
  formId: '1FAIpQLSfM5CDD7tqx04a0y0CdDUvMWkjsIfSoKvM0QNGSjpgX6w34zQ',

  // IDs de cada campo (pegue pelo "link pré-preenchido" — ver README)
  campos: {
    nome: 'entry.2104682253',
    whatsapp: 'entry.2055639855',
    criancaVai: 'entry.1511578215',
    criancaNome: 'entry.1608937358',
    criancaIdade: 'entry.673627810',
    presenca: 'entry.698883558',
  },

  // Precisam ser EXATAMENTE o texto das opções no Google Forms
  opcoesCrianca: {
    sim: 'Sim',
    nao: 'Não',
  },
  opcoesPresenca: {
    sim: 'Sim',
    nao: 'Não',
  },

  // Usado só no modo 'iframe' e no botão de reserva
  formEmbedUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfM5CDD7tqx04a0y0CdDUvMWkjsIfSoKvM0QNGSjpgX6w34zQ/viewform?embedded=true',
  formLink:
    'https://docs.google.com/forms/d/e/1FAIpQLSfM5CDD7tqx04a0y0CdDUvMWkjsIfSoKvM0QNGSjpgX6w34zQ/viewform',

  // Mensagem que aparece no site depois de enviar
  sucesso: {
    titulo: 'Recebemos o seu sim',
    texto:
      'Obrigado por confirmar. Vamos guardar o seu nome com carinho na nossa lista, e a gente se vê na serra.',
  },

  // WhatsApp do casal — usado para dúvidas e para avisar sobre o presente
  whatsapp: '5511963691862',
}

export const recado = {
  texto: '',
  // Link de um segundo Google Form só para recados (opcional — deixe '' para esconder)
  formLink: '', // TROCAR (opcional)
}

// Fotos do site (já preenchidas com as imagens do convite digital)
export const fotoHero = '/img/hero.jpg'
export const fotoHistoria = '/img/historia.jpg'
export const fotoLocal = '/img/local.jpg'

export const formatBRL = (v) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

/**
 * Resolve os caminhos de imagem em relação à base do site.
 * Assim os arquivos de `public/img/` funcionam tanto na raiz do domínio quanto
 * num subdiretório (GitHub Pages) ou abrindo o dist/ direto do disco.
 */
export const asset = (p) => {
  if (!p) return p
  if (/^(https?:)?\/\//.test(p) || p.startsWith('data:')) return p
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return p.startsWith('/') ? base + p : p
}
