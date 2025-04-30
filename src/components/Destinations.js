import React from 'react';
import paris from '../assets/images/paris.jpeg';
import bali from '../assets/images/bali.jpeg';
import dubai from '../assets/images/dubai.jpg';

const destinations = [
  { name: 'Paris', image: paris },
  { name: 'Bali', image: bali },
  { name: 'Dubai', image: dubai },
];

function Destinations() {
  return (
    <section className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-cards">
        {destinations.map((dest, index) => (
          <div key={index} className="card">
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
