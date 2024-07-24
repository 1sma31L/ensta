import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import FlipWordsDemo from "./components/FlipWordsDemo";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Speciallities from "./components/Speciallities";
function App() {
	return (
		<div className="app dark">
			<div className="flex flex-col justify-center items-center bg-[#F0F8FF] dark:bg-[#18122B]">
				<Navbar />
				<div className="container  flex-col items-center ">
					<FlipWordsDemo />
					<Home />
					<Speciallities />
					<FAQ />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
