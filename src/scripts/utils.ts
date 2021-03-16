import { officialData as od } from "../data/official-data";

export const errorNumber: number = -9e5; // could be returned by `lastUpdated` in theory
export const errorMessage: string = "錯誤，請聯絡站長";
export const graceTseng: string = "Grace Tseng";

export const isNumber = (x: any) => typeof x == "number";

// ex: 1234.56 -> '1,234.56'
export const beautifyNumber = (x: number): string => x.toLocaleString("en");

// ex: 1234.56 -> '+1,234.56'
export const beautifyNumberWithSign = (x: number): string => (x >= 0 ? "+" + beautifyNumber(x) : beautifyNumber(x));

// ex: '2020-12-01' -> '2020 年 12 月 1 日'
export const toZhDate = (d: string): string => {
  const [yyyy, mm, dd] = d.split("-");
  return `${yyyy} 年 ${mm.replace(/^0/, "")} 月 ${dd.replace(/^0/, "")} 日`;
};

// ex: '2021-01-01' -> '2020-12-31'
export const theDayBefore = (d: string): string => {
  const temp = new Date(Date.parse(d) - 864e5);
  return temp.toISOString().slice(0, 10);
};

// get the last updated value of key = `key` before date = `d`
// return `errorNumber` if can't get the value
export const lastUpdated = (d: string, key: string): number => {
  let day = theDayBefore(d);
  let backtrack = 0;
  while (backtrack < 30) {
    if (isNumber(od[day]?.[key])) {
      return od[day][key];
    }
    day = theDayBefore(day);
    backtrack += 1;
  }
  return errorNumber;
};
