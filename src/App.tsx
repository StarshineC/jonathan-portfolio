
import AboutMe from "./components/AboutMe.tsx";
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
						{ id: "projects", label: "Projects" },
						{ id: "contact", label: "Contact" }
					]
				}
			/>

			<h1 id='main'>Temporary header</h1>

			<AboutMe/>

			<Experience/>

			<Projects/>

			<p>
				Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>Words<br/>
			</p>

			<p id="contact">Hello, World!</p>
		</>
	);
};