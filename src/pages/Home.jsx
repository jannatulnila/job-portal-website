import React from 'react';
import Companies from '../Components/Companies/Companies';
import { useLoaderData } from 'react-router';
import CompanyDetails from './CompanyDetails';



const Home = () => {
    const companies = useLoaderData();
    console.log(companies);
    return (
        <div>
            
        </div>
    );
};

export default Home;