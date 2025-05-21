import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <div class="content">
        <h1>Desperte sua força interior com apoio psicológico</h1>
        <p>Descubra equilíbrio emocional com quem entende sua história.</p>
        <div class="buttons">
          <button routerLink="/agendamento" class="primary">Agendar Sessão</button>
          <button routerLink="/servicos" class="secondary">Conheça nossos tipos</button>
        </div>
      </div>
      <div class="image">
        <img src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg" alt="Terapia e bem-estar">
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      padding: 4rem;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
      min-height: calc(100vh - 64px);
      align-items: center;
      background: linear-gradient(135deg, #f0e6ff 0%, #ffffff 100%);
    }
    .content {
      flex: 1;
    }
    h1 {
      font-size: 3.5rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      font-weight: bold;
      color: #6b4595;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      line-height: 1.6;
      color: #666;
    }
    .buttons {
      display: flex;
      gap: 1rem;
    }
    button {
      padding: 1rem 2rem;
      border-radius: 50px;
      font-size: 1.1rem;
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
    .image {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    .image img {
      max-width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(107, 69, 149, 0.2);
    }
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        padding: 2rem;
        text-align: center;
      }
      .buttons {
        justify-content: center;
      }
      h1 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class HomeComponent {
}