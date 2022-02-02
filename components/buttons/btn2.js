import Link from 'next/link'
import React from 'react'

const Btn2 = ({cta}) => {
    return (
        <div style={{display: "inline-block"}}>
            <Link href={cta.link}>
                <a className="
                    btn 
                    btn__white 
                    btn__medium 
                    btn__hover_border-c-white 
                    btn__hover_bg-c-transparent
                    btn__hover_text-c-white
                    ">
                    {cta.title}
                </a>  
            </Link>
        </div>
    )
}

export default Btn2
