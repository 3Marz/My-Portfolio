import { Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated, useTrail, SpringConfig } from '@react-spring/web';

import Home from './pages/Home';
import { useEffect } from 'react';
import { isMobile } from './utils';

const fast: SpringConfig = { tension: 1200, friction: 40 };
const slow: SpringConfig = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function App() {
	const location = useLocation();

	const [trail, api] = useTrail(3, (i) => ({
		xy: [100, 100],
		size: 1,
		rad: "50%",
		config: i == 0 ? fast : slow,
	}));

	const transitions = useTransition(location, {
		from: { opacity: 0, scale: 2},
		enter: { opacity: 1, scale: 1 },
		leave: { opacity: 0, scale: 2 }
	});

	
	const handleMouseMove = (e: MouseEvent) => {
		api.start({xy: [e.clientX, e.clientY]})
		api.start({size: 1})
		api.start({rad: "50%"})
		if(typeof(e.target.className) == "string") {
			if(e.target.className.includes("project")) {
				api.start({size: 3})
			}
			if(e.target.className.includes("link")) {
				api.start({rad: "2%"})
			}
		} else {
			api.start({rad: "0%"})
		}
	}
	useEffect(()=>{
		// Needed to be in useEffect to prevent a bug when moving the mouse too early
		if(!isMobile()) {
			window.addEventListener("mousemove", handleMouseMove)
		}
	},[])
		
	return transitions((transition, item) => (
		<animated.div className="w-full" style={transition}>
			<svg style={{ position: "absolute", width: 0, height: 0 }}>
	      <filter id="goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="25" />
	        <feColorMatrix values={`1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -9`} />
				</filter>
			</svg>
			<div className="hooksMain" hidden={isMobile()}>
				{trail.map((props, index) => (
					 <animated.span key={index} style={{ 
						transform: props.xy.to(trans), 
						scale: props.size,
						borderRadius: props.rad
					}} />
				))}
			</div>
			<Routes location={item}>
				<Route path='/' Component={Home} />
			</Routes>	
		</animated.div>
	))
}

export default App
