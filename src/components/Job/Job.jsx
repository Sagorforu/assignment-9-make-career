import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

const Job = ({ job }) => {
    const {id, title, name, jobTitle, description, image,jobType, isRemote, jobLocation, salary, responsibilities, requirements, experience, phone, email, address } = job;
    return (
        <div className='border-2 px-2 lg:p-10 p-10 lg:mb-0 mb-4 rounded-lg'>
            <div>
                <img src={image} alt="" />
                <h2 className='mt-8 text-[#474747] font-bold text-xl'>{title}</h2>
                <p className='mt-2 text-[#757575] font-semibold text-base'>{name}</p>
                <div className='mt-4'>
                    <h2 className='py-1 px-4 mr-4 text-color border-2 border-[#9873FF] rounded font-bold'>{isRemote}</h2>
                    <h2 className='py-1 px-4 text-color border-2 border-[#9873FF] rounded font-bold'>{jobType}</h2>
                </div>
                <div className='lg:flex'>
                    <div className='flex items-center lg:mr-6'>
                        <FontAwesomeIcon className='mt-4  text-[#757575]' icon={faLocationDot} />
                        <h2 className='mt-4 ml-2 text-[#757575] font-semibold text-base'>{jobLocation}</h2>
                    </div>
                    <div className='flex items-center lg:ml-3'>
                        <FontAwesomeIcon className='mt-4 text-[#757575]' icon={faCircleDollarToSlot} />
                        <h4 className='mt-4 ml-2 text-[#757575] font-semibold text-base'>{salary}</h4>
                    </div>
                </div>
                <Link to={`/jobDetails/${id}`}><button className='btn-color mt-6 px-5 py-2 rounded-md font-semibold text-base text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Job;