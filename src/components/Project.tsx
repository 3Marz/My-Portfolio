import { animated, useInView } from "@react-spring/web"
import { ProjectType } from "../types"

type ProjectProps = ProjectType & {
	index: number
}

export default function Project({name, desc, photo, techUsed, index}:ProjectProps) {
	
	const [ref, anim] = useInView(()=>({
		from: {
			opacity: 0,
			y: index * 10
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
		<animated.a className="project flex flex-col aspect-[4/3] pb-2 space-y-2 ring-orange-400 hover:ring-2 rounded-lg transition" ref={ref} style={anim}>
			{/*<img className="aspect-video bg-gray-200" src={photo}/>*/}
			<div className="project aspect-video rounded-lg bg-gray-700"></div>

			<div className="project space-y-2 px-4">
				<p className="project font-ibm-normal text-xl drop-shadow">
					<b className="project font-ibm-bold text-lg">{name} :</b> {desc}
				</p>

				<div className="project flex items-center gap-4">
					{techUsed?.map((tech, i)=> {
						return <div key={i}>{tech.icon}</div>
					})}
				</div>
			</div>
		</animated.a>
	)
}
