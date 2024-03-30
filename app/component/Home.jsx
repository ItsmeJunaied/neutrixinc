import React from 'react';
import Banner from './Banner';
import Features from './Features';

const Home = () => {
    return (
        <div>

            <div className='container mx-auto'>
                <Banner />
                <Features/>
            </div>
        </div>
    );
};

export default Home;