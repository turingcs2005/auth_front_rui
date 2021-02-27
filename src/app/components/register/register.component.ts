import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { textValidators } from 'src/app/app-data/shared-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  passwordsMatchWarning = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', { validators: textValidators, updateOn: 'blur' }],
      // email field requires async validator to check against a data base if email exists
      email: ['', { validators: textValidators.concat([Validators.email]), updateOn: 'blur' }],
      password: ['', { validators: textValidators, updateOn: 'blur' }],
      password2: ['', { textValidators: textValidators, updateOn: 'blur' } ]
    });

    // show password not match warning
    this.password2.valueChanges.subscribe( val => {
      if( val === this.password1.value ) {
        this.passwordsMatchWarning = false;
      } else {
        this.passwordsMatchWarning = true;
      }
    });

    this.password1.valueChanges.subscribe( val => {
      if( this.password2.value && val !== this.password2.value) {
        this.passwordsMatchWarning = true;
      } else {
        this.passwordsMatchWarning = false;
      }
    });

  }

  get password1() { return this.registerForm.get('password')}

  get password2() { return this.registerForm.get('password2')}

  get passwordMatch() {
    return this.password1.value === this.password2.value;
  }

  onSubmit() {
    console.log('Form submitted.');
  }


}
