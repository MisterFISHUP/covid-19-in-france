// added `"resolveJsonModule": true,` in `tsconfig.json` in `@tsconfig/docusaurus` to import json
import React from "react";
import { Line } from "react-chartjs-2";
import webLinks from "../data/website-links";
import od from "../data/official-data/official-data.json";
import { fbPostsLinks as fbLinks } from "../data/facebook-posts-links/all";
import {
  beautifyNumber as bn,
  beautifyNumberWithSign as bnws,
  toZhDate as zhDate,
  theDayBefore as tdb,
  graceTseng as gt,
  startDate,
  isNumber as isNum,
  toYYYYMM,
  arrayOfDates as arrD,
  toLabelDate as lblDate,
  neutralGray,
  dimNeutralGray,
} from "./utils";

// used className `source_block`
const SourceOfData = () => (
  <div className="source_block">
    數據來源：
    <a href={webLinks.gouvernementFr} target="_blank">
      gouvernement.fr
    </a>{" "}
    以及{" "}
    <a href={webLinks.spf} target="_blank">
      Santé publique France
    </a>
    。詳情請見...
  </div>
);

// not empty if `casesCumul` exists for the date
const CasesCumul = ({ date }) => {
  const casesCumul = od[date]?.casesCumul;
  const casesCumulTdb = od[tdb(date)]?.casesCumul;
  const casesEhpadEmsCumul = od[date]?.casesEhpadEmsCumul;
  const casesEhpadEmsCumulTdb = od[tdb(date)]?.casesEhpadEmsCumul;
  const casesRtPcrCumul = od[date]?.casesRtPcrCumul;
  const casesRtPcrCumulTdb = od[tdb(date)]?.casesRtPcrCumul;
  const casesAntigCumul = od[date]?.casesAntigCumul;
  const casesAntigCumulTdb = od[tdb(date)]?.casesAntigCumul;

  if (!isNum(casesCumul)) {
    return <></>;
  } else {
    return (
      <>
        <h3>🧫 累積確診數</h3>
        <ul>
          <li>
            總累計：{bn(casesCumul)}
            {isNum(casesCumulTdb) ? <em> ({bnws(casesCumul - casesCumulTdb)})</em> : null}
          </li>
          {isNum(casesEhpadEmsCumul) ? (
            <li>
              養老院/護理院：{bn(casesEhpadEmsCumul)}
              {!isNum(casesEhpadEmsCumulTdb) ? null : casesEhpadEmsCumul - casesEhpadEmsCumulTdb ? (
                <em> ({bnws(casesEhpadEmsCumul - casesEhpadEmsCumulTdb)})</em>
              ) : (
                "（未更新）"
              )}
            </li>
          ) : null}
          {isNum(casesRtPcrCumul) ? (
            <li>
              RT-PCR 確診：{bn(casesRtPcrCumul)}
              {isNum(casesRtPcrCumulTdb) ? <em> ({bnws(casesRtPcrCumul - casesRtPcrCumulTdb)})</em> : null}
            </li>
          ) : null}
          {isNum(casesAntigCumul) ? (
            <li>
              抗原檢測確診：{bn(casesAntigCumul)}
              {isNum(casesAntigCumulTdb) ? <em> ({bnws(casesAntigCumul - casesAntigCumulTdb)})</em> : null}
            </li>
          ) : null}
        </ul>
      </>
    );
  }
};

