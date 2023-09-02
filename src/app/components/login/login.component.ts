import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Admin, Admins, Login } from 'src/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  userRole?: string;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {
      this.userRole = history.state.user;
    });
  }

  onSubmit() {
    if (this.loginForm.valid && this.userRole === 'admin') {
      this.loginService.adminLogin().subscribe(
        (res) => {
          const isAdminValid = (res as Admins).admins.filter((admin: Admin) => {
            return (
              admin.email === this.loginForm.value.email &&
              admin.password === this.loginForm.value.password
            );
          });
          if (isAdminValid.length !== 0) {
            this.route.navigate(['/admin-dashboard'], {
              state: { name: this.loginForm.value.email },
            });
          } else {
            this.route.navigate(['/']);
          }
        },
        (error) => {
          console.error('Request failed with error', error);
        }
      );
    }
  }
}
