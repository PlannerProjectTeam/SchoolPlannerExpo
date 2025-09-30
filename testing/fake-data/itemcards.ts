import { LIST_MODE_CARD } from "@/src/features/calendar/types/ListModeCard"
import { CARD_CATEGORY } from "@/src/features/calendar/types/ListModeCard"

export const ItemCardFakeData : LIST_MODE_CARD[] = [
    {
        id: 0,
        color: '#eb4034',
        title: 'Calculus HW #3',
        subtitle: 'Calculus II',
        footer: 'Due: 11/10',
        type: CARD_CATEGORY.Task
    },
    {
        id: 1,
        color: '#fcba03',
        title: 'Do Laundry',
        subtitle: 'Before: 11/12',
        footer: 'Jeans specifically need washing.',
        type: CARD_CATEGORY.Task
    },

    {
        id: 2,
        color: '#4287f5',
        title: 'First-Gen Club',
        subtitle: '4PM - 5PM',
        footer: 'Remember to show up early!',
        type: CARD_CATEGORY.Event
    },
    
    {
        id: 3,
        color: '#525252',
        title: '10 - 11AM',
        subtitle: 'Computer Systems',
        footer: 'KH108',
        type: CARD_CATEGORY.Course
    },
    {
        id: 4,
        color: '#11ad7f',
        title: '12 - 1PM',
        subtitle: 'Calculus II',
        footer: 'BT114',
        type: CARD_CATEGORY.Course
    },
    {
        id: 5,
        color: '#4226d1',
        title: '4 - 6PM',
        subtitle: 'Chamber Ensemble',
        footer: 'Recital Room',
        type: CARD_CATEGORY.Course
    },
]