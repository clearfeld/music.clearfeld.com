import "./App.css";
import Plugins from "./pages/plugins";
import PluginsSidebar from "./pages/plugins/sidebar";

function App() {
	return (
		<>
			<div
			style={{
				display: "grid",
			}}
			>
				<PluginsSidebar />
				<Plugins />
			</div>
		</>
	);
}

export default App;
