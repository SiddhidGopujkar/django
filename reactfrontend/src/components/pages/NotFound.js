import React from "react";

import Header, { Footer, Navbar } from "../partials/Theme";

const NotFound = () => {
    return (
        <div>
            <Navbar />

            <Header />
            
            {/* Container */}
            <div className="MinDiv" style={{backgroundColor: '#EEEBE6', borderRight: '1px solid #000000'}}>
                {/* Not found section */}
                <div className="d-flex justify-content-center align-items-center" style={{minHeight: 'calc(100vh - 149px - 341px)'}}>
                    <div className="d-block">
                        <h3>404</h3>
                        <h6>Page not found.</h6>
                    </div>
                </div>

                <Footer mindiv="full" />
            </div>
        </div>
    );
}

export default NotFound;