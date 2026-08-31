# Laísa e Matteo — 08.05.2027

Site do casamento: contagem regressiva, história, local, dress code, presentes da
lua de mel (com PIX) e confirmação de presença que grava direto na sua planilha
do Google.

## Rodar localmente

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/ pronta pra publicar
```

---

# 1. Confirmação de presença

O convidado preenche o formulário **dentro do site** (com a cara do site, sem
cara de Google) e a resposta cai na sua planilha do Google Sheets. Isso já
está **funcionando e testado** com o formulário real "Casamento Laisa &
Matteo" (6 perguntas: nome, WhatsApp, se vai criança, nome/idade da criança e
comparecimento).

> ⚠️ No Google Forms, a pergunta **"Idade"** está marcada como obrigatória,
> mas só faz sentido responder se a pessoa marcou "Sim" em "Alguma criança
> irá com você?". O site só mostra (e só exige) os campos de nome/idade da
> criança quando "Sim" é escolhido — quem responde "Não" nunca vê esses
> campos, então nada é enviado neles. Isso funciona porque o Google Forms não
> valida "obrigatória" no envio direto (fora do site do Forms). Se um dia
> quiser deixar 100% consistente, é só desmarcar "Obrigatória" em "Idade" no
> próprio formulário — não é obrigatório fazer isso.

## 1.1 Ligar a planilha e ter o controle da lista

1. No formulário, aba **Respostas** → ícone verde do **Sheets** → **Criar
   planilha**. Pronto: cada confirmação entra numa linha nova, com data e hora.
2. Na planilha, clique na coluna `Você irá comparecer?` →
   **Dados → Criar um filtro** para ver só quem confirmou.
3. Para contar automaticamente, cole numa célula vazia à direita:

```
=CONT.SE(G:G;"Sim")  → quantos vão
=CONT.SE(G:G;"Não")  → quantos não vão
```

(troque `G:G` pela letra da coluna "Você irá comparecer?" na sua planilha)

4. Para receber **e-mail a cada nova confirmação**: na planilha,
   **Ferramentas → Regras de notificação → Notificar quando um usuário enviar um
   formulário → E-mail imediatamente**.

## 1.2 Se precisar trocar o formulário

Se um dia recriar o formulário do zero (não recomendo, o atual já funciona),
o passo a passo é:

1. **⋮ (três pontinhos) → Preencher formulário automaticamente** → preencha
   cada campo com um valor que você reconheça e marque as opções desejadas →
   **Obter link** → copie e me mande.
2. O link vem assim, um `entry.xxxxx` por pergunta, na ordem em que elas
   aparecem no formulário:

```
https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?usp=pp_url
  &entry.1234567890=TESTE1
  &entry.9876543210=TESTE2
  ...
```

3. Casa cada `entry.` com a pergunta correspondente e atualiza
   `rsvp.formId`/`rsvp.campos` no `src/config.js`.

## 1.3 Plano B: formulário do Google embutido

Se preferir não mexer com IDs, troque no `src/config.js`:

```js
modo: 'iframe',
```

e cole em `formEmbedUrl` a URL que aparece em **Enviar → ícone `< >`** (ela
termina em `/viewform?embedded=true`). Funciona na hora — só fica com o visual
do Google no meio do site.

---

# 2. O que ainda falta preencher

Tudo fica em **`src/config.js`**, e cada pendência está marcada com `// TROCAR`.

Já está pronto:

- [x] Nomes, monograma (`LM` do convite, extraído com fundo transparente)
- [x] Data e hora: 8 de maio de 2027, às 15h
- [x] Local: Villa Vezzane — R. Benedito Fontana, 510, Mairiporã/SP + mapa embutido
- [x] Versículo de Rute 1:16 e a história completa do casal
- [x] Fotos do topo, da história e do local (tiradas do convite digital)
- [x] Textos de dress code, estacionamento e lua de mel (enviados pelo casal)
- [x] Prazo do RSVP: 30 de abril de 2027
- [x] PIX: chave (telefone) e banco (Mercado Pago)
- [x] Confirmação de presença — formulário real conectado e testado

Falta:

