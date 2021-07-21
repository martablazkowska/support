import React from 'react';
import moment from "moment";

interface props {
  currentDate: any
}

const Month: React.FC<props> = ({currentDate}) => {

  let weekDayShort: string[] = moment.weekdaysShort();
  let firstDay: number = currentDate
    .startOf("month")
    .day();

  let devs = ['PC', 'OZ', 'MB', 'UK'];



  let blanks = [];
  for (let i = 0; i < firstDay; i++) {
    blanks.push(
      <td key={`empty-${i}`}className="calendar-day empty">{""}</td>
    );
  }

  let daysInMonth = [];
  for (let d = 1; d <= currentDate.daysInMonth(); d++) {
    let currentDay = currentDate.dayOfYear();
    let weekOfYear = moment(currentDate).dayOfYear(d + currentDay - 1).week()

    daysInMonth.push(
      <td key={d} className="calendar-day">
        {d} <br/> {devs[weekOfYear % devs.length]}
      </td>
    );
  }

  let totalSlots = [...blanks, ...daysInMonth];
  let rows:any[] = [];
  let cells:any[] = [];

  totalSlots.forEach((row, i) => {

    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = []; // empty container
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) { // when end loop we add remain date
      rows.push(cells);
    }
  });

  let daysInMonthRow = rows.map((d, i) => {
    return <tr key={`row-${i}`}>{d}</tr>;
  });


  return (
    <table>
      <thead>
      <tr>
        {weekDayShort.map(day => {
          return (
            <th key={day} className="week-day">
              {day}
            </th>
          )
        })}
      </tr>
      </thead>
      <tbody>{daysInMonthRow}</tbody>
    </table>
  );
};

export default Month;
