import React from 'react'

const QuestionTwo = ({guestInput, nameInput, onGuestInputChange, onStepChange, onStepBackChange}) => {
    return (
    <section className="section" id="two">
         <div className="intro-text">
            <label>LOVE IS ALL YOU NEED</label>
            <h2>Nice to meet you {nameInput}!</h2>
            <p>Given the choice of anyone in the world, whom would you want as a dinner guest?</p>
        </div> 
        <form className="form">
            <label htmlFor="surnameInput">I´d say Barack Obama, you?</label>
            <input 
                id="surnameInput" 
                type="text" 
                value={guestInput} 
                onChange={onGuestInputChange}
            />
        </form>
        <div className="buttons">
            <button type="submit" onClick={onStepBackChange} href="#intro" className="btn">Go back!</button>
            <button type="submit" onClick={onStepChange} href="#two" className="btn">Next please!</button>
        </div>
    </section>
    )
}


export default QuestionTwo

