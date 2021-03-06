import React from 'react'

const Section4 = ({data}) => {
    const {title, content, services} = data;
    return (
        <section className="section4 margin-section">
            <div >
                <h2 className="font-xl margin-b-2">{title}</h2>
                <span className="line line-yellow line-medium margin-b-2"></span>
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
                                <img  src={service.image} alt={service.title} className="section4__service--img"/>
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
