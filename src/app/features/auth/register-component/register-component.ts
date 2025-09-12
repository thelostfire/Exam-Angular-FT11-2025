import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms'
import { AuthService } from '../../../core/services/auth-service';
import { Router } from '@angular/router';

function matchValidator(a: string, b: string) {
  return (group: AbstractControl): ValidationErrors | null => {
    const va = group.get(a)?.value;
    const vb = group.get(b)?.value;
    return va && vb && va !== vb ? { mismatch: true } : null;
  }
}

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css'
})
export class RegisterComponent {
  
  private formBuild = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  errorMsg = '';

  form = this.formBuild.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    // passwordGroup: this.formBuild.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    //   passwordConfirm: ['', [Validators.required]],
    // }, { validators: matchValidator('password', 'passwordConfirm')})
  });

  get name() { return this.form.controls['name']; }
  get email() { return this.form.controls['email']; }
  // get passwordGroup() { return this.form.controls['passwordGroup']; }
  get password() { return this.form.controls['password']; }
  // get passwordConfirm() { return this.passwordGroup.get('passwordConfirm'); }

  submit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.errorMsg = '';
    const payload = {
      name: this.name.value!,
      email: this.email.value!,
      password: this.password?.value!
    };
    this.auth.register(payload).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => this.errorMsg = err?.error?.message || 'Inscription Impossible',
    });
  }
}
