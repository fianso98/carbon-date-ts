import { HOURS_PER_DAY, MICROSECONDS_PER_MILLISECOND, MILLISECONDS_PER_SECOND, MINUTES_PER_HOUR, MONTHS_PER_YEAR, SECONDS_PER_MINUTE } from "../constants/global.constants";
import { UnitsEnum } from "../enums/units.enum";

export class UnitHelpers {
    private static getRangesByUnit(daysInMonth : number = 31 ): {[key in  UnitsEnum]: Record<number, number>} {
        return {
            [UnitsEnum.YEAR] : [1, 9999],
            [UnitsEnum.MONTH] : [1, MONTHS_PER_YEAR],
            [UnitsEnum.DAY] : [1, daysInMonth],
            [UnitsEnum.HOUR] : [0, HOURS_PER_DAY - 1],
            [UnitsEnum.MINUTE] : [0, MINUTES_PER_HOUR - 1],
            [UnitsEnum.SECOND] : [0, SECONDS_PER_MINUTE - 1],
            [UnitsEnum.MILLI]: [0, MILLISECONDS_PER_SECOND - 1],
            [UnitsEnum.MILLISECOND]: [0, MILLISECONDS_PER_SECOND - 1],
            [UnitsEnum.MICRO]: [0, MICROSECONDS_PER_MILLISECOND - 1],
            [UnitsEnum.MICROSECOND]: [0, MICROSECONDS_PER_MILLISECOND - 1]
        };
    }

    static unitsAreInRange(
        year: number, monthIndex: number, day: number, hours: number = 0, minutes: number = 0, seconds: number = 0, milliseconds: number = 0
    ): boolean {
        const ranges = UnitHelpers.getRangesByUnit();
        if (year < ranges[UnitsEnum.YEAR][0] || year > ranges[UnitsEnum.YEAR][1]) {
            throw new RangeError(`Year must be between ${ranges[UnitsEnum.YEAR][0]} and ${ranges[UnitsEnum.YEAR][1]}`);
        }
  
        if (monthIndex < ranges[UnitsEnum.MONTH][0] || monthIndex > ranges[UnitsEnum.MONTH][1]) {
            throw new RangeError(`Month must be between ${ranges[UnitsEnum.MONTH][0]} and ${ranges[UnitsEnum.MONTH][1]}`);
        }
  
        if (day < ranges[UnitsEnum.DAY][0] || day > ranges[UnitsEnum.DAY][1]) {
            throw new RangeError(`Day must be between ${ranges[UnitsEnum.DAY][0]} and ${ranges[UnitsEnum.DAY][1]}`);
        }
  
        if (hours && (hours < ranges[UnitsEnum.HOUR][0] || hours > ranges[UnitsEnum.HOUR][1])) {
            throw new RangeError(`Hours must be between ${ranges[UnitsEnum.HOUR][0]} and ${ranges[UnitsEnum.HOUR][1]}`);
        }
  
        if (minutes && (minutes < ranges[UnitsEnum.MINUTE][0] || minutes > ranges[UnitsEnum.MINUTE][1])) {
            throw new RangeError(`Minutes must be between ${ranges[UnitsEnum.MINUTE][0]} and ${ranges[UnitsEnum.MINUTE][1]}`);
        }
  
        if (seconds && (seconds < ranges[UnitsEnum.SECOND][0] || seconds > ranges[UnitsEnum.SECOND][1])) {
            throw new RangeError(`Seconds must be between ${ranges[UnitsEnum.SECOND][0]} and ${ranges[UnitsEnum.SECOND][1]}`);
        }
  
        if (milliseconds && (milliseconds < ranges[UnitsEnum.MILLISECOND][0] || milliseconds > ranges[UnitsEnum.MILLISECOND][1])) {
            throw new RangeError(`Milliseconds must be between ${ranges[UnitsEnum.MILLISECOND][0]} and ${ranges[UnitsEnum.MILLISECOND][1]}`);
        } 
        return true;
    }
}