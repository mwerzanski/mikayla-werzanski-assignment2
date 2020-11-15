import React from 'react';

export default class AboutComponent extends React.Component {
    render() {
        return (
            <div
                style={{
                    paddingTop: '50px',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                }}>
                <h1 style={{ textAlign: 'center' }}>
                    About Conways Game of Life
                </h1>
                <h3>Rules:</h3>
                <ul>
                    <li>Living cells are white, while dead cells are black</li>
                    <li>
                        A living cell with less than 2 neighbors will die in the
                        next iteration
                    </li>
                    <li>
                        A living cell with either 2 or 3 neightbors in the
                        current iteration will continue living in the next
                        iteration
                    </li>
                    <li>
                        A living cell with more than 3 living neighbors will die
                        in the following iteration of the game
                    </li>
                    <li>
                        If a dead cell has exactly 3 live neighbors it will come
                        back to life in the next iteration
                    </li>
                </ul>
                <h3>
                    To read more visit:{' '}
                    <a
                        href={
                            "https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
                        }>
                        Conways Game of Life
                    </a>
                </h3>
            </div>
        );
    }
}
