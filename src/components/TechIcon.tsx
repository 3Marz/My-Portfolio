import { animated, useInView, useSpring } from "@react-spring/web"
import { useGesture } from "@use-gesture/react"
import { TechnologyType } from "../types"

type TechIconProps = TechnologyType & {
	index: number
}

export default function TechIcon({icon, index, name}: TechIconProps) {
	
	const [ref, anim] = useInView(()=>({
		from: {
			opacity: 0,
			y: index * 2
		},
		to: {
			opacity: 1,
			y: 0
		},
	}), {
			rootMargin: '0% 0%',
			once: true
	})
	
	const [{y}, upApi] = useSpring(()=>({
		y: 25,
		config: {mass: 10, friction: 100, tension: 1200}
	}))
	const [{opacity}, showApi] = useSpring(()=>({
		opacity: 0,
	}))

	useGesture(
		{
		onPointerEnter: () => {upApi({y: 0}); showApi({opacity:1})},
		onPointerLeave: () => {upApi({y: 25}); showApi({opacity:0})}
	},{
			target: ref
		})

	return (
		<animated.div className="max-w-14" ref={ref} style={anim}>
			<animated.div style={{ y }} className="text-center flex flex-col items-center">
				{icon}
			</animated.div>
			<animated.b className="flex justify-center" style={{ opacity }}>{name}</animated.b>
		</animated.div>
	)
}
