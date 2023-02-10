import React from "react"
//import familypicture from "../Images/familyphoto.jpg"

const Hero = () => {
    return (
        <div className="herocontent">
           {/* <img className="familypic" src={familypicture} width="1000px" alt="" /> */}
          <img className="familypic" src="/Images/familyphoto.jpg" width="1000px" alt="" /> 
            <h1>Online Experiences</h1>
            <p> join unique interactive activities led by
                one-of-a-kind hosts-all without leaving 
                home.
            </p>
        </div>

    )
}

export default Hero