// not empty if `deathsHospiCumul` exists for the date
const DeathsCumul = ({ date }) => {
  const deathsCumul = od[date]?.deathsCumul;
  const deathsCumulTdb = od[tdb(date)]?.deathsCumul;
  const deathsHospiCumul = od[date]?.deathsHospiCumul;
  const deathsHospiCumulTdb = od[tdb(date)]?.deathsHospiCumul;
  const deathsEhpadEmsCumul = od[date]?.deathsEhpadEmsCumul;
  const deathsEhpadEmsCumulTdb = od[tdb(date)]?.deathsEhpadEmsCumul;

  if (!isNum(deathsHospiCumul)) {
    return <></>;
  } else {
    return (
      <>
        <h3>☠️ 累積死亡數</h3>
        <ul>
          {isNum(deathsCumul) ? (
            <li>
              總累計：{bn(deathsCumul)}
              {isNum(deathsCumulTdb) ? <em> ({bnws(deathsCumul - deathsCumulTdb)})</em> : null}
            </li>
          ) : null}
          <li>
            醫院：{bn(deathsHospiCumul)}
            {isNum(deathsHospiCumulTdb) ? <em> ({bnws(deathsHospiCumul - deathsHospiCumulTdb)})</em> : null}
          </li>
          {isNum(deathsEhpadEmsCumul) ? (
            <li>
              養老院/護理院：{bn(deathsEhpadEmsCumul)}
              {!isNum(deathsEhpadEmsCumulTdb) ? null : deathsEhpadEmsCumul - deathsEhpadEmsCumulTdb ? (
                <em> ({bnws(deathsEhpadEmsCumul - deathsEhpadEmsCumulTdb)})</em>
              ) : (
                "（未更新）"
              )}
            </li>
          ) : null}
        </ul>
      </>
    );
  }
};

// not empty if `hospi` exists for the date
const Hospi = ({ date }) => {
  const hospi = od[date]?.hospi;
  const hospiTdb = od[tdb(date)]?.hospi;
  const hospiNew = od[date]?.hospiNew;
  const hospiNewTdb = od[tdb(date)]?.hospiNew;
  const hospiWeek = od[date]?.hospiWeek;
  const hospiWeekWb = od[tdb(date, 7)]?.hospiWeek;
  if (!isNum(hospi)) {
    return <></>;
  } else {
    return (
      <>
        <h3>🏥 住院數</h3>
        <ul>
          <li>
            當前：{bn(hospi)}
            {isNum(hospiTdb) ? <em> ({bnws(hospi - hospiTdb)})</em> : null}
          </li>
          {isNum(hospiNew) ? (
            <li>
              本日入院：{bn(hospiNew)}
              {isNum(hospiNewTdb) ? <em> ({bnws(hospiNew - hospiNewTdb)})</em> : null}
            </li>
          ) : null}
          {isNum(hospiWeek) ? (
            <li>
              過去七日入院：{bn(hospiWeek)}
              {isNum(hospiWeekWb) ? <em>（與七日前數據相比 {bnws(hospiWeek - hospiWeekWb)}）</em> : null}
            </li>
          ) : null}
        </ul>
      </>
    );
  }
};

// not empty if `icu` exists for the date
const Icu = ({ date }) => {
  const icu = od[date]?.icu;
  const icuTdb = od[tdb(date)]?.icu;
  const icuNew = od[date]?.icuNew;
  const icuNewTdb = od[tdb(date)]?.icuNew;
  const icuWeek = od[date]?.icuWeek;
  const icuWeekWb = od[tdb(date, 7)]?.icuWeek;
  if (!isNum(icu)) {
    return <></>;
  } else {
    return (
      <>
        <h3>😞 重症數</h3>
        <ul>
          <li>
            當前：{bn(icu)}
            {isNum(icuTdb) ? <em> ({bnws(icu - icuTdb)})</em> : null}
          </li>
          {isNum(icuNew) ? (
            <li>
              本日重症：{bn(icuNew)}
              {isNum(icuNewTdb) ? <em> ({bnws(icuNew - icuNewTdb)})</em> : null}
            </li>
          ) : null}
          {isNum(icuWeek) ? (
            <li>
              過去七日重症：{bn(icuWeek)}
              {isNum(icuWeekWb) ? <em>（與七日前數據相比 {bnws(icuWeek - icuWeekWb)}）</em> : null}
            </li>
          ) : null}
        </ul>
      </>
    );
  }
};

// not empty if `returnHomeCumul` exists for the date
const ReturnHomeCumul = ({ date }) => {
  const returnHomeCumul = od[date]?.returnHomeCumul;
  const returnHomeCumultdb = od[tdb(date)]?.returnHomeCumul;
  if (!isNum(returnHomeCumul)) {
    return <></>;
  } else {
    return (
      <>
        <h3>🏡 累積出院數</h3>
        <ul>
          <li>
            總累計：
            {bn(returnHomeCumul)}
            {isNum(returnHomeCumultdb) ? <em> ({bnws(returnHomeCumul - returnHomeCumultdb)})</em> : null}
          </li>
        </ul>
      </>
    );
  }
};

