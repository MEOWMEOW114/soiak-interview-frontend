import React, { Component } from 'react';
import moment from 'moment';

export default class Clock extends Component {

    constructor(props) {
      super(props);
      this.state = {
        time: moment(),
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    tick() {
      this.setState({
        time: moment(),
      });
    }

    render() {
        const timeString = this.state.time.format('hh:mm:ss');
        const [ hour, minute, second] = timeString.split(':');
      return (
        <div>
            <span>The time is </span>
            <span className='hour'>{hour}</span>: 
            <span className='minute'>{minute}</span>: 
            <span className='second'>{second}</span>
        </div>
      );
    }
  }