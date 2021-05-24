import { translate } from "@docusaurus/Translate";
import { minifyNumber } from "./utils";

const neutralGray = "rgb(150, 150, 150)";
const translucentGray = "rgb(150, 150, 150, 0.2)";
const numFmt = translate({ id: "numFmt", message: "en" });

export const chartSettings = {
  lineStyle: {
    blue: {
      pointBackgroundColor: "rgb(56, 182, 255)",
      borderColor: "rgb(56, 182, 255, 0.8)",
      borderWidth: 1,
      pointHoverRadius: 5,
    },
    orange: {
      pointBackgroundColor: "rgb(255, 177, 61)",
      borderColor: "rgb(255, 177, 61, 0.8)",
      borderWidth: 1,
      pointHoverRadius: 5,
    },
  },
  barStyle: {
    red: {
      backgroundColor: "rgb(255, 97, 132, 0.2)",
      hoverBackgroundColor: "rgb(255, 97, 132, 0.5)",
      borderWidth: 1,
      borderColor: "rgb(231, 84, 116, 0.4)",
      hoverBorderColor: "rgb(231, 84, 116, 0.9)",
    },
  },
  legend: {
    labels: {
      fontSize: 16,
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
    xAxes: {
      gridLines: {
        color: translucentGray,
      },
      ticks: {
        fontColor: neutralGray,
      },
    },
    yAxes: {
      gridLinesStyle: {
        hidden: {
          drawOnChartArea: false,
        },
        visible: {
          color: translucentGray,
        },
      },
      ticksStyle: {
        normal: {
          maxTicksLimit: 7,
          fontColor: neutralGray,
          callback: (value) => minifyNumber(value, numFmt),
        },
        blue: {
          maxTicksLimit: 7,
          fontColor: "rgb(74, 189, 255)",
          callback: (value) => minifyNumber(value, numFmt),
        },
        red: {
          maxTicksLimit: 7,
          fontColor: "rgb(255, 125, 153)",
          callback: (value) => minifyNumber(value, numFmt),
        },
      },
    },
  },
};
