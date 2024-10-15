import { ReactNode } from "react"

export type ProjectType = {
	name: string
	desc: string
	photo: string | undefined
	techUsed: TechnologyType[] | null
}

export type TechnologyType = {
	icon: ReactNode
	name: string
}

