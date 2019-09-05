import React from 'react';
import { default as List } from './List' //why do we need to use default keyword while importing
class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.state = { items: [] };

        this.handleChange = this.handleChange.bind(this);//need to ask about this
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.value) {
            this.state.items.push(this.state.value)
            this.setState({ value: '' });
        }
        event.preventDefault();//need to ask you about this || no idea why are we using 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        List Item:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <List {...this.state} />
            </div>
        );
    }
}

export default InputBox;