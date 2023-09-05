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
import { RegistrationComponent } from './components/registration/registration.component';
import { GetAccountByIdComponent } from './components/get-account-by-id/get-account-by-id.component';
import { AthenticationComponent } from './components/athentication/athentication.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { MakeDepositComponent } from './components/make-deposit/make-deposit.component';
import { MakeFundTransferComponent } from './components/make-fund-transfer/make-fund-transfer.component';
import { WithDrawalComponent } from './components/with-drawal/with-drawal.component';
import { MainCreditCardCompanyComponent } from './components/main-credit-card-company/main-credit-card-company.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
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
      {
        path: 'client-dashboard',
        component: ClientDashboardComponent,
        children: [
          { path: 'account-by-id', component: GetAccountByIdComponent },
          { path: 'athentication', component: AthenticationComponent },
          { path: 'new-transaction', component: NewTransactionComponent },
          { path: 'make-deposit', component: MakeDepositComponent },
          { path: 'make-fund-transfer', component: MakeFundTransferComponent },
          { path: 'withdrawal', component: WithDrawalComponent },
        ],
      },
      {
        path: 'main-credit-card-company',
        component: MainCreditCardCompanyComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
