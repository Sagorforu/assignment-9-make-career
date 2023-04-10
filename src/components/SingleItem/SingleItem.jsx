import React from 'react';

const SingleItem = ({singleItem}) => {
    const {title, image, description} = singleItem;
    return (
        <div className='background-color my-8 py-10 px-10 pr-24 rounded-lg'>
            <img className='img-background-color p-5 rounded-lg' src={image} alt="" />
            <h2 className='text-[#474747] font-bold text-2xl mt-10'>{title}</h2>
            <p className='text-[#A3A3A3] font-semibold text-base my-2'>{description}</p>
        </div>
    );
};

export default SingleItem;