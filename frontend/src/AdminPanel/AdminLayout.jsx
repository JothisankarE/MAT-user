import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './AdminPanel.css'; // We'll create this to handle the admin layout styles

const AdminLayout = ({ setToken }) => {
    return (
        <div className='admin-panel'>
            <div className="dashboard-layout">
                <Navbar setToken={setToken} />
                <div className="app-content">
                    <Sidebar />
                    <div className="main-content-wrapper">
                        <div className="glass-content-area">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
