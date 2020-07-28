import React from 'react'
import CartTotal from '../CartTotal/CartTotal'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

export default function Cart(props) {

    const summary = Object.keys(props.selectedOptions).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selectedOptions[feature];
        return (
          <CartItem 
            key={featureHash}
            featureHash={featureHash}
            selectedOption={selectedOption}
            feature={feature}
            currencyFormat={props.currencyFormat}/>
        );
      });

    const total = Object.keys(props.selectedOptions).reduce(
        (acc, curr) => acc + props.selectedOptions[curr].cost,
        0
      );

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
           {summary}
            <CartTotal
              totalCost={total}
              currencyFormat={props.currencyFormat} 
            />
        </section>
    )
}