
import data from './../assets/json/Projects.json';

// Top 3 Projects



// The Rest



// Actual Projects Element

interface PropsProjects {
    id: string;
}

export default function Projects(
    { id }: PropsProjects
) {

    let projects = structuredClone(data);

    const sortProjects = (
        sortBy: 'name' | 'date' | 'ai' = 'name',
        reversed: boolean = false
    ): void => {
        switch (sortBy) {
            case 'name':
                projects.sort((a, b) => {
                    if (reversed) return b.name.localeCompare(a.name);
                    else return a.name.localeCompare(b.name);
                });
                break;
            case 'date':
                projects.sort((a, b) => {
                    if (reversed) return b.timesort - a.timesort;
                    else return a.timesort - b.timesort;
                });
                break;
            case 'ai':
                projects.sort((a, b) => {
                    if (reversed) return b.aiuse - a.aiuse;
                    else return a.aiuse - b.aiuse;
                });
                break;
        }
    };

    sortProjects("ai", true);

    console.log(projects);

    return (
        <div
            id={id}
        >
            Projects Section
        </div>
    );
}