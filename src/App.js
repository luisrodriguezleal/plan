import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import SectionCard from './Components/SectionCard';
import Email from './Components/Email'
import CreditCardForm from './Components/CreditCardForm';
import Help from './Components/Help';
import './app.css';

export default class App extends Component {
    render () {
        return (
            <React.Fragment>
                <Help />
                <Navbar />
                <Header />
                <main role="main">
                    <SectionCard />
                    <Email />
                    <CreditCardForm />
                </main>
            </React.Fragment>
        )
    }
}
