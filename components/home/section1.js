import React from 'react'

const Section1 = ({title, subtitle}) => {
    return (
        <section className="section1">
            <div className="margin-sides">
            <h1 className="font-xxl">{title}</h1>
            <p className="font-m">{subtitle}</p>
            <span className="line line-yellow line-medium"></span>
            </div>
        </section>
    )
}

export default Section1
