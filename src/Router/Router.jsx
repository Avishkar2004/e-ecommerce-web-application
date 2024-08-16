import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import Carousel from '../Components/Pages/Carousel';
import PostFlat from '../Components/Pages/PostFlat';

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
    return location.pathname === '/' ? <Carousel /> : null;
};

export default AppRouter;
