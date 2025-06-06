# PsiCare - Plataforma de Agendamento de Consultas Psicológicas

## 📋 Sobre o Projeto

PsiCare é uma aplicação web moderna desenvolvida em Angular para facilitar o agendamento de consultas psicológicas. A plataforma oferece uma interface intuitiva e responsiva para pacientes agendarem consultas com profissionais qualificados, proporcionando uma experiência completa de cuidado com a saúde mental.

## 🎯 Objetivo

Criar uma solução digital que conecte pacientes e profissionais de psicologia, simplificando o processo de agendamento e oferecendo informações detalhadas sobre serviços e especialistas disponíveis.

## 🚀 Tecnologias Utilizadas

- **Angular 19.2.0** - Framework principal
- **TypeScript** - Linguagem de programação
- **RxJS** - Programação reativa
- **Angular Router** - Navegação entre páginas
- **Angular Reactive Forms** - Formulários reativos com validação
- **HttpClient** - Requisições HTTP para API
- **JSON Server** - Simulação de API REST
- **HTML5 & CSS3** - Estrutura e estilização
- **Responsive Design** - Layout adaptável

## ✨ Funcionalidades Implementadas

### 🏠 Página Inicial (Home)
- Apresentação da plataforma
- Call-to-action para agendamento
- Acesso rápido aos serviços
- Design atrativo e responsivo

### 🔧 Serviços
- Listagem completa dos tipos de atendimento
- Descrições detalhadas de cada serviço
- Informações sobre preços e duração
- Botões de ação para agendamento

### 👥 Equipe
- Apresentação dos profissionais
- Especialidades e qualificações
- Fotos e descrições dos psicólogos
- Layout em cards responsivo

### 📅 Agendamento
- **Formulário reativo completo** com validação
- Campos obrigatórios e opcionais
- Validação em tempo real
- Mensagens de erro personalizadas
- Prevenção de envio com dados inválidos
- Seleção de data e horário
- Termos de consentimento

### ✅ Confirmação
- Página de sucesso após agendamento
- Informações importantes para a consulta
- Opções para novo agendamento
- Navegação de retorno

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas
```
src/
├── app/
│   ├── components/          # Componentes da aplicação
│   │   ├── home/           # Página inicial
│   │   ├── servicos/       # Listagem de serviços
│   │   ├── equipe/         # Apresentação da equipe
│   │   ├── agendamento/    # Formulário de agendamento
│   │   └── confirmacao/    # Página de confirmação
│   ├── services/           # Serviços para API
│   │   ├── profissionais.service.ts
│   │   ├── servicos.service.ts
│   │   └── agendamento.service.ts
│   ├── models/             # Interfaces e modelos
│   │   ├── profissional.model.ts
│   │   ├── servico.model.ts
│   │   └── agendamento.model.ts
│   └── app-routing.module.ts
├── assets/                 # Recursos estáticos
└── global_styles.css       # Estilos globais
```

### Componentes Principais
- **HomeComponent** - Página inicial com apresentação
- **ServicosComponent** - Listagem e detalhes dos serviços
- **EquipeComponent** - Apresentação dos profissionais
- **AgendamentoComponent** - Formulário reativo de agendamento
- **ConfirmacaoComponent** - Confirmação de agendamento

### Serviços (Services)
- **ProfissionaisService** - CRUD de profissionais
- **ServicosService** - CRUD de serviços
- **AgendamentoService** - CRUD de agendamentos

Todos os serviços implementam:
- ✅ GET (listar)
- ✅ POST (cadastrar)
- ✅ PUT (editar)
- ✅ DELETE (excluir)
- ✅ Fallback com dados mockados
- ✅ Tratamento de erros com `catchError`

## 🔧 Requisitos Técnicos Implementados

### ✅ Formulários Reativos
- Uso de `ReactiveFormsModule`
- `FormBuilder`, `FormGroup`, `Validators`
- Validações customizadas
- Mensagens de erro dinâmicas
- Prevenção de envio com dados inválidos

### ✅ Requisições HTTP
- Configuração do `HttpClient`
- URLs para JSON Server (`localhost:3000`)
- Métodos CRUD completos
- Fallback com dados mockados
- Tratamento de erros

