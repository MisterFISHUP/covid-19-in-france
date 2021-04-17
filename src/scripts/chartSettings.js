const neutralGray = "rgb(150, 150, 150)";

export const chartSettings = {
  lineStyle: {
    pointBackgroundColor: "rgb(56, 182, 255, 1)",
    borderColor: "rgb(56, 182, 255, 0.8)",
    borderWidth: 1,
    pointHoverRadius: 5,
  },
  barStyle: {
    backgroundColor: "rgb(255, 97, 132, 0.2)",
    hoverBackgroundColor: "rgb(255, 97, 132, 0.5)",
    borderWidth: 1,
    borderColor: "rgb(231, 84, 116, 0.4)",
    hoverBorderColor: "rgb(231, 84, 116, 0.9)",
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
    yAxes: {
      ticks: {
        maxTicksLimit: 9,
        fontColor: neutralGray,
      },
    },
  },
};
