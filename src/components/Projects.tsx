import { useInView, animated } from "@react-spring/web"
import Project from "./Project"

import { projects } from "../constants/projects"
import { IoIosArrowForward } from "react-icons/io"
import { FaGithub, FaItchIo } from "react-icons/fa"

export default function Projects() {

	const [ref, anim] = useInView(()=>({
		from: {
			opacity: 0,
			y: 100
		},
		to: {
			opacity: 1,
			y: 0
		},
	}),{
			once: true
		})

	return (
		<div className="h-fit px-[15vw] mt-10 space-y-8 text-orange-400">
			<animated.h1 className="sweep-dark hover-sweep w-fit text-6xl font-ibm-bold" ref={ref} style={anim}>My Projects:</animated.h1>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
				{projects.map((project, i) => {
					return <Project key={i} index={i} {...project}/>
				})}
				<div className="h-full flex flex-col">
					<a href="https://github.com/3Marz/" className="project hover:ring-2 ring-orange-400 h-full rounded-lg transition text-2xl min-h-24 font-ibm-bold flex justify-center items-center place-items-center">
						More on my <FaGithub className="mx-2"/> github
						<IoIosArrowForward size={28}/>
					</a>
					<a className="project hover:ring-2 ring-orange-400 h-full rounded-lg transition text-2xl min-h-24 font-ibm-bold flex justify-center items-center place-items-center">
						More on my <FaItchIo className="mx-2" /> itch.io
						<IoIosArrowForward size={28}/>
					</a>
				</div>
			</div>
		</div>
	)
}
