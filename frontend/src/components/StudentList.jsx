import React, { useState } from 'react';
import "../styles/studentList.css";
import ProfilePicture from '../assets/ProfilePicture.jpg';

const teachers = [
    {
        id: 1,
        image: ProfilePicture,
        name: "Mr. John Doe",
        subject: 'Math 101',
        assignments: [
            { id: 1, title: "Homework 1", status: "completed" },
            { id: 2, title: "Project 1", status: "in-progress" },
            { id: 3, title: "Quiz 1", status: "not-started" }
        ]
    },
    {
        id: 2,
        image: ProfilePicture,
        name: "Ms. Jane Smith",
        subject: 'English Literature',
        assignments: [
            { id: 4, title: "Essay", status: "completed" },
            { id: 5, title: "Book Review", status: "in-progress" },
            { id: 6, title: "Poetry Assignment", status: "not-started" }
        ]
    },
    {
        id: 3,
        image: ProfilePicture,
        name: "Dr. Emily Brown",
        subject: 'Physics Fundamentals',
        assignments: [
            { id: 7, title: "Lab Report", status: "completed" },
            { id: 8, title: "Experiment 1", status: "in-progress" },
            { id: 9, title: "Theory Test", status: "not-started" }
        ]
    },
    {
        id: 4,
        image: ProfilePicture,
        name: "Mr. Mark Green",
        subject: 'History',
        assignments: [
            { id: 10, title: "Research Paper", status: "completed" },
            { id: 11, title: "Presentation", status: "completed" },
            { id: 12, title: "Timeline Project", status: "completed" }
        ]
    },
];

const StudentList = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    // Филтриране на заданията въз основа на избрания филтър
    const filterAssignments = (assignments) => {
        if (selectedFilter === 'all') {
            return assignments;
        }
        return assignments.filter(assignment => assignment.status === selectedFilter);
    };

    return (
        <div className="student--list">
            <div className="list--header">
                <h2>Teachers</h2>
                <select onChange={(e) => setSelectedFilter(e.target.value)} value={selectedFilter}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                    <option value="not-started">Not Started</option>
                </select>
            </div>
            <div className="list--container">
                {teachers.map((teacher) => {
                    // Филтрира заданията на учителя
                    const filteredAssignments = filterAssignments(teacher.assignments);

                    // Ако няма задания, които отговарят на избрания филтър, не показваме учителя
                    if (filteredAssignments.length === 0) {
                        return null;
                    }

                    return (
                        <div key={teacher.id} className="list">
                            <div className="teacher--detail">
                                <img src={teacher.image} alt={teacher.name} className="teacher--image" />
                                <div>
                                    <h2 className="teacher--name">{teacher.name}</h2>
                                    <span className="teacher--subject">{teacher.subject}</span>
                                </div>
                            </div>
                            <div className="teacher--assignments">
                                {filteredAssignments.map(assignment => (
                                    <div key={assignment.id} className={`assignment ${assignment.status}`}>
                                        <span className="assignment--title">{assignment.title}</span>
                                        <span className="assignment--status">
                                            {assignment.status === 'completed' ? 'Completed' : assignment.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudentList;
