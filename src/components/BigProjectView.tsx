import { useState } from "react";
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
    const [isLoading, setIsLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const onClose = () => {
        hideFunc();
        setDetailsVisible(true);
        setIsLoading(true);
        setLoadingError(false);
        console.log(`Details Visible: ${detailsVisible}`);
    };

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
                <p
                    onClick={ () => {
                        setDetailsVisible(!detailsVisible);
                    }}
                    >
                    Image: {id}
                </p>
                {
                    isLoading &&
                    <p>Image Loading...</p>
                }
                {
                    loadingError &&
                    <p>Error loading image.</p>
                }
                {
                    !loadingError &&
                    <img
                        src = {
                            "/assets/img-projects/full-" + id + ".webp"
                        }
                        alt = {title}
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                            setIsLoading(false);
                            setLoadingError(true);
                            console.log("Error loading image for project " + id);
                        }}
                        onClick={ () => {setDetailsVisible(!detailsVisible)} }
                    />
                }
            </div>
        </>
    );
}