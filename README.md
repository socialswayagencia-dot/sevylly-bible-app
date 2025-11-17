Evylly — Next.js Minimalista (Completo) — versão para Vitória

O que inclui:
- Home minimalista "Escolha seu método de estudo"
- Páginas: Pomodoro, Active Recall, Feynman, SQ3R
- Amostras offline: public/bible_arc.json (PT), public/bible_kjv.json (EN)
- Estrutura pronta para deploy em Vercel

Como usar localmente:
1. Instale Node.js (LTS)
2. No terminal, rode:
   npm install
   npm run dev
3. Abra http://localhost:3000

Como publicar no GitHub + Vercel (resumido):
1. Faça upload do conteúdo desta pasta EXATAMENTE NA RAIZ do repositório do GitHub (package.json na raiz).
2. Importe o repositório no Vercel (New Project → Import Git Repository) e clique Deploy.

Como adicionar a Bíblia completa (opcional):
- Substitua os arquivos em public/bible_arc.json e public/bible_kjv.json por JSON completos (estrutura book->chapter->verse).
- Ou configure uma API colocando a URL em src/api.js e chamando a função fetchVerse.

Se quiser, eu posso gerar os arquivos completos da ARC e KJV; me diga e eu faço (pode ser grande).
