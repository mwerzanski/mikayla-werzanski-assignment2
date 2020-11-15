import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//gridHeight='10'
//gridWidth='10'
class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.onInputchange = this.onInputchange.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    callDispatch() {
        this.props.dispatch({
            type: 'CREATE_GRID',
            height: this.state.height,
            width: this.state.width,
        });
        this.props.dispatch({
            type: 'CREATE_HEATMAP',
            height: this.state.height,
            width: this.state.width,
        });
        this.props.dispatch({
            type: 'SET_TIME',
            frequency: this.state.frequency,
        });
    }

    render() {
        return (
            <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                <h5>Set Simulation Size:</h5>
                <span text-align="center">
                    <input
                        name="height"
                        type="text"
                        value={this.state.height}
                        onChange={this.onInputchange}
                    />
                    x
                    <input
                        name="width"
                        type="text"
                        value={this.state.width}
                        onChange={this.onInputchange}
                    />
                    <br />
                    <br />
                    <h5>Set Simulation Frequency:</h5>
                    <input
                        name="frequency"
                        type="text"
                        value={this.state.frequency}
                        onChange={this.onInputchange}
                    />
                    <br />
                    <br />
                    <Link
                        to="/SimulationComponent"
                        onClick={() => this.callDispatch()}>
                        Create Simulation
                    </Link>
                </span>
            </div>
        );
    }
}

HomeComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
};

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch: dispatch,
    };
};

function mapStateToProps(state) {
    return {
        state: state,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
