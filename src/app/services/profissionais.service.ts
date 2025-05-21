import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
    return of(this.profissionais);
  }
}