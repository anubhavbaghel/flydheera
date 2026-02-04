import React from 'react';
import { PackageLayout } from '../components/layout/PackageLayout';

export function DoDhamYatra() {
    const data = {
        title: 'Do Dham Yatra (Kedarnath & Badrinath)',
        subtitle: 'The Divine Duo',
        heroImage: 'https://images.unsplash.com/photo-1626085189332-901d89849929?auto=format&fit=crop&q=80',
        price: '₹95,000',
        duration: 'Same Day / 1 Night',
        location: 'Dehradun / Phata',
        overview: 'Short on time but longing for divine blessings? Our Do Dham Yatra covers the two most significant shrines—Kedarnath and Badrinath—in a single day or with an overnight stay option. Experience the majestic Himalayas from above and pay your respects with priority darshan access.',
        itinerary: [
            {
                title: 'Dehradun to Kedarnath',
                desc: 'Morning departure from Sahastradhara. Arrival at Phata/Sersi. Shuttle flight to Kedarnath. VIP Darshan at the temple.'
            },
            {
                title: 'Kedarnath to Badrinath',
                desc: 'Return shuttle to base. Fly to Badrinath. Drive to temple for VIP Darshan. Lunch at Badrinath.'
            },
            {
                title: 'Return to Dehradun',
                desc: 'Fly back to Sahastradhara helipad reducing days of travel to hours. Yatra concludes with blessings.'
            }
        ],
        inclusions: [
            'Helicopter flying charges.',
            'VIP Darshan at both Kedarnath and Badrinath.',
            'Shuttle services.',
            'Lunch and refreshments.',
            'Local transfers.'
        ],
        exclusions: [
            'Accommodation (unless 1N package selected).',
            'Special Puja charges.',
            'Personal expenses.',
            'GST.'
        ]
    };

    return <PackageLayout {...data} />;
}
