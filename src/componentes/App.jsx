import React from 'react'
import Card from './Card.jsx'
import imgKarma from "/icon-karma.svg"
import imgSupervisor from "../images/icon-supervisor.svg"
import imgTeamBuilder from "../images/icon-team-builder.svg"
import imgCalculator from "../images/icon-calculator.svg"

function App () {

    const hoverAnimation = e => {
        e.stopPropagation();
        const card = e.target.closest('.card')
        
        const height = card.clientHeight
        const width = card.clientWidth
        const layerX = e.nativeEvent.layerX
        const layerY = e.nativeEvent.layerY
        const rotationY = ((layerX - width / 2) / width) * 20
        const rotationX = ((layerY - height / 2) / height) * 20
        const styles = `perspective(500px) scale(1.02) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
        
        card.style.transform = styles
    }

    const removeAnimation = e => {
        const card = e.target.closest('.card')
        card.removeAttribute("style")
    }

    return (
        <main>
            <section>
                <h1 className="title">
                    Reliable, efficent delivery
                    <span>Powered by Tecnology</span>
                </h1>

                <p className="description">Our Artificial Intelligence powered tools use millions of projects data points to ensure that your project is successful</p>

                <div className="cards">
                    <Card 
                        title="supervisor"
                        description="Monitors activity to identify projects roadblocks"
                        image={imgSupervisor}
                        color="green"
                        addHoverAnimation={hoverAnimation}
                        removeHoverAnimation={removeAnimation}
                    />
                    <Card
                        title="team builder"
                        description="Scan our talent networkto create the optimal team for your project"
                        image={imgTeamBuilder}
                        color="red"
                        addHoverAnimation={hoverAnimation}
                        removeHoverAnimation={removeAnimation}
                    />
                    <Card
                        title="karma"
                        description="Regulary evaluates our talent to ensure quality"
                        image={imgKarma}
                        color="orange"
                        addHoverAnimation={hoverAnimation}
                        removeHoverAnimation={removeAnimation}
                    />
                    <Card
                        title="calculator"
                        description="Use data from past projects to provide better delivery estimates"
                        image={imgCalculator}
                        color="blue"
                        addHoverAnimation={hoverAnimation}
                        removeHoverAnimation={removeAnimation}
                    />
                </div>
            </section>
        </main>
    )
}

export default App
