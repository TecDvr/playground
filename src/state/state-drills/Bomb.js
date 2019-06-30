import React from 'react';
import ReactDOM from 'react-dom';
import { clearInterval } from 'timers';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
    }

    componentDidMount() {
        this.timer = setInterval(this.updateCount, 1000);
    }

    updateCount(){
        if(this.state >= 8){
            clearInterval(this.timer);
        } else {
            this.setState({
                count: this.state + 1
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <p>{this.state.count}</p>
                {this.state.count >= 8 ? 'boom' : (this.state.count % 2 == 0 ? 'tick' : 'tock')}
            </div>
        )
    }
}