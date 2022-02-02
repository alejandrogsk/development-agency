import Link from "next/link";
import React from "react";

const Btn1 = ({ cta, page }) => {
    return (
        <Link href={page}>
            <a
            className="
                btn 
                btn__yellow 
                btn__medium 
                btn__hover_border-c-black 
                btn__hover_bg-c-transparent
                "
            >
                {cta}
            </a>
        </Link>
    );
};

export default Btn1;
