import React from 'react';
import "../styles/teacherList.css";
import ProfilePicture from '../assets/ProfilePicture.jpg';

// Примерни данни за текущия учител
const currentTeacher = {
    id: 1,
    image: ProfilePicture,
    name: "Maria Ivanova",
    classes: [
        { className: 'Mathematics - 5th Grade', time: 'Monday & Wednesday: 10 AM - 2 PM' },
        { className: 'Mathematics - 6th Grade', time: 'Friday: 12 PM - 3 PM' }
    ],
};

const TeacherList = () => {
    return (
        <div className="teacher--list">
            <div className="list--header">
                <h2>Your Classes</h2>
            </div>
            <div className="list--container">
                <div className="teacher--list">
                    <div className="teacher--detail">
                        <img src={currentTeacher.image} alt={currentTeacher.name} />
                        <div>
                            <h2>{currentTeacher.name}</h2>
                        </div>
                    </div>
                    <div className="schedule-container">
                        {currentTeacher.classes.map((item, index) => (
                            <div key={index} className="class-schedule">
                                <h3>{item.className}</h3>
                                <span>{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherList;
