import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CreditCardCompaniesComponent } from './components/credit-card-companies/credit-card-companies.component';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { AddNewClientComponent } from './components/add-new-client/add-new-client.component';
import { SearchFilterPipe } from './search-filter.pipe';
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
import { ProductsComponent } from './components/products/products.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    ClientsComponent,
    CreditCardCompaniesComponent,
    InstitutionsComponent,
    AddNewClientComponent,
    SearchFilterPipe,
    AddCreditCardCompaniesInstitutionsComponent,
    ClientDashboardComponent,
    RegistrationComponent,
    GetAccountByIdComponent,
    AthenticationComponent,
    NewTransactionComponent,
    MakeDepositComponent,
    MakeFundTransferComponent,
    WithDrawalComponent,
    MainCreditCardCompanyComponent,
    ProductsComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
