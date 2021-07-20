import React, {useEffect, useState} from 'react';
import moment from "moment";

import Month from "./Month";

const Calendar = () => {

  const [month, setMonth] = useState(moment().month());
  const [year, setYear] = useState(moment().year());

  const nextMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let temp = moment().year(year).month(month).add(1, 'M');

    setMonth(temp.month())
    setYear(temp.year())
  };

  const previousMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let temp = moment().year(year).month(month).add(-1, 'M');

    setMonth(temp.month())
    setYear(temp.year())
  };


  return (
    <>
      The current month: {moment().year(year).month(month).format("MMMM YYYY")}

      <br/>
      <br/>

      <button onClick={previousMonth}>{"<<"}</button>
      <button onClick={nextMonth}>{">>"}</button>

      <Month currentDate={moment().year(year).month(month)} />
    </>
  );
};

export default Calendar;
