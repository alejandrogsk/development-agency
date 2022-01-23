import Image from 'next/image'
import React from 'react'
import Slider from '../specials/slider'

const Section5 = ({title, techs}) => {
    return (
        <section className="section5 padding-section">
            <h2 className="font-xl margin-b-2">{title}</h2>
            <span className="line line-white line-medium margin-b-2"></span>
            <Slider techs={techs} />
        </section>
    )
}

export default Section5
