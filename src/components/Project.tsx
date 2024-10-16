import { animated, useInView } from "@react-spring/web"
import { ProjectType } from "../types"

type ProjectProps = ProjectType & {
	index: number
}

export default function Project({ url, name, desc, photo, techUsed, index }: ProjectProps) {

	const [ref, anim] = useInView(() => ({
		from: {
			opacity: 0,
			y: index * 10
		},
		to: {
			opacity: 1,
			y: 0
		},
	}), {
		once: true
	})

	return (
		<animated.a href={url} className="project flex flex-col pb-2 space-y-2 ring-orange-400 hover:ring-4 rounded-lg transition h-full w-fit" ref={ref} style={anim}>
			
			<div className="project h-fit aspect-video w-full overflow-hidden">
				<img className="project rounded-lg h-full w-full" src={photo} />
			</div>

			<div className="project space-y-2 px-4 flex flex-col justify-between">
				<p className="project font-ibm-normal text-lg drop-shadow">
					<b className="project font-ibm-bold text-lg">{name} :</b> {desc}
				</p>
				<div className="project flex gap-4">
					{techUsed?.map((tech, i) => {
						return <div key={i}>{tech.icon}</div>
					})}
				</div>
			</div>

		</animated.a>
	)
}
