import React from "react";
function Breakinterval(props){
    function decreaseCounter(){
        if(props.Breakinterval ===1){
            return;
        }
        props.decreaseBreak()
    }

    function increaseCounter(){
        if(props.Breakinterval === 60){
            return
        }
        props.increaseBreak()
    }
    return(
        <section>
            <h4>Break Length</h4>
        <section className="interval-container"> 
            <button className="pomo-button" disabled={props.isPlay === true ? "disabled" :""} onClick={decreaseCounter}>DOWN</button>           
            <p className="interval-length">{props.Breakinterval}</p>
            <button className="pomo-button" disabled={props.isPlay === true ? "disabled" :""} onClick={increaseCounter}>UP</button>
        </section>
        </section>
    )
}
export default Breakinterval