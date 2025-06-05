export interface Servico {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco?: number;
  duracao?: string;
  beneficios?: string[];
}