import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Profissional } from '../models/profissional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {
  // TODO: Alterar para URL da API remota quando disponível
  // Exemplo: private apiUrl = 'https://sua-api-remota.com/profissionais';
  private apiUrl = 'http://localhost:3000/profissionais';

  // Dados mockados como fallback
  private mockProfissionais: Profissional[] = [
    {
      id: 1,
      nome: "Dra. Ana Martins",
      especialidade: "Psicóloga clínica",
      descricao: "Especialista em terapia cognitivo-comportamental",
      imagem: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
    },
    {
      id: 2,
      nome: "Dra. Beatriz Lima",
      especialidade: "Psicóloga infantil",
      descricao: "Especializada em desenvolvimento infantil e adolescente",
      imagem: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg"
    },
    {
      id: 3,
      nome: "Dr. Rafael Souza",
      especialidade: "Neuropsicólogo",
      descricao: "Especialista em avaliação neuropsicológica",
      imagem: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg"
    },
    {
      id: 4,
      nome: "Dr. Lucas Andrade",
      especialidade: "Psicopedagogo",
      descricao: "Especialista em dificuldades de aprendizagem",
      imagem: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg"
    }
  ];

  constructor(private http: HttpClient) {}

  getProfissionais(): Observable<Profissional[]> {
    // Tenta acessar a API, mas usa dados mockados como fallback
    return this.http.get<Profissional[]>(this.apiUrl).pipe(
      catchError(error => {
        console.warn('API não disponível, usando dados mockados:', error.message);
        return of(this.mockProfissionais);
      })
    );
  }

  getProfissionalById(id: number): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.warn('API não disponível, usando dados mockados:', error.message);
        const profissional = this.mockProfissionais.find(p => p.id === id);
        if (profissional) {
          return of(profissional);
        }
        throw new Error('Profissional não encontrado');
      })
    );
  }

  adicionarProfissional(profissional: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.apiUrl, profissional).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando adição:', error.message);
        // Simula a adição localmente
        const novoProfissional = { ...profissional, id: Date.now() };
        this.mockProfissionais.push(novoProfissional);
        return of(novoProfissional);
      })
    );
  }

  atualizarProfissional(profissional: Profissional): Observable<Profissional> {
    return this.http.put<Profissional>(`${this.apiUrl}/${profissional.id}`, profissional).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando atualização:', error.message);
        // Simula a atualização localmente
        const index = this.mockProfissionais.findIndex(p => p.id === profissional.id);
        if (index !== -1) {
          this.mockProfissionais[index] = profissional;
        }
        return of(profissional);
      })
    );
  }

  removerProfissional(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando remoção:', error.message);
        // Simula a remoção localmente
        const index = this.mockProfissionais.findIndex(p => p.id === id);
        if (index !== -1) {
          this.mockProfissionais.splice(index, 1);
        }
        return of(void 0);
      })
    );
  }
}