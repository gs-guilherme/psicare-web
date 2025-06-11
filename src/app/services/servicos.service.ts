import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  // TODO: Alterar para URL da API remota quando disponível
  // Exemplo: private apiUrl = 'https://sua-api-remota.com/servicos';
  private apiUrl = 'http://localhost:3000/servicos';

  // Dados mockados como fallback - Expandindo a lista de serviços
  private mockServicos: Servico[] = [
    {
      id: 1,
      nome: "Psicoterapia Individual",
      descricao: "Atendimento personalizado para auxiliar no autoconhecimento e desenvolvimento pessoal. Sessões focadas em suas necessidades específicas.",
      imagem: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
      preco: 150,
      duracao: "50 minutos",
      beneficios: [
        "Autoconhecimento aprofundado",
        "Gestão de ansiedade e estresse",
        "Desenvolvimento de habilidades emocionais"
      ]
    },
    {
      id: 2,
      nome: "Terapia de Casal",
      descricao: "Suporte especializado para melhorar a comunicação e resolver conflitos no relacionamento. Fortalecimento dos laços afetivos.",
      imagem: "https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg",
      preco: 200,
      duracao: "60 minutos",
      beneficios: [
        "Melhoria na comunicação",
        "Resolução de conflitos",
        "Fortalecimento do vínculo"
      ]
    },
    {
      id: 3,
      nome: "Avaliação Neuropsicológica",
      descricao: "Avaliação completa das funções cognitivas e comportamentais. Identificação de potencialidades e dificuldades.",
      imagem: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg",
      preco: 300,
      duracao: "2 horas",
      beneficios: [
        "Diagnóstico preciso",
        "Planejamento terapêutico personalizado",
        "Relatório detalhado"
      ]
    },
    {
      id: 4,
      nome: "Terapia Familiar",
      descricao: "Atendimento voltado para a dinâmica familiar, promovendo diálogo e resolução de conflitos entre membros da família.",
      imagem: "https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg",
      preco: 180,
      duracao: "60 minutos",
      beneficios: [
        "Melhoria na comunicação familiar",
        "Resolução de conflitos geracionais",
        "Fortalecimento dos vínculos familiares"
      ]
    },
    {
      id: 5,
      nome: "Psicoterapia Infantil",
      descricao: "Atendimento especializado para crianças, utilizando técnicas lúdicas e adequadas ao desenvolvimento infantil.",
      imagem: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      preco: 140,
      duracao: "45 minutos",
      beneficios: [
        "Desenvolvimento emocional saudável",
        "Melhoria no comportamento",
        "Apoio no desenvolvimento social"
      ]
    },
    {
      id: 6,
      nome: "Terapia de Grupo",
      descricao: "Sessões em grupo para compartilhamento de experiências e apoio mútuo em um ambiente seguro e acolhedor.",
      imagem: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg",
      preco: 80,
      duracao: "90 minutos",
      beneficios: [
        "Apoio social e emocional",
        "Compartilhamento de experiências",
        "Desenvolvimento de habilidades sociais"
      ]
    }
  ];

  constructor(private http: HttpClient) {}

  getServicos(): Observable<Servico[]> {
    // Tenta acessar a API, mas usa dados mockados como fallback
    return this.http.get<Servico[]>(this.apiUrl).pipe(
      catchError(error => {
        console.warn('API não disponível, usando dados mockados:', error.message);
        return of(this.mockServicos);
      })
    );
  }

  getServico(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.warn('API não disponível, usando dados mockados:', error.message);
        const servico = this.mockServicos.find(s => s.id === id);
        if (servico) {
          return of(servico);
        }
        throw new Error('Serviço não encontrado');
      })
    );
  }

  adicionarServico(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando adição:', error.message);
        // Simula a adição localmente
        const novoServico = { ...servico, id: Date.now() };
        this.mockServicos.push(novoServico);
        return of(novoServico);
      })
    );
  }

  atualizarServico(servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/${servico.id}`, servico).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando atualização:', error.message);
        // Simula a atualização localmente
        const index = this.mockServicos.findIndex(s => s.id === servico.id);
        if (index !== -1) {
          this.mockServicos[index] = servico;
        }
        return of(servico);
      })
    );
  }

  removerServico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.warn('API não disponível, simulando remoção:', error.message);
        // Simula a remoção localmente
        const index = this.mockServicos.findIndex(s => s.id === id);
        if (index !== -1) {
          this.mockServicos.splice(index, 1);
        }
        return of(void 0);
      })
    );
  }
}