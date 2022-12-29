import React from "react";
import { Space, Table, Tag } from "antd";

import data from "./data_impressions_breakdown.json";
import { QuestionCircleOutlined } from "@ant-design/icons";
console.log(data);

function Impressions(props) {
  const columns = [
    {
      title: "Widget name",
      dataIndex: "widget_name",
      key: "widget_name",
    },
    {
      title: "Total Impressions",
      render: (_, record) => {
        return (
          <span>
            {record.total_impressions} ({record.percent_total_impressions}%)
          </span>
        );
      },
    },
    {
      title: "Unique Impressions",
      render: (_, record) => {
        return (
          <span>
            {record.unique_impressions} ({record.percent_unique_impressions}%)
          </span>
        );
      },
    },
    {
      title: "Impressions per user",
      key: "user_impressions",
      dataIndex: "user_impressions",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Table
        columns={columns}
        dataSource={data}
        bordered={true}
        title={() => <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 6}}>
            <span>Impressions</span>
            <QuestionCircleOutlined twoToneColor={"#ccc"}/>
        </div>}
        size={"small"}
        tableLayout={"fixed"}
      />
    </div>
  );
}

export default Impressions;
