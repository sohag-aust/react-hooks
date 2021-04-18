import React, { Component } from 'react';

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }

        this.increaseCount = this.increaseCount.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    changeName(event) {
        this.setState({
            name:event.target.value
        })
    }

    increaseCount() {
        this.setState({
            count : this.state.count + 1
        })
    }

    componentDidMount() {
        document.title = `you clicked ${this.state.count} times (mounting)`;
    }
    
    componentDidUpdate(prevProp, prevState) {
        if(prevState.count !== this.state.count) {
            console.log('Updating document title');
            document.title = `you clicked ${this.state.count} times (updating)`;
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={this.changeName}/>
                <button onClick={this.increaseCount}>INC. Count</button>
            </div>
        )
    }
}

export default ClassCounter;
