import React from "react"
import Rates from "./Rates"

export default function App(){
    const num = [1, 2, 3, 4, 5]
    const [hasRated, setHasRated] = React.useState(false)
    const [chosenRate, setChosenRate] = React.useState(0)
    const [lock, setLock] = React.useState(false)
    const [numArray, setNumArray] = React.useState(num.map(choice => {
        return {
            id: choice,
            isSelected: false
        }
    }))
    
    const rateBtns = numArray.map(choice => {
        return(
            <Rates 
                key={choice.id}
                id={choice.id}
                number={choice.id}
                isSelected={choice.isSelected}
                choose={()=>chooseRating(choice.id)}
            />
        )
    })
     
    function chooseRating(id){
        if(!lock){
            setNumArray(prevChoice => prevChoice.map(choice =>{
                    return choice.id === id ? 
                            {...choice, isSelected: !choice.isSelected}:
                            choice
                }))
            setChosenRate(id)
            setLock(true)
        }
        
        if(lock){
            setNumArray(prevChoice => prevChoice.map(choice =>{
                    return choice.id === id ? 
                            {...choice, isSelected: !choice.isSelected}:
                            choice
                }))
            setChosenRate(0)
            setLock(false)
        }
        
        
    }
    
    function submitRating(){
        setHasRated(!hasRated)
    }
    
    return (
        <div className="container">
            <main style={{display: !hasRated ? "block" : "none"}}>
                <div className="star-img__container">
                <img src="./images/icon-star.svg" alt="" className="star-img"/>
                </div>
                <h2>How did we do?</h2>
                <p className="info-para">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div>
                    <div className="rate-btn__container">
                        {rateBtns}
                    </div>
                    <div className="submit-btn__container">
                        <button className="submit-btn" onClick={submitRating}>submit</button>
                    </div>
                    
                </div>
            </main>
            <div style={{display: hasRated ? "flex" : "none"}} className="thank-you-container">
                <img src="./images/illustration-thank-you.svg" alt="" className="thank-you__img" />
                <p className="thank-you__rating-paragraph">You selected {chosenRate} out of 5</p>
                <h2>Thank You!</h2>
                <p className="info-para__thank-you">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
            
        </div>
    )
}