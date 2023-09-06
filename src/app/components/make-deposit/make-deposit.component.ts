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
  response = {
    responseCode: '001',
    requestId: '91be63c1-a78e-4b43-9122-d4dc3804af3b',
    responseMessage: 'deposited successfully',
  };
  showResponse = false;

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
    this.dataService.makeDeposit(makeDeposit).subscribe((res) => res);
    this.showResponse = true;
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute,
    });
  }
}
