
import AboutMe from "./components/AboutMe.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import PropsProjects from "./components/Projects.tsx";

export default function App() {
	return (
		<>
			<NavigationBar
				links = {
					[
						{ id: "main", label: "Main" },
						{ id: "about", label: "About" },
						{ id: "projects", label: "Projects" },
						{ id: "scraps", label: "Scraps" },
						{ id: "contact", label: "Contact" }
					]
				}
			/>

			<h1 id='main'>Temporary header</h1>

			<AboutMe/>

			<PropsProjects/>

			<p>
				Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>
			</p>

			<p id="contact">Hello, World!</p>
		</>
	);
};