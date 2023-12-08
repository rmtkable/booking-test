import React from "react";


function DailyWeather({ dateNum, dayIcon, tempHigh, tempLow }) {
  // dateNum = new Date(dateNum * 1000);
  dateNum = dateNum;
  dateNum.toString();
  // let options = { weekday: "short" };
  // dateNum = Intl.DateTimeFormat("en-US",).format(dateNum);

  return (
    <div className="container new-middle1 col-3 col-md-2 col-sm-10 py-2">
      <div className="card day">
        <img className="card-img-top" src={dayIcon} alt=".." />
        <h2 className="text-white">{dateNum}</h2>
        <div className="temp-container card-body">
          <h2 className="temp-high">High <br/>
            {tempHigh}
          </h2>
          <h2 className="temp-low">Low <br/>{tempLow}</h2>
        </div>
      </div>
    </div>
  );
}

export default DailyWeather;