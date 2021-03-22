export const graceTseng: string = "Grace Tseng";
export const startDate: string = "2020-03-01";
export const neutralGray: string = "rgb(150, 150, 150)";
export const dimNeutralGray: string = "rgb(110, 110, 110)";

export const isNumber = (x: any) => typeof x == "number";

// ex: 1234.567 -> '1,234.57'
const maxDecimal = 2;
export const beautifyNumber = (x: number): string => {
  x = Math.round(x * Math.pow(10, maxDecimal)) / Math.pow(10, maxDecimal)
  return x.toLocaleString("en");
}

// ex: 1234.567 -> '+1,234.57'
export const beautifyNumberWithSign = (x: number): string => (x >= 0 ? "+" + beautifyNumber(x) : beautifyNumber(x));

// ex: '2020-12-01' -> '2020 年 12 月 1 日'
export const toZhDate = (d: string): string => {
  const [yyyy, mm, dd] = d.split("-");
  return `${yyyy} 年 ${mm.replace(/^0/, "")} 月 ${dd.replace(/^0/, "")} 日`;
};

// ex: '2020-12-01' -> '202012'
export const toYYYYMM = (d: string): string => {
  return d.slice(0, 4) + d.slice(5, 7);
}

// ex: '2021-01-01' -> '1/1', '2021-12-1' -> '12/1'
export const toLabelDate = (d: string): string => {
  const [yyyy, mm, dd] = d.split("-");
  return `${Number(mm)}/${Number(dd)}`
}

// ex: '2021-01-01' -> '2020-12-31' (or n = 2 => '2020-12-30')
export const theDayBefore = (d: string, n: number = 1): string => {
  const temp = new Date(Date.parse(d) - 864e5 * n);
  return temp.toISOString().slice(0, 10);
};

// ex: ('2021-01-01', 2) -> ['2020-12-31', '2021-01-01']
export const arrayOfDates = (d: string, n: number): string[] =>
  Array.from(Array(n).keys())
    .reverse()
    .map((x) => theDayBefore(d, x));
