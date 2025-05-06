import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Companies = () => {
    const companies = useLoaderData();
  
    return (
        <section id="companies" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Top Companies Hiring</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {companies.map((company) => (
          <Link to={`/company/${company.id}`} key={company.id}>
            <img
              src={company.logo}
              alt={company.name}
              className="w-24 h-24 object-contain hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>
    </section>
    );
};

export default Companies;