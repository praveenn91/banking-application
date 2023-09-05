import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Feedbacks } from 'src/types';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  users!: any;

  constructor(private dataService: DataService) {
    this.dataService.getFeedback().subscribe((res) => (this.users = res));
  }
}
