import { Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated, useTrail, SpringConfig } from '@react-spring/web';

import Home from './pages/Home';

import styles from "./cursor.module.css"

const fast: SpringConfig = { tension: 1200, friction: 40 };
const slow: SpringConfig = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function App() {
	const location = useLocation();

	const [trail, api] = useTrail(3, (i) => ({
		xy: [0, 0],
		config: i == 0 ? fast : slow
	}));

	const transitions = useTransition(location, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 }
	});

	
	const handleMouseMove = (e: MouseEvent) => {
		api.start({xy: [e.clientX, e.clientY]})
	}
	window.addEventListener("mousemove", handleMouseMove)
		
	return transitions((props, item) => (
		<animated.div className="absolute w-full" style={props}>
			<svg style={{ position: "absolute", width: 0, height: 0 }}>
	      <filter id="goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="25" />
	        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 25 -7" />
				</filter>
			</svg>
			<div className={styles.hooksMain} >
				{trail.map((props, index) => (
					 <animated.span key={index} style={{ transform: props.xy.to(trans) }} />
				))}
			</div>
			<div>
			</div>
			<Routes location={item}>
				<Route path='/' Component={Home} />
			</Routes>	
		</animated.div>
	))
	//return (
	//	<>
	//	{transitions((props, item) => (
	//			<animated.div className="absolute" style={props}>
	//				<Routes location={item}>
	//					<Route path='/' Component={Home} />
	//					<Route path='/projects' Component={Projects} />
	//				</Routes>	
	//			</animated.div>
	//		))}
	//		<svg style={{ position: "absolute", width: 0, height: 0 }}>
	//       <filter id="goo">
	//         <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="25" />
	//         <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 25 -7" />
	//       </filter>
	//     </svg>
	//     <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
	//			{trail.map((props, index) => (
	//         <animated.span key={index} style={{ transform: props.xy.to(trans) }} />
	//       ))}
	//     </div>
	//
	//
	//	</>
	//)
}

export default App
