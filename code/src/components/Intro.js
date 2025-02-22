import React from 'react'

const Intro = ({onStepChange}) => {
    return (
    <section id="#intro" className="section">
      <div className="intro-text">
        <label>LOVE IS ALL YOU NEED</label>
        <h1>I have a couple of questions for you, let's get to know eachother a bit better?</h1>
      </div>
      <div>
        <button type="submit" onClick={onStepChange} className="start-btn"><a href="#one">Yes let's!</a></button> 
    </div>
    </section>
    )

}

export default Intro