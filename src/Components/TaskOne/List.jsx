import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { itemList: [] }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const itemList = nextProps.items.map(element => {
            return <li>{element}</li>
        })
        return { itemList: itemList }
    }

    render() {
        return (
            <ul>{this.state.itemList}</ul>
        )
    }
}

export default List;