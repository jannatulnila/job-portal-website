import React from 'react';
import HowItWorks from '../Components/howItWorks/HowItWorks';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <HowItWorks data={data}></HowItWorks>
        </div>
    );
};

export default Home;