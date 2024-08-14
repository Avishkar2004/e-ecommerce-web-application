import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from '../Components/Header';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import Homepage from '../Pages/Homepage';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Homepage />
            </Router>
        </div>
    )
}

export default AppRouter