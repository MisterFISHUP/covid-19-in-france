import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { Line } from "react-chartjs-2";
import Translate, { translate } from "@docusaurus/Translate";
import { officialData as od } from "../../data/data";
import { digestLatestDate2021ISO } from "../dateVariables";
import { chartSettings } from "../chartSettings";
import { arrayOfDates as arrD, toLabelDateMD as lblDateMD, toLabelDateDM as lblDateDM, trimDecimal } from "../utils";

const maxDur: number = 480;
const datesInMaxDur: string[] = arrD(digestLatestDate2021ISO, maxDur);
const dataInMaxDur = datesInMaxDur.map((d) => trimDecimal(od[d]?.posR, 2));

const allDur = [60, 120, 180, 270, 360, 480]; // last one = maxDur
const marks = allDur.map((x) => {
  return { value: x, label: x };
});

const PosR = ({ duration, dateFmt }) => {
  const dates: string[] = datesInMaxDur.slice(maxDur - duration);

  // data
  const dataPosR = dataInMaxDur.slice(maxDur - duration);

  const data = {
    labels: dateFmt == "d/m" ? dates.map(lblDateDM) : dates.map(lblDateMD),
    datasets: [
      {
        ...chartSettings.lineStyle.blue,
        label: translate({
          id: "chartsComp.PosR.label",
          message: "RT-PCR 陽性確診率",
        }),
        data: dataPosR,
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
          gridLines: chartSettings.scales.yAxes.gridLinesStyle.visible,
          ticks: chartSettings.scales.yAxes.ticksStyle.normal,
        },
      ],
    },
  };
  return <Line data={data} options={options} />;
};

// --------
// EXPORTS
// --------

export const PosRTrend = () => {
  const dateFmt = translate({ id: "dateFmt", message: "m/d" });
  const defaultValue = allDur[0];
  const [duration, setDuration] = useState(defaultValue);

  return (
    <>
      <div className="chart-title">
        <Translate
          id="chartsComp.PosRTrend.title"
          description="Trend over the last <duration> days"
          values={{ duration: duration }}
        >
          {"RT-PCR 陽性確診率近 {duration} 日走勢"}
        </Translate>
      </div>
      <Slider
        defaultValue={defaultValue}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="off"
        step={30}
        marks={marks}
        max={maxDur}
        min={allDur[0]}
        onChange={(e, v) => {
          if (typeof v == "number") setDuration(v);
        }}
      />
      <PosR duration={duration} dateFmt={dateFmt} />
    </>
  );
};
