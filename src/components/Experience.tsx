
import data from './../assets/json/Experience.json';

export default function Experience() {
  return (
    <section className="experience">
        <h2>Experience</h2>
        {
            data.map( (entry) => (
                <div
                    key={
                        "experience-" + 
                        entry.company + 
                        "-" + 
                        entry.role
                    }
                    className="experience-entry"
                >
                    <h3>{entry.company}</h3>
                    <p>{entry.location}</p>
                    <p>{entry.role}</p>
                    <p>{entry.time}</p>
                    <p>{entry.description}</p>
                </div>
            ))
        }
    </section>
    );
}