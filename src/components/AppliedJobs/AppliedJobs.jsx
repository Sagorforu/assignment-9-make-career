import React from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const getJob = () => {
        let allJobs = {};
        const storedJob = localStorage.getItem('applied-jobs');
        if (storedJob) {
            allJobs = JSON.parse(storedJob);
        }
        return allJobs;
    }

    const appliedJobs = getJob();
    console.log(appliedJobs)
    return (
        <div>
            <div className='background-color text-center pb-28 pt-12'>
                <h2 className='text-[#1A1919] font-bold text-3xl lg:text-5xl'>Applied Jobs</h2>
            </div>
            <div className='lg:px-36 px-2 mt-28 mb-6 text-end'>
                <button className='mr-6 py-2 px-4 text-color border-2 border-[#9873FF] rounded font-bold'>Filter Remote Job</button>
                <button className='py-2 px-4 text-color border-2 border-[#9873FF] rounded font-bold'>Filter Onsite Job</button>
            </div>
            <div className='lg:px-36 px-2 my-4'>
                {
                    Object.values(appliedJobs).map(appliedJob => <AppliedJob
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    ></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;