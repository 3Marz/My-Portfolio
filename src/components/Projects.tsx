import { useInView, animated } from "@react-spring/web"
import { ProjectType } from "../types"
import { SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import Project from "./Project"

const iconSize = 40;

const projects : ProjectType[] = [
	{ 
		name:"term3d", 
		desc:"A 3d model viewer in the terminal", 
		photo: undefined,
		techUsed: [
			{name:"Typescript", icon: <SiTypescript size={iconSize} />}
		]
	},
	{ 
		name:"My Portfolio", 
		desc:"made with react and react spring for animations", 
		photo: undefined,
		techUsed: [
			{name:"React", icon: <SiReact size={iconSize}/>},
			{name:"Typescript", icon: <SiTypescript size={iconSize}/>},
			{name:"Tailwind", icon: <SiTailwindcss size={iconSize}/>}
		]
	},
	{ 
		name:"Chip-8 Emulator", 
		desc:"an emulator for the chip-8 interpreted programming language", 
		photo: undefined,
		techUsed: [
			{name:"Javascript", icon: <SiJavascript size={iconSize}/>},
			{name:"Html", icon: <SiHtml5 size={iconSize}/>}
		]
	}
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
		<div className="h-[100dvh] px-[15vw] mt-10 space-y-8 text-orange-400">
			<animated.h1 className="sweep-dark hover-sweep w-fit text-6xl font-ibm-bold" ref={ref} style={anim}>My Projects:</animated.h1>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{projects.map((project, i) => {
					return <Project key={i} index={i} {...project}/>
				})}
			</div>
		</div>
	)
}
