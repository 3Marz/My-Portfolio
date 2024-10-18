
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si"
import { ProjectType } from "../types";

const projectIconSize = 40;

export const projects : ProjectType[] = [
	{ 
		name:"term3d", 
		desc:"A 3d model viewer in the terminal, using a weak perspective projection", 
		photo: "/portfolio/projectScreenshots/term3d.jpg",
		url: "https://github.com/3Marz/term3d",
		techUsed: [
			{name:"Typescript", icon: <SiTypescript size={projectIconSize} />}
		]
	},
	{ 
		name:"Chip-8 Emulator", 
		desc:"an emulator for the chip-8 interpreted programming language", 
		photo: "/portfolio/projectScreenshots/chip8.png",
		url: "https://github.com/3Marz/Chip8-Emulator",
		techUsed: [
			{name:"Javascript", icon: <SiJavascript size={projectIconSize}/>},
			{name:"Tailwind", icon: <SiTailwindcss size={projectIconSize}/>},
			{name:"Html", icon: <SiHtml5 size={projectIconSize}/>}
		]
	},
	{ 
		name:"My Portfolio", 
		desc:"made with react and react spring for animations", 
		photo: "/portfolio/projectScreenshots/portfolio.png",
		url: "https://github.com/3Marz/portfolio",
		techUsed: [
			{name:"React", icon: <SiReact size={projectIconSize}/>},
			{name:"Typescript", icon: <SiTypescript size={projectIconSize}/>},
			{name:"Tailwind", icon: <SiTailwindcss size={projectIconSize}/>}
		]
	},
	{ 
		name:"dhkir", 
		desc:"show a random dhikr/sunnah in your terminal", 
		photo: "/portfolio/projectScreenshots/dhikr.png",
		url: "https://github.com/3Marz/dhikr",
		techUsed: [
			{name:"Javascript", icon: <SiJavascript size={projectIconSize}/>},
			{name:"Sqlite", icon: <SiSqlite size={projectIconSize}/>}
		]
	},
	{ 
		name:"Jutris", 
		desc:"A very satisfying and juicy tetris clone", 
		photo: "/portfolio/projectScreenshots/jutris.png",
		url: "https://github.com/3Marz/Jutris",
		techUsed: [
			{name:"Javascript", icon: <SiJavascript size={projectIconSize}/>},
			{name:"Html", icon: <SiHtml5 size={projectIconSize}/>},
			{name:"Css", icon: <SiCss3 size={projectIconSize}/>},
		]
	}
]
