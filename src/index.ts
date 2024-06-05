import { UnitHelpers } from "./helpers/units.helpers";

export class Carbon {
    public date: Date;
    constructor(date: Date = new Date()){
      this.date = date;
    }
    static now() : Carbon {
      const todayDate = new Date();
      return new Carbon(todayDate);
    }

    static create(
      year: number, monthIndex: number, day: number, hours: number = 0, minutes: number = 0, seconds: number = 0, milliseconds: number = 0
    ) : Carbon {     
      UnitHelpers.unitsAreInRange(year, monthIndex, day, hours, minutes, seconds, milliseconds);
      const todayDate = new Date(year, monthIndex - 1 , day, hours, minutes, seconds, milliseconds);
      return new Carbon(todayDate);
    }
    
}