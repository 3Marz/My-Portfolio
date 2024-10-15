import { useInView, animated } from "@react-spring/web"
import { ProjectType } from "../types"
import { SiTypescript } from "react-icons/si"
import Project from "./Project"

const projects : ProjectType[] = [
	{ name:"term3d", 
		desc:"A 3d model viewer in the terminal", 
		photo: undefined,
		techUsed: [
			{name:"Typescript", icon: <SiTypescript />}
		]},
]

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
		<div className="h-[100dvh] px-[15vw] mt-10 text-orange-400 prose-lg font-ibm-normal md:prose-xl lg:prose-2xl prose-h1:font-ibm-bold prose-p:font-ibm-normal">
			<animated.h1 ref={ref} style={anim}>My Projects:</animated.h1>
			<div className="flex">
				{projects.map((project, i) => {
					return <Project key={i} {...project}/>
				})}
			</div>
		</div>
	)
}
