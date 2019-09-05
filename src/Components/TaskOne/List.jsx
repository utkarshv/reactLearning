import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { itemList: [] }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        prevState.itemList = nextProps.items.map(element => {
            return <li>{element}</li>
        })
        return null
    }

    render() {
        return (
            <ul>{this.state.itemList}</ul>
        )
    }
}

export default List;