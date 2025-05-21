import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
      nome: 'Psicopedagogia Clínica',
      descricao: 'Auxílio especializado para dificuldades de aprendizagem e desenvolvimento. Estratégias personalizadas para cada caso.',
      imagem: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      preco: 180,
      duracao: '45 minutos',
      beneficios: [
        'Melhoria no desempenho escolar',
        'Desenvolvimento de estratégias de aprendizagem',
        'Acompanhamento personalizado'
      ]
    },
    {
      id: 5,
      nome: 'Acompanhamento Psicológico',
      descricao: 'Suporte contínuo para desenvolvimento pessoal e bem-estar emocional. Processo terapêutico adaptado às suas necessidades.',
      imagem: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg',
      preco: 160,
      duracao: '50 minutos',
      beneficios: [
        'Acompanhamento contínuo',
        'Desenvolvimento pessoal',
        'Suporte emocional especializado'
      ]
    }
  ];

  getServicos(): Observable<Servico[]> {
    return of(this.servicos);
  }

  getServico(id: number): Observable<Servico | undefined> {
    return of(this.servicos.find(servico => servico.id === id));
  }
}