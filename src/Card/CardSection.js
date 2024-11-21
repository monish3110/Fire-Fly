import React from 'react';
import Card from './Card';
import './CardSection.css';

const cardsData = [
  { title: 'Card 1', description: 'Description for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3' },
  { title: 'Card 4', description: 'Description for Card 4' },
  { title: 'Card 5', description: 'Description for Card 5' },
  { title: 'Card 6', description: 'Description for Card 6' }
];

const CardSection = () => {
  return (
    <div className="card-section">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardSection;