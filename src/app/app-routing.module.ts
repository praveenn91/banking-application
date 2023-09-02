import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CreditCardCompaniesComponent } from './components/credit-card-companies/credit-card-companies.component';
import { InstitutionsComponent } from './components/institutions/institutions.component';

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
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
