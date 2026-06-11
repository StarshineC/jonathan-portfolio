
import Hero from "./components/Hero.tsx";
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

			<section
				style = {{
					marginTop: "60px",
					marginBottom: "-60px",
					backgroundColor: "white",
					textAlign: "center",
					padding: "20px",
					borderBottom: "5px solid black"
				}}
			>
				<p>Website Under Construction! Sorry if things look ugly.</p>
			</section>

			<Hero/>

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