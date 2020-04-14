import React, {Component} from "react";
import './style.css'

class TimerButton extends Component {
    a = 0;
    constructor(props) {
        super(props);
        let current = new Date();
        let oneHour = 60 * 60 * 1000;
        let oneMin = 60 * 1000;
        let oneDay = 24 * 60 * 60 * 1000;
        console.log(this.props);
        this.state = {
            days: (Math.floor(Math.abs(current - this.props.time) / oneDay)),
            hours: (Math.floor(Math.abs(current - this.props.time ) / oneHour)% 24),
            minutes: (Math.floor((Math.abs(current - this.props.time ) / oneMin) % 60)),
            seconds: (Math.floor((Math.abs(current - this.props.time) / 1000) % 60)),
        }
    }

    componentDidMount() {this.a = setInterval(() => this.timer(), 1000)};

    componentWillUnmount(){
        clearInterval(this.a);
    }

    timer() {
        if(Math.round((this.props.time.getTime() - Date.now()) / 1000) === 0.00){
            alert(`Timer finished of target time ${this.state.days}:${this.state.hours}:${this.state.minutes}:${this.state.seconds}`);
            this.props.onFinish(this.props.time);
        }
        let current = new Date();
        let oneDay = 24 * 60 * 60 * 1000;
        let oneHour = 60 * 60 * 1000;
        let oneMin = 60 * 1000;
        // console.log(this.props.time.getTime() - Date.now());
        // console.log(Math.round((this.props.time.getTime() - Date.now()) / 1000) === 0.00);
        this.setState({
            days: (Math.floor(Math.abs(current - this.props.time) / oneDay)),
            hours: (Math.floor(Math.abs(current - this.props.time ) / oneHour)% 24),
            minutes: (Math.floor((Math.abs(current - this.props.time ) / oneMin) % 60)),
            seconds: (Math.floor((Math.abs(current - this.props.time) / 1000) % 60)),
        });
    }

    render() {
        // if(Math.round((this.props.time.getTime() - Date.now()) / 1000) >= 1.00){
            return (
                <div className='timer' key = {Math.random()}>
                    {this.state.days}:{this.state.hours}:{this.state.minutes}:{this.state.seconds}
                </div>
            );
        }
}

export default TimerButton;