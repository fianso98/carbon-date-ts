import { Carbon } from "../src";

/**
 * we compare year/month/day/hour/minute 
 * cause there is a chance it will have slight diffrences 
 */

test('expect date of Carbon.now() to equal new Date()', () => {
    const now = Carbon.now();
    const currentDate = new Date();

    expect(now.date.getFullYear()).toBe(currentDate.getFullYear());
    expect(now.date.getMonth()).toBe(currentDate.getMonth());
    expect(now.date.getDate()).toBe(currentDate.getDate());
    expect(now.date.getHours()).toBe(currentDate.getHours());
    expect(now.date.getMinutes()).toBe(currentDate.getMinutes());
});
/**
 * in the Date we set month to equal 3 instead of 4 
 * cause JavaScript months are 0-based
 */

test('expect date of Carbon.create(2024, 4, 12) to equal new Date(2024, 3, 12)', () => {
    const now = Carbon.create(2024, 4, 12);
    const currentDate = new Date(2024, 3, 12);

    expect(now.date.getFullYear()).toBe(currentDate.getFullYear());
    expect(now.date.getMonth()).toBe(currentDate.getMonth());
    expect(now.date.getDate()).toBe(currentDate.getDate());
    expect(now.date.getHours()).toBe(currentDate.getHours());
    expect(now.date.getMinutes()).toBe(currentDate.getMinutes());
});

test('expect date of new Carbon() to equal new Date()', () => {
    const now = new Carbon();
    const currentDate = new Date();

    expect(now.date.getFullYear()).toBe(currentDate.getFullYear());
    expect(now.date.getMonth()).toBe(currentDate.getMonth());
    expect(now.date.getDate()).toBe(currentDate.getDate());
    expect(now.date.getHours()).toBe(currentDate.getHours());
    expect(now.date.getMinutes()).toBe(currentDate.getMinutes());
});

test('should throw an error for an invalid year', () => {
    expect(() => {
        Carbon.create(10000, 4, 12);
    }).toThrow(RangeError);
});

test('should throw an error for an invalid month', () => {
    expect(() => {
        Carbon.create(2024, 13, 12);
    }).toThrow(RangeError);
});

test('should throw an error for an invalid day', () => {
    expect(() => {
        Carbon.create(2024, 4, 32);
    }).toThrow(RangeError);
});

test('should throw an error for invalid hours', () => {
    expect(() => {
        Carbon.create(2024, 4, 12, 24);
    }).toThrow(RangeError);
});

test('should throw an error for invalid minutes', () => {
    expect(() => {
        Carbon.create(2024, 4, 12, 10, 60);
    }).toThrow(RangeError);
});

test('should throw an error for invalid seconds', () => {
    expect(() => {
        Carbon.create(2024, 4, 12, 10, 30, 60);
    }).toThrow(RangeError);
});

test('should throw an error for invalid milliseconds', () => {
    expect(() => {
        Carbon.create(2024, 4, 12, 10, 30, 15, 1000);
    }).toThrow(RangeError);
});
