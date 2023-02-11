import React from "react"
import Navbar from "./navbar"
import Hero from "./hero"
import Card from "./Card"
//import KatieZaferes from "../Images/Katie-Zaferes-2-by-Tommy-Zaferes.jpeg"
import myDataArray from "./Data"

const App = () => {
    //console.log(myDataArray)
    const arrayElement = myDataArray.map(item => {
        return <Card
            key={item.id} //to avoid the warning msg while using Mappin function
            {...item} //using the spread operator
        //  img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // country={item.location}
        // title={item.title}
        // price={item.price}
        // openspots = {item.openSpots}
        />
    })
    return (
        <div >
            <div class="container">
                <Navbar />
                <Hero />
                <section className="cards-list">
                    {arrayElement}

                </section>
                {/* <Card 
                //img = {KatieZaferes}
                img = "/Images/Katie-Zaferes-2-by-Tommy-Zaferes.jpeg"
                rating = "5.0"
                reviewCount = {6}
                country = "USA"
                title = "life Lessons with katie Zaferes"
                price = {136}
                /> */}
            </div>
        </div>

    )
}

export default App