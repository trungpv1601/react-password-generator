import React, { Component } from 'react';

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            ...props
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let nextChecked = this.props.checked;
        if (nextChecked !== this.state.checked) {
            this.setState({
                checked: nextChecked
            });
        }
    }

    render() {
        let { state, props } = this;
        return (
            <div className="tg-list-item">
                <input className="tgl tgl-light" id={props.id} name={props.name} checked={state.checked} onChange={props.onSwitch} type="checkbox"/>
                <label className="tgl-btn" htmlFor={props.id}></label>
            </div>
        );
    }
}

export default Switch;