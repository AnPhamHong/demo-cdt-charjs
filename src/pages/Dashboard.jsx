import React, { useMemo, useState } from "react";
import CardOverview from "./card";
import "./sass/_dashboard.scss";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import ChartContainer from "./chart";
import moment from "moment/moment";
import _ from "lodash";
import Impressions from "./impressions";

const { RangePicker } = DatePicker;
const currentDate = dayjs();
const stringFormatDate = "YYYY-MM-DD";
const defaultStartDate = currentDate
  .set("month", currentDate.month() - 1)
  .format(stringFormatDate);
const defaultEndDate = currentDate.format(stringFormatDate);

const Dashboard = () => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [loading, setLoading] = useState(false);
  const lstLabel = useMemo(() => {
    if (!startDate || !endDate) return;
    let dates = [];
    setLoading(true);

    for (let m = moment(startDate); m.isBefore(endDate); m.add(1, "days")) {
      dates.push(m.format(stringFormatDate));
    }

    setLoading(false);
    return dates;
  }, [startDate, endDate]);

  const fakeData = (lengthOfLabel, numberRandom) => {
    let arrStatistic = [];
    let count = 0;
    while (count < lengthOfLabel) {
      arrStatistic.push(Math.floor(Math.random() * numberRandom));
      count++;
    }
    return arrStatistic;
  };

  let objectStyle = {
    backgroundColor: "transparent",
    borderWidth: 1,
    fill: true,
    pointStyle: "circle",
  };

  const dataChart = {
    labels: [...lstLabel],
    datasets: [
      {
        label: "Impressions",
        borderColor: "#87b1ff",
        data: fakeData(lstLabel.length, 50),
        ...objectStyle,
      },
      {
        label: "Clicks",
        borderColor: "#7bd6f4",
        data: fakeData(lstLabel.length, 40),
        ...objectStyle,
      },
      {
        label: "Conversion rate",
        borderColor: "#ffc266",
        data: fakeData(lstLabel.length, 100),
        ...objectStyle,
      },
      {
        label: "Revenue",
        borderColor: "#70b070",
        data: fakeData(lstLabel.length, 65),
        backgroundColor: "transparent",
        ...objectStyle,
      },
    ],
  };

  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      setStartDate(dateStrings[0]);
      setEndDate(dateStrings[1]);
    }
  };

  return (
    <div className="bgc-shadow layout-grid dashboard">
      <div className="flex-center">
        <h1 className="title-page">Overview</h1>
        <RangePicker
          defaultValue={[
            dayjs(startDate, stringFormatDate),
            dayjs(endDate, stringFormatDate),
          ]}
          format={stringFormatDate}
          size={"middle"}
          onChange={(dates, dateStrings) => onRangeChange(dates, dateStrings)}
        />
      </div>
      <CardOverview />
      <ChartContainer loading={loading} data={dataChart} />
      <Impressions />
    </div>
  );
};

export default Dashboard;
