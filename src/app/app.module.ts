import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddCommas} from './pipes/addCommasToNum.pipe';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BottomComponent} from './bottom/bottom.component';
import {MainTitleComponent} from './main-title/main-title.component';
import {DataFormComponent} from './data-form/data-form.component';
import {PercentageValidatorDirective} from './Directives/percentage-validator.directive';
import {SelectInputDirective} from './Directives/select-input.directive';
import { NumberValidatorDirective } from './Directives/number-validator.directive';
import { SumValidatorDirective } from './Directives/sum-validator.directive';

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
        SumValidatorDirective
    ],
    imports: [
        BrowserModule, FormsModule, HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
