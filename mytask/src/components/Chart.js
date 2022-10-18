import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import TextExample from "./cards";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,

  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const secdata = {
  labels: ["6AM", "8AM", "10AM", "2PM", "4PM", "6PM", "8PM", "10PM", "12PM"],
  datasets: [
    {
      label: "Properties ",
      data: [0, 14, 127, 45, 60, 105, 220, 10, 80, 40],
      fill: true,
      backgroundColor: "rgba(0,255,0,0.1)",
      borderColor: "rgba(0,128,0,1)",
      tension: 0.1,
      pointStyle: "rect",
    },
  ],
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

const data = {
  labels: ["6AM", "8AM", "10AM", "2PM", "4PM", "6PM", "8PM", "10PM", "12PM"],
  datasets: [
    {
      label: "Customer ",
      data: [0, 14, 127, 25, 90, 165, 22, 210, 70, 100],
      fill: true,
      backgroundColor: "rgba(0,255,0,0.1)",
      borderColor: "rgba(0,128,0,1)",
      tension: 0.1,
      pointStyle: "rect",
    },
  ],
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

function Chart() {
  const [lineData, setLinedata] = useState({
    selectedMetric: "1",
  });
  const onchange = (event) => {
    if (event.target.value === "1") {
      setLinedata({ data });
    }
  };

  return (
    <>
      <TextExample />

      <div style={{ float: "right" }}>
        <select
          id="selectBox"
          onChange={onchange}
          value={lineData.selectedMetric}
        >
          <option value="1">Toady</option>
          <option value="2">yesterday</option>
        </select>
      </div>
      <div>
        <h4>Insights</h4>
      </div>

      <div>
        <br />
        <CardGroup className="container">
          <Col>
            <Card style={{ width: "500px", height: "320px" }}>
              <Card.Title>Customers</Card.Title>
              <Card.Text style={{ color: "gray" }}>260 Customers</Card.Text>
              <Line data={data} options={data.options}>
                data{" "}
              </Line>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "500px",
                height: "320px",
                marginLeft: 40,
              }}
            >
              <Card.Title>Properties</Card.Title>
              <Card.Text style={{ color: "gray" }}>1500 Properties</Card.Text>
              <Line data={secdata} options={data.options}>
                data
              </Line>
            </Card>
          </Col>
        </CardGroup>
      </div>
    </>
  );
}

export default Chart;
