import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  emailForm!: FormGroup;
  submitted = false;
  ok = false;

  constructor(private myformBuilder: FormBuilder) {}

    ngOnInit(): void {
      this.emailForm = this.myformBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.emailForm.invalid) {
      return;  /* no code will be executed after this point */
    }

    this.ok = true;
  }
  
  resetForm() {
    this.emailForm.reset(); // This will clear the form fields.
    this.submitted = false; // Reset the submitted flag.
    this.ok = false; // Hide the success message.
  }
  
}
