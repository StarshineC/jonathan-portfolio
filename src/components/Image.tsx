import { useState } from "react";
import ImageLoading from "./../assets/img/loading.svg";

import './../css/Image.css';

interface PropsImage {
    src: string;
    alt: string;
    style?: string;
    isFill?: boolean;
    onClick?: () => void;
}

export default function Image(
    { src, alt, style, isFill = false, onClick }: PropsImage
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
                    className={isFill ? "inner-image inner-image-fill" : "inner-image"}
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