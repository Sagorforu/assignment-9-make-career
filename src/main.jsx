import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: 'jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`/jobs.json`)
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
