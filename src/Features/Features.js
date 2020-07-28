import React from 'react'
import FeatureItem from '../FeatureItem/FeatureItem'
import './Features.css'
import FEATURES from '../FeatureData'

export default class Features extends React.Component {
    render() {
        
        const features = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx
        return (
            <FeatureItem 
            key={featureHash}
            featureHash={featureHash} 
            feature={feature}  
            currencyFormat={this.props.currencyFormat}
            selectedOptions={this.props.selectedOptions}
            updateOptions={this.props.updateOptions}
            />
        )})
        

        
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features} {/* Loop to populate all <Feature /> components takes place in this file */}
            </form>
        )
    }
}



