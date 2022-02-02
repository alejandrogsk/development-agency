import React from 'react'
import Image from 'next/image'
import Btn2 from '../buttons/btn2'
const Section3 = ({title,content,cta,image}) => {
    return (
        <section className="section3 padding-section">
            <div className="section3__content ">
                <h2 className="font-xl margin-b-2">{title}</h2>
                <span className="line line-white line-medium margin-b-2"></span>
                {
                    content.map((paragraph, index) => <p key={index} className="font-m margin-b-2">{paragraph}</p>)
                }
                <Btn2 cta={cta}/>
            </div>
            <div className="section3__image-container">
                <Image layout='fill' alt="Tienda online" src={image} className="section3__image" />
            </div>
        </section>
    )
}

export default Section3
