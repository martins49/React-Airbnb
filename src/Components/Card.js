import React from "react"
//import redstar from "../Images/red-star-1-logo-png-transparent.png"


const Card = (props) => {
    // console.log(props.openspots)
    let badgeText
    if (props.openspots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.country === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">

            {{badgeText} && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--img" alt=" pics is here" />
            <div className="card--stats">
                {/* <img src={redstar} width="20px" className=".card--star" alt="" />*/}
                <img src="/Images/red-star-1-logo-png-transparent.png" width="20px" className=".card--star" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p> <span className="bold">From ${props.price} </span>/ person</p>



        </div>

    )
}
export default Card