import Image from "next/image";
import React from "react";

const EcommerceSection1 = ({ title, services, images }) => {
    return (
        <section className="ecommerce1 padding-section ">
            <h1 className="font-xl">{title}</h1>
            <div className="ecommerce1__content">
                <div className="ecommerce1__content--services">
                  {
                    services.map((service, i) => {
                      return (
                        <div key={i} className="ecommerce1__content--service">
                          <span>
                            <Image src="/images/check.png" width={32} height={32} />
                          </span>
                          <h2>{service.title}</h2>
                          <p>{service.subtitle}</p>
                        </div>
                      )
                    })
                  }
                </div>

                <div className="ecommerce1__content--images">
                  {/* 
                  <div style={{position:"absolute", top: "0"}}>
                    <Image src={images.desktop} width={610.81} height={350} /> 
                    
                  </div>
                  <div style={{position:"absolute", top:"6rem", right:"0"}}>
                    <Image src={images.mobile} width={123.55} height={250}/>
                    
                  </div> 
                  */}
                  {/* <img src={images.desktop} alt="desktop design"/> */}
                  <Image  width={616} height={355} src={images.desktop} alt="desktop design"/>
                  {/* <img src={images.mobile} alt="mobile design"/> */}
                </div>
            </div>

            {/* <img src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/785X40.jpg" 
title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago" 
width="785" height="40"/> */}
        </section>
    );
};

export default EcommerceSection1;
