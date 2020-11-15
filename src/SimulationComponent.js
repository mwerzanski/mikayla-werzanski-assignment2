/* eslint-disable react/jsx-key */
import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import OnOff from './CellComponent';
import PropTypes from 'prop-types';
import HeatMap from './HeatmapComponent';

class SimulationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: props.grid,
            originalGrid: props.grid,
            frequency: props.frequency,
            heatmap: false,
            heatGrid: props.heatGrid,
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
        this.props.dispatch({ type: 'UPDATE_HEATMAP', grid: this.props.grid });
        this.setState({
            grid: this.props.grid,
            heatGrid: this.props.heatGrid,
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

    setHeatmap() {
        this.setState({
            heatmap: true,
        });
    }

    changeState(rowIndex, colIndex) {
        this.props.dispatch({
            type: 'UPDATE_GRID_CELL',
            grid: this.props.grid,
            row: rowIndex,
            col: colIndex,
        });
        this.props.dispatch({
            type: 'UPDATE_HEAT_CELL',
            grid: this.props.grid,
            row: rowIndex,
            col: colIndex,
        });
        this.setState({
            grid: this.props.grid,
            heatGrid: this.props.heatGrid,
        });
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
                <h3 style={{ textAlign: 'center' }}>
                    Alive Cells: {this.countAlive()}
                </h3>
                {!this.state.heatmap &&
                    this.props.grid.map(function (row, rowIndex) {
                        return (
                            <Row index="test">
                                {row.map(function (cell, colIndex) {
                                    return (
                                        <div
                                            onClick={() => {
                                                this.changeState(
                                                    rowIndex,
                                                    colIndex
                                                );
                                            }}>
                                            <OnOff aliveState={cell}></OnOff>
                                        </div>
                                    );
                                })}
                            </Row>
                        );
                    })}
                {this.state.heatmap &&
                    this.props.heatGrid.map(function (row) {
                        return (
                            <Row index="test">
                                {row.map(function (cell) {
                                    return (
                                        <div>
                                            <HeatMap heatState={cell}></HeatMap>
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
                    <br />
                    <br />
                    <button
                        onClick={() => {
                            this.setHeatmap();
                        }}
                        style={{ textAlign: 'center' }}>
                        {'View Heatmap'}
                    </button>
                </div>
            </div>
        );
    }
}

SimulationComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
    grid: PropTypes.func.isRequired,
    frequency: PropTypes.func.isRequired,
    heatGrid: PropTypes.func.isRequired,
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
        heatGrid: state.HeatReducer,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimulationComponent);
