import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  private apiUrl = 'http://localhost:3000/servicos';

  constructor(private http: HttpClient) {}

  getServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl).pipe(
      catchError(error => throwError(() => new Error('Erro ao carregar serviços')))
    );
  }

  getServico(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError(() => new Error('Serviço não encontrado')))
    );
  }

  adicionarServico(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico).pipe(
      catchError(error => throwError(() => new Error('Erro ao adicionar serviço')))
    );
  }

  atualizarServico(servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/${servico.id}`, servico).pipe(
      catchError(error => throwError(() => new Error('Erro ao atualizar serviço')))
    );
  }

  removerServico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError(() => new Error('Erro ao remover serviço')))
    );
  }
}