import { useState } from "react";


interface PropsBigProjectView {
    hideFunc: () => void;
    title: string;
    timelabel: string;
    description: string;
    aiuse: number;
    aisummary: string;
    id: string;
}

export default function BigProjectView(
    { hideFunc, title, timelabel, description, aiuse, aisummary, id }: PropsBigProjectView
) {

    const [detailsVisible, setDetailsVisible] = useState(true);

    return (
        <div>
            <button onClick={ () => {
                hideFunc();
                setDetailsVisible(true);
                console.log(`Details Visible: ${detailsVisible}`);
            }}
            >
                X
            </button>
            {
                detailsVisible &&
                <>
                    <h2>{title}</h2>
                    <p>{timelabel}</p>
                    <p>{description}</p>
                    <p>AI Use: {aiuse}</p>
                    <p>{aisummary}</p>
                </>
            }
            <p
                onClick={ () => {
                    setDetailsVisible(!detailsVisible);
                }}
            >
                Image: {id}
            </p>
        </div>
    );
}