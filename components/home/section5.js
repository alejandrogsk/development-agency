import Image from 'next/image'
import React from 'react'
import Slider from '../specials/slider'

const Section5 = ({title, techs}) => {
    return (
        <section className="section5 padding-section">
            <h2 className="font-xl ">{title}</h2>
            <Slider techs={techs} />
        </section>
    )
}

export default Section5
