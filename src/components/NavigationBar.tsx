import type { ReactNode } from "react";

interface PropsNavigationButton {
    children: string;
    id: string;
}

function NavigationButton (
    { children, id }: PropsNavigationButton
) {
    
    return (
        <li>
            <a href={"#" + id}>{children}</a>
        </li>
    );
    
}



interface PropsNavigationBar {
    links: {
        label: string;
        id: string;
    }[];
}

export default function NavigationBar(
    { links }: PropsNavigationBar
) {

    return (
        <nav>
            <button>X</button>
            <ul>
            {
                links.map(
                    ({label, id}) => (
                        <NavigationButton
                            id = {id}
                            key = { "navButton-" + id }
                        >
                            {label}
                        </NavigationButton>
                    )
                )
            }   
            </ul>         
        </nav>
    );

}