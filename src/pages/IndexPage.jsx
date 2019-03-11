import React, { Component } from 'react';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import MainForm from '../components/MainForm';
import PasswordForm from '../components/PasswordForm';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            new_password : '',
        }
    }

    handleGeneratePassword = (new_password) => {
        this.setState({
            new_password
        })
    }

    render() {
        let { state } = this;
        return (
            <MainLayout>
                <Header />
                <MainForm onGeneratePassword={this.handleGeneratePassword}/>
                <PasswordForm newPassword={state.new_password}/>
            </MainLayout>
        );
    }
}

export default IndexPage;