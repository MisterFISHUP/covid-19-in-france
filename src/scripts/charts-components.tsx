import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { Line } from "react-chartjs-2";
import Translate, { translate } from "@docusaurus/Translate";
import { officialData as od } from "../data/data";
import { digestLatestDate2021ISO } from "./dateVariables";
import { chartSettings } from "./chartSettings";
import {
  theDayBefore as tdb,
  arrayOfDates as arrD,
  toLabelDateMD as lblDateMD,
  toLabelDateDM as lblDateDM,
} from "./utils";

// ===== Cases related values =====

const casesMaxDur: number = 360;
const datesInCasesMaxDur: string[] = arrD(digestLatestDate2021ISO, casesMaxDur);
const dataInCasesMaxDur = {
  cumul: datesInCasesMaxDur.map((d) => od[d]?.casesCumul),
  new: datesInCasesMaxDur.map((d) => od[d]?.casesCumul - od[tdb(d)]?.casesCumul),
};

const casesAllDur = [15, 30, 60, 90, 120, 180, 240, 360]; // last one = casesMaxDur
const casesMarks = casesAllDur.map((x) => {
  return { value: x, label: x };
});

// ===== Cases chart =====

// dataFmt is optional: with string 'd/m', the chart will have day/month date labels
const Cases = ({ duration, dateFmt = "m/d" }) => {
  const dates: string[] = datesInCasesMaxDur.slice(casesMaxDur - duration);

  // data
  const dataCasesCumul = dataInCasesMaxDur.cumul.slice(casesMaxDur - duration);
  const dataCasesNew = dataInCasesMaxDur.new.slice(casesMaxDur - duration);

  // stepSize & suggestedMin (only for casesCumul)
  const minCasesCumul = Math.min(...dataCasesCumul.filter(Number));
  const stepSizeCasesCumul = minCasesCumul > 200000 ? 10000 : minCasesCumul > 2000 ? 1000 : 100;
  const suggestedMinCasesCumul = Math.max(0, minCasesCumul - 2 * stepSizeCasesCumul);

  const data = {
    labels: dateFmt == "d/m" ? dates.map(lblDateDM) : dates.map(lblDateMD),
    datasets: [
      {
        ...chartSettings.lineStyle,
        label: translate({
          id: "chartsComp.Cases.label.total",
          message: "總累計",
        }),
        data: dataCasesCumul,
        fill: false,
        yAxisID: "y-axis-cumul",
      },
      {
        ...chartSettings.barStyle,
        type: "bar",
        label: translate({
          id: "chartsCompo.Cases.label.new",
          message: "當日確診數",
        }),
        data: dataCasesNew,
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
            stepSizeCasesCumul: stepSizeCasesCumul,
            suggestedMin: suggestedMinCasesCumul,
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
  return <Line data={data} options={options} />;
};

// --------
// EXPORTS
// --------

// dataFmt is optional: with string 'd/m', the chart will have day/month date labels
export const CasesTrend = ({ dateFmt = "m/d" }) => {
  const defaultValue = casesAllDur[0];
  const [duration, setDuration] = useState(defaultValue);

  return (
    <>
      <div className="chart-title">
        <Translate
          id="chartsComp.CasesTrend.title"
          description="Trend over the last <duration> days"
          values={{ duration: duration }}
        >
          {"確診數近 {duration} 日走勢"}
        </Translate>
      </div>
      <Slider
        defaultValue={defaultValue}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="off"
        step={null}
        marks={casesMarks}
        max={casesMaxDur}
        min={casesAllDur[0]}
        onChange={(e, v) => {
          if (typeof v == "number") setDuration(v);
        }}
      />
      <Cases duration={duration} dateFmt={dateFmt} />
    </>
  );
};
