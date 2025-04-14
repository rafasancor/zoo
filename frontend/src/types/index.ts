export type Animal = {
  id?: number;
  nome: string;
  descricao: string;
  dataNascimento: string;
  especie: string;
  habitat: string;
  paisOrigem: string;
};

export type Cuidado = {
  id?: number;
  nome: string;
  descricao: string;
  frequencia: 'diária' | 'semanal' | 'mensal' | 'trimestral' | 'semestral' | 'anual';
};

export const ESPECIES = [
  'Leão',
  'Tigre',
  'Elefante',
  'Girafa',
  'Zebra',
  'Macaco',
  'Pinguim',
  'Urso',
  'Lobo',
  'Hipopótamo'
] as const;

export const HABITATS = [
  'Savana',
  'Floresta Tropical',
  'Deserto',
  'Tundra',
  'Oceano',
  'Montanha',
  'Pântano',
  'Floresta Temperada',
  'Outro'
] as const;

export const PAISES = [
  'Brasil',
  'África do Sul',
  'Índia',
  'Austrália',
  'Canadá',
  'China',
  'Estados Unidos',
  'Rússia',
  'Argentina',
  'Quênia',
  'Outro'
] as const;

export const FREQUENCIAS = [
  'diária',
  'semanal',
  'mensal',
  'trimestral',
  'semestral',
  'anual'
] as const;