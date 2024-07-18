import { BiMath, BiGlobeAlt, BiLogoVisualStudio} from "react-icons/bi";

const course = [
    {
        title: 'Math',
        icon: <BiMath/>,
    },
    {
        title: 'Geography',
        duration: '2 Hours',
        icon: <BiGlobeAlt/>,
    },
    {
        title: 'Programming',
        duration: '2 Hours',
        icon: <BiLogoVisualStudio/>,
    },
];

const Card = () => {
    return (
    <div className='card--container'>
        {course.map((item) => (
            <div className='card'>
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