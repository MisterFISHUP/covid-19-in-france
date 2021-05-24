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

const maxDur: number = 150;
const datesInMaxDur: string[] = arrD(digestLatestDate2021ISO, maxDur);
const dataInMaxDur = {
  vac1Cumul: datesInMaxDur.map((d) => od[d]?.vac1),
  vac1New: datesInMaxDur.map((d) => od[d]?.vac1 - od[tdb(d)]?.vac1),
  vac2Cumul: datesInMaxDur.map((d) => od[d]?.vac2),
  vac2New: datesInMaxDur.map((d) => od[d]?.vac2 - od[tdb(d)]?.vac2),
};

const allDur = [15, 30, 60, 90, 120, 150]; // last one = maxDur
const marks = allDur.map((x) => {
  return { value: x, label: x };
});

// There are `Vac1And2` (which gives `Vac1And2Trend`)
// and `Vac` with dose = '1' | '2' as argument (which gives `VacTrend`).
// Final export `VacDashboard` uses both `Vac1And2Trend` and `VacTrend`.

// ---------
// Vac1And2
// ---------

const Vac1And2 = ({ duration, dateFmt }) => {
  const dates: string[] = datesInMaxDur.slice(maxDur - duration);

  // data
  const dataVac1 = dataInMaxDur.vac1Cumul.slice(maxDur - duration);
  const dataVac2 = dataInMaxDur.vac2Cumul.slice(maxDur - duration);

  const data = {
    labels: dateFmt == "d/m" ? dates.map(lblDateDM) : dates.map(lblDateMD),
    datasets: [
      {
        ...chartSettings.lineStyle.blue,
        label: translate({
          id: "chartsComp.Vac1And2.label.vac1",
          message: "第 1 劑",
        }),
        data: dataVac1,
        fill: false,
      },
      {
        ...chartSettings.lineStyle.orange,
        label: translate({
          id: "chartsCompo.Vac1And2.label.vac2",
          message: "第 2 劑",
        }),
        data: dataVac2,
        fill: false,
      },
    ],
  };
  const options = {
    legend: chartSettings.legend,
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

const Vac1And2Trend = ({ dateFmt }) => {
  const defaultValue = allDur[0];
  const [duration, setDuration] = useState(defaultValue);

  return (
    <>
      <div className="chart-title">
        <Translate
          id="chartsComp.Vac1And2Trend.title"
          description="Trend over the last <duration> days"
          values={{ duration: duration }}
        >
          {"疫苗接種數近 {duration} 日走勢"}
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
      <Vac1And2 duration={duration} dateFmt={dateFmt} />
    </>
  );
};

// ----
// Vac
// ----

// dose = '1' | '2' (vac1 or vac2)
const Vac = ({ dose, duration, dateFmt }) => {
  const dates: string[] = datesInMaxDur.slice(maxDur - duration);

  // data
  const dataVacCumul = dataInMaxDur[`vac${dose}Cumul`].slice(maxDur - duration);
  const dataVacNew = dataInMaxDur[`vac${dose}New`].slice(maxDur - duration);

  const data = {
    labels: dateFmt == "d/m" ? dates.map(lblDateDM) : dates.map(lblDateMD),
    datasets: [
      {
        ...chartSettings.lineStyle.blue,
        label: translate({
          id: "chartsComp.Vac.label.total",
          message: "總累計",
        }),
        data: dataVacCumul,
        fill: false,
        yAxisID: "y-axis-cumul",
      },
      {
        ...chartSettings.barStyle.red,
        type: "bar",
        label: translate({
          id: "chartsCompo.Vac.label.new",
          message: "當日接種數",
        }),
        data: dataVacNew,
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
          position: "left",
          gridLines: chartSettings.scales.yAxes.gridLinesStyle.visible,
          ticks: chartSettings.scales.yAxes.ticksStyle.blue,
        },
        {
          id: "y-axis-var",
          position: "right",
          gridLines: chartSettings.scales.yAxes.gridLinesStyle.hidden,
          ticks: chartSettings.scales.yAxes.ticksStyle.red,
        },
      ],
    },
  };
  return <Line data={data} options={options} />;
};

// dose = '1' | '2' (vac1 or vac2)
const VacTrend = ({ dose, dateFmt }) => {
  const defaultValue = allDur[0];
  const [duration, setDuration] = useState(defaultValue);

  return (
    <>
      <div className="chart-title">
        <Translate
          id="chartsComp.VacTrend.title"
          description="Doses <dose>. Trend over the last <duration> days"
          values={{ dose: dose, duration: duration }}
        >
          {"第 {dose} 劑接種數近 {duration} 日走勢"}
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
      <Vac dose={dose} duration={duration} dateFmt={dateFmt} />
    </>
  );
};

// --------
// EXPORTS
// --------

export const VacDashboard = () => {
  const dateFmt = translate({ id: "dateFmt", message: "m/d" });

  return (
    <>
      <Vac1And2Trend dateFmt={dateFmt} />
      <br />
      <VacTrend dose="1" dateFmt={dateFmt} />
      <br />
      <VacTrend dose="2" dateFmt={dateFmt} />
    </>
  );
};
