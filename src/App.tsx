
import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";
import Experience from "./components/Experience.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import Projects from "./components/Projects.tsx";
import { Divider3, Divider4, Divider5 } from "./components/Divider.tsx";

export default function App() {
	return (
		<>
			<NavigationBar
				links = {
					[
						{ id: "main", label: "Hello" },
						{ id: "about", label: "About" },
						{ id: "experience", label: "Experience" },
						{ id: "projects", label: "Projects" },
						{ id: "contact", label: "Contact" }
					]
				}
			/>

			<h1 id='main'>Jonathan Renan Esponilla</h1>

			{/* <Divider2/> */}
			<AboutMe/>

			<Divider3/>
			<Experience/>

			<Divider4/>
			<Projects/>

			<Divider5/>
			<Contact/>
		</>
	);
};