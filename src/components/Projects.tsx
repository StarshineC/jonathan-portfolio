
import data from './../assets/json/Projects.json';

data.forEach(element => {
    console.log(element);
    console.log(element.name);
    console.log(element.id);
    console.log(element.description);
});

interface PropsProjects {
    id: string;
}

export default function Projects(
    { id }: PropsProjects
) {
    return (
        <div
            id={id}
        >
            Projects Section
        </div>
    );
}