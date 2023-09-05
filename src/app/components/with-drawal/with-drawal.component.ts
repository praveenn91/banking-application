import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-with-drawal',
  templateUrl: './with-drawal.component.html',
  styleUrls: ['./with-drawal.component.css'],
})
export class WithDrawalComponent {
  withdrawalForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.withdrawalForm = new FormGroup({
      accountNumber: new FormControl(''),
      amount: new FormControl(''),
      transactionPin: new FormControl(''),
    });
  }

  onSubmit() {
    const withdrawal = {
      ...this.withdrawalForm.value,
      amount: parseInt(this.withdrawalForm.value.amount),
    };
    this.dataService.makeWithdrawal(withdrawal).subscribe((res) => res);
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute,
    });
  }
}
