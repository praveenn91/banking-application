import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-make-deposit',
  templateUrl: './make-deposit.component.html',
  styleUrls: ['./make-deposit.component.css'],
})
export class MakeDepositComponent {
  makeDepositForm: FormGroup;
  response: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.makeDepositForm = new FormGroup({
      accountNumber: new FormControl(''),
      amount: new FormControl(''),
      transactionPin: new FormControl(''),
    });
  }

  onSubmit() {
    const makeDeposit = {
      accountName: this.makeDepositForm.value.accountName,
      amount: parseInt(this.makeDepositForm.value.amount),
      transactionPin: this.makeDepositForm.value.transactionPin,
    };
    this.response = this.dataService
      .makeDeposit(makeDeposit)
      .subscribe((res) => (this.response = res));
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute,
    });
  }
}
