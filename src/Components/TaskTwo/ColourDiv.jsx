import React from 'react';
import './common.css';

class DivElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { class: '' }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const className = nextProps.class
        return { class: className }
    }

    render() {
        return (
            <div className={'color-div' + ' ' + this.state.class}></div>//Not sure if its right
        )
    }
}

export default DivElement;