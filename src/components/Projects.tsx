
import { useState, useMemo } from 'react';

import Dropdown from './Dropdown.tsx';
import BigProjectView from './BigProjectView.tsx';
import Image from './Image.tsx';

import data from './../assets/json/Projects.json';

import { fixQuotes } from './../utility/stringEditor.ts';

import '../css/Projects.css';




const sortProjects = (
        array: any[],
        sortBy: 'name' | 'date' | 'ai' = 'name',
        reversed: boolean = false
    ): any[] => {
        let sortedList = structuredClone(array);
        switch (sortBy) {
            case 'name':
                sortedList.sort((a, b) => {
                    if (reversed) return b.name.localeCompare(a.name);
                    else return a.name.localeCompare(b.name);
                });
                break;
            case 'date':
                sortedList.sort((a, b) => {
                    if (reversed) return a.timesort - b.timesort;
                    else return b.timesort - a.timesort;
                });
                break;
            case 'ai':
                sortedList.sort((a, b) => {
                    if (reversed) return b.aiuse - a.aiuse;
                    else return a.aiuse - b.aiuse;
                });
                break;
        }
        return sortedList;
    };

// Actual Projects Element

export default function Projects() {

    const [sortBy, setSortBy] = useState<'name' | 'date' | 'ai'>("date");
    const [sortInversed, setSortInverted] = useState(false);

    const [showAll, setShowAll] = useState(false);

    const [bigProjectView, setBigProjectView] = useState({
        isVisible: false,
        title: "",  
        timelabel: "",
        description: "",
        aiuse: 0,
        aisummary: "",
        id: ""
    });

    const sortedProjects = useMemo(() => {
        return sortProjects(structuredClone(data), sortBy, sortInversed);
    }, [sortBy, sortInversed]);

    return (
        <div
            id = "projects"
        >
            <h2>Projects</h2>
            <p>Some of the projects I made!</p>

            <div className = 'most-recent'>
                {
                    sortProjects(structuredClone(data), 'date', false)
                    .slice(0, 3)
                    .map(project => (
                        <button
                            key = {"projects-" + project.id}
                            onClick={ () => {
                                console.log("Clicked " + project.name);
                                setBigProjectView({
                                    isVisible: true,
                                    title: project.name,
                                    timelabel: project.timelabel,
                                    description: project.description,
                                    aiuse: project.aiuse,
                                    aisummary: project.aisummary,
                                    id: project.id
                                });
                            }}
                        >
                            <p>{fixQuotes(project.name)}</p>
                            <p>{project.timelabel}</p>
                            <p>{project.aiuse}</p>
                        </button>
                    ))
                }
            </div>


            <div style = {{ display: showAll ? "block" : "none" }}>
            
                <button
                    onClick={() => {
                        setSortInverted(!sortInversed);
                        console.log("Is Inverted: " + sortInversed);
                    }}
                >
                    Inverse List
                </button>
            
                <Dropdown
                    dropdownLabel = 'Sort'
                    name = 'dropdown-sort'
                    onSelect = {
                        (value: string) => {
                            console.log("Sorted by " + value);
                            setSortBy(value as "name" | "date" | "ai");
                        }
                    }
                    choices = {
                        [
                            { label: "Name" + (sortInversed ? " (Z-A)" : " (A-Z)"), value: "name" },
                            { label: "Date" + (sortInversed ? " (Latest Last)" : " (Latest First)"), value: "date" },
                            { label: "Generative AI" + (sortInversed ? " (Most Used First)" : " (Most Used Last)"), value: "ai" },
                        ]
                    }
                    defaultValue = {sortBy}
                />

                <div className = { 'all-projects' }>

                    {
                        sortedProjects
                        .map(project => (
                            <button
                            key = {"projects-" + project.id}
                                onClick = { () => {
                                    console.log("Clicked " + project.name);
                                    setBigProjectView({
                                        isVisible: true,
                                        title: project.name,
                                        timelabel: project.timelabel,
                                        description: project.description,
                                        aiuse: project.aiuse,
                                        aisummary: project.aisummary,
                                        id: project.id
                                    });
                                } }
                            >
                                <p>{fixQuotes(project.name)}</p>
                                <p>{fixQuotes(project.timelabel)}</p>
                                <p>{project.aiuse}</p>
                                <Image
                                    src={"/assets/img-projects/thumb-" + project.id + ".webp"}
                                    alt={project.name}
                                    style="project-image"
                                    isFill={true}
                                />
                            </button>
                        ))
                    }
                </div>
                
            </div>

            <button
                onClick={() => {
                    setShowAll(!showAll);
                    console.log("Show All: " + showAll);
                }}
            >
                {showAll ? "Show Less" : "Show All"}
            </button>

            {   
                bigProjectView.isVisible &&
                <BigProjectView
                    hideFunc={() => setBigProjectView({ ...bigProjectView, isVisible: false })}
                    title={bigProjectView.title}
                    timelabel={bigProjectView.timelabel}
                    description={bigProjectView.description}
                    aiuse={bigProjectView.aiuse}
                    aisummary={bigProjectView.aisummary}
                    id={bigProjectView.id}
                />
            }

        </div>
    );
}