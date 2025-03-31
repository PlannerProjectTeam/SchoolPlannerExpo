import { CARD_CATEGORY } from "./ListModeCard"

export interface EVENT {
    id: number // ID
    color: string // Color
    name: string // Title
    description: string
    location: string // Footer
    initialDate: string // Format: YYYY-MM-DD
    repeatDays: string[] // Like: ["monday", "tuesday"]
    startTime: string // Format: HH:MM AM/PM
    endTime: string // Format: HH:MM AM/PM
}
