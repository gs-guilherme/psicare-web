import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="form-container">
        <h2>Agendar Consulta</h2>
        <form [formGroup]="agendamentoForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input 
              type="text" 
              id="nome" 
              formControlName="nome"
              [class.error]="isFieldInvalid('nome')"
            >
            <div class="error-messages" *ngIf="isFieldInvalid('nome')">
              <span *ngIf="agendamentoForm.get('nome')?.errors?.['required']">
                Campo obrigatório
              </span>
              <span *ngIf="agendamentoForm.get('nome')?.errors?.['minlength']">
                Nome deve ter pelo menos 3 caracteres
              </span>
            </div>
          </div>
          
          <div class="form-group">
            <label for="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email"
              [class.error]="isFieldInvalid('email')"
            >
            <div class="error-messages" *ngIf="isFieldInvalid('email')">
              <span *ngIf="agendamentoForm.get('email')?.errors?.['required']">
                Campo obrigatório
              </span>
              <span *ngIf="agendamentoForm.get('email')?.errors?.['email']">
                E-mail inválido
              </span>
            </div>
          </div>
          
          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input 
              type="tel" 
              id="telefone" 
              formControlName="telefone"
              placeholder="(31) 99999-9999"
              [class.error]="isFieldInvalid('telefone')"
              (input)="onTelefoneInput($event)"
              maxlength="15"
            >
            <div class="error-messages" *ngIf="isFieldInvalid('telefone')">
              <span *ngIf="agendamentoForm.get('telefone')?.errors?.['required']">
                Campo obrigatório
              </span>
              <span *ngIf="agendamentoForm.get('telefone')?.errors?.['pattern']">
                Formato de telefone inválido. Use: (31) 99999-9999
              </span>
            </div>
          </div>
          
          <div class="form-group">
            <label for="plano">Plano de Saúde</label>
            <input 
              type="text" 
              id="plano" 
              formControlName="plano"
              placeholder="Opcional"
            >
          </div>
          
          <div class="form-group">
            <label for="historico">Histórico Médico</label>
            <textarea 
              id="historico" 
              formControlName="historico"
              rows="4"
              placeholder="Descreva brevemente seu histórico médico (opcional)"
            ></textarea>
          </div>
          
          <div class="form-group">
            <label for="data">Data Preferencial</label>
            <input 
              type="date" 
              id="data" 
              formControlName="data"
              [min]="minDate"
              [class.error]="isFieldInvalid('data')"
            >
            <div class="error-messages" *ngIf="isFieldInvalid('data')">
              <span *ngIf="agendamentoForm.get('data')?.errors?.['required']">
                Campo obrigatório
              </span>
            </div>
          </div>

          <div class="form-group">
            <label for="horario">Horário Preferencial</label>
            <select 
              id="horario" 
              formControlName="horario"
              [class.error]="isFieldInvalid('horario')"
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
            <div class="error-messages" *ngIf="isFieldInvalid('horario')">
              <span *ngIf="agendamentoForm.get('horario')?.errors?.['required']">
                Campo obrigatório
              </span>
            </div>
          </div>
          
          <div class="form-group checkbox">
            <input 
              type="checkbox" 
              id="consentimento" 
              formControlName="consentimento"
            >
            <label for="consentimento">
              Concordo com os termos de uso e política de privacidade
            </label>
            <div class="error-messages" *ngIf="isFieldInvalid('consentimento')">
              <span *ngIf="agendamentoForm.get('consentimento')?.errors?.['required']">
                É necessário aceitar os termos para prosseguir
              </span>
            </div>
          </div>
          
          <div class="form-validation-summary" *ngIf="agendamentoForm.invalid && agendamentoForm.touched">
            <p class="error-summary">
              ⚠️ Preencha corretamente todos os campos obrigatórios antes de enviar
            </p>
          </div>
          
          <button 
            type="submit" 
            [disabled]="agendamentoForm.invalid || isSubmitting"
            [class.loading]="isSubmitting"
          >
            <span *ngIf="!isSubmitting">Agendar Consulta</span>
            <span *ngIf="isSubmitting">Agendando...</span>
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
    .error-messages {
      color: #ff4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      padding: 0.5rem;
      border-radius: 4px;
      background-color: rgba(255, 68, 68, 0.1);
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
    .form-validation-summary {
      margin-bottom: 1rem;
      padding: 1rem;
      background-color: rgba(255, 68, 68, 0.1);
      border-radius: 8px;
      border-left: 4px solid #ff4444;
    }
    .error-summary {
      color: #ff4444;
      font-weight: 500;
      margin: 0;
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
    button.loading {
      background-color: #999;
    }
    @media (max-width: 768px) {
      .container {
        padding: 2rem 1rem;
      }
      .form-container {
        padding: 1.5rem;
      }
    }
  `]
})
export class AgendamentoComponent implements OnInit {
  agendamentoForm!: FormGroup;
  isSubmitting = false;
  minDate: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private agendamentoService: AgendamentoService
  ) {
    // Set minimum date to today
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.agendamentoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]],
      plano: [''],
      historico: [''],
      data: ['', Validators.required],
      horario: ['', Validators.required],
      consentimento: [false, Validators.requiredTrue]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.agendamentoForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onTelefoneInput(event: any) {
    let value = event.target.value;
    
    // Remove todos os caracteres não numéricos
    value = value.replace(/\D/g, '');
    
    // Aplica a máscara baseada no comprimento
    if (value.length <= 2) {
      value = value.replace(/(\d{0,2})/, '($1');
    } else if (value.length <= 6) {
      value = value.replace(/(\d{2})(\d{0,4})/, '($1) $2');
    } else if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    
    // Atualiza o valor do campo
    event.target.value = value;
    
    // Atualiza o FormControl
    this.agendamentoForm.get('telefone')?.setValue(value);
  }

  onSubmit() {
    if (this.agendamentoForm.valid) {
      this.isSubmitting = true;
      
      const agendamentoData = this.agendamentoForm.value;
      
      this.agendamentoService.criarAgendamento(agendamentoData).subscribe({
        next: (response) => {
          console.log('Agendamento criado com sucesso:', response);
          this.router.navigate(['/confirmacao']);
        },
        error: (error) => {
          console.error('Erro ao criar agendamento:', error);
          this.isSubmitting = false;
          // In a real app, show error message to user
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.agendamentoForm.controls).forEach(key => {
        this.agendamentoForm.get(key)?.markAsTouched();
      });
    }
  }
}