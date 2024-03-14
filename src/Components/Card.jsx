import React from 'react'
import "./Css/Card.css"
const Card = ({title,description,date}) => {
    return (
        <>
            <div className="card text-center">
                <div className="card-header custom-card-title">
                    {date}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    
                </div>
                
            </div>
        </>
    )
}

export default Card