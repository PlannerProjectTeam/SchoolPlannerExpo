export enum ItemCardTypes {
    Task, Event, Course
}

export interface ItemCardData {
    id: number      
    color: string
    title: string
    subtitle: string
    footer: string
    type: ItemCardTypes
}