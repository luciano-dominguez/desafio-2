import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
userform: FormGroup;

constructor (private FormBuilder: FormBuilder) {
  this.userform = this.FormBuilder.group({
    Email: ['', [
      Validators.required,
      Validators.email
    ]],
    Password: this.FormBuilder.control(''),
  });

  
}

get EmailControl(){
  return this.userform.controls['Email'];
}

get EmailControlInvalid(){
    return this.EmailControl.invalid && this.EmailControl.touched;
  
}

onSubmit(): void {
  console.log(this.userform.value);
}
}
