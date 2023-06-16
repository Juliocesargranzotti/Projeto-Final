
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alunos } from '../alunos';
import { AlunosService } from '../alunos.service';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  professor: Professor[] = [];
  alunos : Alunos[] = [];


  constructor(private professorService: ProfessorService,
              private alunosService: AlunosService,
              private router : Router    ) {
  }

  ngOnInit(): void {
    this.loadProfessor();
    this.loadAlunos();

  }
  loadAlunos() {
    this.alunosService.getAlunos().subscribe(
      {
        next: data => this.alunos = data
      }
    );

  }

  loadProfessor() {
    this.professorService.getProfessor().subscribe(
      {
        next: data => this.professor = data
      }
    );

  }

  create(){
    this.router.navigate(['createProfessor']);
    this.router.navigate(['createAlunos']);
  }


  edit(Professor: Professor) {
    this.router.navigate(['professorDetails', Professor.id]);

  }
  edits(Alunos: Alunos) {
    this.router.navigate(['alunosDetails', Alunos.id]);

  }


  remove(professor: Professor){
    this.professorService.remove(professor).subscribe({
      next : () => this.loadProfessor()
    })
  }
  delete(alunos: Alunos){
    this.alunosService.remove(alunos).subscribe({
      next : () => this.loadAlunos()
    })
  }
}


