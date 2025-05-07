import { Link, useLoaderData } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import { useState } from 'react';


const CompanyDetails = () => {
    const companyData = useLoaderData();
    const [selectJob, setSelectJob] = useState(null);

    const openModal = (job) => {
        setSelectJob(job)
    }

    const closeModal = () => {
        setSelectJob(null)
    }


    return (
        <div>
            <Navbar></Navbar>

            {companyData.map((company) => (

                <div className='p-4 max-w-4xl  mx-auto border border-gray-200 mt-5 shadow-sm rounded-xl'>

                    <div className="flex items-center gap-5 mb-6 ">
                        <img className='w-18 h-18 object-contain'
                            src={company.logo}
                            alt="Shoes" />

                        <div>
                            <h2 className="text-3xl font-bold">{company.name}</h2>
                            <p className=' text-sm text-gray-500'>{company.description}</p>
                            <div className=" justify-end">
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

                    {/* job list */}
                    <h3 className='text-3xl font-semibold'>Available jobs</h3>
                    <div className='grid gap-5'>
                        {company.jobs.map((job) => (
                            <div key={job.id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
                                <h1 className='text-lg font-bold'>{job.title}</h1>
                                <p className='text-semibold text-gray-500' >{job.jobType}</p>
                                <p className='text-semibold text-gray-500'>{job.salary}</p>
                                <button onClick={() => openModal(job)} className='btn btn-primary'>Details</button>
                            </div>
                        ))}
                    </div>
                </div>

            ))}


            {selectJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl">
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-2">{selectJob.title}</h2>
                        <img src={selectJob.bannerImage} alt="" className="w-full h-40 object-cover rounded mb-3" />
                        <p className="text-gray-700 "><span className='text-black font-bold'>Location:</span> {selectJob.location}</p>
                        <p className="text-gray-700 "><span className='text-black font-bold'>Salary</span> {selectJob.salary}</p>
                        <p className="text-gray-700 "><span className='text-black font-bold'>Job Type:</span> {selectJob.jobType}</p>
                        <h3 className="font-semibold mt-4 ">Job Description</h3>
                        <p className="text-sm text-gray-600 ">{selectJob["job-description"]}</p>
                        <h3 className="font-semibold mt-4 ">Requirements</h3>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            {selectJob.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>

                        <div className="mt-4 flex justify-end gap-2">
                            <a
                                href={companyData[0].website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary"
                            >
                                Apply
                            </a>
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>


    )
}


export default CompanyDetails;