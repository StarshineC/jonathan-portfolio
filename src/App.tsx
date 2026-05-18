
import NavigationBar from "./components/NavigationBar.tsx";

export default function App() {
	return (
		<>
			<NavigationBar
				links = {
					[
						{ id: "main", label: "Main" },
						{ id: "skills", label: "Skills" },
						{ id: "projects", label: "Projects" }
					]
				}
			/>
			<p>Hello, World!</p>
		</>
	);
};