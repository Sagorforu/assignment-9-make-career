import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const JobDetails = () => {
    const { id } = useParams();
    const jobDetails = useLoaderData();
    const [details, setDetails] = useState({});
    useEffect(() => {
        const data = jobDetails.find(job => job.id == id)
        setDetails(data)
    }, [id])
    const { title, name, jobTitle, description, image, jobType, isRemote, jobLocation, salary, responsibilities, requirements, experience, phone, email, address } = details;

    const handleApplyBtn = details => {
        addToDb(details)
        console.log(details)
    }

    const addToDb = (details) => {
        const id = details.id;
        let allJobs = {};
        let storedJob = localStorage.getItem('applied');
        if (storedJob) {
            allJobs = JSON.parse(storedJob);
        }
        let getId = allJobs[id];
        if (getId) {
            allJobs[id] = details;
            toast("Already applied this job")
        }
        else {
            allJobs[id] = details;
        }
        localStorage.setItem('applied', JSON.stringify(allJobs));
    };

    return (
        <div>
            <div className='background-color lg:px-36 px-2 text-center lg:pb-28 pb-8 lg:pt-12 pt-4'>
                <h2 className='text-[#1A1919] font-bold text-3xl lg:text-5xl'>Job Details</h2>
            </div>
            <div className='my-20 lg:px-36 px-2 lg:grid lg:grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <h3 className='text-[#1A1919] font-bold'>Job Description: <span className='text-[#757575] font-semibold'>{description}</span></h3>
                    <h3 className='text-[#1A1919] my-5 font-bold'>Job Responsibility: <span className='text-[#757575] font-semibold'>{responsibilities}</span></h3>
                    <h3 className='text-[#1A1919] my-5 font-bold'>Educational Requirements:</h3>
                    <p className='text-[#757575] mt-3 font-semibold'>{requirements}</p>
                    <h3 className='text-[#1A1919] my-5 font-bold'>Experiences:</h3>
                    <p className='text-[#757575] my-3 font-semibold'>{experience}</p>
                </div>
                <div className=''>
                    <div className='img-background-color p-8 rounded-lg'>
                        <h2 className='text-[#1A1919] mb-5 font-bold text-base'>Job Details</h2>
                        <hr className='border-x-4' />
                        <div className='flex my-4 items-center'>
                            <img src="https://i.ibb.co/p0L65Ls/money.png" alt="" />
                            <h3 className='text-[#474747] mx-2 font-bold text-base'>Salary:</h3>
                            <p className='text-[#757575] font-semibold'> {salary}</p>
                        </div>
                        <div className='flex my-4 items-center'>
                            <img src="https://i.ibb.co/VBCwsRt/Frame-date.png" alt="" />
                            <h3 className='text-[#474747] mx-2 font-bold text-base'>Job Title:</h3>
                            <p className='text-[#757575] font-semibold'> {jobTitle}</p>
                        </div>
                        <h2 className='text-[#1A1919] mt-8 mb-5 font-bold text-base'>Contact Information</h2>
                        <hr className='border-x-4' />
                        <div className='flex my-4 items-center'>
                            <img src="https://i.ibb.co/XzvfGn3/call.png" alt="" />
                            <h3 className='text-[#474747] mx-2 font-bold text-base'>Phone:</h3>
                            <p className='text-[#757575] font-semibold'> {phone}</p>
                        </div>
                        <div className='flex my-4 items-center'>
                            <img src="https://i.ibb.co/NK4BPHb/message.png" alt="" />
                            <h3 className='text-[#474747] mx-2 font-bold text-base'>Email:</h3>
                            <p className='text-[#757575] font-semibold'> {email}</p>
                        </div>
                        <div className='flex my-4 items-center'>
                            <img src="https://i.ibb.co/bK0gVYb/location.png" alt="" />
                            <h3 className='text-[#474747] mx-2 font-bold text-base'>Address:</h3>
                            <p className='text-[#757575] font-semibold'> {address}</p>
                        </div>
                    </div>
                    <button onClick={() => handleApplyBtn(details)} className='btn-color w-full mt-6 px-4 py-3 rounded-md font-semibold text-sm text-white'>Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;