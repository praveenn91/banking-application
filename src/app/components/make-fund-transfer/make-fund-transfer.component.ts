import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-make-fund-transfer',
  templateUrl: './make-fund-transfer.component.html',
  styleUrls: ['./make-fund-transfer.component.css'],
})
export class MakeFundTransferComponent {
  makeFundTransferForm: FormGroup;
  response: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.makeFundTransferForm = new FormGroup({
      fromAccount: new FormControl(''),
      toAccount: new FormControl(''),
      amount: new FormControl(''),
      transactionPin: new FormControl(''),
    });
  }

  onSubmit() {
    const makeFund = {
      ...this.makeFundTransferForm.value,
      amount: parseInt(this.makeFundTransferForm.value.amount),
    };
    this.response = this.dataService
      .makeFundTransfer(makeFund)
      .subscribe((res) => res);
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute,
    });
  }
}
