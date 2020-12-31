import React from 'react';
import './Card.css';
function Card(props) {

    const style = {
        background: props.card.bg_color
    }
    const titleStyle = {
      color: props.card.bg_color
    }

    const footerText = props.card.value_text ? props.card.value_text :
      <div className="pudding d_ib">
        <div className="line1 d_ib">
          {props.card.value_pudding.line1}:
        </div>
        <div className="line_2_3 d_ib">
          <p>{props.card.value_pudding.line2}</p>
          <p>{props.card.value_pudding.line3}</p>
        </div>
      </div>

    return (
        <div
        onClick={() => props.click(props.card)}
        className="Card"
        style={style}>
          <div className="cardContainer">
            <div className="body">
              <img alt={props.card.name} src={props.card.img_url} />
            </div>
            <div className="footer">
               <span style={titleStyle} className="title">{props.card.name.toUpperCase()}</span> <span style={{'color':'white'}}>{footerText}</span>
            </div>
          </div>
        </div>
    )
}

export default Card;
