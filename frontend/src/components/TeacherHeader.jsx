import React from 'react';
import { BiNotification, BiSearch, BiCalendar } from 'react-icons/bi';

const TeacherHeader = () => {
    return (
        <div className='content--header'>
            <h1 className="header--title">Teacher Dashboard</h1>
            <div className="header--activity">
                <div className="search-box">
                    <input type="text" placeholder="Search students" />
                    <BiSearch className="icon" />
                </div>
            </div>
        </div>
    );
};

export default TeacherHeader;