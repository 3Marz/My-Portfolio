import Wave from "react-wavify";

import Header from "../components/Header";
import Tech from "../components/Tech"
import Projects from "../components/Projects"
import Footer from "../components/Footer";

export default function Home() {

	return (
		<div className="text-orange-400 w-full h-[100dvh] overflow-scroll bg-orange-200 mix-blend-multiply" >
			<Header />

			<Wave 
				fill="#fb923c"
				paused={false}
				speed={0.3}
				points={7}
				height={10}
				className="translate-y-2"
				/>

			<Tech />

			<Wave 
				fill="#fb923c"
				paused={false}
				speed={0.3}
				points={7}
				height={10}
				style={{
					transform: 'rotate(180deg) translateY(1px)'
				}}
				></Wave>

			<Projects />

			<Wave 
				fill="#fb923c"
				paused={false}
				speed={0.3}
				points={7}
				height={20}
				className="translate-y-2"
				/>

			<Footer />
		</div>
	)
}
