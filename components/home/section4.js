import React from 'react'

const Section4 = ({title, content, services}) => {
    return (
        <section className="section4 margin-section">
            <div >
                <h2 className="font-xl margin-b-2">{title}</h2>
                {
                    content.map((paragraph, index) => <p key={index} className="font-m margin-b-2">{paragraph}</p>)
                }
            </div>
            <div className="section4__services">
                {
                    services.map((service, index) =>{
                        return(
                            <div key={index} className="section4__service">
                                <div>
                                <img src={service.image} alt={service.title} className="section4__service--img"/>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Section4
