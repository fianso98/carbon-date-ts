
import { DateTime } from "../src/core/CarbonTimeZone";
import { LocaleEnum } from "../src/enums/locale.enum";
import { TimeZoneEnum } from "../src/enums/timezone.enum";

const dt = DateTime.now(TimeZoneEnum.UTC, LocaleEnum.enUS);
console.log(dt.format('yyyy-MM-dd HH:mm:ss'));
console.log(dt.toISO());
console.log(dt.getDate());
