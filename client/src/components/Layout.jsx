import React from 'react';
import Area from './Area';
import AppContext from './../AppContext';
import SocketServerApi  from './../Socket/socket-api';
export default class extends React.Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            score: {
                circle: 0,
                cross: 0
            },
            areaKey: '1'
        }
    }

    onWin(whoWin) {
        this.setState({
            score: {
                ...this.state.score,
                [whoWin]: this.state.score[whoWin] + 1
            }
        })
    }
    onEnd () {
        this.setState({
            areaKey: (Math.random() * 10).toString()
        })
    };
    onReset() {
        this.setState({
            areaKey: (Math.random() * 10).toString()
        })
    };
    render() {
        return (<div >
            <h3>User ID: {this.context.userID}</h3>
            <div>Cross: {this.state.score.cross} Circle: {this.state.score.circle}</div>
            <button onClick={this.onReset}>Reset</button>
            <Area
                key={this.state.areaKey}
                onWin={this.onWin}
                onEnd={this.onEnd} />
        </div>)
    }

}