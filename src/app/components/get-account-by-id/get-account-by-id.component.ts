import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-get-account-by-id',
  templateUrl: './get-account-by-id.component.html',
  styleUrls: ['./get-account-by-id.component.css'],
})
export class GetAccountByIdComponent {
  account: any;

  constructor(private dataService: DataService) {}
  getAccountBtn(data: HTMLInputElement) {
    this.dataService.getAccountById(data.value).subscribe((data) => {
      this.account = data;
    });
  }
}
