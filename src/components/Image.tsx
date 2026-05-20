import { useState } from "react";
import ImageLoading from "./../assets/img/loading.svg";

import './../css/Image.css';

interface PropsImage {
    src: string;
    alt: string;
    style?: string;
    onClick?: () => void;
}

export default function Image(
    { src, alt, style, onClick }: PropsImage
) {

    const [isLoading, setIsLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    
    return (
        <div className={style}>
            {
                isLoading &&
                <img className="loading-spinner" src={ImageLoading} alt="Loading..." />
            }
            {
                loadingError &&
                <p>Error loading image.</p>
            }
            {
                !loadingError &&
                <img
                    className="inner-image"
                    src={src}
                    alt={alt}
                    onClick={onClick}
                    onLoad={() => {
                        setIsLoading(false);
                    }}
                    onError={() => {
                        setIsLoading(false);
                        setLoadingError(true);
                    }}
                />
            }
        </div>
    );
}