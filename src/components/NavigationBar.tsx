import { useState } from "react";
import './../scss/NavigationBar.scss';

interface PropsNavigationButton {
    children: string;
    id: string;
    onclick?: () => void;
}

function NavigationButton (
    { children, id, onclick = () => {} }: PropsNavigationButton
) {
    
    return (
        <li>
            <a 
            href={"#" + id}
            onClick={onclick}
            >{children}</a>
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

    const [visibility, setVisibility] = useState(false);


    return (
        <>
            <button
            className = "nav-toggle"
                onClick = { () => {
                    setVisibility(!visibility);
                    console.log(`Navbar: ${visibility}`);
                } }
            >
                {
                    visibility ? "Close" : "Menu"
                }
            </button>
            <nav
                className = { visibility ? "visible" : "hidden" }
            >
                <ul>
                {
                    links.map(
                        ({label, id}) => (
                            <NavigationButton
                                id = {id}
                                key = { "navButton-" + id }
                                onclick={ () => { setVisibility(false) } }
                            >
                                {label}
                            </NavigationButton>
                        )
                    )
                }   
                </ul>         
            </nav>
        </>
    );

}