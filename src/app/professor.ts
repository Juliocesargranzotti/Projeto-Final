export interface Professor{
  delete(professor: Professor): unknown;
  id : number ;
  name : string;
  email : string;
  materia: string;
  telefone: number;


}
