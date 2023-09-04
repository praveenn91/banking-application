import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-credit-card-companies',
  templateUrl: './credit-card-companies.component.html',
  styleUrls: ['./credit-card-companies.component.css'],
})
export class CreditCardCompaniesComponent {
  filter = '';
  creditCardCompanies: any = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getCreditCardCompanies().subscribe((data) => {
      this.creditCardCompanies = data;
    });
  }

  deleteCreditCardCompany(data: any) {
    this.dataService.deleteInstitutions(data.id).subscribe((res) => res);
  }
}
