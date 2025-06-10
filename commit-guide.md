# 🚀 Guia de Commits para PsiCare Web

## Commits Sugeridos

Aqui estão os commits que você pode fazer localmente para organizar o histórico do projeto:

### 1. Commit Inicial
```bash
git add .
git commit -m "🎉 Initial commit: PsiCare Angular application

- Complete Angular 19 application structure
- 5 functional pages (Home, Services, Team, Booking, Confirmation)
- Reactive forms with validation
- Responsive design
- Angular Router navigation
- HttpClient services with CRUD operations
- TypeScript models
- Fallback with mocked data"
```

### 2. Commit de Validação HTTP
```bash
git add src/app/services/
git commit -m "✅ Implement HTTP validation and CRUD services

- Configure HttpClient in all services
- Add complete CRUD methods (GET, POST, PUT, DELETE)
- Implement fallback with catchError for offline mode
- Configure JSON Server URLs (localhost:3000)
- Ensure data loading from API instead of local arrays"
```

### 3. Commit de Melhorias Visuais
```bash
git add src/index.html src/app/services/profissionais.service.ts
git commit -m "🎨 Visual improvements and professional images

- Add custom favicon with Psi symbol (Ψ)
- Update team images with professional photos
- Improve visual consistency across the application
- Maintain responsive layout"
```

### 4. Commit de Máscara de Telefone
```bash
git add src/app/components/agendamento/
git commit -m "📱 Implement phone mask in booking form

- Add automatic Brazilian phone formatting: (31) 99999-9999
- Real-time input validation
- Automatic parentheses and hyphen insertion
- Limit input to correct number of digits
- Maintain form validation logic"
```

### 5. Commit de Configuração de Deploy
```bash
git add package.json angular.json deploy-instructions.md CHANGELOG.md commit-guide.md
git commit -m "🚀 Configure GitHub Pages deployment

- Add angular-cli-ghpages dependency
- Configure baseHref for GitHub Pages
- Add automated build and deploy scripts
- Create detailed deployment instructions
- Add changelog and commit guide
- Ready for production deployment"
```

## Comandos Completos

Execute estes comandos em sequência no seu terminal local:

```bash
# Inicializar repositório (se ainda não foi feito)
git init
git remote add origin https://github.com/gs-guilherme/psicare-web.git

# Fazer todos os commits
git add .
git commit -m "🎉 Initial commit: PsiCare Angular application"

git add .
git commit -m "✅ Implement HTTP validation and CRUD services"

git add .
git commit -m "🎨 Visual improvements and professional images"

git add .
git commit -m "📱 Implement phone mask in booking form"

git add .
git commit -m "🚀 Configure GitHub Pages deployment"

# Enviar para GitHub
git branch -M main
git push -u origin main

# Deploy para GitHub Pages
npm run deploy
```

## Verificação Final

Após todos os commits e deploy:
1. ✅ Repositório: https://github.com/gs-guilherme/psicare-web
2. ✅ Site publicado: https://gs-guilherme.github.io/psicare-web/
3. ✅ Histórico de commits organizado
4. ✅ Projeto pronto para entrega