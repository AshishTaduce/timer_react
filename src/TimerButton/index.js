import React, {Component} from "react";
import './style.css'

class TimerButton extends Component {
    setInterval = 0;
    targetTime = new Date(this.props.targetTime);
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 'Starting Timer',
        }
    }

    calculateCurrentTime(){
        let current = new Date();
        let oneHour = 60 * 60 * 1000;
        let oneMin = 60 * 1000;
        let oneDay = 24 * 60 * 60 * 1000;
        let days=(Math.floor(Math.abs(current - this.targetTime) / oneDay));
        let hours=(Math.floor(Math.abs(current - this.targetTime ) / oneHour)% 24);
        let minutes=(Math.floor((Math.abs(current - this.targetTime ) / oneMin) % 60));
        let seconds= (Math.floor((Math.abs(current - this.targetTime) / 1000) % 60));
        this.setState({
            currentTime: (`${days} days ${hours} hours ${minutes} minute ${seconds} seconds`),
        });
    }

    componentDidMount() {this.setInterval = setInterval(() => {
        this.timer();
    }, 300)};

    componentWillUnmount(){
        this.setInterval = null;
    }

    timer() {
        if(Math.round((this.targetTime.getTime() - Date.now()) / 1000) === 0.00){
            clearInterval(this.setInterval);
            this.props.onFinish(this.props.targetTime);
            return;
        }
        this.calculateCurrentTime();
    }

    render() {
            return (
                <div className='timer' key = {Math.random()}>
                    {this.state.currentTime}
                </div>
            );
        }
}

export default TimerButton;