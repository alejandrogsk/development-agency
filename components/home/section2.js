import React from 'react'
import BtnSection2 from '../buttons/sections/btnSection2'

const Section2 = ({title, cta}) => {
    return (
        <section className="section2 margin-section">
            <p className="font-xl margin-b-2">{title}</p>
            <BtnSection2 cta={cta}/>
        </section>
    )
}

export default Section2
