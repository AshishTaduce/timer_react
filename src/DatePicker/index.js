import React, {Component} from "react";
import TimerButton from "../TimerButton";
import './style.css'

class DatePicker extends Component{

    constructor(props) {
        super(props);
        let temp = [<div>List of Timers</div>];
        this.state = {
            fetchedDate: null,
            timersList: temp,
        }
    }

    onTimerFinish(targetTime){
        // console.log('====================================');
        // console.log('hum yaha hai',targetTime, this.state);
        // console.log('====================================');
        let temp = this.state.timersList.slice();
    
        temp.splice(temp.indexOf(targetTime), 1);
        // console.log(temp);
        this.setState( {
                timersList: temp,
            });
    }

    updateTimersList(){
        console.log('====================================');
        console.log('hum yaha naye hai', this.state);
        console.log('====================================');
        let temp = this.state.timersList.slice();
        temp.push(this.state.fetchedDate);
        this.setState({
                timersList: temp,
            }
        );
    }

    handleDate(date){
        console.log(date.target.value);
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
                     <button onClick={()=> this.updateTimersList()}>Submit</button>
                </div>

                <div className="timers-list">
                    {
                        this.state.timersList !== undefined ? this.state.timersList.map((x) => {
                        return (
                                <TimerButton time = {new Date(x)} onFinish = {this.onTimerFinish.bind(this)}/>
                                );
                    }):null}
                </div>
            </div>
        );
    }
}

export default DatePicker;