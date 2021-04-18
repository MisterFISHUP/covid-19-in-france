import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { Line } from "react-chartjs-2";
import Translate, { translate } from "@docusaurus/Translate";
import { officialData as od } from "../../data/data";
import { digestLatestDate2021ISO } from "../dateVariables";
import { chartSettings } from "../chartSettings";
import { arrayOfDates as arrD, toLabelDateMD as lblDateMD, toLabelDateDM as lblDateDM, trimDecimal } from "../utils";

const maxDur: number = 360;
const datesInMaxDur: string[] = arrD(digestLatestDate2021ISO, maxDur);
const dataInMaxDur = datesInMaxDur.map((d) => trimDecimal(od[d]?.incidR, 2));

const allDur = [60, 120, 180, 270, 360]; // last one = maxDur
const marks = allDur.map((x) => {
  return { value: x, label: x };
});

// dataFmt is optional: with string "d/m", the chart will have day/month date labels
const IncidR = ({ duration, dateFmt = "m/d" }) => {
  const dates: string[] = datesInMaxDur.slice(maxDur - duration);

  // data
  const dataIncidR = dataInMaxDur.slice(maxDur - duration);

  const data = {
    labels: dateFmt == "d/m" ? dates.map(lblDateDM) : dates.map(lblDateMD),
    datasets: [
      {
        ...chartSettings.lineStyle.blue,
        label: translate({
          id: "chartsComp.IncidR.label",
          message: "全法國每 10 萬人確診數",
        }),
        data: dataIncidR,
        fill: false,
      },
    ],
  };
  const options = {
    legend: { display: false },
    tooltips: chartSettings.tooltips,
    scales: {
      xAxes: [chartSettings.scales.xAxes],
      yAxes: [
        {
          ticks: {
            ...chartSettings.scales.yAxes.ticks,
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

// dataFmt is optional: with string "d/m", the chart will have day/month date labels
export const IncidRTrend = ({ dateFmt = "m/d" }) => {
  const defaultValue = allDur[0];
  const [duration, setDuration] = useState(defaultValue);

  return (
    <>
      <div className="chart-title">
        <Translate
          id="chartsComp.IncidRTrend.title"
          description="Trend over the last <duration> days"
          values={{ duration: duration }}
        >
          {"每 10 萬人確診數近 {duration} 日走勢"}
        </Translate>
      </div>
      <Slider
        defaultValue={defaultValue}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="off"
        step={null}
        marks={marks}
        max={maxDur}
        min={allDur[0]}
        onChange={(e, v) => {
          if (typeof v == "number") setDuration(v);
        }}
      />
      <IncidR duration={duration} dateFmt={dateFmt} />
    </>
  );
};
