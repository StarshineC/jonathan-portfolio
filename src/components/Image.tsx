import { useState } from "react";
// import ImageLoading from "./../assets/img/loading.svg";
import { IconLoading, IconBrokenImage } from "./Icon.tsx";

import './../scss/Image.scss';

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
                <IconLoading className="loading-spinner" />
            }
            {
                loadingError &&
                <IconBrokenImage className="broken-image" />
                // <p>Error loading image.</p>

            }
            {
                !loadingError &&
                <img
                    className={
                        "inner-image" + 
                        (isFill ? " inner-image-fill" : "")
                    }
                    src={src}
                    alt={isLoading ? "" : alt}
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