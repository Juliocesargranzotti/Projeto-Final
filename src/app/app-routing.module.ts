import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'professor', component: ProfessorComponent},
  {path: 'professorDetails/:id',component : ProfessorFormComponent},
  {path: 'createProfessor',component : ProfessorFormComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'alunosDetails/:id',component : AlunosComponent},
  {path: 'createAlunos',component : AlunosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
