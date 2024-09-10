import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'


@Component({
  selector: 'app-user-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-entry.component.html',
  styleUrl: './user-entry.component.scss'
})
export class UserEntryComponent implements OnInit {
  isLogInEnabled = false;
  signUpForm!: FormGroup;
  forbiddenPasswords = ['password','123456789','0000000','123456','qwerty','12345678','111111','123123','12345'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, this.forbiddenPassword.bind(this)]),
      'confirmPassword': new FormControl(null, [Validators.required]),
      'phoneNumber': new FormControl(null, Validators.required)
      })
  }

  changeState() {
    this.isLogInEnabled = !this.isLogInEnabled;
  }

  onSubmit() {
    console.log (this.signUpForm.value)
   }

  forbiddenPassword(control: FormControl): { [key: string]: boolean } | null {
    if (this.forbiddenPasswords.includes(control.value)) {
      return { 'forbiddenPassword': true };
    }
    return null;
  }

}

