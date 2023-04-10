import React from 'react';
import { PieChart, Pie, Tooltip } from "recharts";

const assignmentMarks = [
    { name: "A1", value: 60 },
    { name: "A2", value: 60 },
    { name: "A3", value: 60 },
    { name: "A4", value: 60 },
    { name: "A5", value: 56 },
    { name: "A6", value: 58 },
    { name: "A7", value: 60 },
    { name: "A8", value: 59 }
];

const Statistics = () => {
    return (
        <div className='lg:px-36 px-2 text-center content-center'>
            <h1 className='text-[#1A1919] my-16 text-center font-bold text-3xl lg:text-5xl'>Here is my all assignment Marks</h1>
            <div className='lg:flex items-center justify-around lg:px-40 pl-10'>
                <div className=''>
                    <h2 className='text-[#474747] font-bold text-3xl lg:text-5xl'>Total Assignment <br /> Marks <span className='text-color font-bold text-5xl lg:text-7xl'>60</span></h2>
                </div>
                <PieChart width={400} height={400}>
                    <Pie
                        data={assignmentMarks}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;