import React from 'react';

const Card = props => (
    <div className="col-md-3">
        <div className="card mb-5">
            <img className="card-img-top rounded-circle" src={props.src} alt={props.alt} onClick={props.handleClick} id={props.id}/>
        </div>
    </div>
)

export default Card;