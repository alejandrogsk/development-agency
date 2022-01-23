import React from 'react'

const footerMenu = [
    "Contacto",
    "Blog",
    "Nuestro trabajo"
]

const Footer = () => {
    return (
        <footer>
            <span className="f__line"></span>
            <div className="f__content">
                <span>@Copyright DevelopmentAgency 2022</span>

                <ul>
                    {
                        footerMenu.map((element, i) => {
                            return <li key={i}><a>{element}</a></li>
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer
