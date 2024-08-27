import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import PostFlat from '../Components/Pages/PostFlat';
import LookingFor from '../Components/Pages/LookingFor';
import Reviews from '../Components/Pages/Reviews';
import Room from '../Components/Pages/rooms/Room';
import PropertySearch from '../Components/Pages/PropertySearch ';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/postaboutroom" element={<PostFlat />} />
                {/* Additional routes can be added here */}
            </Routes>
            <ConditionalCarousel />
        </Router>
    );
};

const ConditionalCarousel = () => {
    const location = useLocation();

    // Show Carousel only on the home route or other specific routes
    if (location.pathname === '/') {
        return (
            <>
                <PropertySearch />
                {/* <LookingFor /> */}
                {/* <Room /> */}
                {/* <Reviews /> */}
            </>
        );
    }

    return null;
};

export default AppRouter;
