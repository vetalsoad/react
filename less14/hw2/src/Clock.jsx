import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = ({ location, offset }) => {
  const getTimeWithOffset = () => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
  };

  const formatDate = (date) => moment(date).format("LTS");

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);
  return (
    <div className='clock'>
      <div className='clock__location'>{location}</div>
      <div className='clock__time'>{formatDate(getTimeWithOffset())}</div>
    </div>
  );
};

export default Clock;
