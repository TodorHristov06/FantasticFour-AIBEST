import React from 'react';
import "../styles/teacherList.css";
import ProfilePicture from '../assets/ProfilePicture.jpg';

// Добавете уникален идентификатор на всеки обект
const teachers = [
    {
        id: 1,  // Уникален идентификатор
        image: ProfilePicture,
        name: "Stanimir Stoleotv",
        duration: '2 hours lesson',
        cost: '1',
    },
    {
        id: 2,  // Уникален идентификатор
        image: ProfilePicture,
        name: "Georgi Dimitrov",
        duration: '1 hour lesson',
        cost: '2',
    },
    {
        id: 3,  // Уникален идентификатор
        image: ProfilePicture,
        name: "Petar Petrov",
        duration: '3 hours lesson',
        cost: '1',
    },
    {
        id: 4,  // Уникален идентификатор
        image: ProfilePicture,
        name: "Sheytanova",
        duration: '4 hours lesson',
        cost: '3',
    },
];

const TeacherList = () => {
  return (
    <div className="teacher--list">
        <div className="list--header">
            <h2>Teachers</h2>
            <select>
                <option value="english">English</option>
                <option value="bulgarian">Bulgarian</option>
            </select>
        </div>
        <div className="list--container"> 
            {teachers.map((teacher) => (
                <div key={teacher.id} className="list"> {/* Уникален key пропс */}
                    <div className="teacher--detail">
                        <img src={teacher.image} alt={teacher.name} />
                        <h2>{teacher.name}</h2>
                    </div>
                    <span className='teacher--duration'>{teacher.duration}</span>
                    <span className='teacher--cost'>{teacher.cost}</span>
                    <span className="teacher--todo">:</span>
                </div>
            ))}
        </div>
    </div>
  );
}

export default TeacherList;