export interface Alunos{
  delete(alunos: Alunos): unknown;
  id : number ;
  name : string;
  email : string;
  cpf: number;
  telefone: number;
  datanascimento : number;


}
