import React from 'react';
import { default as ColourDiv } from './ColourDiv';
import './common.css'

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: '', isChecked: false, index: null,
            colors: [
                { name: 'Red', class: 'red' },
                { name: 'Green', class: 'green' },
                { name: 'Blue', class: 'blue' },
                { name: 'Black', class: 'black' }
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, index) {
        event.preventDefault();
        this.setState({ class: event.target.className, index })
    }

    render() {
        return (
            <div>
                {
                    this.state.colors.map((radios, index) => {
                        return (
                            < div >
                                <label >{radios.name}</label>
                                < input type="radio" name={radios.name} className={radios.class} onChange={(event) => this.handleClick(event, index)} checked={index === this.state.index} />
                            </div>
                        )
                    })
                }
                <ColourDiv class={this.state.class} />
            </div >
        );
    }
}

export default RadioButtons;