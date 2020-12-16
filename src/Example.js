import React, {Component} from 'react';
import Buttons from './Buttons';


class Example extends Component {


    constructor() {
        super();

        this.state = {
            headingText: 'To jest tekst nagłówka 2'
        }
    }


    changeText = newText => {
        this.setState({headingText: newText})
    }


    render() {
        return (
            <div>
                <h1>{this.state.headingText}</h1>
                <Buttons changeTextMethod={this.changeText} />
            </div>
        )
    }
}

export default Example;