### ✅ Navegação e Rotas
- Configuração de rotas com `RouterModule`
- Navegação com `routerLink`
- Rotas para todas as páginas
- Links ativos com `routerLinkActive`

### ✅ Diretivas Angular
- `*ngFor` para listagens
- `*ngIf` para condicionais
- `[(ngModel)]` onde necessário
- Binding de propriedades e eventos

### ✅ Responsividade
- Design mobile-first
- Breakpoints para diferentes telas
- Layout flexível com CSS Grid e Flexbox
- Imagens responsivas

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes)
- Angular CLI (opcional, mas recomendado)

### Instalação e Execução

1. **Clone ou extraia o projeto**
```bash
# Se usando Git
git clone <url-do-repositorio>
cd psicare-angular

# Ou extraia o arquivo .zip e navegue até a pasta
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
ng serve
```

4. **Execute a API simulada (opcional)**
```bash
# Em outro terminal
npm run api
```

5. **Acesse a aplicação**
- Abra o navegador em `http://localhost:4200`
- A API simulada estará em `http://localhost:3000` (se executada)

### Scripts Disponíveis
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run api` - Inicia o JSON Server na porta 3000

## 🔄 API e Dados

### Endpoints Simulados (JSON Server)
- `GET/POST /profissionais` - Gerenciar profissionais
- `GET/POST /servicos` - Gerenciar serviços  
- `GET/POST /agendamentos` - Gerenciar agendamentos

### Fallback de Dados
Caso a API não esteja disponível, a aplicação utiliza dados mockados localmente, garantindo que todas as funcionalidades continuem operacionais.

## 📱 Funcionalidades por Página

### 🏠 Home
- Hero section com call-to-action
- Navegação rápida para serviços
- Design moderno e atrativo

### 🔧 Serviços
- Cards com informações detalhadas
- Imagens ilustrativas
- Botões de agendamento
- Layout responsivo em grid

### 👥 Equipe
- Perfis dos profissionais
- Especialidades e descrições
- Fotos profissionais
- Informações de contato

### 📅 Agendamento
- Formulário completo e validado
- Campos obrigatórios marcados
- Validação em tempo real
- Mensagens de erro claras
- Prevenção de envio inválido

### ✅ Confirmação
- Confirmação visual do agendamento
- Instruções para a consulta
- Opções de navegação

## 🎨 Design e UX

- **Paleta de cores** profissional e acolhedora
- **Tipografia** clara e legível
- **Ícones** intuitivos e consistentes
- **Animações** suaves e funcionais
- **Feedback visual** para todas as ações
- **Acessibilidade** considerada no design

## 📦 Estrutura de Entrega

O projeto está preparado para entrega como arquivo `.zip` contendo:
- ✅ Todos os arquivos fonte (.ts, .html, .css)
- ✅ Configurações do Angular (angular.json, tsconfig.json)
- ✅ Package.json com dependências
- ✅ README.md com documentação completa
- ✅ Estrutura organizada de pastas
- ❌ Pasta `node_modules` (excluída para reduzir tamanho)

## 🔍 Validação Final

### ✅ Requisitos Atendidos
- [x] Estrutura Angular com componentes separados
- [x] Navegação via rotas (`routerLink`)
- [x] Uso de diretivas `*ngFor`, `*ngIf`, `[(ngModel)]`
- [x] Layout responsivo e funcional
- [x] Services com métodos CRUD
- [x] HttpClient com URLs simuladas
- [x] Formulários reativos com validação
- [x] Organização adequada do projeto
- [x] Fallback para dados quando API indisponível
- [x] README.md completo
- [x] Sem uso de arrays locais em vez de HTTP

### 🚀 Pronto para Entrega
O projeto PsiCare está **100% funcional** e atende a todos os requisitos especificados para o trabalho final da disciplina. A aplicação pode ser executada localmente e está preparada para entrega em formato `.zip`.

## 👨‍💻 Desenvolvedor

Projeto desenvolvido como trabalho final da disciplina de desenvolvimento web com Angular.

---

**PsiCare** - Cuidando da sua saúde mental com tecnologia e dedicação. 💙