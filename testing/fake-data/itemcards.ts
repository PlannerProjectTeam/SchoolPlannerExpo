import { ItemCardData } from "@/src/features/calendar/types/ItemCardData"
import { ITEM_CARD_TYPES } from "@/src/features/calendar/types/ItemCardData"

export const ItemCardFakeData : ItemCardData[] = [
    {
        id: 0,
        color: '#eb4034',
        title: 'Calculus HW #3',
        subtitle: 'Calculus II',
        footer: 'Due: 11/10',
        type: ITEM_CARD_TYPES.Task
    },
    {
        id: 1,
        color: '#fcba03',
        title: 'Do Laundry',
        subtitle: 'Calculus II',
        footer: 'Jeans specifically need washing',
        type: ITEM_CARD_TYPES.Task
    },

    {
        id: 2,
        color: '#4287f5',
        title: 'First-Gen Club',
        subtitle: '4PM - 5PM',
        footer: 'Remember to show up early',
        type: ITEM_CARD_TYPES.Event
    },
    
    {
        id: 3,
        color: '#525252',
        title: '10 - 11AM',
        subtitle: 'Computer Systems',
        footer: 'KH108',
        type: ITEM_CARD_TYPES.Course
    },
    {
        id: 4,
        color: '#11ad7f',
        title: '12 - 1PM',
        subtitle: 'Calculus II',
        footer: 'BT114',
        type: ITEM_CARD_TYPES.Course
    },
    {
        id: 5,
        color: '#4226d1',
        title: '4 - 6PM',
        subtitle: 'Chamber Ensemble',
        footer: 'Recital Room',
        type: ITEM_CARD_TYPES.Course
    },
]