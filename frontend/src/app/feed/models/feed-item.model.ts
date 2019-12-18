export interface FeedItem {
    id: number;
    url: string;
    species: string;
    diameter: string;
    length: string;
    price: string;
}

export const feedItemMocks: FeedItem[] = [
    {
    id: 0,
    url: '/assets/mock/xander0.jpg',
    species: 'White Oak',
    diameter: '17 Inches',
    length: '9 Feet',
    price: '$950.00'
    },
    {
    id: 0,
    url: '/assets/mock/xander1.jpg',
    species: 'Red Oak',
    diameter: '15 Inches',
    length: '12 Feet',
    price: '$1,050.00'
    },
    {
    id: 0,
    url: '/assets/mock/xander2.jpg',
    species: 'Walnut',
    diameter: '20 Inches',
    length: '15 Feet',
    price: '$2,100.00'
    },
];
