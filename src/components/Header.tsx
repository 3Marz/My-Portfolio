import { GrLocationPin } from "react-icons/gr"
import { SiGithub, SiItchdotio } from "react-icons/si"

export default function Header() {

	return (
		<div className="h-[90dvh] text-center flex justify-center items-center place-items-center prose-sm font-ibm-normal md:prose-lg lg:prose-2xl prose-h1:font-ibm-bold prose-p:font-ibm-normal">
			<div>
				<h1>Hi i'm Omar a <b className="hover-sweep sweep-dark">Web Developer</b>.</h1>
				<div className="px-10 md:px-0 flex items-center justify-between gap-2 italic">
					<div className="text-lg sm:text-2xl flex items-center"><GrLocationPin size={34}/>Saudi Arabia</div>
					<div className="flex items-center">
						<a className="hover:ring-4 link rounded-lg transition ring-orange-400 p-3" target="_blank" href="https://github.com/3Marz"><SiGithub className="size-8 md:size-12" /></a>
						<a className="hover:ring-4 link rounded-lg transition ring-orange-400 p-3" target="_blank"href="https://3mar.itch.io/"><SiItchdotio	className="size-8 md:size-12" /></a>
					</div>
				</div>
			</div>
		</div>
	)
}
