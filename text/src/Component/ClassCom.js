import React from 'react'

class ClassCom extends React.Component {
    state = {
        name: 'salleem',
        count: 0
    }
    inc = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <>
                <div>ClassCom {this.props.name}</div>
                <h1>{this.state.count}</h1>
                <button onClick={this.inc}>INC</button>
            </>

        )
    }
}

export default ClassCom 