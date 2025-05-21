import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfissionaisService, Profissional } from '../../services/profissionais.service';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Nossa Equipe</h2>
        <p>Conheça os profissionais dedicados ao seu bem-estar</p>
      </div>
      <div class="cards">
        <div class="card" *ngFor="let profissional of profissionais">
          <img [src]="profissional.imagem" [alt]="profissional.nome">
          <h3>{{ profissional.nome }}</h3>
          <h4>{{ profissional.especialidade }}</h4>
          <p>{{ profissional.descricao }}</p>
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
    }
    .header h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .header p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    h3 {
      color: #6b4595;
      font-size: 1.5rem;
      margin: 1.5rem 1.5rem 0.5rem;
    }
    h4 {
      color: #4ECDC4;
      font-size: 1.1rem;
      margin: 0 1.5rem 1rem;
    }
    p {
      color: #666;
      margin: 0 1.5rem 1.5rem;
      line-height: 1.6;
    }
  `]
})
export class EquipeComponent implements OnInit {
  profissionais: Profissional[] = [];

  constructor(private profissionaisService: ProfissionaisService) {}

  ngOnInit() {
    this.profissionaisService.getProfissionais().subscribe(
      profissionais => this.profissionais = profissionais
    );
  }
}