export interface Agendamento {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  plano?: string;
  historico?: string;
  data: string;
  horario: string;
  consentimento: boolean;
  dataAgendamento?: string;
  status?: 'pendente' | 'confirmado' | 'cancelado';
}