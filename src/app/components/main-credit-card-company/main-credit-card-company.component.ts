import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-credit-card-company',
  templateUrl: './main-credit-card-company.component.html',
  styleUrls: ['./main-credit-card-company.component.css'],
})
export class MainCreditCardCompanyComponent {
  userName?: string;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {
      this.userName = history.state.name;
    });
  }
}
