import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(256)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(256)]],
      oldPassword: ['', [Validators.required, Validators.min(6), Validators.max(256)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(256)]]
    })
  }

  onSubmit() {
    console.log('Form submitted.');
  }

}
