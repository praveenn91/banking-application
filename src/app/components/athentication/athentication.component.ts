import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-athentication',
  templateUrl: './athentication.component.html',
  styleUrls: ['./athentication.component.css'],
})
export class AthenticationComponent {
  athenticationForm: FormGroup;
  athenticationStatus = false;

  constructor(private dataService: DataService) {
    this.athenticationForm = new FormGroup({
      accountName: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    this.dataService
      .athenticationAddress(this.athenticationForm.value)
      .subscribe((data) => {
        if (data === 'Success') {
          this.athenticationStatus = true;
        } else {
          this.athenticationStatus = false;
        }
      });
  }
}
