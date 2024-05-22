import { Component } from '@angular/core';
import { LocaleService } from './locale/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularUnitTesting';

  constructor(
    private localeService: LocaleService
  ) {
    this.localeService.initLocale('en');
  }

   public changeLocale(lang: string): void {
    this.localeService.setLocale(lang);
  }
}
