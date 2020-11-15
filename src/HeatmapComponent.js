import React from 'react';
import PropTypes from 'prop-types';

function heatMapStyle(heatState) {
    let color;
    if (heatState === 0) {
        color = 'white';
    } else if (heatState === 1) {
        color = '#00E2E2';
    } else if (heatState === 2) {
        color = '#00C5C6';
    } else if (heatState === 3) {
        color = '#00AAAB';
    } else if (heatState === 4) {
        color = '#008E91';
    } else if (heatState === 5) {
        color = '#007477';
    } else if (heatState === 6) {
        color = '#005A5E';
    } else if (heatState === 7) {
        color = '#004247';
    } else if (heatState === 8) {
        color = '#002C30';
    } else {
        color = 'black';
    }
    return {
        backgroundColor: color,
        height: '50px',
        width: '50px',
        border: '1px grey solid',
    };
}

export default class HeatMapComponent extends React.Component {
    render() {
        return <div style={heatMapStyle(this.props.heatState)}></div>;
    }
}

HeatMapComponent.propTypes = {
    heatState: PropTypes.func.isRequired,
};
