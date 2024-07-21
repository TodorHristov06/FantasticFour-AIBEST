import React from 'react';
import "../styles/studentList.css";
import ProfilePicture from '../assets/ProfilePicture.jpg';

const students = [
    {
        id: 1,
        image: ProfilePicture,
        name: "Tom Brown",
        class: 'Math 101',
        progress: '80%',
    },
    {
        id: 2,
        image: ProfilePicture,
        name: "Lucy White",
        class: 'English Literature',
        progress: '90%',
    },
    // Добавете повече студенти тук
];

const StudentList = () => {
    return (
        <div className="student--list">
            <div className="list--header">
                <h2>Students</h2>
                <select>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                </select>
            </div>
            <div className="list--container">
                {students.map((student) => (
                    <div key={student.id} className="list">
                        <div className="student--detail">
                            <img src={student.image} alt={student.name} />
                            <h2>{student.name}</h2>
                        </div>
                        <span className='student--class'>{student.class}</span>
                        <span className='student--progress'>{student.progress}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentList;
