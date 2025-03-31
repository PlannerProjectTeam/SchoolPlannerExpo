import { CARD_CATEGORY } from "./ListModeCard"

export interface TASK {
    id: number // ID
    color: string // Color
    name: string // Title
    associatedCourseName: string
    description: string
    dueDate: string // Format: YYYY-MM-DD
}
