import { Component } from '@angular/core';
import { Professor } from '../professor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent {

  formGroupClient: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      materia: ['',[Validators.required]],
      telefone:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getProfessorById(id);
  }


  getProfessorById(id: number) {
    this.professorService.getProfessores(id).subscribe({
      next: data => {
        this.formGroupClient.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;

    if (this.formGroupClient.valid) {
      if (this.isEditing) {
        this.professorService.update(this.formGroupClient.value).subscribe({
          next: () => {
            this.router.navigate(['professor']);
            this.submitted = false;
          }
        })
      }
      else {
        this.professorService.save(this.formGroupClient.value).subscribe({
          next: () => {
            this.router.navigate(['professor']);
            this.formGroupClient.reset();
            this.submitted = false;
          }
        })
      }
    }
  }

  cancel() {
    this.router.navigate(['professor']);
  }




  get name(): any {
    return this.formGroupClient.get("name");
  }

  get email(): any {
    return this.formGroupClient.get("email");
  }

  get materia(): any {
    return this.formGroupClient.get("materia");
  }

  get telefone(): any {
    return this.formGroupClient.get("telefone");
  }

}
