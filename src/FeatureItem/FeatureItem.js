import React from 'react'
import slugify from 'slugify'
import FeatureItemButton from '../FeatureItemButton/FeatureItemButton'
import './FeatureItem.css'
import FEATURES from '../FeatureData'

export default class FeatureItem extends React.Component {
    render() {

        const options = FEATURES[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item))
            return (
                <FeatureItemButton 
                key={itemHash}
                itemHash={itemHash} 
                feature={this.props.feature} 
                item={item} 
                currencyFormat={this.props.currencyFormat}
                selectedOptions={this.props.selectedOptions} 
                updateOptions={this.props.updateOptions}
                />)
        })

        return (
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {options} {/* FeatureItemButton array looped in this file */}
            </fieldset>
        )
    }
}