import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrls: ['./client-feedback.component.css'],
})
export class ClientFeedbackComponent {
  feedbackForm: FormGroup;
  response: any;
  constructor(private dataService: DataService) {
    this.feedbackForm = new FormGroup({
      product: new FormControl(''),
      feedback: new FormControl(''),
    });
  }

  onSubmit() {
    this.response = this.dataService.addFeedback(this.feedbackForm.value);
  }
}
