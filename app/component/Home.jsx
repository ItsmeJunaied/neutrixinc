import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Cards from './Cards';

const Home = () => {
    return (
        <div>

            <div className='container mx-auto'>
                <Banner />
                <Features />
                <Cards />
            </div>
        </div>
    );
};

export default Home;