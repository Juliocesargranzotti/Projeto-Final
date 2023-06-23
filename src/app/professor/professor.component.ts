import { Professor } from './../professor';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../professor.service';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent {

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
    this.router.navigate(['createProfessor']);
  }

  edit(professor: Professor) {
    this.router.navigate(['professorDetails', professor.id]);
  }


  remove(professor: Professor){
    this.professorService.remove(professor).subscribe({
      next : () => this.loadProfessor()
    })
  }

}
