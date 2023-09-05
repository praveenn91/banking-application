import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css'],
})
export class NewTransactionComponent {
  newTransaction: FormGroup;
  response: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.newTransaction = new FormGroup({
      transactionAmount: new FormControl(''),
      transactionSourceAccount: new FormControl(''),
      transactionDestinationAccount: new FormControl(''),
      transactionType: new FormControl(''),
    });
  }
  onSubmit() {
    const transaction = {
      transactionAmount: parseInt(this.newTransaction.value.transactionAmount),
      transactionSourceAccount:
        this.newTransaction.value.transactionSourceAccount,
      transactionDestinationAccount:
        this.newTransaction.value.transactionDestinationAccount,
      transactionType: parseInt(this.newTransaction.value.transactionType),
      transactionDate: new Date(),
    };
    this.response = this.dataService
      .addNewTransaction(transaction)
      .subscribe((res) => res);
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute,
    });
  }
}
