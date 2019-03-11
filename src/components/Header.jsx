import React, { Component } from 'react';
import IconApp from './IconApp';


class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <IconApp style={{float: 'left'}} width={50} height={50}/>
                <h2>Password Generator</h2>
            </div>
        );
    }
}

export default Header;