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
		})

	return (
		<animated.div className="flex flex-col aspect-[4/3] space-y-2 p-2" ref={ref} style={anim}>
			{/*<img className="aspect-video bg-gray-200" src={photo}/>*/}
			<div className="aspect-video rounded-lg bg-gray-700"></div>

			<p className="font-ibm-normal text-xl drop-shadow">
				<b className="font-ibm-bold text-lg">{name} :</b> {desc}
			</p>

			<div className="flex items-center gap-4">
				{techUsed?.map((tech, i)=> {
					return <div key={i}>{tech.icon}</div>
				})}
			</div>
		</animated.div>
	)
}
