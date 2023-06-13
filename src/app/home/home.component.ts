
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  professor: Professor[] = [];

  constructor(private professorService: ProfessorService,
              private router : Router    ) {
  }

  ngOnInit(): void {
    this.loadProfessor();
  }

  loadProfessor() {
    this.professorService.getProfessor().subscribe(
      {
        next: data => this.professor = data
      }
    );

  }

  create(){
    this.router.navigate(['createprofessor']);
  }

  edit(Professor: Professor) {
    this.router.navigate(['professorDetails', Professor.id]);
  }


  remove(professor: Professor){
    this.professorService.remove(professor).subscribe({
      next : () => this.loadProfessor()
    })
  }
}


