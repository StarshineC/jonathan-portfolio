import { useState, useEffect } from "react";
import Image from "./Image.tsx";
import './../css/BigProjectView.css';


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

    const onClose = () => {
        hideFunc();
        setDetailsVisible(true);
        console.log(`Details Visible: ${detailsVisible}`);
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [detailsVisible]);

    return (
        <>
            <div className = "big-project-view-back" onClick={onClose}></div>
            <div className = "big-project-view">
                <button onClick={ onClose }>
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
                <Image
                    src={"/assets/img-projects/full-" + id + ".webp"}
                    alt={title}
                    style="big-project-image"
                    onClick={() => setDetailsVisible(!detailsVisible)}
                />
            </div>
        </>
    );
}