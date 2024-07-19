import React from "react";
import {
    BiMath,
    BiGlobeAlt,
    BiLogoVisualStudio
} from "react-icons/bi";

const course = [
    {
        id: 1,  // Добавен уникален идентификатор
        title: 'Math',
        icon: <BiMath/>,
    },
    {
        id: 2,  // Добавен уникален идентификатор
        title: 'Geography',
        duration: '2 Hours',
        icon: <BiGlobeAlt/>,
    },
    {
        id: 3,  // Добавен уникален идентификатор
        title: 'Programming',
        duration: '2 Hours',
        icon: <BiLogoVisualStudio/>,
    },
];

const Card = () => {
    return (
        <div className='card--container'>
            {course.map((item) => (
                <div key={item.id} className='card'> {/* Добавен key пропс */}
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}      
        </div>
    ); 
};

export default Card;