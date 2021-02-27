import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { textValidators } from 'src/app/app-data/shared-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', textValidators.concat([Validators.email])],
      password: ['', textValidators]
    })
  }

  // login
  onSubmit() {

    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.passowrd).subscribe(
        val => {
          console.log(val);
          this.router.navigateByUrl('/home');
        }
      );
    }
    console.log('Form submitted.');
  }

}
