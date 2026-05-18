

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