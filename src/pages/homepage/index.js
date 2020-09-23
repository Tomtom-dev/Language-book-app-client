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
                    <div className="text-presentation">
                        <h2> welcome to the International open-library !</h2>
                        <p>Are you looking for inspiring book in a selected language ?</p>
                        <p>find good references and exiting ebooks <a href="/findBook">here</a> </p>
                    </div>
            </div>
           
           
            
        </div>
    )
}
