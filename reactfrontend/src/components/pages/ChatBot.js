import React, { useEffect } from "react";
import { initContainer } from 'typebot-js'

import Header, { Footer, Navbar } from "../partials/Theme";

const ChatBot = () => {

    // const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        // if (!isLoaded)
        // {
            initContainer('typebot-container', {
                url: 'https://typebot.io/my-typebot-g17oy01',
            })

        //     setLoaded(true);
        // }
    },[]);

    return(
        <div style={{width: '100%'}}>
            <Navbar />

            <Header />
            
            {/* Container */}
            <div className="MinDiv" style={{backgroundColor: '#EEEBE6', borderRight: '1px solid #000000'}}>
                
                <div id="typebot-container" className="minDiv-text" 
                    style={{width: '100%', minHeight: 'calc(100vh - 149px - 341px)', height: '435px', marginLeft: '-12px', marginRight: '-12px'}}>
                </div>
                
                <Footer mindiv="full" />

            </div>

        </div>
    )
}

export default ChatBot;
