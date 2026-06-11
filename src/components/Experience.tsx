
import data from './../assets/json/Experience.json';
import { removeLinkPrefix } from '../utility/stringEditor.ts';

import './../scss/Experience.scss';

export default function Experience() {

    return (
        <section id="experience">
            <div className="content-strip">
                <h2>Experience</h2>
                <p className="description">Places I've worked.</p>
                {
                    data.map( (entry) => (
                        <ExperienceEntry
                            key={
                                "experience-" + 
                                entry.company + 
                                "-" + 
                                entry.role
                            }
                            entry = {entry} 
                        />
                    ))
                }
            </div>
        </section>
    );
}

interface PropsExperienceEntry {
    entry: {
        company: string;
        location: string;
        role: string;
        time: string;
        description: string;
        references: {
            name: string;
            role: string;
            contact: {
                method: string;
                info: string;
                readable?: string;
            }[];
        }[];
    };
}

function ExperienceEntry({ entry }: PropsExperienceEntry) {
    return (
        <div
            className="experience-entry"
        >
            <h3>{entry.company}</h3>
            <p className = "key-info">{entry.location} | {entry.role} | {entry.time}</p>
            <p className = "description">{entry.description}</p>
            <div className="references">
                {
                    entry.references.map( (ref) => (
                        <Reference
                            key={
                                "reference-" +
                                ref.name
                            }
                            name={ref.name}
                            role={ref.role}
                            contacts={ref.contact}
                        />
                    ))
                }
            </div>
        </div>
    );
}

interface PropsReference {
    name: string;
    role: string;
    contacts: {
        method: string;
        info: string;
        readable?: string;
    }[];
}

function Reference({ name, role, contacts }: PropsReference) {
    return (
        <div>
            <h4 className = "visible-desktop">{name} | {role}</h4>
            <h4 className = "visible-mobile">{name}<br/>{role}</h4>
            <ul>
                {
                    contacts.map( (contact) => (
                        <li
                            key={
                                "contact-" +
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
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}