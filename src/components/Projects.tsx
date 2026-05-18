
import { useState } from 'react';
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
                    if (reversed) return b.timesort - a.timesort;
                    else return a.timesort - b.timesort;
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
    const [projectArray, setProjectArray] = useState(
        sortProjects(
            structuredClone(data),
            sortBy,
            sortInversed
        )
    );

    const handleSort = () => {
        const sortedList = sortProjects(
            projectArray,
            sortBy,
            sortInversed
        );
        setProjectArray(sortedList);
    }

    return (
        <div
            id={id}
        >
            Projects Section
            <button
                onClick={() => {
                    setSortInverted(!sortInversed);
                    handleSort();
                    console.log(sortInversed);
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
                        handleSort();
                    }
                }
                choices = {
                    [
                        { label: "Name", value: "name" },
                        { label: "Date", value: "date" },
                        { label: "Usage of Generative AI", value: "ai" },
                    ]
                }
            />

            {
                projectArray.map(project => (
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