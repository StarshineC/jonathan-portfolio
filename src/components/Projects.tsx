
import { useState, useMemo } from 'react';
import Dropdown from './SortDropdown';
import data from './../assets/json/Projects.json';

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
                    if (reversed) return a.aiuse - b.aiuse;
                    else return b.aiuse - a.aiuse;
                });
                break;
        }
        return sortedList;
    };

// Top 3 Projects



// The Rest



// Actual Projects Element

interface PropsProjects {
    id: string;
}

export default function Projects(
    { id }: PropsProjects
) {

    const [sortBy, setSortBy] = useState<'name' | 'date' | 'ai'>("date");
    const [sortInversed, setSortInverted] = useState(false);

    const sortedProjects = useMemo(() => {
        return sortProjects(structuredClone(data), sortBy, sortInversed);
    }, [sortBy, sortInversed]);

    return (
        <div
            style={{ border: "1px solid red" }}
            id={id}
        >
            Projects Section
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
                        { label: "Generative AI" + (sortInversed ? " (Most Used Last)" : " (Most Used First)"), value: "ai" },
                    ]
                }
            />

            {
                sortedProjects.map(project => (
                    <div
                        key = {"projects-" + project.id}
                    >
                        <p>{project.name}</p>
                        <p>{project.timelabel}</p>
                        <p>{project.aiuse}</p>
                    </div>
                ))
            }
        </div>
    );
}