import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
    constructor(props) {                                    
        super(props);                                       
        this.state = {who:"world"}
    }

    changeStateTest() {
        this.setState({who:"React"});
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={ () => this.setState({who:"Friend"})}>Friend</button>
                <button onClick={ () => this.changeStateTest()}>React</button>
                <button onClick={ () => this.setState({who:"World"})}>World</button>
            </div>
        )
    }
}