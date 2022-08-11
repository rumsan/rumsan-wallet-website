import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/DefaultHome/MainBanner';
import Services from '../components/DefaultHome/Services';
import About from '../components/DefaultHome/About';
import OurWorks from '../components/DefaultHome/OurWorks';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner/>
                <Services/>
                <About/>
                <OurWorks/>

            </>
        );
    }
}

export default Index;