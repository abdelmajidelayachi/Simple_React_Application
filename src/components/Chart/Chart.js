import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint=>{
    return dataPoint.value;

  });
  const TotalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) =>{ 

       return( <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={TotalMax}
          label={dataPoint.label}
        />);
      })}
    </div>
  );
};

export default Chart;
