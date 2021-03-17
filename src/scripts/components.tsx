import React from "react";
import webLinks from "../data/website-links";
import { officialData as od } from "../data/official-data";
import { fbPostsLinks as links } from "../data/facebook-posts";
import {
  beautifyNumber as bn,
  beautifyNumberWithSign as bnws,
  toZhDate as zhDate,
  theDayBefore as tdb,
  graceTseng as gt,
  errorNumber as errNum,
  errorMessage as errMsg,
  isNumber as isNum,
  lastUpdated,
  toYYYYMM,
} from "./utils";

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

  // bad codes...
  let casesEhpadEmsCumulItem = <></>;
  let casesEhpadEmsCumulVar = <></>;
  if (casesEhpadEmsCumul == "noUpdate") {
    const n: number = lastUpdated(date, "casesEhpadEmsCumul");
    casesEhpadEmsCumulItem = <li>養老院/護理院：{n == errNum ? errMsg : `${bn(n)}（未更新）`}</li>;
  } else if (isNum(casesEhpadEmsCumul)) {
    if (casesEhpadEmsCumulTdb == "noUpdate") {
      const m: number = lastUpdated(tdb(date), "casesEhpadEmsCumul");
      casesEhpadEmsCumulVar = <em> ({m == errNum ? errMsg : bnws(casesEhpadEmsCumul - m)})</em>;
    } else if (isNum(casesEhpadEmsCumulTdb)) {
      casesEhpadEmsCumulVar = <em> ({bnws(casesEhpadEmsCumul - casesEhpadEmsCumulTdb)})</em>;
    }
    casesEhpadEmsCumulItem = (
      <li>
        養老院/護理院：{bn(casesEhpadEmsCumul)}
        {casesEhpadEmsCumulVar}
      </li>
    );
  }

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
          {casesEhpadEmsCumulItem}
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

  // bad codes...
  let deathsEhpadEmsCumulItem = <></>;
  let deathsEhpadEmsCumulVar = <></>;
  if (deathsEhpadEmsCumul == "noUpdate") {
    const n: number = lastUpdated(date, "deathsEhpadEmsCumul");
    deathsEhpadEmsCumulItem = <li>養老院/護理院：{n == errNum ? errMsg : `${bn(n)}（未更新）`}</li>;
  } else if (isNum(deathsEhpadEmsCumul)) {
    if (deathsEhpadEmsCumulTdb == "noUpdate") {
      const m: number = lastUpdated(tdb(date), "deathsEhpadEmsCumul");
      deathsEhpadEmsCumulVar = <em> ({m == errNum ? errMsg : bnws(deathsEhpadEmsCumul - m)})</em>;
    } else if (isNum(deathsEhpadEmsCumulTdb)) {
      deathsEhpadEmsCumulVar = <em> ({bnws(deathsEhpadEmsCumul - deathsEhpadEmsCumulTdb)})</em>;
    }
    deathsEhpadEmsCumulItem = (
      <li>
        養老院/護理院：
        {bn(deathsEhpadEmsCumul)}
        {deathsEhpadEmsCumulVar}
      </li>
    );
  }

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
          {deathsEhpadEmsCumulItem}
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
  const hospiWeek = od[date]?.hospiWeek;
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
          {isNum(hospiNew) ? <li>本日入院：{bn(hospiNew)}</li> : null}
          {isNum(hospiWeek) ? <li>過去七日入院：{bn(hospiWeek)}</li> : null}
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
  const icuWeek = od[date]?.icuWeek;
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
          {isNum(icuNew) ? <li>本日重症：{bn(icuNew)}</li> : null}
          {isNum(icuWeek) ? <li>過去七日重症：{bn(icuWeek)}</li> : null}
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
  if (!Array.isArray(vac1)) {
    return <></>;
  } else {
    return (
      <>
        <h3>💉 疫苗接種數</h3>
        <ul>
          <li>
            接種第 1 劑：{bn(vac1[0])}
            {Array.isArray(vac1Tdb) ? <em> ({bnws(vac1[0] - vac1Tdb[0])})</em> : null}（截至 {vac1[1]}）
          </li>
          {Array.isArray(vac2) ? (
            <li>
              接種第 2 劑：{bn(vac2[0])}
              {Array.isArray(vac2Tdb) ? <em> ({bnws(vac2[0] - vac2Tdb[0])})</em> : null}（截至 {vac2[1]}）
            </li>
          ) : null}
        </ul>
      </>
    );
  }
};

