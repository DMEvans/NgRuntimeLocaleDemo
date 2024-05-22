import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DaysOfWeekComponent } from "./days-of-week/days-of-week.component";

const routes: Routes = [
  {
    path: '',
    component: DaysOfWeekComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