// not empty if `vac1` exists for the date
const VacCumul = ({ date }) => {
  const vac1 = od[date]?.vac1;
  const vac1Tdb = od[tdb(date)]?.vac1;
  const vac2 = od[date]?.vac2;
  const vac2Tdb = od[tdb(date)]?.vac2;
  if (!isNum(vac1)) {
    return <></>;
  } else {
    return (
      <>
        <h3>💉 疫苗接種數</h3>
        <ul>
          <li>
            第 1 劑接種累計：{bn(vac1)}
            {isNum(vac1Tdb) ? <em> ({bnws(vac1 - vac1Tdb)})</em> : null}
          </li>
          {isNum(vac2) ? (
            <li>
              第 2 劑接種累計：{bn(vac2)}
              {isNum(vac2Tdb) ? <em> ({bnws(vac2 - vac2Tdb)})</em> : null}
            </li>
          ) : null}
        </ul>
      </>
    );
  }
};

// not empty if `icuOccupR` exists for the date
const Indicators = ({ date }) => {
  const incidR = od[date]?.incidR;
  const icuOccupR = od[date]?.icuOccupR;
  const r = od[date]?.r;
  const posR = od[date]?.posR;
  const vacEhpadUsldPct = od[date]?.vacEhpadUsldPct;
  const highVul = od[date]?.highVul;
  const clusters = od[date]?.clusters;
  if (!isNum(icuOccupR)) {
    return <></>;
  }
  return (
    <>
      <h3>📊 各項指標數據</h3>
      <ul>
        {isNum(incidR) ? <li>法國每 10 萬人確診數：{bn(incidR)}</li> : null}
        <li>重症病房佔有率：{bn(icuOccupR)}%</li>
        {isNum(r) ? <li>基本傳染數 (R)：{bn(r)}</li> : null}
        {isNum(posR) ? <li>過去七日陽性確診率：{bn(posR)}%</li> : null}
        {isNum(highVul) ? <li>疫情列為高度脆弱地區：共 {highVul} 區</li> : null}
        {Array.isArray(vacEhpadUsldPct) ? (
          <li>
            養老院/長照機構接種至少 1 劑疫苗比例：{bn(vacEhpadUsldPct[0])}%（截至 {vacEhpadUsldPct[1]}）
          </li>
        ) : null}
        {Array.isArray(clusters) ? (
          <li>
            2020 年 5/9 起（或第一次解封後）至 {clusters[2]} 群聚感染情況：尚在調查中的有 {bn(clusters[0])}{" "}
            起，其中包含養老院 {bn(clusters[1])} 起
          </li>
        ) : null}
      </ul>
    </>
  );
};

const ChartCases = ({ date }) => {
  const duration = 14;
  const renderChartThold = 5;
  const dataName = "casesCumul";

  const listOfDates: string[] = arrD(date, duration);
  const dataCasesCumul = listOfDates.map((d) => od[d]?.[dataName]);
  const definedDataCasesCumul: number[] = dataCasesCumul.filter(Number);

  // don't show the chart if there are less than `renderChartThold` entries
  if (definedDataCasesCumul.length < renderChartThold) return <></>;

  const dataMin = Math.min(...definedDataCasesCumul);
  const stepSize = dataMin > 200000 ? 10000 : dataMin > 2000 ? 1000 : 100;
  const suggestedMin = Math.max(0, dataMin - 2 * stepSize);

  const data = {
    labels: listOfDates.map(lblDate),
    datasets: [
      {
        label: "總累計",
        data: dataCasesCumul,
        fill: false,
        pointBackgroundColor: "rgb(54, 162, 235, 1)",
        borderColor: "rgb(54, 162, 235, 0.8)",
        borderWidth: 1,
        pointHoverRadius: 5,
        yAxisID: "y-axis-cumul",
      },
      {
        type: "bar",
        label: "當日確診數",
        data: dataCasesCumul.map((x, i, arr) => (i > 0 ? x - arr[i - 1] : x - od[tdb(date, duration)]?.[dataName])),
        backgroundColor: "rgb(255, 97, 132, 0.2)",
        hoverBackgroundColor: "rgb(255, 97, 132, 0.5)",
        borderWidth: 1,
        borderColor: "rgb(231, 84, 116, 0.4)",
        hoverBorderColor: "rgb(231, 84, 116, 0.9)",
        yAxisID: "y-axis-var",
      },
    ],
  };
  const options = {
    title: {
      display: true,
      fontSize: 24,
      fontColor: dimNeutralGray,
      text: "確診數近兩週走勢",
    },
    legend: {
      labels: {
        fontSize: 18,
        fontColor: neutralGray,
      },
    },
    tooltips: {
      titleFontSize: 20,
      bodyFontSize: 16,
      xPadding: 10,
      yPadding: 8,
      caretSize: 8,
    },
    scales: {
      xAxes: [
        {
          offset: true,
          ticks: {
            fontColor: neutralGray,
          },
        },
      ],
      yAxes: [
        {
          id: "y-axis-cumul",
          position: "left",
          ticks: {
            maxTicksLimit: 9,
            fontColor: neutralGray,
            stepSize: stepSize,
            suggestedMin: suggestedMin,
          },
        },
        {
          id: "y-axis-var",
          position: "right",
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            maxTicksLimit: 9,
            fontColor: neutralGray,
          },
        },
      ],
    },
  };
  return <Line data={data} options={options} />;
};

