import React from "react"
//import redstar from "../Images/red-star-1-logo-png-transparent.png"

const Card = (props) => {
     console.log(props.openSpots)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    else{
        badgeText = "OFFLINE"
    }

    return (
        <div className="card">

            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--img" alt=" pics is here" />
            <div className="card--stats">
                {/* <img src={redstar} width="20px" className=".card--star" alt="" />*/}
                <img src="/Images/red-star-1-logo-png-transparent.png" width="20px" className=".card--star" alt="" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p> <span className="bold">From ${props.price} </span>/ person</p>



        </div>

    )
}
export default Card