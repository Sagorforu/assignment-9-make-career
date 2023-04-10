import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Jobcatagory from '../JobCatagory/Jobcatagory';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Jobcatagory></Jobcatagory>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;