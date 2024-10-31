import { LocaleEnum } from "../enums/locale.enum";
import { TimeZoneEnum } from "../enums/timezone.enum";


export class DateTime {
    private dateTime: Date;

    constructor(
        private timeZone: TimeZoneEnum = TimeZoneEnum.UTC,
        private locale: LocaleEnum = LocaleEnum.enUS,
        date?: Date
    ) {
        this.dateTime = date ? new Date(date) : new Date();
    }

    public static now(timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS): DateTime {
        return new DateTime(timeZone, locale);
    }

    public static initialize(year: number, month: number, day: number, hour: number = 0, minute: number = 0, second: number = 0, timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS): DateTime {
        const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
        return new DateTime(timeZone, locale, date);
    }

    public static fromDate(date: Date, timeZone: TimeZoneEnum = TimeZoneEnum.UTC, locale: LocaleEnum = LocaleEnum.enUS): DateTime {
        return new DateTime(timeZone, locale, date);
    }

    public setDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number): void {
        this.dateTime = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
    }

    public addMilliseconds(milliseconds: number): void {
        this.dateTime = new Date(this.dateTime.getTime() + milliseconds);
    }

    public addSeconds(seconds: number): void {
        this.addMilliseconds(seconds * 1000);
    }

    public addMinutes(minutes: number): void {
        this.addSeconds(minutes * 60);
    }

    public addHours(hours: number): void {
        this.addMinutes(hours * 60);
    }

    public addDays(days: number): void {
        this.addHours(days * 24);
    }

    public addMonths(months: number): void {
        const newMonth = this.dateTime.getUTCMonth() + months;
        this.dateTime.setUTCMonth(newMonth);
    }

    public addYears(years: number): void {
        this.addMonths(years * 12);
    }

    public format(format: string): string {
        const dateOptions: Intl.DateTimeFormatOptions = {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: this.timeZone
        };
        const formatter = new Intl.DateTimeFormat(this.locale, dateOptions);
        return formatter.format(this.dateTime);
    }

    public toISO(): string {
        return this.dateTime.toISOString();
    }

    public getDate(): string {
        const pad = (num: number) => num.toString().padStart(2, '0');
        return `${this.dateTime.getUTCFullYear()}-${pad(this.dateTime.getUTCMonth() + 1)}-${pad(this.dateTime.getUTCDate())}`;
    }

    public getTime(): string {
        const pad = (num: number) => num.toString().padStart(2, '0');
        return `${pad(this.dateTime.getUTCHours())}:${pad(this.dateTime.getUTCMinutes())}:${pad(this.dateTime.getUTCSeconds())}`;
    }
}

// Usage example:
const dt = DateTime.now(TimeZoneEnum.UTC, LocaleEnum.enUS);
console.log(dt.toISO());
console.log(dt.getDate());
console.log(dt.getTime());
