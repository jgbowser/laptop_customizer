import React from 'react'
import './CartItem.css'

export default function CartItem(props) {
    return (
        <div className="summary__option" key={props.featureHash}>
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">{props.selectedOption.name}</div>
            <div className="summary__option__cost">
              {props.currencyFormat.format(props.selectedOption.cost)}
            </div>
          </div>
    )
}