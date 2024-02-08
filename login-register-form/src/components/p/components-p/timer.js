import React from "react";
class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            isSession: true,
            timersecond:0,
            intervalId:0
        }
        this.play=this.play.bind(this)
        this.stop=this.stop.bind(this)
        this.decreaseTimer=this.decreaseTimer.bind(this)
        this.reset=this.reset.bind(this)
    }
    play(){
        let intervalId= setInterval(this.decreaseTimer,1000)
        this.props.playstoptimer(true)
        this.setState({
            intervalId: intervalId
        })
    }
    stop(){
        clearInterval(this.state.intervalId)
        this.props.playstoptimer(false)
    }
    reset(){
        this.stop()
        this.props.resettime()
        this.props.playstoptimer(false)
        this.setState({
            timersecond:0,
            isSession: true
        })
    }
    decreaseTimer(){
        switch(this.state.timersecond){
            case 0:
            if(this.props.TimerMinute === 0)
            {
                if(this.state.isSession){
                    this.setState({
                        isSession: false
                    })
                    this.props.ToggleInterval(this.state.isSession)
                }
                else{
                        this.setState({
                            isSession: true
                        })
                        this.props.ToggleInterval(this.state.isSession)
            }}
            else{
            this.props.UpdateTimerMinute()
            this.setState({
                    timersecond:59
            })
            }
            break
            default: this.setState((prevState)=>{
                return{
                    timersecond: prevState.timersecond -1
                }
            })
            break
        }
    }
    render(){
        return(
            <section>
                <section className="timer-container">
                    <h4>{this.state.isSession === true ? "Session" :"Break"}</h4>
                    <span className="time">{this.props.TimerMinute}</span>
                    <span className="time">:</span>
                    <span className="time">{this.state.timersecond === 0? "00" : this.state.timersecond<10 ? "0" + this.state.timersecond : this.state.timersecond}</span>
                </section>
                <section className="timer-action">
                    <button className="pomo-button" onClick={this.play}>PLAY</button>
                    <button className="pomo-button" onClick={this.stop}>STOP</button>
                    <button className="pomo-button" onClick={this.reset}>RESET</button>
                </section>
            </section>
        )
    }
}

export default Timer