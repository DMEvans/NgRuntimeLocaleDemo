import { Injectable, Optional, SkipSelf } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouteReuseStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { noop } from 'rxjs';

type ShouldReuseRoute = (future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot) => boolean;

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private initialized = false;
  private currentLang = 'en';


  get currentLocale(): string {
    return this.currentLang;
  }

  constructor(
    private router: Router,
    private routeReuseStrategy: RouteReuseStrategy,
    @Optional()
    @SkipSelf()
    otherInstance: LocaleService,
  ) {
    if (otherInstance) throw 'LocaleService should have only one instance.';
  }

  private setRouteReuse(reuse: ShouldReuseRoute) {
    this.routeReuseStrategy.shouldReuseRoute = reuse;
  }

  initLocale(localeId: string) {
    if (this.initialized) return;

    this.setLocale(localeId);

    this.initialized = true;
  }

  public async setLocale(localeId: string) {
    this.currentLang = localeId;

    const { shouldReuseRoute } = this.routeReuseStrategy;

    this.setRouteReuse(() => false);
    this.router.navigated = false;

    await this.router.navigateByUrl(this.router.url).catch(noop);
    this.setRouteReuse(shouldReuseRoute);
  }
}
