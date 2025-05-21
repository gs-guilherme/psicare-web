import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Sobre Nós</h1>
      <p class="text-gray-600 leading-relaxed">
        Bem-vindo à PsiCare, sua parceira em saúde mental. Nossa missão é proporcionar 
        atendimento psicológico de qualidade, acessível e humanizado.
      </p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      margin-top: 2rem;
    }
  `]
})
export class SobreComponent {}