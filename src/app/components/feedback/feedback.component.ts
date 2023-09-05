import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  users = [
    {
      id: 1,
      name: 'sandhya',
      products: [
        {
          id: 1,
          name: 'sony',
        },
      ],
      feedback: [
        {
          id: 1,
          comment: 'good',
        },
      ],
    },
  ];
}
