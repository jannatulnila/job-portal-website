import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const Companies = () => {
  const companies = useLoaderData();
  const navigate = useNavigate();


  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Top Companies Hiring</h2>

      <section class="py-12 bg-base-200 text-white mb-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Featured Jobs</h2>
          <p class="mb-6">Explore top jobs from our trusted companies.</p>
          <button onClick={()=>navigate("/companyDetails")} class="btn btn-primary">View Jobs</button>
        </div>
      </section>

      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-6 justify-items-center">
        {companies.map((company) => (
          <div key={company.id}>
            <Link to="/companyDetails" >
              <img
                src={company.logo}
                alt=""
                className="w-24 h-24 object-contain hover:scale-105 transition"
              />
            </Link>
            <h1 className='font-bold'>{company.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;