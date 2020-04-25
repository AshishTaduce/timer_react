import React, {Component} from "react";
import TimerButton from "../TimerButton";
import './style.css'

class DatePicker extends Component{

    constructor(props) {
        super(props);
        this.state = {
            fetchedDate: null,
            timersList: [<div>List of Timers</div>],
        }
    }

    onTimerFinish(targetTime){
        let temp = this.state.timersList.slice();
        temp.splice(temp.indexOf(targetTime), 1);
        this.setState( {
                timersList: temp,
            });
        alert(`Timer finished of target time ${targetTime}`);
    }

    addToTimerList(){
        let temp = this.state.timersList.slice();
        temp.push(this.state.fetchedDate);
        this.setState({
                timersList: temp,
            }
        );
    }

    handleDate(date){
        this.setState({
            fetchedDate: date.target.value,
            }
        );
    }

    render() {
        return (
            <div className={'alarm'}>
                <div className='picker-button'>
                    <input type="datetime-local" id={'picker'}
                           onChange={(newDateEvent) =>
                               this.handleDate(newDateEvent)}/>
                     <button onClick={()=> this.addToTimerList()}>Submit</button>
                </div>

                <div className="timers-list">
                    {
                        this.state.timersList !== undefined ? this.state.timersList.map((dateValue, index) => {
                        if(index !== 0)
                            return (
                                <TimerButton targetTime= {new Date(dateValue)} onFinish = {this.onTimerFinish.bind(this)}/>
                                );
                        else return dateValue
                    }):null}
                </div>
            </div>
        );
    }
}

export default DatePicker;