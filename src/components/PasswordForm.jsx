import React, { Component } from 'react';
import { FaRegCopy, FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class PasswordForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPassword: '',
            copied: false,
            ...props
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let nextNewPassword = this.props.newPassword;
        if (nextNewPassword !== this.state.newPassword) {
            this.setState({
                newPassword: nextNewPassword,
                copied: false
            });
        }
    }

    render() {
        let { state } = this;
        return (
            <form id="password-form" className="pure-form">
                <fieldset>
                    <legend>New Password</legend>

                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-5-6">
                            <input className="pure-u-23-24" disabled type="text" value={state.newPassword}/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-6">
                            <CopyToClipboard text={state.newPassword}
                                onCopy={() => this.setState({copied: true})}>
                                <button type="button" className="pure-button pure-button-primary pure-input-1"> { state.copied ? <FaCopy/> : <FaRegCopy />}</button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default PasswordForm;