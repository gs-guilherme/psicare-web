import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="form-container">
        <h2>Agendar Consulta</h2>
        <form (ngSubmit)="onSubmit()" #agendamentoForm="ngForm">
          <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input 
              type="text" 
              id="nome" 
              name="nome" 
              [(ngModel)]="formData.nome" 
              required
              #nome="ngModel"
              [class.error]="nome.invalid && nome.touched"
            >
            <span class="error-message" *ngIf="nome.invalid && nome.touched">
              Nome é obrigatório
            </span>
          </div>
          
          <div class="form-group">
            <label for="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              [(ngModel)]="formData.email" 
              required
              email
              #email="ngModel"
              [class.error]="email.invalid && email.touched"
            >
            <span class="error-message" *ngIf="email.invalid && email.touched">
              E-mail inválido
            </span>
          </div>
          
          <div class="form-group">
            <label for="plano">Plano de Saúde</label>
            <input 
              type="text" 
              id="plano" 
              name="plano" 
              [(ngModel)]="formData.plano"
            >
          </div>
          
          <div class="form-group">
            <label for="historico">Histórico Médico</label>
            <textarea 
              id="historico" 
              name="historico" 
              [(ngModel)]="formData.historico" 
              rows="4"
            ></textarea>
          </div>
          
          <div class="form-group">
            <label for="data">Data Preferencial</label>
            <input 
              type="date" 
              id="data" 
              name="data" 
              [(ngModel)]="formData.data" 
              required
              #data="ngModel"
              [class.error]="data.invalid && data.touched"
            >
            <span class="error-message" *ngIf="data.invalid && data.touched">
              Data é obrigatória
            </span>
          </div>

          <div class="form-group">
            <label for="horario">Horário Preferencial</label>
            <select 
              id="horario" 
              name="horario" 
              [(ngModel)]="formData.horario"
              required
              #horario="ngModel"
              [class.error]="horario.invalid && horario.touched"
            >
              <option value="">Selecione um horário</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
            <span class="error-message" *ngIf="horario.invalid && horario.touched">
              Horário é obrigatório
            </span>
          </div>
          
          <div class="form-group checkbox">
            <input 
              type="checkbox" 
              id="consentimento" 
              name="consentimento" 
              [(ngModel)]="formData.consentimento" 
              required
              #consentimento="ngModel"
            >
            <label for="consentimento">
              Concordo com os termos de uso e política de privacidade
            </label>
            <span class="error-message" *ngIf="consentimento.invalid && consentimento.touched">
              É necessário aceitar os termos
            </span>
          </div>
          
          <button type="submit" [disabled]="!agendamentoForm.form.valid">
            Agendar Consulta
          </button>
        </form>
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
    .form-container {
      background: white;
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 600px;
    }
    h2 {
      color: #6b4595;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 500;
    }
    input, textarea, select {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }
    input:focus, textarea:focus, select:focus {
      outline: none;
      border-color: #6b4595;
    }
    .error {
      border-color: #ff4444;
    }
    .error-message {
      color: #ff4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      display: block;
    }
    .checkbox {
      display: flex;
      gap: 0.5rem;
      align-items: flex-start;
    }
    .checkbox input {
      width: auto;
      margin-top: 0.3rem;
    }
    .checkbox label {
      margin: 0;
      font-size: 0.9rem;
      color: #666;
    }
    button {
      width: 100%;
      padding: 1rem;
      background-color: #4ECDC4;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    button:hover:not(:disabled) {
      background-color: #45b8b0;
    }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  `]
})
export class AgendamentoComponent {
  formData = {
    nome: '',
    email: '',
    plano: '',
    historico: '',
    data: '',
    horario: '',
    consentimento: false
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.formData.consentimento) {
      console.log('Dados do agendamento:', this.formData);
      this.router.navigate(['/confirmacao']);
    }
  }
}