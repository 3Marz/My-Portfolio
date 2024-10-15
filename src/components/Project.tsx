import { animated, useInView } from "@react-spring/web"
import { ProjectType } from "../types"

type ProjectProps = ProjectType & {
	key: number
}

export default function Project({name, desc, photo, techUsed, key}:ProjectProps) {
	
	const [ref, anim] = useInView(()=>({
		from: {
			opacity: 0,
			y: key * 10
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
		<animated.div ref={ref} style={anim}>
			<img className="aspect-video bg-gray-200" src={photo}/>
		</animated.div>
	)
}
