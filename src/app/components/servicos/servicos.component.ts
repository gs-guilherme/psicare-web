import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicosService } from '../../services/servicos.service';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="header">
        <h2>Nossos Serviços</h2>
        <p>Conheça nossa variedade de serviços psicológicos especializados</p>
      </div>
      <div class="cards">
        <div class="card" *ngFor="let servico of servicos">
          <div class="card-image">
            <img [src]="servico.imagem" [alt]="servico.nome">
          </div>
          <div class="card-content">
            <h3>{{ servico.nome }}</h3>
            <p>{{ servico.descricao }}</p>
            <div class="card-actions">
              <button routerLink="/agendamento" class="primary-button">
                Agendar consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #6b4595 0%, #8b5fbf 100%);
      min-height: calc(100vh - 64px);
    }
    .header {
      text-align: center;
      color: white;
      margin-bottom: 3rem;
      animation: fadeIn 0.5s ease-out;
    }
    .header h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    .header p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      animation: fadeIn 0.5s ease-out;
    }
    .card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .card:hover .card-image img {
      transform: scale(1.1);
    }
    .card-content {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    h3 {
      color: #6b4595;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex: 1;
    }
    .card-actions {
      display: flex;
      gap: 1rem;
      margin-top: auto;
    }
    .primary-button {
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      flex: 1;
      text-align: center;
      background-color: #4ECDC4;
      color: white;
      border: none;
    }
    .primary-button:hover {
      background-color: #45b8b0;
    }
    @media (max-width: 768px) {
      .container {
        padding: 2rem 1rem;
      }
      .header h2 {
        font-size: 2rem;
      }
      .card-actions {
        flex-direction: column;
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ServicosComponent implements OnInit {
  servicos: Servico[] = [];

  constructor(private servicosService: ServicosService) {}

  ngOnInit() {
    this.servicosService.getServicos().subscribe(
      servicos => this.servicos = servicos
    );
  }
}