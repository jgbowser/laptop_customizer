import React from 'react'
import FeatureItem from '../FeatureItem/FeatureItem'

export default class Features extends React.Component {
    render() {
        
        const features = Object.keys(this.props.featuresList).map((feature, idx) => {
        const featureHash = feature + '-' + idx
        return (
            <FeatureItem 
            key={featureHash}
            featureHash={featureHash} 
            feature={feature} 
            featuresList={this.props.featuresList} 
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



