import React from 'react'
import Btn1 from '../buttons/btn1'

const Section2 = ({title, cta}) => {


    return (
        <section className="section2 margin-section">
            <p className="font-xl margin-b-2">{title}</p>
            <Btn1 cta={cta.title} page={cta.link}/>
        </section>
    )
}

export default Section2
