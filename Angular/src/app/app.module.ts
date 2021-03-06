import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule, DateAdapter, MatDialogModule, MatInputModule, MatIconModule, MatAutocompleteModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DateFormat } from './date-format';
import { AutofocusDirective } from './autofocus.directive';

import { ButtonVerwijderenComponent } from './button-verwijderen/button-verwijderen.component';
import { ButtonAnnulerenComponent } from './button-annuleren/button-annuleren.component';
import { ButtonActieComponent } from './button-actie/button-actie.component';
import { ButtonToevoegenComponent } from './button-toevoegen/button-toevoegen.component';
import { TableFilterPipe } from './table-filter.pipe';
import { DialogBevestigenComponent } from './dialog-bevestigen/dialog-bevestigen.component';
import { LabelsComponent } from './labels/labels.component';
import { LabelComponent } from './labels/label/label.component';
import { InkomstenComponent } from './inkomsten/inkomsten.component';
import { InkomstComponent } from './inkomsten/inkomst/inkomst.component';
import { FilterPipe } from './filter.pipe';
import { CurrencyPipe } from './currency.pipe';
import { ContractenComponent } from './contracten/contracten.component';
import { ContractComponent } from './contracten/contract/contract.component';
import { BudgettenComponent } from './budgetten/budgetten.component';
import { BudgetComponent } from './budgetten/budget/budget.component';
import { CustomValidator } from './custom.validators';
import { DialogMeldingComponent } from './dialog-melding/dialog-melding.component';
import { ReserveringenComponent } from './reserveringen/reserveringen.component';
import { ReserveringComponent } from './reserveringen/reservering/reservering.component';
import { AfschrijvingenComponent } from './afschrijvingen/afschrijvingen.component';
import { AfschrijvingComponent } from './afschrijvingen/afschrijving/afschrijving.component';
import { SpaardoelenComponent } from './spaardoelen/spaardoelen.component';
import { SpaardoelComponent } from './spaardoelen/spaardoel/spaardoel.component';
import { BegrotingComponent } from './begroting/begroting.component';
import { InfoComponent } from './info/info.component';
import { BackupComponent } from './backup/backup.component';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { LOCALE_ID } from '@angular/core';
import { DialogLadenComponent } from './dialog-laden/dialog-laden.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Globals } from './globals';
import { LeningenComponent } from './leningen/leningen.component';
import { LeningComponent } from './leningen/lening/lening.component';
import { RekeningenComponent } from './rekeningen/rekeningen.component';
import { RekeningComponent } from './rekeningen/rekening/rekening.component';
import { TransactiesComponent } from './transacties/transacties.component';
import { TransactieComponent } from './transacties/transactie/transactie.component';

registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonVerwijderenComponent,
    ButtonAnnulerenComponent,
    ButtonActieComponent,
    ButtonToevoegenComponent,
    TableFilterPipe,
    AutofocusDirective,
    DialogBevestigenComponent,
    LabelsComponent,
    LabelComponent,
    InkomstenComponent,
    InkomstComponent,
    FilterPipe,
    CurrencyPipe,
    ContractenComponent,
    ContractComponent,
    BudgettenComponent,
    BudgetComponent,
    DialogMeldingComponent,
    ReserveringenComponent,
    ReserveringComponent,
    AfschrijvingenComponent,
    AfschrijvingComponent,
    SpaardoelenComponent,
    SpaardoelComponent,
    BegrotingComponent,
    InfoComponent,
    BackupComponent,
    DialogLadenComponent,
    NavBarComponent,
    LeningenComponent,
    LeningComponent,
    RekeningenComponent,
    RekeningComponent,
    TransactiesComponent,
    TransactieComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgbModule,
    SharedModule,
    FontAwesomeModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [{ provide: DateAdapter, useClass: DateFormat }, CurrencyPipe, CustomValidator, {provide: LOCALE_ID, useValue: 'nl'}, Globals],
  bootstrap: [AppComponent],
  entryComponents: [DialogBevestigenComponent, LabelComponent, InkomstComponent, ContractComponent, BudgetComponent, DialogMeldingComponent, ReserveringComponent, AfschrijvingComponent, SpaardoelComponent, InfoComponent, DialogLadenComponent, LeningComponent, RekeningComponent, TransactieComponent]
})
export class AppModule { }
