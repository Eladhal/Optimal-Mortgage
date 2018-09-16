import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomComponent } from './bottom/bottom.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { DataFormComponent } from './data-form/data-form.component';
import { PercentageValidatorDirective } from './Directives/percentage-validator.directive';
import { SelectInputDirective } from './Directives/select-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BottomComponent,
    MainTitleComponent,
    DataFormComponent,
    PercentageValidatorDirective,
    SelectInputDirective
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
