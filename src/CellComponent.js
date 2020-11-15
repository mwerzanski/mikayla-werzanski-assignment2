import React from 'react';
import PropTypes from 'prop-types';

function onOffStyle(aliveState) {
    let color;
    if (aliveState) {
        color = 'white';
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

export default class OnOff extends React.Component {
    render() {
        return <div style={onOffStyle(this.props.aliveState)}></div>;
    }
}

OnOff.propTypes = {
    aliveState: PropTypes.func.isRequired,
};
