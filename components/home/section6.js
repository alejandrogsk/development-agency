import Image from "next/image";
import React from "react";

const Section6 = ({ title, partners }) => {
    return (
        <section className="section6 margin-section">
            <h2 className="font-xl margin-b-2">{title}</h2>
            <span className="line line-yellow line-medium margin-b-2"></span>
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
