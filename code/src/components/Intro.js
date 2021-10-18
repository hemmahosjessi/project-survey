import React from 'react'

const Intro = ({onStepChange}) => {
    return (
    <section className="intro">
      <label>SURVEY</label>
      <h1>We have some quick questions for you!</h1>
      <p>Be a sport and click the first button 😄!</p>
      <div className="start-btn">
      <button onClick={onStepChange}><a href="#question-one">Sure thing</a></button> 
      {/* <button onClick={onStepChange}>No way Jose'</button>  */}
      </div>
    </section>
    )

}

export default Intro