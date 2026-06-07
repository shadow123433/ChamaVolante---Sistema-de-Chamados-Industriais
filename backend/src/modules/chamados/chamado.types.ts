export interface CriarChamadoDTO {
  maquina: string;
}

export interface Chamado {
  id: number;
  maquina: string;
  status: string;
  criado_em: Date;
  finalizado_em: Date | null;
}