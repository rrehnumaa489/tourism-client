import React from 'react';
import About from '../../About/About';
import AddService from '../../AddService/AddService';
import Contact from '../../Contact/Contact';
import ManageServices from '../../ManageServices/ManageServices';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <AddService></AddService>
            <Services></Services>
            <About></About>
            <Contact></Contact>
            {/* <ManageServices></ManageServices> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;