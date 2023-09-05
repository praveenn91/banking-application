import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css'],
})
export class InstitutionsComponent implements OnInit {
  filter = '';
  institutions: any = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getInstitutions().subscribe((data) => {
      this.institutions = data;
    });
  }

  deleteInstitutions(data: any) {
    this.dataService
      .deleteInstitutions(data.institutionId)
      .subscribe(() =>
        this.dataService
          .getInstitutions()
          .subscribe((data) => (this.institutions = data))
      );
  }
}
