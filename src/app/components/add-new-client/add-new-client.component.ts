import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.css'],
})
export class AddNewClientComponent {
  clientForm!: FormGroup;
  clientData: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    this.clientForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      address: new FormControl(''),
    });
    this.activatedRoute.paramMap.subscribe(() => {
      this.clientData = history.state;
      this.clientForm.setValue({
        id: history.state.id,
        firstName: history.state.firstName,
        lastName: history.state.lastName,
        email: history.state.email,
        phoneNumber: history.state.phoneNumber,
        address: history.state.address,
      });
    });
  }

  onSubmit() {
    if (this.clientForm.valid && this.clientData.id) {
      const formValues = this.clientForm.value;
      const updatedValues = {
        id: this.clientData.id,
        firstName: this.clientForm.value.firstName,
        lastName: this.clientForm.value.lastName,
        email: this.clientForm.value.email,
        phoneNumber: parseInt(this.clientForm.value.phoneNumber),
        address: this.clientForm.value.address,
      };
      this.dataService.updateClient(updatedValues).subscribe((res) => res);
    } else {
      this.dataService
        .addClient(this.clientForm.value)
        .subscribe((data) => console.log(data));
    }
  }

  goBack() {
    this.router.navigate(['../clients'], { relativeTo: this.activatedRoute });
  }
}
