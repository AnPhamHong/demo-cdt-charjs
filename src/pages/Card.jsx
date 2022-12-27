import { Card } from "antd";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 100%;
  min-width: 200px;
  .ant-card-head {
    border-bottom: unset;
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    min-height: unset;
    text-transform: capitalize;
  }

  .ant-card-body {
    padding: 0;
  }

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
`;

function CardOverview(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let waitingCard = setTimeout(
      () => setLoading((prevState) => !prevState),
      5000
    );
    return () => clearTimeout(waitingCard);
  }, []);

  const dataStatistic = [
    {
      key: "impressions",
      title: "impressions",
      description: "Shows the number of views for each page with timers",
      number: 45,
      bgc: "rgba(55, 125, 255, 0.6)",
    },
    {
      key: "clicks",
      title: "clicks",
      description: "Shows the total number of clicks for buttons & links",
      number: 33,
      bgc: "rgba(35, 187, 236, 0.6)",
    },
    {
      key: "conversion_rate",
      title: "conversion rate",
      description: "Shows the number of ATCs over the number of checkouts",
      number: 29.34,
      units: "%",
      bgc: "rgba(255, 153, 0, 0.6)",
    },
    {
      key: "revenue",
      title: "revenue",
      description: "Shows the total value of orders where CDT is active.",
      number: 30,
      units: "k",
      prefix: "SGD",
      bgc: "rgba(16, 124, 16, 0.6)",
    },
  ];
  return (
    <div className="site-card-border-less-wrapper cards-container">
      {dataStatistic.map((card) => {
        return (
          <StyledCard
            title={card.title}
            bordered={false}
            background={card.bgc}
            className="card"
            loading={loading}
            key={card.key}
          >
            <div className="card-description">{card.description ?? "-"}</div>
            <div className="card-statistic">
              {card.number ?? "-"}
              {card.units ?? ""}
              <strong className="card-text-prefix">{card.prefix ?? ""}</strong>
            </div>
          </StyledCard>
        );
      })}
    </div>
  );
}

export default CardOverview;
