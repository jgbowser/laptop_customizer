import React from 'react'
import slugify from 'slugify'


//props needed: itemHash, feature(from FEATURES), updateFeature callback, USCurrency
export default function FeatureItemButton(props) {
    return (
        <div key={props.itemHash} className="feature__item">
        <input
            type="radio"
            id={props.itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.item.name === props.selectedOptions[props.feature].name}
            onChange={e => props.updateOptions(props.feature, props.item)}
        />
        <label htmlFor={props.itemHash} className="feature__label">
            {props.item.name} ({props.currencyFormat.format(props.item.cost)})
  </label>
    </div>
    )
}