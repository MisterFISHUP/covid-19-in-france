export const graceTseng: string = "Grace Tseng";
export const startDate: string = "2020-03-01";

export const isNumber = (x: any) => typeof x == "number";

// ex: (123.456, 2) -> 123.46
export const trimDecimal = (num: number, n: number): number => Math.round(num * Math.pow(10, n)) / Math.pow(10, n);

const maxDecimal = 2;

// ex: 1234.567 -> '1,234.57'
// ex: (1234.567, 'fr') -> '1 234,57'
export const beautifyNumber = (x: number, locale: string = "en"): string => {
  x = Math.round(x * Math.pow(10, maxDecimal)) / Math.pow(10, maxDecimal);
  return x.toLocaleString(locale);
};

// ex: 1234.567 -> '+1,234.57'
// ex: (1234.567, 'fr') -> '+1 234,57'
export const beautifyNumberWithSign = (x: number, locale: string = "en"): string =>
  x >= 0 ? "+" + beautifyNumber(x, locale) : beautifyNumber(x, locale);

// ex: 1234567.8 -> '1.23M', 1234.5 -> '1.23k', 123.456 -> '123.45'
// ex: (1234567.8, 'fr') -> '1,23M'
export const minifyNumber = (x: number, locale: string = "en"): string => {
  const absVal = Math.abs(x);
  if (absVal >= 1e9) return beautifyNumber(x / 1e9, locale) + "B";
  if (absVal >= 1e6) return beautifyNumber(x / 1e6, locale) + "M";
  if (absVal >= 1e3) return beautifyNumber(x / 1e3, locale) + "K";
  return beautifyNumber(x, locale);
};

// ex: '2020-12-01' -> '202012'
export const toYYYYMM = (d: string): string => {
  return d.slice(0, 4) + d.slice(5, 7);
};

// ex: '2021-01-02' -> '1/2', '2021-12-01' -> '12/1'
export const toLabelDateMD = (d: string): string => {
  const [yyyy, mm, dd] = d.split("-");
  return `${Number(mm)}/${Number(dd)}`;
};

// ex: '2021-01-02' -> '2/1', '2021-12-01' -> '1/12'
export const toLabelDateDM = (d: string): string => {
  const [yyyy, mm, dd] = d.split("-");
  return `${Number(dd)}/${Number(mm)}`;
};

// ex: '12/31' -> '31/12', '31/12' -> '12/31'
export const reverseMDLabelDate = (d: string): string => {
  const [x, y] = d.split("/");
  return `${y}/${x}`;
};

// ex: '2021-01-01' -> '2020-12-31'
// ex: ('2021-01-01', 2) -> '2020-12-30'
export const theDayBefore = (d: string, n: number = 1): string => {
  const temp = new Date(Date.parse(d) - 864e5 * n);
  return temp.toISOString().slice(0, 10);
};

// ex: ('2021-01-01', 2) -> ['2020-12-31', '2021-01-01']
export const arrayOfDates = (d: string, n: number): string[] =>
  Array.from(Array(n).keys())
    .reverse()
    .map((x) => theDayBefore(d, x));

// ex: (12, 'en') -> 'December'
export const getMonthName = (m: number, locale: string): string => {
  const d = new Date();
  d.setMonth(m - 1);
  return d.toLocaleString(locale, { month: "long" });
};

// ex: 12 -> 'december'
export const monthEnLower = (m: number): string => {
  const monthEn = getMonthName(m, "en");
  return monthEn[0].toLowerCase() + monthEn.slice(1);
};

// return a random date between sY-sM-sD (included) and eY-eM-eD (excluded)
// ex: (2020, 12, 1, 2020, 12, 3) -> { y: 2020, m: 12, d: 1 or 2 }
export const randomDate = (
  sY: number,
  sM: number,
  sD: number,
  eY: number,
  eM: number,
  eD: number
): { y: number; m: number; d: number } => {
  const sDateInMS: number = new Date(sY, sM - 1, sD).getTime();
  const eDateInMS: number = new Date(eY, eM - 1, eD).getTime();
  const rDate = new Date(sDateInMS + Math.floor(Math.random() * (eDateInMS - sDateInMS)));
  return { y: rDate.getFullYear(), m: rDate.getMonth() + 1, d: rDate.getDate() };
};
