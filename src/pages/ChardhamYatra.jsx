import React from 'react';
import { PackageLayout } from '../components/layout/PackageLayout';

export function ChardhamYatra() {
    const data = {
        title: 'Chardham Yatra By Helicopter',
        subtitle: 'Yamunotri • Gangotri • Kedarnath • Badrinath',
        heroImage: 'https://images.unsplash.com/photo-1598379435671-50e508824df9?auto=format&fit=crop&q=80',
        price: '₹1,90,000',
        duration: '5 Days / 4 Nights',
        location: 'Dehradun (Sahastradhara Helipad)',
        overview: 'Embark on the holiest of pilgrimages with Flydheera. Our Chardham Yatra by helicopter is designed to provide you with a seamless and divine experience. Starting from Dehradun, we cover all four dhams—Yamunotri, Gangotri, Kedarnath, and Badrinath—ensuring VIP darshans, luxury accommodation, and gourmet meals throughout your journey.',
        itinerary: [
            {
                title: 'Arrival in Dehradun',
                desc: 'Arrive at Dehradun. Complimentary pick-up from airport/railway station. Overnight stay at a luxury hotel in Dehradun with dinner and briefing for the yatra.'
            },
            {
                title: 'Dehradun to Yamunotri',
                desc: 'Morning departure from Sahastradhara helipad to Kharsali. Trek/Pony to Yamunotri temple. VIP Darshan and return to Kharsali for overnight stay.'
            },
            {
                title: 'Yamunotri to Gangotri',
                desc: 'Fly from Kharsali to Harsil. Drive to Gangotri Dham for darshan. Return to Harsil, a picturesque valley, for an overnight stay amidst nature.'
            },
            {
                title: 'Gangotri to Kedarnath',
                desc: 'Fly from Harsil to Sersi/Guptkashi. Shuttle to Kedarnath Ji. Priority Darshan and Rudra Abhishek (optional). Overnight stay at Sersi/Guptkashi.'
            },
            {
                title: 'Kedarnath to Badrinath & Return',
                desc: 'Fly to Badrinath. VIP Darshan at the temple and visit to Mana Village. Return flight to Dehradun Sahastradhara helipad. Tour concludes.'
            }
        ],
        inclusions: [
            'Helicopter flying charges Ex-Dehradun.',
            'Accommodation at best available hotels at all Dhams.',
            'All meals (Breakfast, Lunch, Dinner).',
            'VIP Darshan slips at all temples.',
            'Palki/Pony at Yamunotri.',
            'Local sightseeing and transfers at all Dhams.'
        ],
        exclusions: [
            'Personal expenses like tips, laundry, etc.',
            'Any special puja charges.',
            'Travel insurance.',
            'gst (as applicable).'
        ]
    };

    return <PackageLayout {...data} />;
}
