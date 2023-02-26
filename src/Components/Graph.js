import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const data = [
  { att: "T", val: 297.21 },
  { att: "FL", val: 297.97 },
  {
    att: "Min",
    val: 297.21,
  },
  { att: "Max", val: 297.21 },
  { att: "P", val: 1011 },
  { att: "H", val: 88 },
];

export default function Graph(props) {
  const [temp1, maketemp1] = useState(data[0].val);
  const [f_l, makefl] = useState(data[1].val);
  const [t_min, makemin] = useState(data[2].val);
  const [t_max, maketmax] = useState(data[3].val);
  const [press, makepress] = useState(data[4].val);
  const [humid, makehumid] = useState(data[5].val);
  //   const arrr = [
  //     { att: "temp", val: "" },
  //     { att: "feels_like", val: "" },
  //     { att: "temp_min", val: "" },
  //     { att: "temp_max", val: "" },
  //     { att: "pressure", val: "" },
  //     { att: "humidity", val: "" },
  //   ];

  const arrr = data;
  useEffect(() => {
    maketemp1(props.datg.temp);
    makefl(props.datg.feels_like);
    makemin(props.datg.temp_min);
    maketmax(props.datg.temp_max);
    makepress(props.datg.pressure);
    makehumid(props.datg.humidity);
    arrr[0].val = temp1;
    arrr[1].val = f_l;
    arrr[2].val = t_min;
    arrr[3].val = t_max;
    arrr[4].val = press;
    arrr[5].val = humid;

    console.log("Changed");
  }, [
    arrr,
    props.datg.temp,
    props.datg.feels_like,
    props.datg.humidity,
    props.datg.pressure,
    props.datg.temp_max,
    props.datg.temp_min,
    temp1,
    f_l,
    t_min,
    t_max,
    press,
    humid,
  ]);

  // setInterval(() => {
  //   function CustomTooltip({ payload, label, active }) {
  //     if (active) {
  //       return (
  //         <div className="custom-tooltip">
  //           <p className="label">{`${label} : ${payload[0].value}`}</p>
  //           <p className="desc">Anything you want can be displayed here.</p>
  //         </div>
  //       );
  //     }

  //     return null;
  //   }
  // }, 1100);
  //   async
  // function CustomTooltip({ payload, label, active }) {
  //   if (active) {
  //     return (
  //       <div className="custom-tooltip">
  //         <p className="label">{`${label} : ${payload[0].value}`}</p>
  //         <p className="desc">Anything you want can be displayed here.</p>
  //       </div>
  //     );
  //   }

  //   return null;
  // }
  return (
    <div>
      <ResponsiveContainer width="95%" height={600}>
        <BarChart width={1000} height={600} data={arrr}>
          <Tooltip
            wrapperStyle={{ backgroundColor: "#90beefaa", fontSize: 20 }}
          />
          <Bar dataKey="val" fill="#496f98" />
          <XAxis dataKey="att" stroke="black" angle={-15} />
          <YAxis stroke="black" ticks={[100, 300, 800, 1200]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