// --------
// EXPORTS
// --------

// used className `subtitle`
export const Subtitle = ({ date }) => {
  const n = (Date.parse(date) - Date.parse(startDate)) / 864e5;
  return <p className="subtitle">{`${zhDate(date)}法國新冠肺炎疫情匯報。日誌第 ${n + 1} 篇。`}</p>;
};

export const Grace = ({ children }) => (
  <a>
    <em>
      {gt}: {children}
    </em>
  </a>
);

export const Fish = ({ children }) => (
  <a>
    <em>FISH UP: {children}</em>
  </a>
);

// date is necessary; if srcx is absent, img will be the main img
// used className: `img-journal`, `caption`
export const Figure = ({ date, srcx, children }) => {
  const folder = `/img/journal/${toYYYYMM(date)}/`;
  const fileName = `covid-19-in-france-${date}${srcx ? "-" + srcx : ""}.jpg`;
  const caption = children ? children : `${zhDate(date)}法國新冠疫情匯報`;

  const getText = (reactElem: any): string => {
    if (typeof reactElem == "string") return reactElem;
    if (Array.isArray(reactElem)) return reactElem.map(getText).join("");
    if (typeof reactElem === "object") return getText(reactElem.props.children);
    return "";
  };

  return (
    <>
      <img src={folder + fileName} className="img-journal" alt={getText(caption)} title={getText(caption)} />
      <div className="caption">{caption}</div>
    </>
  );
};

export const OfficialData = ({ date }) => {
  return (
    <>
      <SourceOfData />
      <ChartCases date={date} />
      <CasesCumul date={date} />
      <DeathsCumul date={date} />
      <Hospi date={date} />
      <Icu date={date} />
      <ReturnHomeCumul date={date} />
      <VacCumul date={date} />
      <Indicators date={date} />
    </>
  );
};

// used className `source_block`
export const SourceFb = ({ date }) => {
  const phrase = `📝 以下內容整理於 ${gt} 在臉書社團中的`;
  const thisPost = "此貼文";
  const linkTitle = "前往臉書社團貼文";
  let content = <></>;
  if (!fbLinks.hasOwnProperty(date)) {
    return content;
  }

  if (typeof fbLinks[date] == "string") {
    content = (
      <>
        {phrase}
        <a href={fbLinks[date]} title={linkTitle} target="_blank">
          {thisPost}
        </a>
        。
      </>
    );
  } else if (Array.isArray(fbLinks[date])) {
    const fbLinksNum: number = fbLinks[date].length;
    content = fbLinks[date].map((link: string, i: number) => (
      <React.Fragment key={i}>
        {i == 0 ? phrase : i == fbLinksNum - 1 ? "以及" : "、"}
        <a href={link} title={linkTitle} target="_blank">
          {thisPost}
        </a>
        {i == fbLinksNum - 1 ? "。" : ""}
      </React.Fragment>
    ));
  }
  return <div className="source_block">{content}</div>;
};
