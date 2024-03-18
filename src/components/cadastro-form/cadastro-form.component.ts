import { JsonPipe } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { KeyObject } from 'crypto';
import { emit } from 'process';
import { CidadeFormComponent } from '../cidade-form/cidade-form.component';

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, JsonPipe, CidadeFormComponent],
  templateUrl: './cadastro-form.component.html',
  styleUrl: './cadastro-form.component.css'
})
export class CadastroFormComponent {
  @ViewChild('formRef') formRef!: NgForm;
  #el = inject(ElementRef);
  #fb = inject(NonNullableFormBuilder);
  
  formForn = this.#fb.group({
     nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
     email: new FormControl('',[Validators.required, Validators.email]),
     cidade: new FormControl('',[Validators.required, Validators.minLength(5)]),
   });

  ngOnInit(): void {
    
  }

  
  get nome() {
    return this.formForn.controls.nome;
  }

  get email() {
    return this.formForn.controls.email;
  }

  get cidade() {
    return this.formForn.controls.cidade;
  }
  
  onSubmit() {
    if (this.formForn.invalid) {
      const invalidControl = Object.keys(this.formForn.controls)
        .find((key) => this.formForn.get(key)?.invalid);
        
        if (invalidControl) {
        const invalidElement = this.#el.nativeElement.querySelector(`[formControlName="${invalidControl}"]`);
        invalidElement.focus();
      }
      return;
    }
    console.log('Formulário válido', this.formForn.value);
    this.formRef.resetForm();
    
    }
  }
