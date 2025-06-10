# 📋 Instruções para Deploy no GitHub Pages

## Pré-requisitos
- Repositório GitHub criado com nome "psicare-web"
- Angular CLI instalado globalmente
- Git configurado

## Passos para Deploy

### 1. Instalar dependência de deploy
```bash
npm install angular-cli-ghpages --save-dev
```

### 2. Build para produção
```bash
npm run build:prod
```
ou
```bash
ng build --configuration production --base-href /psicare-web/
```

### 3. Deploy para GitHub Pages
```bash
npm run deploy
```
ou
```bash
npx angular-cli-ghpages --dir=dist/demo
```

### 4. Configurar GitHub Pages
1. Vá para Settings do repositório
2. Na seção Pages, selecione:
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## URLs Esperadas
- **Repositório**: https://github.com/gs-guilherme/psicare-web
- **Site publicado**: https://gs-guilherme.github.io/psicare-web/

## Observações Importantes

### ⚠️ Limitações do GitHub Pages
- **Não suporta APIs backend** (JSON Server não funcionará)
- **Apenas conteúdo estático** (HTML, CSS, JS)
- **Sem Node.js server-side**

### ✅ Funcionalidades que funcionarão
- ✅ Navegação entre páginas
- ✅ Formulários reativos com validação
- ✅ Dados mockados (fallback dos services)
- ✅ Design responsivo
- ✅ Todas as telas e componentes

### ❌ Funcionalidades limitadas
- ❌ Persistência real de agendamentos
- ❌ API JSON Server (localhost:3000)
- ❌ Requisições HTTP para backend

## Solução Implementada
O projeto já possui **fallback com dados mockados** em todos os services, garantindo que:
- A aplicação funcione mesmo sem API
- Todos os dados sejam exibidos corretamente
- A experiência do usuário seja mantida

## Comandos Resumidos
```bash
# 1. Instalar dependência
npm install

# 2. Build de produção
npm run build:prod

# 3. Deploy
npm run deploy
```

## Verificação
Após o deploy, acesse: https://gs-guilherme.github.io/psicare-web/

O site deve carregar completamente com todas as funcionalidades visuais e de navegação funcionando perfeitamente.