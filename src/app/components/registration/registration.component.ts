import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  userRole: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private route: Router
  ) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
    this.userRole = this.activatedRoute.snapshot.queryParams['page'];
  }
  onSubmit() {
    console.log(this.registrationForm.value);
    if (this.userRole === 'client') {
      this.dataService
        .clientRegistration(this.registrationForm.value)
        .subscribe((res) => {
          if (res) {
            this.route.navigate(['/login'], {
              queryParams: { page: 'client' },
            });
          }
        });
    } else if (this.userRole === 'admin') {
      this.route.navigate(['/login'], { queryParams: { page: 'admin' } });
    } else {
      this.route.navigate(['/login'], { queryParams: { page: 'credit-card' } });
    }
  }
}
