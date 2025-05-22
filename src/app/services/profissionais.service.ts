import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
  descricao: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {
  private profissionais: Profissional[] = [
    {
      id: 1,
      nome: 'Dra. Ana Martins',
      especialidade: 'Psicóloga clínica',
      descricao: 'Especialista em terapia cognitivo-comportamental',
      imagem: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg'
    },
    {
      id: 2,
      nome: 'Dra. Beatriz Lima',
      especialidade: 'Psicóloga infantil',
      descricao: 'Especializada em desenvolvimento infantil e adolescente',
      imagem: 'https://images.pexels.com/photos/5998034/pexels-photo-5998034.jpeg'
    },
    {
      id: 3,
      nome: 'Dr. Rafael Souza',
      especialidade: 'Neuropsicólogo',
      descricao: 'Especialista em avaliação neuropsicológica',
      imagem: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg'
    },
    {
      id: 4,
      nome: 'Dr. Lucas Andrade',
      especialidade: 'Psicopedagogo',
      descricao: 'Especialista em dificuldades de aprendizagem',
      imagem: 'https://images.pexels.com/photos/5490263/pexels-photo-5490263.jpeg'
    }
  ];

  getProfissionais(): Observable<Profissional[]> {
    try {
      return of(this.profissionais).pipe(
        catchError(error => throwError(() => new Error('Erro ao carregar profissionais')))
      );
    } catch (error) {
      return throwError(() => new Error('Erro ao processar requisição'));
    }
  }

  getProfissionalById(id: number): Observable<Profissional | undefined> {
    try {
      const profissional = this.profissionais.find(p => p.id === id);
      if (!profissional) {
        return throwError(() => new Error('Profissional não encontrado'));
      }
      return of(profissional);
    } catch (error) {
      return throwError(() => new Error('Erro ao buscar profissional'));
    }
  }

  adicionarProfissional(profissional: Profissional): Observable<Profissional> {
    try {
      const newId = Math.max(...this.profissionais.map(p => p.id)) + 1;
      const novoProfissional = { ...profissional, id: newId };
      this.profissionais.push(novoProfissional);
      return of(novoProfissional);
    } catch (error) {
      return throwError(() => new Error('Erro ao adicionar profissional'));
    }
  }

  atualizarProfissional(profissional: Profissional): Observable<Profissional> {
    try {
      const index = this.profissionais.findIndex(p => p.id === profissional.id);
      if (index === -1) {
        return throwError(() => new Error('Profissional não encontrado'));
      }
      this.profissionais[index] = profissional;
      return of(profissional);
    } catch (error) {
      return throwError(() => new Error('Erro ao atualizar profissional'));
    }
  }

  removerProfissional(id: number): Observable<boolean> {
    try {
      const index = this.profissionais.findIndex(p => p.id === id);
      if (index === -1) {
        return throwError(() => new Error('Profissional não encontrado'));
      }
      this.profissionais.splice(index, 1);
      return of(true);
    } catch (error) {
      return throwError(() => new Error('Erro ao remover profissional'));
    }
  }
}