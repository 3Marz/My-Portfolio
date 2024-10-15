import { animated, useInView } from "@react-spring/web"
import TechIcon from "./TechIcon"
import { SiPython, SiGit, SiCss3, SiJavascript, SiSqlite, SiTypescript, SiHtml5, SiReact, SiTailwindcss } from "react-icons/si";

const iconSize = 60;

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
				<TechIcon name="React" index={1}><SiReact size={iconSize}/></TechIcon>
				<TechIcon name="Tailwind"index={2}><SiTailwindcss size={iconSize}/></TechIcon>
				<TechIcon name="TypeScript"index={3}><SiTypescript size={iconSize}/></TechIcon>
				<TechIcon name="JavaScript"index={4}><SiJavascript size={iconSize}/></TechIcon>
				<TechIcon name="Sqlite"index={5}><SiSqlite size={iconSize}/></TechIcon>
				<TechIcon name="Git"index={6}><SiGit size={iconSize}/></TechIcon>
				<TechIcon name="Html"index={7}><SiHtml5 size={iconSize}/></TechIcon>
				<TechIcon name="Css"index={8}><SiCss3 size={iconSize}/></TechIcon>
				<TechIcon name="Python"index={9}><SiPython size={iconSize}/></TechIcon>
			</div>
		</div>
	)
}
