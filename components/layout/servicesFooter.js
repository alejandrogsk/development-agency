
import { useRouter } from "next/router";
import React from "react";
import Btn1 from "../buttons/btn1";

const ServicesFooter = () => {
    const { locale } = useRouter();

    return (
        <section className="services-footer">
            {locale === "es" ? (
                <>
                    <p>
                    Contactenos para analizar su proyecto y ofrecerte una solución acorde a sus necesidades.
                    </p>
                    <Btn1 cta="contactanos" page="/contacto" />
                </>
            ) : (
                <>
                    <p>
                    Contact us to analyze your project and offer you a solution according to your needs.
                    </p>
                    <Btn1 cta="contact us" page="/contact" />
                </>
            )}
        </section>
    );
};

export default ServicesFooter;
