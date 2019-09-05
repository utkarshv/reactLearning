import React from 'react';
import { default as List } from './List' //why do we need to use default keyword while importing
class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', items: [] };

        this.handleChange = this.handleChange.bind(this);//need to ask about this
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.value) {
            this.setState(state => {
                let items = state.items.concat(state.value);
                return { items, value: '' }
            })
        }
        event.preventDefault();
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
                <List items={this.state.items} />
            </div>
        );
    }
}

export default InputBox;