import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days-of-week',
  templateUrl: './days-of-week.component.html',
  styleUrl: './days-of-week.component.scss'
})
export class DaysOfWeekComponent implements OnInit {
  public daysOfTheWeek: Date[] = [];

  public ngOnInit(): void {
    this.setupDaysOfTheWeek();
  }

  public setupDaysOfTheWeek(): void {
    const arbitraryMonday = new Date(0, 0, 1);

    for (let i = 0; i < 7; i++) {
      this.daysOfTheWeek.push(this.addDays(arbitraryMonday, i));
    }
  }

  private addDays(date: Date, days: number): Date {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

}
