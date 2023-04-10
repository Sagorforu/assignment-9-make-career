import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs = useLoaderData();
    return (
        <div className='py-24'>
            <h2 className='text-[#1A1919] text-center font-bold text-3xl lg:text-5xl'>Featured Jobs</h2>
            <p className='text-[#757575] text-center font-semibold my-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='lg:px-36 px-2 lg:grid lg:grid-cols-2 lg:gap-6'>
                {
                    jobs.map(job => <Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
            <div className='text-center'>
            <Link to='/'><button className='btn-color text-center mt-10 px-5 py-3 rounded-md font-semibold text-base text-white'>See All Jobs</button></Link>
            </div>
        </div>
    );
};

export default Jobs;