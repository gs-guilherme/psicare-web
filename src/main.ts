import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, RouterLink, RouterLinkActive, provideRouter } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';
import { routes } from './app/app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <div class="nav-content">
        <a routerLink="/" class="logo">
          <span class="logo-text">PsiCare</span>
        </a>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Início</a>
          <a routerLink="/servicos" routerLinkActive="active">Serviços</a>
          <a routerLink="/agendamento" routerLinkActive="active">Agendamento</a>
          <a routerLink="/equipe" routerLinkActive="active">Equipe</a>
        </div>
        <button class="cta-button" routerLink="/agendamento">
          <span class="cta-icon">📅</span>
          Agende sua Consulta
        </button>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>PsiCare</h3>
          <p>Cuidando da sua saúde mental com excelência e dedicação.</p>
        </div>
        <div class="footer-section">
          <h4>Contato</h4>
          <p>📧 contato&#64;psicare.com</p>
          <p>📞 (31) 99999-9999</p>
        </div>
        <div class="footer-section">
          <h4>Horário de Atendimento</h4>
          <p>Segunda a Sexta: 8h às 20h</p>
          <p>Sábado: 8h às 12h</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{currentYear}} PsiCare. Todos os direitos reservados.</p>
      </div>
    </footer>
  `,
  styles: [`
    nav {
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 2rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }
    .nav-content {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }
    .logo-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: #6b4595;
      font-family: 'Inter', sans-serif;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      font-family: 'Inter', sans-serif;
    }
    .nav-links a:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #4ECDC4;
      transition: width 0.3s ease;
    }
    .nav-links a:hover:after,
    .nav-links a.active:after {
      width: 100%;
    }
    .nav-links a:hover {
      color: #6b4595;
    }
    .nav-links a.active {
      color: #6b4595;
    }
    .cta-button {
      background-color: #4ECDC4;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'Inter', sans-serif;
    }
    .cta-button:hover {
      background-color: #45b8b0;
      transform: translateY(-2px);
    }
    .cta-icon {
      font-size: 1.2rem;
    }
    main {
      padding-top: 64px;
      min-height: calc(100vh - 300px);
    }
    footer {
      background-color: #6b4595;
      color: white;
      padding: 3rem 2rem 1rem;
    }
    .footer-content {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .footer-section h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #4ECDC4;
    }
    .footer-section h4 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #4ECDC4;
    }
    .footer-section p {
      margin-bottom: 0.5rem;
      opacity: 0.9;
    }
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    @media (max-width: 768px) {
      .nav-content {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }
      .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
  `]
})
export class App {
  currentYear = new Date().getFullYear();
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});