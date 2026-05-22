
import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";
import Experience from "./components/Experience.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import Projects from "./components/Projects.tsx";

export default function App() {
	return (
		<>
			<NavigationBar
				links = {
					[
						{ id: "main", label: "Top" },
						{ id: "about", label: "About" },
						{ id: "experience", label: "Experience" },
						{ id: "projects", label: "Projects" },
						{ id: "contact", label: "Contact" }
					]
				}
			/>

			<h1 id='main'>Temporary header</h1>

			<AboutMe/>

			<Experience/>

			<Projects/>

			<Contact/>
		</>
	);
};