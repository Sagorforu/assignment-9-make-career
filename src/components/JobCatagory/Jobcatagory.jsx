import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';

const Jobcatagory = () => {
    const [catagory, setCatagory] = useState([]);
    
    useEffect(() => {
        fetch("/data.json")
            .then(response => response.json())
            .then(catagory => setCatagory(catagory));
    }, []);
    return (
        <div className='lg:px-36 px-2 mt-24'>
            <h2 className='text-[#1A1919] text-center font-bold text-3xl lg:text-5xl'>Job Category List</h2>
            <p className='text-[#757575] text-center font-semibold my-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='lg:flex justify-between'>
                {
                    catagory.map(singleItem => <SingleItem 
                    key={singleItem.id}
                    singleItem={singleItem}
                    ></SingleItem>)
                }
            </div>
        </div>
    );
};

export default Jobcatagory;