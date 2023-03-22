import React from 'react';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';

export default function Dashboard() {
    return(
        <div>
        <h2> Dashboard</h2>
        <Header />
        <Cards />
        <Footer />
        </div>
    );
}