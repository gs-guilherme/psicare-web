import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Agendamento } from '../models/agendamento.model';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  // TODO: Alterar para URL da API remota quando disponível
  // Exemplo: private apiUrl = 'https://sua-api-remota.com/agendamentos';
  private apiUrl = 'http://localhost:3000/agendamentos';

  // Dados mockados como fallback
  private mockAgendamentos: Agendamento[] = [];

  constructor(private http: HttpClient) {}

  criarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando criação de agendamento:', error.message);
        // Simula a criação localmente
        const novoAgendamento = { ...agendamento, id: Date.now() };
        this.mockAgendamentos.push(novoAgendamento);
        return of(novoAgendamento);
      })
    );
  }

  getAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl).pipe(
      catchError(error => {
        console.warn('API não disponível, usando dados mockados:', error.message);
        return of(this.mockAgendamentos);
      })
    );
  }
}