
import data from './../assets/json/AboutMe.json';

import "../css/AboutMe.css";

export default function AboutMe() {
    return (
        <div id = "about">
            <h2>About Me</h2>
            <p style={{ whiteSpace: "pre-line" }}>{data.description}</p>
            <div className='list-cards'>
                <ListCard
                    title = "Skills"
                    content={data.skills}
                />
                <ListCard
                    title = "Interests"
                    content={data.interests}
                />
            </div>
        </div>
    );
}

interface PropsListCard {
    title: string;
    content: string[];
}

function ListCard({ title, content }: PropsListCard) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}