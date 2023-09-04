import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CreditCardCompaniesComponent } from './components/credit-card-companies/credit-card-companies.component';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { AddNewClientComponent } from './components/add-new-client/add-new-client.component';
import { AddCreditCardCompaniesInstitutionsComponent } from './components/add-credit-card-companies-institutions/add-credit-card-companies-institutions.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        children: [
          { path: 'clients', component: ClientsComponent },
          {
            path: 'credit-card-companies',
            component: CreditCardCompaniesComponent,
          },
          { path: 'institutions', component: InstitutionsComponent },
          { path: 'add-new-client', component: AddNewClientComponent },
          {
            path: 'add-credit-card-companies-institutions',
            component: AddCreditCardCompaniesInstitutionsComponent,
          },
        ],
      },
      { path: 'client-dashboard', component: ClientDashboardComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
