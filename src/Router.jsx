import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/Landing';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Studentdashboard from './pages/student/Studentdashboard';
import Coordinatordashboard from './pages/coordinator/Coordinatordashboard';
import Spocdashboard from './pages/spoc/Spocdashboard';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import ResetPassword from './pages/forgotPassword/resetPassword/ResetPassword';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/student-dashboard' element={<Studentdashboard />} />
            <Route path='/coordinator-dashboard' element={<Coordinatordashboard />} />
            <Route path='/spoc-dashboard' element={<Spocdashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
    );
};

export default AppRouter;
