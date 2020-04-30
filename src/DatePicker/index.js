import React, {Component} from "react";
import TimerButton from "../TimerButton";
import './style.css'

class DatePicker extends Component{

    constructor(props) {
        super(props);
        this.fetchedDate= null;
        this.state = {

            timersList: [],
        }
    }

    onTimerFinish(targetTime){
        let temp = this.state.timersList.slice();
        // console.log('Target is: ',targetTime);
        // console.log('List is: ',temp);
        temp = temp.filter(e => e !== targetTime);
        // console.log('New temp: ' ,temp);
        this.setState( {
                timersList: temp,
            });
        alert(`Timer finished of target time ${new Date(targetTime)}`);
    }

    addToTimerList(){
        let temp = this.state.timersList.slice();
        temp.push(this.fetchedDate);
        this.setState({
                timersList: temp,
            }
        );
    }

    handleDate(date){

            this.fetchedDate= new Date(date.target.value).getTime();

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
                <div>List of Timers</div>
                <div className="timers-list">
                    {
                        this.state.timersList.map((dateValue, index) => {
                            return (
                                <TimerButton  key = {dateValue.toString() + index.toString()} targetTime= {dateValue} onFinish = {this.onTimerFinish.bind(this)}/>
                                );
                    })}
                </div>
            </div>
        );
    }
}

export default DatePicker;