import React from "react";
function SessionLength(props){
    function decreaseSession(){
        if(props.SessionLength === 1)
        {
            return
        }
        props.decreaseSession()
    }
    function increaseSession(){
        if(props.SessionLength === 120)
        {
            return
        }
        props.increaseSession()
    }
    return(
        <section>
            <h4>Session Length</h4>
            <section className="interval-container">
                <button className="pomo-button" disabled={props.isPlay === true ? "disabled" :""} onClick={decreaseSession}>DOWN</button>
                <p className="interval-length">{props.SessionLength}</p>
                <button className="pomo-button" disabled={props.isPlay === true ? "disabled" :""} onClick={increaseSession}>UP</button>
            </section> 
       </section> 

    )
}

export default SessionLength