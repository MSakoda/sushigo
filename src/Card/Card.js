import React from 'react';
import './Card.css';
function Card(props) {

    const style = {
        background: props.card.bg_color
    }
    console.log("this card:",props)
    return (
        <div
        onClick={props.card.click}
        className="Card"
        style={style}>
            <h5>{props.card.title}</h5>
            <img alt={props.card.title} src={props.card.img} />
        </div>
    )
}

export default Card;
