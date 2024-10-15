import { animated, useInView } from "@react-spring/web"
import TechIcon from "./TechIcon"
import { SiPython, SiGit, SiCss3, SiJavascript, SiSqlite, SiTypescript, SiHtml5, SiReact, SiTailwindcss } from "react-icons/si";
import { TechnologyType } from "../types";

const iconSize = 60;

const icons: TechnologyType[] = [
	{ name: "react", icon: <SiReact size={iconSize} />},
	{ name: "Tailwind", icon: <SiTailwindcss size={iconSize} />},
	{ name: "TypeScript", icon: <SiTypescript size={iconSize} />},
	{ name: "JavaScript", icon: <SiJavascript size={iconSize} />},
	{ name: "Sqlite", icon: <SiSqlite size={iconSize} />},
	{ name: "Git", icon: <SiGit size={iconSize} />},
	{ name: "Html", icon: <SiHtml5 size={iconSize} />},
	{ name: "Css", icon: <SiCss3 size={iconSize} />},
	{ name: "Python", icon: <SiPython size={iconSize} />},
]

export default function Tech() {
	
	const [ref, anim] = useInView(()=>({
		from: {
			opacity: 0,
			y: 100
		},
		to: {
			opacity: 1,
			y: 0
		},
	}), {
			rootMargin: '0% 0%',
			once: true
		})

	return (
		<div className="h-fit px-[15vw] text-orange-100 prose-lg bg-orange-400 font-ibm-normal md:prose-xl lg:prose-2xl prose-h1:font-ibm-bold prose-p:font-ibm-normal">
			<animated.h1 className="hover-sweep sweep-light w-fit" ref={ref} style={anim}>Tech I use:</animated.h1>
			<div className="mx-[5vw] flex flex-wrap gap-x-11 gap-y-3">
				{icons.map(({name, icon}, i) => {
					return <TechIcon key={i} name={name} icon={icon} />
				})}
			</div>
		</div>
	)
}
