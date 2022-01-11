import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const formatDate = (date) => moment(date).format("LTS");


class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: formatDate(getTimeWithOffset(props.offset)),
    };

      //do not do this way
    setInterval(() => {
      this.setState({
        time: formatDate(getTimeWithOffset(this.props.offset)),
      });
    }, 1000);
  }

  render() {
    return (
      <div className='clock'>
        <div className='clock__location'>{this.props.location}</div>
        <div className='clock__time'>{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;