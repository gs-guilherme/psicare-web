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
        const novoAgendamento = { 
          ...agendamento, 
          id: Date.now(),
          dataAgendamento: new Date().toISOString(),
          status: 'pendente' as const
        };
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

  getAgendamentoById(id: number): Observable<Agendamento> {
    return this.http.get<Agendamento>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.warn('API não disponível, usando dados mockados:', error.message);
        const agendamento = this.mockAgendamentos.find(a => a.id === id);
        if (agendamento) {
          return of(agendamento);
        }
        throw new Error('Agendamento não encontrado');
      })
    );
  }

  atualizarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.put<Agendamento>(`${this.apiUrl}/${agendamento.id}`, agendamento).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando atualização:', error.message);
        // Simula a atualização localmente
        const index = this.mockAgendamentos.findIndex(a => a.id === agendamento.id);
        if (index !== -1) {
          this.mockAgendamentos[index] = agendamento;
        }
        return of(agendamento);
      })
    );
  }

  removerAgendamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando remoção:', error.message);
        // Simula a remoção localmente
        const index = this.mockAgendamentos.findIndex(a => a.id === id);
        if (index !== -1) {
          this.mockAgendamentos.splice(index, 1);
        }
        return of(void 0);
      })
    );
  }
}