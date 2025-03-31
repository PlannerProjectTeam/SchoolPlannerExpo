export enum CARD_CATEGORY {
    Task, Event, Course
}

export interface LIST_MODE_CARD {
    id: number      
    color: string
    title: string
    subtitle: string
    footer: string
    date: string // Format: YYYY-MM-DD
    duration: number // Minutes
    type: CARD_CATEGORY
}