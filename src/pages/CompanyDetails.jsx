import { Link, useLoaderData } from 'react-router';
import Navbar from '../Components/Header/Navbar';


const CompanyDetails = () => {
    const companyData = useLoaderData();
    console.log(companyData);


    return (
        <div>
            <Navbar></Navbar>

            {companyData.map((company) => (
                <>
                    <section className='flex gap-10 '>

                        <div className="card bg-base-100 w-60 shadow-sm ">
                            <figure>
                                <img
                                    src={company.logo}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{company.name}</h2>
                                <p>{company.description}</p>
                                <div className="card-actions justify-end">
                                    <a
                                        href={company.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline"
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ))}
        </div>
    )
}


export default CompanyDetails;