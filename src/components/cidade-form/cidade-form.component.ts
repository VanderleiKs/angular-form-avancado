import { JsonPipe } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, NgForm, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cidade-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './cidade-form.component.html',
  styleUrl: './cidade-form.component.css'
})
export class CidadeFormComponent {
  @Input() controlName: string = ''
  #cc = inject(ControlContainer)
  
  formCid = this.#cc.control as FormGroup;
 
  /* @Input({required: true})
  public controlName!: string | null; */

  ngOnInit(): void {
    
  }

  

  
  /* onSubmit() {
    if (this.formCid.invalid) {
      const invalidControl = Object.keys(this.formCid.controls)
        .find((key) => this.formCid.get(key)?.invalid);
        
        if (invalidControl) {
        const invalidElement = this.#el.nativeElement.querySelector(`[formControlName="${invalidControl}"]`);
        invalidElement.focus();
      }
      return;
    }
    console.log('Formulário válido', this.formCid.value);
    this.formRef.resetForm();
    
    } */
}
