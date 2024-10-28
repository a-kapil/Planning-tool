import React from "react";
import "./ExcelConverter.css";

export default function ExcelConverter(props) {
  const received = props;
  const data = props.props;

  const employee = data.map((x) => (
    <tr>
      <td className="employeeId">{x["__EMPTY_1"]}</td>
      <td className="firstName">{x["Week 51"]}</td>
      <td className="lastName">{x["__EMPTY_2"]}</td>
      <td className="team">{x["__EMPTY_4"]}</td>
      <td className="schedule1">{x["17-Dec"] ? x["17-Dec"] : "XXX"}</td>
      <td className="schedule2">{x["18-Dec"] ? x["18-Dec"] : "XXX"}</td>
      <td className="schedule3">{x["19-Dec"] ? x["19-Dec"] : "XXX"}</td>
      <td className="schedule4">{x["20-Dec"] ? x["20-Dec"] : "XXX"}</td>
      <td className="schedule5">{x["21-Dec"] ? x["21-Dec"] : "XXX"}</td>
      <td className="schedule6">{x["22-Dec"] ? x["22-Dec"] : "XXX"}</td>
      <td className="schedule7">{x["23-Dec"] ? x["23-Dec"] : "XXX"}</td>
    </tr>
  ));

  /*{"__EMPTY":"FT","EV PERISHABLES ":"F139","__EMPTY_1":632306,"__EMPTY_2":"RESCH",
  "Week 51":"KYLE","__EMPTY_3":"N1","__EMPTY_4":"DIVNOOR", "__EMPTY_6":6044450994,
  "17-Dec":"20:30-07:00 DOCK","18-Dec":"20:30-07:00 DOCK","22-Dec":"20:30-07:00 DOCK",
  "23-Dec":"20:30-07:00 DOCK","Original Seq":4,"Shift length":10,"__EMPTY_9":0,
  "__EMPTY_10":0,"__EMPTY_11":0,"__EMPTY_14":"YES","Skills":"RLVB","__EMPTY_18":"LVRB",
  "__EMPTY_19":"E"}*/

  return <div className="display">{employee}</div>;
}
