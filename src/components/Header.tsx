import { GrLocationPin } from "react-icons/gr"

export default function Header() {

	return (
		<div className="h-[90dvh] text-center flex justify-center items-center place-items-center prose-sm font-ibm-normal md:prose-lg lg:prose-2xl prose-h1:font-ibm-bold prose-p:font-ibm-normal">
			<div>
				<h1>Hi i'm Omar a <b className="hover-sweep sweep-dark">Web Developer</b>.</h1>
				<div className="px-10 md:px-0 flex items-center justify-between gap-2 italic">
					<div className="flex items-center"><GrLocationPin size={24}/>Saudi Arabia</div>
				</div>
			</div>
		</div>
	)
}
