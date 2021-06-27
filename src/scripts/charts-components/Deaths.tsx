import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { Line } from "react-chartjs-2";
import Translate, { translate } from "@docusaurus/Translate";
import { officialData as od } from "../../data/data";
import { digestLatestDate2021ISO } from "../dateVariables";
import { chartSettings } from "../chartSettings";
import {
  theDayBefore as tdb,
  arrayOfDates as arrD,
  toLabelDateMD as lblDateMD,
  toLabelDateDM as lblDateDM,
} from "../utils";

const maxDur: number = 480;
const datesInMaxDur: string[] = arrD(digestLatestDate2021ISO, maxDur);
const dataInMaxDur = {
  cumul: datesInMaxDur.map((d) => od[d]?.deathsCumul),
  new: datesInMaxDur.map((d) => od[d]?.deathsCumul - od[tdb(d)]?.deathsCumul),
};

const allDur = [15, 90, 180, 270, 360, 480]; // last one = maxDur
const marks = allDur.map((x) => {
  return { value: x, label: x };
});

const Deaths = ({ duration, dateFmt }) => {
  const dates: string[] = datesInMaxDur.slice(maxDur - duration);

  // data
  const dataDeathsCumul = dataInMaxDur.cumul.slice(maxDur - duration);
  const dataDeathsNew = dataInMaxDur.new.slice(maxDur - duration);

  const data = {
    labels: dateFmt == "d/m" ? dates.map(lblDateDM) : dates.map(lblDateMD),
    datasets: [
      {
        ...chartSettings.lineStyle.blue,
        label: translate({
          id: "chartsComp.Deaths.label.total",
          message: "總累計",
        }),
        data: dataDeathsCumul,
        fill: false,
        yAxisID: "y-axis-cumul",
      },
      {
        ...chartSettings.barStyle.red,
        type: "bar",
        label: translate({
          id: "chartsCompo.Deaths.label.new",
          message: "當日死亡數",
        }),
        data: dataDeathsNew,
        yAxisID: "y-axis-var",
      },
    ],
  };
  const options = {
    legend: chartSettings.legend,
    tooltips: chartSettings.tooltips,
    scales: {
      xAxes: [{ ...chartSettings.scales.xAxes, offset: true }],
      yAxes: [
        {
          id: "y-axis-cumul",
          position: "right",
          gridLines: chartSettings.scales.yAxes.gridLinesStyle.visible,
          ticks: chartSettings.scales.yAxes.ticksStyle.blue,
        },
        {
          id: "y-axis-var",
          position: "left",
          gridLines: chartSettings.scales.yAxes.gridLinesStyle.hidden,
          ticks: {
            ...chartSettings.scales.yAxes.ticksStyle.red,
            min: 0, // because new deaths could absurdly be negative...
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

export const DeathsTrend = () => {
  const dateFmt = translate({ id: "dateFmt", message: "m/d" });
  const defaultValue = allDur[0];
  const [duration, setDuration] = useState(defaultValue);

  return (
    <>
      <div className="chart-title">
        <Translate
          id="chartsComp.DeathsTrend.title"
          description="Trend over the last <duration> days"
          values={{ duration: duration }}
        >
          {"死亡數近 {duration} 日走勢"}
        </Translate>
      </div>
      <Slider
        defaultValue={defaultValue}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="off"
        step={15}
        marks={marks}
        max={maxDur}
        min={allDur[0]}
        onChange={(e, v) => {
          if (typeof v == "number") setDuration(v);
        }}
      />
      <Deaths duration={duration} dateFmt={dateFmt} />
    </>
  );
};
