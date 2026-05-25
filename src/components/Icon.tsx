

import type { SVGProps } from "react"

export function IconLoading(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
                fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
            }}
            viewBox="0 0 300 300"
            {...props}
        >
            <path 
                fill="currentColor"
                d="m150.305 9.112 16.404 25.246 29.078 7.798-18.941 23.402 1.569 30.066-28.11-10.783-28.11 10.783 1.569-30.066-18.94-23.402 29.077-7.798zm-1.722 257.854-8.198-12.617-14.532-3.898 9.466-11.695-.784-15.026 14.048 5.389 14.049-5.389-.784 15.026 9.465 11.695-14.532 3.898zm87.931-168.23-2.277 4.472 1.297 4.847-4.956-.784-4.209 2.732-.786-4.956-3.899-3.158 4.47-2.28 1.8-4.683 3.549 3.547zM41.68 213.212l9.104-17.878-5.188-19.378 19.815 3.133 16.828-10.922 3.143 19.813 15.587 12.63-17.872 9.111-7.194 18.727-14.189-14.181zM35.66 83.963l25.044-1.318 17.735-17.728 8.993 23.41 22.34 11.389-19.484 15.786-3.93 24.768-21.033-13.653-24.77 3.916 6.485-24.223zM244.521 203.74l-10.017.527-7.094 7.091-3.597-9.364-8.937-4.555 7.794-6.315 1.572-9.907 8.414 5.461 9.907-1.566-2.594 9.689z"
            />
        </svg>
    );
}

export function IconBrokenImage(props: SVGProps<SVGSVGElement>) {
    return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
        }}
        width="1em"
        height="1em"
        viewBox="0 -960 960 960"
        {...props}
    >
        <path
            fill="currentColor"
            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm40-337 160-160 160 160 160-160 40 40v-183H200v263l40 40Zm-40 257h560v-264l-40-40-160 160-160-160-160 160-40-40v184Zm0 0v-264 80-376 560Z"
        />
    </svg>  
    );
}