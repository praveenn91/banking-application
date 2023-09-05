import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Form } from 'src/types';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  filter = '';
  clients: any;
  constructor(private dataService: DataService, private route: Router) {
    // api call to get list of clients
    this.dataService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  updateClient(data: Form) {
    this.route.navigate(['/admin-dashboard/add-new-client'], { state: data });
  }

  deleteClient(id: string) {
    this.dataService
      .deleteClient(id)
      .subscribe(() =>
        this.dataService.getClients().subscribe((res) => (this.clients = res))
      );
  }
}
