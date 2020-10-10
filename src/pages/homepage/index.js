import React from 'react'
import './index.css'
import Biblio2 from "./Biblio22.mp4"


export default function Homepage() {
    return (
        
            <div>
                <div>
                    <video 
                    autoPlay 
                    muted 
                    loop 
                    id="presentation video"
                    className="background_video">
                    <source src={Biblio2} type="video/mp4"/>
                    </video>
                    <h2 className="presentation-title"> welcome to the International open-library !</h2>
                        <div className="text-presentation">
                            
                            <p>Are you looking for inspiring book in a different languages ?</p>
                            <p>find good references and exiting ebooks <a href="/findBook">here</a> </p>
                        </div>
                </div>
            </div>
        
        
    )
}
