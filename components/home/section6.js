import Image from "next/image";
import React from "react";

const Section6 = ({ title, partners }) => {
    return (
        <section className="section6 margin-section">
            <h2 className="font-xl ">{title}</h2>

            <div className="section6__partners">
                {partners.map((partner, i) => {
                    return <div key={i}>
                        <Image alt={`${partner.image} image`} src={partner.image} width={500} height={130}/>    
                        <p>{partner.content}</p>
                    </div>;
                })}
            </div>
        </section>
    );
};

export default Section6;
