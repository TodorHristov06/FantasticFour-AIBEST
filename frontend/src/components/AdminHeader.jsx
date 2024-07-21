import React from 'react';
import { BiNotification, BiSearch, BiCog } from 'react-icons/bi';

const AdminHeader = () => {
    return (
        <div className='content--header'>
            <h1 className="header--title">Admin Dashboard</h1>
            <div className="header--activity">
                <div className="search-box">
                    <input type="text" placeholder="Search users, reports, settings..." />
                    <BiSearch className="icon" />
                </div>

                <div className="notify">
                    <BiNotification className="icon" />
                </div>

                <div className="settings">
                    <BiCog className="icon" />
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;