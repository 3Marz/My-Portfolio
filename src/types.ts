import { ReactNode } from "react"

export type ProjectType = {
	name: string
	desc: string
	photo: string | null
	techUsed: TechnologyType[] | null
}

export type TechnologyType = {
	icon: ReactNode
	name: string
}

