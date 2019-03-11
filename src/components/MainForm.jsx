import React, { Component } from 'react';
import DATA from '../data';
import Switch from '../components/Switch';
import { FaRandom } from 'react-icons/fa';

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            password_length: "16",
            include_special_symbols: {
                status: false,
                charSet: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
            },
            include_lowercase_characters: {
                status: true,
                charSet: "abcdefghijklmnopqrstuvwxyz"
            },
            include_uppercase_characters: {
                status: true,
                charSet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            },
            include_numbers: {
                status: true,
                charSet: "0123456789"
            }
        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        if(name === 'password_length') {
            this.setState({
                [name]: value
            });
        } else {
            this.setState({
                [name]: {
                    ...this.state[name],
                    status: value
                }
            });
        }
    }

    handleGeneratePassword = (e) => {
        let { state } = this;
        let all = '';
        for (const prop in state) {
            let el = state[prop];
            if(typeof el === 'object') {
                if(el.status) {
                    all += el.charSet;
                }
            }
        }
        let new_password = this.generate(all, state.password_length)
        this.props.onGeneratePassword(new_password);
    }
    
    generate = (all, length = 16) => {
        var password = '';
        for (var index = 0; index < length; index++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }
        return password;
    }

    render() {
        const { state } = this;
        const listOptionsPasswordLength = DATA.PASSWORD_LENGTH.map((option) =>
            <option key={option.value} value={option.value} disabled={option.disabled}>{option.value}</option>
        );
        return (
            <form className="pure-form pure-form-aligned">
                <fieldset>
                    <div className="pure-control-group">
                        <label>Password Length: </label>
                        <select id="password_length" name="password_length" value={state.password_length} onChange={this.handleChange}>
                            {listOptionsPasswordLength}
                        </select>
                    </div>
                    <div className="pure-control-group">
                        <label>Include Special Symbols: </label>
                        <Switch id="include_special_symbols" name="include_special_symbols" checked={state.include_special_symbols.status} onSwitch={this.handleChange}/>
                        <span className="pure-form-message-inline"> (e.g. !@#$%^)</span>
                    </div>
            
                    <div className="pure-control-group">
                        <label>Include Lowercase Characters: </label>
                        <Switch id="include_lowercase_characters" name="include_lowercase_characters" checked={state.include_lowercase_characters.status} onSwitch={this.handleChange}/>
                        <span className="pure-form-message-inline"> (e.g. abcdef)</span>
                    </div>
            
                    <div className="pure-control-group">
                        <label>Include Uppercase Characters: </label>
                        <Switch id="include_uppercase_characters" name="include_uppercase_characters" checked={state.include_uppercase_characters.status} onSwitch={this.handleChange}/>
                        <span className="pure-form-message-inline"> (e.g. ABCDEF)</span>
                    </div>

                    <div className="pure-control-group">
                        <label>Include Numbers: </label>
                        <Switch id="include_numbers" name="include_numbers" checked={state.include_numbers.status} onSwitch={this.handleChange}/>
                        <span className="pure-form-message-inline"> (e.g. 123456)</span>
                    </div>
            
                    <div className="pure-controls">
                        <button type="button" onClick={this.handleGeneratePassword} className="pure-button button-success"><FaRandom /> Generate Password</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default MainForm;