
import NavigationBar from "./components/NavigationBar.tsx";
import PropsProjects from "./components/Projects.tsx";

export default function App() {
	return (
		<>
			<NavigationBar
				links = {
					[
						{ id: "main", label: "Main" },
						{ id: "skills", label: "Skills" },
						{ id: "projects", label: "Projects" },
						{ id: "scraps", label: "Scraps" }
					]
				}
			/>

			<PropsProjects/>

			<p>Hello, World!</p>
		</>
	);
};