import React, { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const [gotJob, setGotJob] = useState([])
    const [onsiteJob, setOnsiteJob] = useState([])
    let applyJob = [];
    useEffect(()=>{
        const getJob = () => {
            let allJobs = {};
            const storedJob = localStorage.getItem('applied');
            if (storedJob) {
                allJobs = JSON.parse(storedJob);
            }
            return allJobs;
        }
        const appliedJobs = getJob();
        applyJob = Object.values(appliedJobs);
        setGotJob(applyJob)
        setOnsiteJob(applyJob)
    // console.log(appliedJobs)
    console.log(applyJob)

    },[])

    

    const remote = () => {
        const remoteJobs = onsiteJob.filter(remoteJob => remoteJob.isRemote === "Remote")
        setGotJob(remoteJobs)
    }
    const onsite = () => {
        const onsiteJobs = onsiteJob.filter(onsiteJob => onsiteJob.isRemote !== "Remote")
        setGotJob(onsiteJobs)
    }

    return (
        <div>
            <div className='background-color text-center lg:pb-28 pb-8 lg:pt-12 pt-4'>
                <h2 className='text-[#1A1919] font-bold text-3xl lg:text-5xl'>Applied Jobs</h2>
            </div>
            <div className='lg:px-36 px-2 mt-28 mb-6 text-end'>
                <button onClick={remote} className='mr-6 py-2 px-4 text-color border-2 border-[#9873FF] rounded font-bold'>Filter Remote Job</button>
                <button onClick={onsite} className='py-2 px-4 text-color border-2 border-[#9873FF] rounded font-bold'>Filter Onsite Job</button>
            </div>
            <div className='lg:px-36 px-2 my-4'>
                {
                    gotJob.map(appliedJob => <AppliedJob
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    ></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;