import React from "react"

export default function Rates(props){
    
    let styles = {backgroundColor: props.isSelected === true ? 
                        "rgba(124, 135, 152, .5)" : "rgba(124, 135, 152, .1)"} 
    
    return(
        <div style={styles} className="rating-btn" onClick={props.choose}>
            <p className="rating-btn__label">{props.number}</p>
        </div>
    )
}