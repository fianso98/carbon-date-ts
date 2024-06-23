import { toZonedTime, format } from 'date-fns-tz';

export class CarbonTimeZone {
    private timezone: string;

    constructor(timezoneInput: string | number) {
        this.timezone = this.parseTimezoneInput(timezoneInput);
    }

    private parseTimezoneInput(input: string | number): string {
        if (typeof input === 'number') {
            if (Math.abs(input) > 99) {
                throw new Error('Absolute timezone offset cannot be greater than 99.');
            }
            return this.offsetToTimezoneString(input);
        }
        return input;
    }

    private offsetToTimezoneString(offset: number): string {
        const sign = offset >= 0 ? '+' : '-';
        const paddedHours = Math.floor(Math.abs(offset)).toString().padStart(2, '0');
        const paddedMinutes = (Math.abs(offset) % 1 * 60).toString().padStart(2, '0');
        return `${sign}${paddedHours}:${paddedMinutes}`;
    }

    public toUtc(date: Date): Date {
        const offset = new Date(date).getTimezoneOffset();
        const utcDate = new Date(date.getTime() - offset * 60000);
        return utcDate;
    }

    public fromUtc(date: Date): Date {
        return toZonedTime(date, this.timezone);
    }

    public format(date: Date, formatStr: string): string {
        return format(this.fromUtc(date), formatStr, { timeZone: this.timezone });
    }

    public static fromOffset(offset: number): CarbonTimeZone {
        return new CarbonTimeZone(offset);
    }

    public static fromName(name: string): CarbonTimeZone {
        return new CarbonTimeZone(name);
    }

    public toString(): string {
        return this.timezone;
    }
}
