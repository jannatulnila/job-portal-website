import React from 'react';


const HowItWorks = ({data}) => {
    console.log(data)
    
    return (
        <section className="py-12 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {data.map((step, i) => (
                    <div key={i} className="card bg-base-100 shadow-md p-6 text-center">
                        <div className="text-4xl mb-2">{step.icon}</div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default HowItWorks;