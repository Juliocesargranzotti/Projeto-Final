
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alunos } from '../alunos';
import { AlunosService } from '../alunos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  alunos : Alunos[] = [];


  constructor(
              private alunosService: AlunosService,
              private router : Router    ) {
  }

  ngOnInit(): void {

    this.loadAlunos();

  }
  loadAlunos() {
    this.alunosService.getAlunos().subscribe(
      {
        next: data => this.alunos = data
      }
    );

  }



  create(){

    this.router.navigate(['createAlunos']);
  }



  edit(alunos: Alunos) {
    this.router.navigate(['alunosDetails', alunos.id]);

  }



  delete(alunos: Alunos){
    this.alunosService.remove(alunos).subscribe({
      next : () => this.loadAlunos()
    })
  }
}


