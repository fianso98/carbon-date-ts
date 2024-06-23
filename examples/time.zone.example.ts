
import { CarbonTimeZone } from "../src/core/CarbonTimeZone";

const tz = CarbonTimeZone.fromName('America/New_York');
const date = new Date();
console.log(tz.format(date, 'yyyy-MM-dd HH:mm:ssXXX'));