import React from 'react'
import './index.css'

export default function Homepage() {
    return (
        <div >
            
            <img 
            alt ="The library"
            src="https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_960_720.jpg"
            className="img-presentation"
            ></img>
           
            <div className="text-presentation">
                <h2> welcome to the international Open-library </h2>
                <p>Are you looking for inspiring book in a selected language ?</p>
                <p>find good references and exiting  <a href="/findBook">here</a> </p>
            </div>
        </div>
    )
}