- [ ] `rsvp.whatsapp` — número do casal (avisaram que ainda vão criar um WhatsApp só pra isso)
- [ ] `luaDeMel.pix.favorecido` — nome cadastrado na conta do Mercado Pago
- [ ] `luaDeMel.cotas` — os 4 valores (`preco`) são placeholder, confirmar o real de cada experiência
- [ ] `dressCode.pinterest` — link do board de referências
- [ ] Fotos do dress code e das cotas (tabela abaixo) — o PDF de fotos foi citado mas ainda não chegou
- [ ] Conferir `local.hospedagem` (tempo de carro até Mairiporã)

## Fotos

Coloque os arquivos em `public/img/`:

| Arquivo | Onde aparece | Formato ideal | Status |
| --- | --- | --- | --- |
| `hero.jpg` | topo do site | vertical | ✅ do convite |
| `historia.jpg` | "Nossa história" | vertical 3:4 | ✅ do convite |
| `local.jpg` | "A cerimônia" | horizontal | ✅ do convite |
| `monograma.png` | selo LM (topo e rodapé) | quadrado, fundo transparente | ✅ do convite |
| `dresscode-1.jpg` / `dresscode-2.jpg` | referências de traje | vertical 3:4 | falta |
| `cota-*.jpg` | cada experiência da lua de mel | horizontal 4:3 | falta |
| `qrcode-pix.png` | QR Code no carrinho (opcional) | quadrado | falta |
| `momento-poster.jpg` | capa do vídeo "Um instante nosso" | 16:9 | ✅ (do live photo) |

O vídeo em loop fica em `public/video/momento.mp4` (convertido do live photo
enviado — trocar por outro é só substituir o arquivo, mesmo nome). Para
remover a seção, esvazie `momento.video` em `src/config.js`.

Enquanto o arquivo não existir, aparece um bloco bege com o nome do arquivo que
falta — nada quebra. Comprima antes de subir (squoosh.app); acima de ~400 KB por
foto o site fica lento no celular.

Se trocar a foto do topo e o enquadramento cortar mal, ajuste o
`object-position` de `.hero-bg` no `src/styles.css` (hoje está em `center 15%`).

---

# 3. Presentes da lua de mel

Funciona sem backend: o convidado escolhe as experiências, o site soma, mostra a
chave PIX (com botão de copiar e QR Code opcional) e gera uma mensagem pronta no
WhatsApp com a lista escolhida — assim vocês sabem quem presenteou o quê.

- As escolhas ficam salvas no navegador do convidado, então ele pode fechar e
  voltar depois sem perder.
- Além das cotas, tem o campo de **valor livre**, com atalhos de R$ 50 / 100 /
  250 / 500 — cobre quem só quer contribuir com o que dá.
- Nada é cobrado automaticamente e nenhum dado de pagamento passa pelo site.

---

# 4. Publicar

O build é estático — qualquer hospedagem serve.

**Netlify (arrastar e soltar, sem git)**
```bash
npm run build
```
Depois arraste a pasta `dist/` em [app.netlify.com/drop](https://app.netlify.com/drop).

**Vercel**
```bash
npx vercel --prod
```

**GitHub Pages**
```bash
npm run build
npx gh-pages -d dist
```

O `base: './'` do `vite.config.js` e o helper `asset()` do `config.js` já
garantem que as imagens funcionem também em subdiretório (caso do Pages).

Depois aponte um domínio (ex.: `laisaematteo.com`) para a hospedagem escolhida —
as três aceitam domínio próprio.

---

# 5. Estrutura

```
src/
  config.js              ← ÚNICO arquivo que você precisa editar
  App.jsx                ← estado do carrinho de presentes
  styles.css             ← todo o visual (tokens de cor/fonte no topo)
  components/
    ui.jsx               ← <Seal>, <Photo> (com fallback) e <Reveal> (fade ao rolar)
    Nav.jsx  Hero.jsx  Countdown.jsx  Story.jsx  Moment.jsx  Venue.jsx
    DressCode.jsx  Honeymoon.jsx  CartDrawer.jsx  Rsvp.jsx  Footer.jsx
public/img/              ← as fotos
public/video/            ← o vídeo em loop
```

Cores e fontes: tokens no começo do `src/styles.css` (`--paper`, `--ink`,
`--olive`, `--gold`, `--serif`, `--script`). As fontes vêm do Google Fonts,
declaradas no `index.html`.
