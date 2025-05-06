import React from 'react';
import { useLoaderData } from 'react-router';

const CompanyDetails = () => {
    const company = useLoaderData();
    console.log(company);
    return (
        <div>
            CompanyDetails
        </div>
    );
};

export default CompanyDetails;