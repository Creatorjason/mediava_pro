// StatsCard.js
import React from 'react';

export default function StatsCard({ stats }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
