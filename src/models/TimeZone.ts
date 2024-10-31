interface TimezoneOffset {
    standardOffset: number;  // Offset in minutes from UTC, positive or negative
    dstOffset: number;       // Additional offset during DST, typically 60 minutes
    dstStart: Date;          // When DST starts
    dstEnd: Date;            // When DST ends
}

class Timezone {
    name: string;
    offsets: TimezoneOffset;

    constructor(name: string, offsets: TimezoneOffset) {
        this.name = name;
        this.offsets = offsets;
    }

    getCurrentOffset(date: Date): number {
        if (date >= this.offsets.dstStart && date <= this.offsets.dstEnd) {
            return this.offsets.standardOffset + this.offsets.dstOffset;
        }
        return this.offsets.standardOffset;
    }
}
