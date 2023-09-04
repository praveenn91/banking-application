import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Admin, Admins, Client, Clients, Login } from 'src/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  userRole?: string;
  errorMessage = false;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
    this.userRole = this.activatedRoute.snapshot.queryParams['page'];
  }

  ngOnInit() {}

  onSubmit() {
    this.errorMessage = false;
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
              state: { name: isAdminValid[0].userName },
            });
          } else {
            this.errorMessage = true;
          }
        },
        (error) => {
          console.error('Request failed with error', error);
        }
      );
    }
    if (this.loginForm.valid && this.userRole === 'client') {
      this.loginService.adminLogin().subscribe(
        (res) => {
          const isClientValid = (res as Clients).clients.filter(
            (client: Client) => {
              return (
                client.email === this.loginForm.value.email &&
                client.password === this.loginForm.value.password
              );
            }
          );
          if (isClientValid.length !== 0) {
            this.route.navigate(['/client-dashboard'], {
              state: { name: isClientValid[0].userName },
            });
          } else {
            this.errorMessage = true;
          }
        },
        (error) => {
          console.error('Request failed with error', error);
        }
      );
    }
  }
  register() {
    this.route.navigate(['/register']);
  }
}
