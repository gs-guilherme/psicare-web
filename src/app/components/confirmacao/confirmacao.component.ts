import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmacao',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <div class="confirmation-card">
        <img src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg" alt="PsiCare Logo" class="logo">
        <div class="check-circle">✓</div>
        <h2>Agendamento Confirmado!</h2>
        <p>Sua solicitação de agendamento foi enviada com sucesso!</p>
        <p class="sub-text">Em breve entraremos em contato para confirmar sua consulta.</p>
        <div class="info-box">
          <p>Informações importantes:</p>
          <ul>
            <li>Chegue 15 minutos antes do horário marcado</li>
            <li>Traga documentos pessoais e carteira do plano de saúde</li>
            <li>Em caso de impedimento, cancele com 24h de antecedência</li>
          </ul>
        </div>
        <div class="buttons">
          <button routerLink="/" class="primary">Voltar para Início</button>
          <button routerLink="/agendamento" class="secondary">Novo Agendamento</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #6b4595 0%, #8b5fbf 100%);
      min-height: calc(100vh - 64px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .confirmation-card {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      text-align: center;
      max-width: 500px;
      width: 100%;
    }
    .logo {
      width: 80px;
      height: 80px;
      margin-bottom: 2rem;
    }
    .check-circle {
      width: 80px;
      height: 80px;
      background: #4ECDC4;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 2rem;
      color: white;
      font-size: 2.5rem;
    }
    h2 {
      color: #6b4595;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    .sub-text {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 2rem;
    }
    .info-box {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 10px;
      margin-bottom: 2rem;
      text-align: left;
    }
    .info-box p {
      color: #6b4595;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .info-box ul {
      list-style-type: none;
      padding: 0;
    }
    .info-box li {
      color: #666;
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }
    .info-box li:before {
      content: "•";
      color: #4ECDC4;
      position: absolute;
      left: 0;
    }
    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    button {
      padding: 1rem 2rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .primary {
      background-color: #4ECDC4;
      color: white;
      border: none;
    }
    .secondary {
      background-color: transparent;
      color: #6b4595;
      border: 2px solid #6b4595;
    }
    button:hover {
      transform: translateY(-2px);
    }
    .primary:hover {
      background-color: #45b8b0;
    }
    .secondary:hover {
      background-color: #f8f9fa;
    }
  `]
})
export class ConfirmacaoComponent {}