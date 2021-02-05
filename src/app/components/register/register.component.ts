import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(256)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(256)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(256)]]
    })
  }

  onSubmit() {
    console.log('Form submitted.');
  }


}
