import { FaHeart } from "react-icons/fa";
import { SiNeovim } from "react-icons/si";

export default function Footer() {
	return (
		<footer className="bg-orange-400 text-orange-100 flex
			justify-center items-center p-4 font-ibm-bold text-3xl">
			<span className="flex items-center">
				Made with 
				<FaHeart size={30} className="mx-3"/>
				in 
				<SiNeovim size={30} className="mx-3"/>
			</span>
		</footer>
	)
}
