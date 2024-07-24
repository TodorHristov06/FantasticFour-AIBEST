import React from 'react';
import { BiNotification, BiSearch, BiStar } from 'react-icons/bi';

const StudentHeader = () => {
    return (
        <div className='content--header'>
            <h1 className="header--title">Student Dashboard</h1>
            <div className="header--activity">
                <div className="search-box">
                    <input type="text" placeholder="Search courses" />
                    <BiSearch className="icon" />
                </div>
            </div>
        </div>
    );
};

export default StudentHeader;