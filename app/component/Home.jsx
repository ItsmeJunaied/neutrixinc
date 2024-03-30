import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Cards from './Cards';
import Report from './Report';

const Home = () => {
    return (
        <div>

            <div className='container mx-auto'>
                <Banner />
                <Features />
                <Cards />
                <Report />
            </div>
        </div>
    );
};

export default Home;