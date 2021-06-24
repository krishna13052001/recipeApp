import React from 'react'
import { Link } from 'react-router-dom'
const Cocktail = ({id,image,name,info,category}) => {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src= {image} alt={`${name} Image not found`}></img>
            </div>
            <div className="cocktail-footer">
                <h4 className="excape-margin"><strong>Drink Name: </strong>{name}</h4>
                <h6 className="excape-margin">Drink Type: {category}</h6>
                <p className="excape-margin">{info}</p>
                {/* <Link to={`/detail/${id}`} className="btn btn-primary btn-details" >
                    Details
                </Link> */}
            </div>
        </article>
    )
}

export default Cocktail
