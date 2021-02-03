/**
 * @name ErrorRate
 * @desc Chart that displays in historical status page rendering historical load statistics. Child component of ChartContainer.
 */

import React, { useState, useEffect, useContext } from "react";
import Area from "@ant-design/charts/es/area";
import { historicalContext } from "../contexts/historicalContext";
function ErrorRate(): JSX.Element {
  
  const { timeRange, serviceData } = useContext(historicalContext);

  let config = {
            data: serviceData.errorRate,
            xField: "time",
            yField: "value",
            seriesField: "method",
          };

  return <Area {...config} autoFit={true} />;
}
export { ErrorRate };