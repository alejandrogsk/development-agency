import Image from "next/image";
import React from "react";

const EcommerceSection1 = ({data}) => {
    const {  title, services, images  } = data;
    return (
        <section className="ecommerce1 ">
            <h1>{title}</h1>
            <div className="ecommerce1__content">
                <div className="ecommerce1__content--services">
                    {services.map((service, i) => {
                        return (
                            <div
                                key={i}
                                className="ecommerce1__content--service"
                            >
                                <span>
                                    <Image
                                        src="/images/check.png"
                                        width={32}
                                        height={32}
                                    />
                                </span>
                                <h2>{service.title}</h2>
                                <p>{service.subtitle}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="ecommerce1__content--images">
                    <Image
                        width={616}
                        height={355}
                        src={images.desktop}
                        alt="desktop design"
                    />
                </div>
            </div>
        </section>
    );
};

export default EcommerceSection1;
