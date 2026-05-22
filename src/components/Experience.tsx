
import data from './../assets/json/Experience.json';
import { removeLinkPrefix } from '../utility/stringEditor.ts';

export default function Experience() {
  return (
    <section id="experience">
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
                    <div>
                        {
                            entry.references.map( (ref) => (
                                <div
                                    key={
                                        "experience-" +
                                        entry.company + 
                                        "-" + 
                                        entry.role + 
                                        "-" + 
                                        ref.name
                                    }
                                >
                                    <p>{ref.name}</p>
                                    <p>{ref.role}</p>
                                    {
                                        ref.contact.map( (contact) => (
                                            <p
                                                key={
                                                    "experience-" +
                                                    entry.company + 
                                                    "-" + 
                                                    entry.role + 
                                                    "-" + 
                                                    ref.name + 
                                                    "-" + 
                                                    contact.info
                                                }
                                            >
                                                {contact.method + ": "}
                                                <a 
                                                    href= {
                                                        contact.method === "Email" ? 
                                                        ("mailto:" + contact.info) : 
                                                        contact.method === "Phone" ?
                                                        ("tel:" + contact.info) :
                                                        contact.info
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {
                                                        contact.method === "Phone" ? 
                                                        contact.readable :
                                                        removeLinkPrefix(contact.info)
                                                    }
                                                </a>
                                            </p>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </section>
    );
}