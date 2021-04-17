import React from "react";
import { Line } from "react-chartjs-2";
import { chartSettings } from "./chartSettings";
import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { fbPostsLinks as fbLinks, officialData as od } from "../data/data";
import { newsEarliestDateISO } from "./dateVariables";
import {
  beautifyNumber as bn,
  beautifyNumberWithSign as bnws,
  theDayBefore as tdb,
  graceTseng as gt,
  startDate,
  isNumber as isNum,
  toYYYYMM,
  arrayOfDates as arrD,
  toLabelDateMD as lblDateMD,
  toLabelDateDM as lblDateDM,
  reverseMDLabelDate as revMD,
  getMonthName,
} from "./utils";

// not empty if `casesCumul` exists for the date
const CasesCumul = ({ date }) => {
  const casesCumul = od[date]?.casesCumul;
  const casesCumulTdb = od[tdb(date)]?.casesCumul;
  const casesEhpadEmsCumul = od[date]?.casesEhpadEmsCumul;
  const casesEhpadEmsCumulTdb = od[tdb(date)]?.casesEhpadEmsCumul;
  const casesRtPcr = od[date]?.casesRtPcr;
  const casesAntig = od[date]?.casesAntig;

  if (!isNum(casesCumul)) {
    return <></>;
  } else {
    return (
      <div>
        <h3>
          <Translate id="digestComp.CasesCumul.title" description="The heading of CasesCumul">
            🧫 累積確診數
          </Translate>
        </h3>
        <ul>
          <li>
            <Translate id="digestComp.CasesCumul.casesCumul" description="The description for casesCumul in CasesCumul">
              總累計：
            </Translate>
            {bn(casesCumul)}
            {isNum(casesCumulTdb) ? <em> ({bnws(casesCumul - casesCumulTdb)})</em> : null}
          </li>
          {isNum(casesEhpadEmsCumul) ? (
            <li>
              <Translate
                id="digestComp.CasesCumul.casesEhpadEmsCumul"
                description="The description for casesEhpadEmsCumul in CasesCumul"
              >
                養老院/護理院：
              </Translate>
              {bn(casesEhpadEmsCumul)}
              {!isNum(casesEhpadEmsCumulTdb) ? null : casesEhpadEmsCumul - casesEhpadEmsCumulTdb ? (
                <em> ({bnws(casesEhpadEmsCumul - casesEhpadEmsCumulTdb)})</em>
              ) : (
                <em>
                  <Translate
                    id="digestComp.CasesCumul.noUpdateEhpadEms"
                    description="The no update hint for casesEhpadEmsCumul in CasesCumul, inside parentheses"
                  >
                    （未更新）
                  </Translate>
                </em>
              )}
            </li>
          ) : null}
          {isNum(casesRtPcr) ? (
            <li>
              <Translate
                id="digestComp.CasesCumul.casesRtPcr"
                description="The description for casesRtPcr in CasesCumul"
              >
                新增 RT-PCR 確診：
              </Translate>
              {bn(casesRtPcr)}
            </li>
          ) : null}
          {isNum(casesAntig) ? (
            <li>
              <Translate
                id="digestComp.CasesCumul.casesAntig"
                description="The description for casesAntig in CasesCumul"
              >
                新增抗原檢測確診：
              </Translate>
              {bn(casesAntig)}
            </li>
          ) : null}
        </ul>
      </div>
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
      <div>
        <h3>
          <Translate id="digestComp.DeathsCumul.title" description="The heading of DeathsCumul">
            ☠️ 累積死亡數
          </Translate>
        </h3>
        <ul>
          {isNum(deathsCumul) ? (
            <li>
              <Translate
                id="digestComp.DeathsCumul.deathsCumul"
                description="The description for deathsCumul in DeathsCumul"
              >
                總累計：
              </Translate>
              {bn(deathsCumul)}
              {isNum(deathsCumulTdb) ? <em> ({bnws(deathsCumul - deathsCumulTdb)})</em> : null}
            </li>
          ) : null}
          <li>
            <Translate
              id="digestComp.DeathsCumul.deathsHospiCumul"
              description="The description for deathsHospiCumul in DeathsCumul"
            >
              醫院：
            </Translate>
            {bn(deathsHospiCumul)}
            {isNum(deathsHospiCumulTdb) ? <em> ({bnws(deathsHospiCumul - deathsHospiCumulTdb)})</em> : null}
          </li>
          {isNum(deathsEhpadEmsCumul) ? (
            <li>
              <Translate
                id="digestComp.DeathsCumul.deathsEhpadEmsCumul"
                description="The description for deathsEhpadEmsCumul in DeathsCumul"
              >
                養老院/護理院：
              </Translate>
              {bn(deathsEhpadEmsCumul)}
              {!isNum(deathsEhpadEmsCumulTdb) ? null : deathsEhpadEmsCumul - deathsEhpadEmsCumulTdb ? (
                <em> ({bnws(deathsEhpadEmsCumul - deathsEhpadEmsCumulTdb)})</em>
              ) : (
                <em>
                  <Translate
                    id="digestComp.DeathsCumul.noUpdateEhpadEms"
                    description="The no update hint for deathsEhpadEmsCumul in DeathsCumul, inside parentheses"
                  >
                    （未更新）
                  </Translate>
                </em>
              )}
            </li>
          ) : null}
        </ul>
      </div>
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
      <div>
        <h3>
          <Translate id="digestComp.Hospi.title" description="The heading of Hospi">
            🏥 住院數
          </Translate>
        </h3>
        <ul>
          <li>
            <Translate id="digestComp.Hospi.hospi" description="The description for hospi in Hospi">
              當前：
            </Translate>
            {bn(hospi)}
            {isNum(hospiTdb) ? <em> ({bnws(hospi - hospiTdb)})</em> : null}
          </li>
          {isNum(hospiNew) ? (
            <li>
              <Translate id="digestComp.Hospi.hospiNew" description="The description for hospiNew in Hospi">
                本日入院：
              </Translate>
              {bn(hospiNew)}
              {isNum(hospiNewTdb) ? <em> ({bnws(hospiNew - hospiNewTdb)})</em> : null}
            </li>
          ) : null}
          {isNum(hospiWeek) ? (
            <li>
              <Translate id="digestComp.Hospi.hospiWeek" description="The description for hospiWeek in Hospi">
                過去七日入院：
              </Translate>
              {bn(hospiWeek)}
              {isNum(hospiWeekWb) ? (
                <em>
                  <Translate
                    id="digestComp.Hospi.hospiWeekVar"
                    description="The weekly variation of hospiWeek in Hospi, inside parentheses"
                    values={{ hospiWeekVar: bnws(hospiWeek - hospiWeekWb) }}
                  >
                    {"（與七日前數據相比 {hospiWeekVar}）"}
                  </Translate>
                </em>
              ) : null}
            </li>
          ) : null}
        </ul>
      </div>
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
      <div>
        <h3>
          <Translate id="digestComp.Icu.title" description="The heading of Icu">
            😞 重症數
          </Translate>
        </h3>
        <ul>
          <li>
            <Translate id="digestComp.Icu.icu" description="The description for icu in Icu">
              當前：
            </Translate>
            {bn(icu)}
            {isNum(icuTdb) ? <em> ({bnws(icu - icuTdb)})</em> : null}
          </li>
          {isNum(icuNew) ? (
            <li>
              <Translate id="digestComp.Icu.icuNew" description="The description for icuNew in Icu">
                本日重症：
              </Translate>
              {bn(icuNew)}
              {isNum(icuNewTdb) ? <em> ({bnws(icuNew - icuNewTdb)})</em> : null}
            </li>
          ) : null}
          {isNum(icuWeek) ? (
            <li>
              <Translate id="digestComp.Icu.icuWeek" description="The description for icuWeek in Icu">
                過去七日重症：
              </Translate>
              {bn(icuWeek)}
              {isNum(icuWeekWb) ? (
                <em>
                  <Translate
                    id="digestComp.Icu.icuWeekVar"
                    description="The weekly variation of icuWeek in Icu, inside parentheses"
                    values={{ icuWeekVar: bnws(icuWeek - icuWeekWb) }}
                  >
                    {"（與七日前數據相比 {icuWeekVar}）"}
                  </Translate>
                </em>
              ) : null}
            </li>
          ) : null}
        </ul>
      </div>
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
      <div>
        <h3>
          <Translate id="digestComp.ReturnHomeCumul.title" description="The heading of ReturnHomeCumul">
            🏡 累積出院數
          </Translate>
        </h3>
        <ul>
          <li>
            <Translate
              id="digestComp.ReturnHomeCumul.returnHomeCumul"
              description="The description for returnHomeCumul in ReturnHomeCumul"
            >
              總累計：
            </Translate>
            {bn(returnHomeCumul)}
            {isNum(returnHomeCumultdb) ? <em> ({bnws(returnHomeCumul - returnHomeCumultdb)})</em> : null}
          </li>
        </ul>
      </div>
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
      <div>
        <h3>
          <Translate id="digestComp.VacCumul.title" description="The heading of VacCumul">
            💉 疫苗接種數
          </Translate>
        </h3>
        <ul>
          <li>
            <Translate id="digestComp.VacCumul.vac1" description="The description for vac1 in VacCumul">
              第 1 劑接種累計：
            </Translate>
            {bn(vac1)}
            {isNum(vac1Tdb) ? <em> ({bnws(vac1 - vac1Tdb)})</em> : null}
          </li>
          {isNum(vac2) ? (
            <li>
              <Translate id="digestComp.VacCumul.vac2" description="The description for vac2 in VacCumul">
                第 2 劑接種累計：
              </Translate>
              {bn(vac2)}
              {isNum(vac2Tdb) ? <em> ({bnws(vac2 - vac2Tdb)})</em> : null}
            </li>
          ) : null}
        </ul>
      </div>
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
    <div>
      <h3>
        <Translate id="digestComp.Indicators.title" description="The heading of Indicators">
          📊 各項指標數據
        </Translate>
      </h3>
      <ul>
        {isNum(incidR) ? (
          <li>
            <Translate id="digestComp.Indicators.incidR" description="The description for incidR in Indicators">
              法國每 10 萬人確診數：
            </Translate>
            {bn(incidR)}
          </li>
        ) : null}
        <li>
          <Translate id="digestComp.Indicators.icuOccupR" description="The description for icuOccupR in Indicators">
            重症病房佔有率：
          </Translate>
          {bn(icuOccupR)}%
        </li>
        {isNum(r) ? (
          <li>
            <Translate id="digestComp.Indicators.r" description="The description for r in Indicators">
              有效傳染數 (R)：
            </Translate>
            {bn(r)}
          </li>
        ) : null}
        {isNum(posR) ? (
          <li>
            <Translate id="digestComp.Indicators.posR" description="The description for posR in Indicators">
              RT-PCR 陽性確診率：
            </Translate>
            {bn(posR)}%
          </li>
        ) : null}
        {isNum(highVul) ? (
          <li>
            <Translate
              id="digestComp.Indicators.highVul"
              description="The line for highVul in Indicators"
              values={{ highVul: highVul }}
            >
              {"疫情列為高度脆弱地區：共 {highVul} 區"}
            </Translate>
          </li>
        ) : null}
        {Array.isArray(vacEhpadUsldPct) ? (
          <li>
            <Translate
              id="digestComp.Indicators.vacEhpadUsldPct"
              description="The line for vacEhpadUsldPct in Indicators"
              values={{ pct: bn(vacEhpadUsldPct[0]), dateMD: vacEhpadUsldPct[1], dateDM: revMD(vacEhpadUsldPct[1]) }}
            >
              {"養老院/長照機構接種至少 1 劑疫苗比例：{pct}%（截至 {dateMD}）"}
            </Translate>
          </li>
        ) : null}
        {Array.isArray(clusters) ? (
          <li>
            <Translate
              id="digestComp.Indicators.clusters"
              description="The line for clusters in Indicators"
              values={{
                clustersTotal: bn(clusters[0]),
                clustersEhpad: bn(clusters[1]),
                dateMD: clusters[2],
                dateDM: revMD(clusters[2]),
              }}
            >
              {
                "2020 年 5/9 起（或第一次解封後）至 {dateMD} 群聚感染情況：尚在調查中的有 {clustersTotal} 起，其中包含養老院 {clustersEhpad} 起"
              }
            </Translate>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

// --------
// EXPORTS
// --------

// used className `subtitle`
export const Subtitle = ({ date }) => {
  const n = 1 + (Date.parse(date) - Date.parse(startDate)) / 864e5;
  const [yyyy, mm, dd] = date.split("-");
  const month_en = getMonthName(parseInt(mm), "en");
  const month_fr = getMonthName(parseInt(mm), "fr");
  return (
    <p className="subtitle">
      <Translate
        id="digestComp.Subtitle"
        description="The subtitle of a daily digest"
        values={{
          y: yyyy,
          m: mm.replace(/^0/, ""),
          d: dd.replace(/^0/, ""),
          month_en: month_en,
          month_fr: month_fr,
          n: n,
        }}
      >
        {"{y} 年 {m} 月 {d} 日法國新冠肺炎疫情匯報。日誌第 {n} 篇。"}
      </Translate>
    </p>
  );
};

export const Grace = ({ children }) => (
  <em style={{ color: "var(--ifm-color-primary)" }}>
    {gt}: {children}
  </em>
);

export const Fish = ({ children }) => <em style={{ color: "var(--ifm-color-primary)" }}>FISH UP: {children}</em>;

// date is required, if date is earlier then earliestDate then placeholder img is used
// if srcx is absent, img will be the main img
// used className: `img-digest`, `caption`
export const Figure = ({ date, srcx, children }) => {
  const n = (Date.parse(newsEarliestDateISO) - Date.parse(date)) / 864e5;
  const src =
    n <= 0
      ? `/img/digest/${toYYYYMM(date)}/covid-19-in-france-${date}${srcx ? "-" + srcx : ""}.jpg`
      : `/img/digest/placeholder/${1 + (n % 7)}.jpg`;

  const [yyyy, mm, dd] = date.split("-");
  const month_en = getMonthName(parseInt(mm), "en");
  const month_fr = getMonthName(parseInt(mm), "fr");
  const caption = children
    ? children
    : translate(
        {
          id: "digestComp.Figure.defaultCaption",
          message: "{y} 年 {m} 月 {d} 日法國新冠肺炎疫情匯報",
          description: "The default image caption in Figure",
        },
        { y: yyyy, m: mm.replace(/^0/, ""), d: dd.replace(/^0/, ""), month_en: month_en, month_fr: month_fr }
      );

  const getText = (reactElem: any): string => {
    if (typeof reactElem == "string") return reactElem;
    if (Array.isArray(reactElem)) return reactElem.map(getText).join("");
    if (typeof reactElem === "object") return getText(reactElem.props.children);
    return "";
  };

  return (
    <>
      <img src={useBaseUrl(src)} className="img-digest" alt={getText(caption)} title={getText(caption)} />
      <div className="caption">{caption}</div>
    </>
  );
};

// date is required; dataFmt is optional: with string 'd/m', the chart will have day/month date labels
export const ChartCases = ({ date, dateFmt = "m/d" }) => {
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

  const chartsPageLink = (
    <Link to="/charts">
      <Translate id="digestComp.ChartCases.chartsPageLink" description="The page name of Charts">
        數據圖表
      </Translate>
    </Link>
  );

  const data = {
    labels: dateFmt == "d/m" ? listOfDates.map(lblDateDM) : listOfDates.map(lblDateMD),
    datasets: [
      {
        ...chartSettings.lineStyle,
        label: translate({
          id: "digestComp.ChartCases.label.total",
          message: "總累計",
          description: "The label for total cases in ChartCases",
        }),
        data: dataCasesCumul,
        fill: false,
        yAxisID: "y-axis-cumul",
      },
      {
        ...chartSettings.barStyle,
        type: "bar",
        label: translate({
          id: "digestComp.ChartCases.label.new",
          message: "當日確診數",
          description: "The label for new cases in ChartCases",
        }),
        data: dataCasesCumul.map((x, i, arr) => (i > 0 ? x - arr[i - 1] : x - od[tdb(date, duration)]?.[dataName])),
        yAxisID: "y-axis-var",
      },
    ],
  };
  const options = {
    legend: chartSettings.legend,
    tooltips: chartSettings.tooltips,
    scales: {
      xAxes: chartSettings.scales.xAxes,
      yAxes: [
        {
          id: "y-axis-cumul",
          position: "left",
          ticks: {
            ...chartSettings.scales.yAxes.ticks,
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
            ...chartSettings.scales.yAxes.ticks,
            min: 0, // because new cases could absurdly be negative...
          },
        },
      ],
    },
  };
  return (
    <>
      <div className="chart-title">
        <Translate id="digestComp.ChartCases.title" description="The title of ChartCases">
          確診數近兩週走勢
        </Translate>
      </div>
      <Line data={data} options={options} />
      <p style={{ marginTop: 16 }}>
        &#x1F6C8;{" "}
        <Translate
          id="digestComp.ChartCases.seeMoreCharts"
          description="The sentence for seeing more charts on the Charts page, `chartsPageLink` being the page link"
          values={{ chartsPageLink: chartsPageLink }}
        >
          {"更多數據視覺化可參見{chartsPageLink}（頁面尚在建構中）。"}
        </Translate>
      </p>
    </>
  );
};

export const OfficialData = ({ date }) => {
  return (
    <div className="official_data_block">
      <CasesCumul date={date} />
      <DeathsCumul date={date} />
      <Hospi date={date} />
      <Icu date={date} />
      <ReturnHomeCumul date={date} />
      <VacCumul date={date} />
      <Indicators date={date} />
    </div>
  );
};

// used className `comment--translc_gray`
export const SourceFb = ({ date }) => {
  const phrase = translate(
    {
      id: "digestComp.SourceFb.phrase",
      description: "The starting phrase in SourceFb (used only in traditional and simplified Chinese)",
      message: "📝 以下內容整理於 {gt} 在臉書社團中的",
    },
    { gt: gt }
  );
  const thisPost = translate({
    id: "digestComp.SourceFb.thisPost",
    description: "'This post' (content of anchor tags in SourceFb, used only in traditional and simplified Chinese)",
    message: "此貼文",
  });
  const linkTitle = translate({
    id: "digestComp.SourceFb.linkTitle",
    description: "The title of links 'this post' in SourceFb (used only in traditional and simplified Chinese)",
    message: "前往臉書社團貼文",
  });
  let content = <></>;

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
    return <div className="comment--translc_gray">{content}</div>;
  }
  if (Array.isArray(fbLinks[date])) {
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
    return <div className="comment--translc_gray">{content}</div>;
  }

  return content;
};
