import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Jobcatagory from '../JobCatagory/Jobcatagory';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Jobcatagory></Jobcatagory>
        </div>
    );
};

export default Home;