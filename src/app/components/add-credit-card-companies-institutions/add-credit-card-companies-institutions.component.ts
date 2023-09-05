import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-credit-card-companies-institutions',
  templateUrl: './add-credit-card-companies-institutions.component.html',
  styleUrls: ['./add-credit-card-companies-institutions.component.css'],
})
export class AddCreditCardCompaniesInstitutionsComponent {
  addForm!: FormGroup;
  currentPage: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.currentPage = this.activatedRoute.snapshot.queryParams['form'];
    this.addForm = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.currentPage === 'institutions') {
      const formData = {
        institutionName: this.addForm.value.name,
        discription: this.addForm.value.address,
      };
      this.dataService
        .addInstitution(this.addForm.value)
        .subscribe((res) => res);
    } else {
      this.dataService
        .addCreditCardComapanies(this.addForm.value)
        .subscribe((res) => res);
    }
  }

  goBack() {
    if (this.currentPage === 'institutions') {
      this.router.navigate(['../institutions'], {
        relativeTo: this.activatedRoute,
      });
    } else {
      this.router.navigate(['../credit-card-companies'], {
        relativeTo: this.activatedRoute,
      });
    }
  }
}
