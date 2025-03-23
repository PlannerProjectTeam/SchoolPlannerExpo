export enum ITEM_CARD_TYPES {
    Task, Event, Course
}

export interface ITEM_CARD_DATA {
    id: number      
    color: string
    title: string
    subtitle: string
    footer: string
    type: ITEM_CARD_TYPES
}