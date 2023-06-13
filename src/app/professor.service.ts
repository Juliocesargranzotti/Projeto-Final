import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alunos } from './alunos';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  url = 'http://localhost:3000/Professor'

  constructor(private http: HttpClient) { }

  getProfessor(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.url);
  }

  getProfessores(id: number){
    return this.http.get<Alunos>(`${this.url}/${id}`);
  }


  save(professor : Professor): Observable<Professor>{
    return this.http.post<Professor>(this.url, professor);
  }

  update(professor : Professor): Observable<Professor>{
    return this.http.put<Professor>(`${this.url}/${professor.id}`, professor)
  }

  remove(professor : Professor): Observable<void>{
    return this.http.delete<void>(`${this.url}/${professor.id}`);
  }

}
