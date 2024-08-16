import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from '../Components/Header';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import Carousel from '../Components/Pages/Carousel';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Carousel />
            </Router>
        </div>
    )
}

export default AppRouter