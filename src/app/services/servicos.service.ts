import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Servico {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco?: number;
  duracao?: string;
  beneficios?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  private servicos: Servico[] = [
    {
      id: 1,
      nome: 'Psicoterapia Individual',
      descricao: 'Atendimento personalizado para auxiliar no autoconhecimento e desenvolvimento pessoal. Sessões focadas em suas necessidades específicas.',
      imagem: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg',
      preco: 150,
      duracao: '50 minutos',
      beneficios: [
        'Autoconhecimento aprofundado',
        'Gestão de ansiedade e estresse',
        'Desenvolvimento de habilidades emocionais'
      ]
    },
    {
      id: 2,
      nome: 'Terapia de Casal',
      descricao: 'Suporte especializado para melhorar a comunicação e resolver conflitos no relacionamento. Fortalecimento dos laços afetivos.',
      imagem: 'https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg',
      preco: 200,
      duracao: '60 minutos',
      beneficios: [
        'Melhoria na comunicação',
        'Resolução de conflitos',
        'Fortalecimento do vínculo'
      ]
    },
    {
      id: 3,
      nome: 'Avaliação Neuropsicológica',
      descricao: 'Avaliação completa das funções cognitivas e comportamentais. Identificação de potencialidades e dificuldades.',
      imagem: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg',
      preco: 300,
      duracao: '2 horas',
      beneficios: [
        'Diagnóstico preciso',
        'Planejamento terapêutico personalizado',
        'Relatório detalhado'
      ]
    },
    {
      id: 4,
      nome: 'Terapia Infantil',
      descricao: 'Atendimento especializado para crianças, utilizando técnicas lúdicas e adequadas à idade. Suporte ao desenvolvimento emocional.',
      imagem: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg',
      preco: 180,
      duracao: '45 minutos',
      beneficios: [
        'Desenvolvimento emocional saudável',
        'Melhoria no comportamento',
        'Suporte à família'
      ]
    },
    {
      id: 5,
      nome: 'Orientação Profissional',
      descricao: 'Auxílio na descoberta vocacional e planejamento de carreira. Avaliação de perfil e interesses profissionais.',
      imagem: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      preco: 250,
      duracao: '1 hora',
      beneficios: [
        'Autoconhecimento profissional',
        'Planejamento de carreira',
        'Tomada de decisão consciente'
      ]
    }
  ];

  getServicos(): Observable<Servico[]> {
    try {
      return of(this.servicos).pipe(
        catchError(error => throwError(() => new Error('Erro ao carregar serviços')))
      );
    } catch (error) {
      return throwError(() => new Error('Erro ao processar requisição'));
    }
  }

  getServico(id: number): Observable<Servico | undefined> {
    try {
      const servico = this.servicos.find(s => s.id === id);
      if (!servico) {
        return throwError(() => new Error('Serviço não encontrado'));
      }
      return of(servico);
    } catch (error) {
      return throwError(() => new Error('Erro ao buscar serviço'));
    }
  }

  adicionarServico(servico: Servico): Observable<Servico> {
    try {
      const newId = Math.max(...this.servicos.map(s => s.id)) + 1;
      const novoServico = { ...servico, id: newId };
      this.servicos.push(novoServico);
      return of(novoServico);
    } catch (error) {
      return throwError(() => new Error('Erro ao adicionar serviço'));
    }
  }

  atualizarServico(servico: Servico): Observable<Servico> {
    try {
      const index = this.servicos.findIndex(s => s.id === servico.id);
      if (index === -1) {
        return throwError(() => new Error('Serviço não encontrado'));
      }
      this.servicos[index] = servico;
      return of(servico);
    } catch (error) {
      return throwError(() => new Error('Erro ao atualizar serviço'));
    }
  }

  removerServico(id: number): Observable<boolean> {
    try {
      const index = this.servicos.findIndex(s => s.id === id);
      if (index === -1) {
        return throwError(() => new Error('Serviço não encontrado'));
      }
      this.servicos.splice(index, 1);
      return of(true);
    } catch (error) {
      return throwError(() => new Error('Erro ao remover serviço'));
    }
  }
}