// not empty if `incidR` exists for the date
const Indicators = ({ date }) => {
  const incidR = od[date]?.incidR;
  const icuOccupR = od[date]?.icuOccupR;
  const r = od[date]?.r;
  const posR = od[date]?.posR;
  const vacEhpadUsld = od[date]?.vacEhpadUsld;
  const highVul = od[date]?.highVul;
  const clusters = od[date]?.clusters;
  if (!Array.isArray(incidR)) {
    return <></>;
  }
  return (
    <>
      <h3>📊 各項指標數據</h3>
      <ul>
        <li>
          法國每 10 萬人確診數：{bn(incidR[0])}（{incidR[1]} 數據）
        </li>
        {Array.isArray(icuOccupR) ? (
          <li>
            重症病房佔有率：{icuOccupR[0]}%（{icuOccupR[1]} 數據）
          </li>
        ) : null}
        {Array.isArray(r) ? (
          <li>
            基本傳染數 (R)：{r[0]}（{r[1]} 數據）
          </li>
        ) : null}
        {isNum(posR) ? <li>過去七日陽性確診率：{posR}%</li> : null}
        {isNum(highVul) ? <li>疫情列為高度脆弱地區：共 {highVul} 區</li> : null}
        {Array.isArray(vacEhpadUsld) ? (
          <li>
            養老院/長照機構接種至少 1 劑疫苗比例：{vacEhpadUsld[0]}%（截至 {vacEhpadUsld[1]}）
          </li>
        ) : null}
        {Array.isArray(clusters) ? (
          <li>
            2020/5/9 起（或第一次解封後）至 {clusters[2]} 群聚感染情況：尚在調查中的有 {bn(clusters[0])}{" "}
            起，其中包含養老院 {bn(clusters[1])} 起
          </li>
        ) : null}
      </ul>
    </>
  );
};

// --------
// EXPORTS
// --------

// use className `subtitle`
export const Subtitle = ({ date }) => {
  const n = (Date.parse(date) - Date.parse("2020-03-01")) / 864e5;
  return <p className="subtitle">{`${zhDate(date)}法國新冠肺炎疫情匯報。日誌第 ${n + 1} 篇。`}</p>;
};

export const Grace = ({ children }) => (
  <a>
    <em>
      {gt}: {children}
    </em>
  </a>
);

// date is necessary; if srcx is absent, img will be the main img
// use className `img-journal` and `caption`
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

// use className `source-fb`, `separation`
export const SourceFb = ({ date }) => {
  const phrase = `以下內容整理於 ${gt} 在臉書社團中的`;
  const thisPost = "此貼文";
  const linkTitle = "前往臉書社團貼文";
  let content = <></>;
  if (!links.hasOwnProperty(date)) {
    return content;
  }

  if (typeof links[date] == "string") {
    content = (
      <>
        {phrase}
        <a href={links[date]} title={linkTitle} target="_blank">
          {thisPost}
        </a>
        。
      </>
    );
  } else if (Array.isArray(links[date])) {
    const linksNum: number = links[date].length;
    content = links[date].map((link: string, i: number) => (
      <React.Fragment key={i}>
        {i == 0 ? phrase : i == linksNum - 1 ? "以及" : "、"}
        <a href={link} title={linkTitle} target="_blank">
          {thisPost}
        </a>
        {i == linksNum - 1 ? "。" : ""}
      </React.Fragment>
    ));
  }
  return <div className="source_block">{content}</div>;
};
