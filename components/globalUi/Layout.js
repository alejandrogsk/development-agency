import React from 'react'
import Footer from '../layout/footer'
import Header from '../layout/header'
const Layout = ({children}) => {
    return (
        <div style={{ overflowX:"hidden" }}>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout
