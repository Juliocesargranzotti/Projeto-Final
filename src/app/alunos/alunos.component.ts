import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {
  formGroupClient: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAlunosById(id);
  }


  getAlunosById(id: number) {
    this.alunosService.getalunos(id).subscribe({
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
        this.alunosService.update(this.formGroupClient.value).subscribe({
          next: () => {
            this.router.navigate(['alunos']);
            this.submitted = false;
          }
        })
      }
      else {
        this.alunosService.save(this.formGroupClient.value).subscribe({
          next: () => {
            this.router.navigate(['alunos']);
            this.formGroupClient.reset();
            this.submitted = false;
          }
        })
      }
    }
  }

  cancel() {
    this.router.navigate(['alunos']);
  }




  get name(): any {
    return this.formGroupClient.get("name");
  }

  get email(): any {
    return this.formGroupClient.get("email");
  }

  get date(): any {
    return this.formGroupClient.get("date");
  }

  get telefone(): any {
    return this.formGroupClient.get("telefone");
  }

}


