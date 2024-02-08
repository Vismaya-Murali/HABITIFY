import React from 'react'
import '../app.css';
import Breakinterval from './breakinterval';
import SessionLength from './sessionLength';
import Timer from './timer';

class Pomodoro extends React.Component {
  constructor(){
    super();
    this.state={
      breaklength :5,
      sessionlength: 25,
      TimerMinute: 25
    }
    this.onIncreaseBreakLength=this.onIncreaseBreakLength.bind(this)
    this.onDecreaseBreakLength=this.onDecreaseBreakLength.bind(this)
    this.onIncreaseSessionLength=this.onIncreaseSessionLength.bind(this)
    this.onDecreaseSessionLength=this.onDecreaseSessionLength.bind(this)
    this.onToggleInterval=this.onToggleInterval.bind(this)
    this.onUpdateTimerMinute=this.onUpdateTimerMinute.bind(this)
    this.onreset=this.onreset.bind(this)
    this.onPlayStopTimer=this.onPlayStopTimer.bind(this)
  }
  onIncreaseBreakLength(){
    this.setState((prevState)=>{
      return{
        breaklength: prevState.breaklength +1
      }
    })
  }
  onDecreaseBreakLength(){
    this.setState((prevState)=>{
      return{
        breaklength: prevState.breaklength -1
      }
    })
  }
  onIncreaseSessionLength(){
    this.setState((prevState)=>{
      return{
        sessionlength: prevState.sessionlength +1,
        TimerMinute: prevState.sessionlength +1
      }
    })
  }
  onDecreaseSessionLength(){
    this.setState((prevState)=>{
      return{
        sessionlength: prevState.sessionlength -1,
        TimerMinute: prevState.sessionlength -1
      }
    })
  }
  onUpdateTimerMinute(){
    this.setState((prevState)=>{
      return{
        TimerMinute: prevState.TimerMinute-1
      }
    })
  }
  onToggleInterval(isSession){
    if(isSession){
      this.setState({
        TimerMinute: this.state.sessionlength
      })
    }else{
      this.setState({
        TimerMinute: this.state.breaklength
      })
    }
  }
  onreset(){
    this.setState({
        TimerMinute: this.state.sessionlength
    })
  }
  onPlayStopTimer(isPlay){
    this.setState({
        isPlay: isPlay
    })
  }
  render(){
  return (     
    <body className='pomo' >
      <main className='pomodoro'>
      <h2 className='h2-pomo'>POMODORO CLOCK</h2>
      <section className='interval-length-container'>
      <Breakinterval isPlay={this.state.isPlay} Breakinterval={this.state.breaklength} increaseBreak={this.onIncreaseBreakLength} decreaseBreak={this.onDecreaseBreakLength}/>
      <SessionLength isPlay={this.state.isPlay} SessionLength={this.state.sessionlength} increaseSession={this.onIncreaseSessionLength} decreaseSession={this.onDecreaseSessionLength}/>
      </section>
      <Timer TimerMinute={this.state.TimerMinute} breaklength={this.state.breaklength} UpdateTimerMinute={this.onUpdateTimerMinute} ToggleInterval={this.onToggleInterval} resettime={this.onreset} playstoptimer={this.onPlayStopTimer}/>
    </main>
    </body>
  );
}
}

export default Pomodoro;