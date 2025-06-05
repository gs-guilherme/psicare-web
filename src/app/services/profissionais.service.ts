import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Profissional } from '../models/profissional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {
  private apiUrl = 'http://localhost:3000/profissionais';

  constructor(private http: HttpClient) {}

  getProfissionais(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(this.apiUrl).pipe(
      catchError(error => throwError(() => new Error('Erro ao carregar profissionais')))
    );
  }

  getProfissionalById(id: number): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError(() => new Error('Profissional não encontrado')))
    );
  }

  adicionarProfissional(profissional: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.apiUrl, profissional).pipe(
      catchError(error => throwError(() => new Error('Erro ao adicionar profissional')))
    );
  }

  atualizarProfissional(profissional: Profissional): Observable<Profissional> {
    return this.http.put<Profissional>(`${this.apiUrl}/${profissional.id}`, profissional).pipe(
      catchError(error => throwError(() => new Error('Erro ao atualizar profissional')))
    );
  }

  removerProfissional(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError(() => new Error('Erro ao remover profissional')))
    );
  }
}