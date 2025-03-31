import { CARD_CATEGORY } from "./ListModeCard"

export interface COURSE {
    id: number // ID
    color: string // Color
    
    name: string // Title
    location: string // Footer
    repeatDays: string[] // Like: ["monday", "tuesday"]

    startTime: string // Format: HH:MM AM/PM
    endTime: string // Format: HH:MM AM/PM
}
