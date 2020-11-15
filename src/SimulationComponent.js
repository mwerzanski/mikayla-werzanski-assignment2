/* eslint-disable react/jsx-key */
import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import OnOff from './CellComponent';
import PropTypes from 'prop-types';

class SimulationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: props.grid,
            originalGrid: props.grid,
            copyGrid: [],
            frequency: props.frequency,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), this.state.frequency);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentWillRestart() {
        this.setState({
            grid: this.state.originalGrid,
        });
    }

    tick() {
        this.props.dispatch({ type: 'UPDATE_GRID' });
        this.setState({
            grid: this.props.grid,
        });
    }

    countAlive() {
        let count = 0;
        for (let i = 0; i < this.state.grid.length; i++) {
            for (let j = 0; j < this.state.grid[i].length; j++) {
                if (this.state.grid[i][j] === true) {
                    count++;
                }
            }
        }
        return count;
    }

    render() {
        return (
            <div
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                }}>
                <h3>Alive Cells: {this.countAlive()}</h3>
                {this.props.grid.map(function (row, index) {
                    return (
                        <Row index="test">
                            {row.map(function (cell, index) {
                                return (
                                    <div>
                                        <OnOff aliveState={cell}></OnOff>
                                    </div>
                                );
                            })}
                        </Row>
                    );
                })}
                <br />
                <br />
                <div
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '58%',
                    }}>
                    <button onClick={() => this.componentWillUnmount()}>
                        {'Pause'}
                    </button>
                    <button onClick={() => this.componentDidMount()}>
                        {'Play'}
                    </button>
                    <button onClick={() => this.componentWillRestart()}>
                        {'Restart'}
                    </button>
                </div>
                {console.log(this.state.originalGrid)}
            </div>
        );
    }
}

SimulationComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
    grid: PropTypes.func.isRequired,
    frequency: PropTypes.func.isRequired,
};

let mapDispatchToProps = function (dispatch, props) {
    return {
        dispatch: dispatch,
    };
};

function mapStateToProps(state, props) {
    return {
        grid: state.GridReducer,
        frequency: state.TimeReducer,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimulationComponent);
