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
  response: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      pin: new FormControl(''),
      confirmPin: new FormControl(''),
    });
    this.userRole = this.activatedRoute.snapshot.queryParams['page'];
  }
  onSubmit() {
    console.log(this.registrationForm.value);
    if (this.userRole === 'client') {
      this.dataService
        .clientRegistration(this.registrationForm.value)
        .subscribe((res) => {
          this.response = res;
        });
    }
  }

  goBack() {
    this.router.navigate(['../login'], {
      relativeTo: this.activatedRoute,
      queryParams: { page: this.userRole },
    });
  }
}
