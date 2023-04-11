import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className='background-color text-center py-28'>
                <h2 className='text-[#1A1919] font-bold text-3xl lg:text-5xl'>Here is some questions and answers</h2>
            </div>
            <div className='lg:px-36 px-2 my-10'>
                <h2 className='text-color mt-10 text-2xl lg:text-4xl font-bold'>Q1: When should you use context API?</h2>
                <p className='text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl'>Answer: <span></span></p>
                <h2 className='text-color mt-10 text-2xl lg:text-4xl font-bold'>Q2: What is a custom hook?</h2>
                <p className='text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl'>Answer: <span></span></p>
                <h2 className='text-color mt-10 text-2xl lg:text-4xl font-bold'>Q3: What is useRef?</h2>
                <p className='text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl'>Answer: <span></span></p>
                <h2 className='text-color mt-10 text-2xl lg:text-4xl font-bold'>Q4: What is useMemo?</h2>
                <p className='text-[#1A1919] mt-4 font-bold text-xl lg:text-2xl'>Answer: <span></span></p>
            </div>
        </div>
    );
};

export default Blog;