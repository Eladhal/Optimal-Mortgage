import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddCommas} from './pipes/addCommasToNum.pipe';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BottomComponent} from './bottom/bottom.component';
import {MainTitleComponent} from './main-title/main-title.component';
import {DataFormComponent} from './components/data-form/data-form.component';
import {PercentageValidatorDirective} from './Directives/percentage-validator.directive';
import {SelectInputDirective} from './Directives/select-input.directive';
import { NumberValidatorDirective } from './Directives/number-validator.directive';
import { SumValidatorDirective } from './Directives/sum-validator.directive';
import { PropertyValidatorDirective } from './Directives/property-validator.directive';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BottomComponent,
        MainTitleComponent,
        DataFormComponent,
        PercentageValidatorDirective,
        SelectInputDirective,
        AddCommas,
        NumberValidatorDirective,
        SumValidatorDirective,
        PropertyValidatorDirective,
        ResultsComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
