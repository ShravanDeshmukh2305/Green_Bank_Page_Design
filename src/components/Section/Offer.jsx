import React from 'react';

export default function Offer() {
    return (
        <div className="mt-20 space-y-12">
            <p className="text-center text-3xl font-bold">
                What do we offer?
            </p>
            <div className="flex justify-center items-center gap-10">
                {offerSInfo.map((item) => (
                    <SingleOffer 
                        key={item.id} 
                        logo={item.logo} 
                        title={item.title} 
                        content={item.content} 
                    />
                ))}
            </div>
        </div>
    );
}

const offerSInfo = [
    {
        id: 1,
        logo: '/assets/security.png',
        title: 'Security Guarantee',
        content: 'Your data and funds will be securely protected',
    },
    {
        id: 2,
        logo: '/assets/pie.png',
        title: 'Investing',
        content: 'Your data and funds will be securely protected',
    },
    {
        id: 3,
        logo: '/assets/analytics.png',
        title: 'Multiple Methods',
        content: 'Your data and funds will be securely protected.',
    },
];

const SingleOffer = (props) => {
    return (
        <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-12 bg-gray-500 bg-opacity-50 rounded-2xl relative backdrop-blur-lg flex justify-center items-center">
                <img src={props.logo} alt={props.title} className="w-7 h-7" />
            </div>

            <div className="gap-6">
                <p className="text-2xl font-semibold">{props.title}</p>
                <p className="text-sm text-white/70 w-[80%]">{props.content}</p>
            </div>
        </div>
    );
}
