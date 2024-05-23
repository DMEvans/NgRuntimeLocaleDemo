import { CommonModule, DatePipe, registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateModule } from "@ngx-translate/core";
import { LocaleProvider } from "./locale/locale.provider";
import { AppComponent } from "./app.component";
import { DaysOfWeekComponent } from "./days-of-week/days-of-week.component";
import { AppRoutingModule } from "./app-routing.module";

import localeFr from '@angular/common/locales/fr';
import localeNl from '@angular/common/locales/nl';
import { RouteReuseStrategy } from "@angular/router";
registerLocaleData(localeFr);
registerLocaleData(localeNl);

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    TranslateModule.forRoot()
  ],
  providers: [
    LocaleProvider,
    DatePipe
  ],
  declarations: [
    AppComponent,
    DaysOfWeekComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
