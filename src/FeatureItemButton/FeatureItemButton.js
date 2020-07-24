import React from 'react'
import slugify from 'slugify'


//props needed: itemHash, feature(from FEATURES), updateFeature callback, USCurrency
export default function FeatureItemButton(props) {
    return (
        <div key={this.props.itemHash} className="feature__item">
        <input
            type="radio"
            id={this.props.itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.state.selected[feature].name}
            onChange={e => this.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
  </label>
    </div>
    )
}