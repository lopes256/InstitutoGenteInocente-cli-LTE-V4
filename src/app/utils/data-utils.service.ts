import { Injectable } from '@angular/core';
import { format, parseISO, addMonths, getDaysInMonth, endOfMonth, add } from 'date-fns';
import { ptBR } from "date-fns/locale";

export const DAYS_OF_THE_WEEK: number = 7;
export const MONTHLY_DATE: number = 1;
export const BIMONTHLY_DATE: number = 2;
export const QUARTERLY_DATE: number = 3;
export const HALF_YEARLY_DATE: number = 6;
export const ANNUAL_DATE: number = 1;

@Injectable({
  providedIn: 'root'
})
export class DataUtilsService {

  getLastDayOfMonth(date: Date): Date {
    return endOfMonth(date);
  }

  getWeeklyDateList(currentDate: Date, numberOfWeek: number): Date[] {
    let listDates: Date[] = [];
    let start: number = 1;

    for (let i = 0; i < numberOfWeek; i++) {
      let resultAdd = add(currentDate, {
        days: (DAYS_OF_THE_WEEK * start++),
      });

      console.log([resultAdd, DAYS_OF_THE_WEEK * start]);
      listDates.push(resultAdd);
    }

    return listDates;
  }

  getMonthlyDateList(currentDate: Date, numberOfMonths: number): Date[] {
    let listDates: Date[] = [];

    for (let i = 0; i < numberOfMonths; i++) {
      let resultAdd = add(currentDate, {
        months: i + MONTHLY_DATE,
      });

      listDates.push(resultAdd);
    }

    return listDates;
  }

  getBimonthlyDateList(currentDate: Date, numberOfMonths: number): Date[] {
    let listDates: Date[] = [];

    for (let i = 1; i <= numberOfMonths; i++) {
      let resultAdd = add(currentDate, {
        months: i * BIMONTHLY_DATE,
      });

      listDates.push(resultAdd);
    }

    return listDates;
  }

  getQuarterlyDateList(currentDate: Date, numberOfMonths: number): Date[] {
    let listDates: Date[] = [];

    for (let i = 1; i <= numberOfMonths; i++) {
      let resultAdd = add(currentDate, {
        months: i * QUARTERLY_DATE,
      });

      listDates.push(resultAdd);
    }

    return listDates;
  }

  getHalfYearlyDateList(currentDate: Date, numberOfMonths: number): Date[] {
    let listDates: Date[] = [];

    for (let i = 1; i <= numberOfMonths; i++) {
      let resultAdd = add(currentDate, {
        months: i * HALF_YEARLY_DATE,
      });

      listDates.push(resultAdd);
    }

    return listDates;
  }

  getYearlyDateList(currentDate: Date, numberOfMonths: number): Date[] {
    let listDates: Date[] = [];

    for (let i = 1; i <= numberOfMonths; i++) {
      let resultAdd = add(currentDate, {
        years: i * ANNUAL_DATE
      });

      listDates.push(resultAdd);
    }

    return listDates;
  }

  toISOFormat(data: string): Date {
    const [DD, MM, YYYY] = data.split('/');
    return new Date(Number(YYYY), Number(MM), Number(DD));
  }

  formatDate(thisDate: Date): string {
    const result = format(thisDate, "dd/MM/yyyy", {
      locale: ptBR
    })
    return result;
  }

}
