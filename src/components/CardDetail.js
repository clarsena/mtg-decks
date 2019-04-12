import React from 'react';

import './CardDetail.css';

const CardDetail = ({ selectedCard }) => {
    console.log(selectedCard);
    let oracleText = '';
    if(selectedCard.oracle_text) {
        oracleText = selectedCard.oracle_text.split('\n').map ((item, i) => <p key={i}>{item}</p>);
    }
    return (
        <div className='card-detail'>
            {selectedCard.image_uris ? <img src={selectedCard.image_uris.normal} alt={selectedCard.name} /> : '' }
            <div className='card-info'>
                <h2>{selectedCard.name} {selectedCard.mana_cost}</h2>
                <h3>{selectedCard.type_line}</h3>
                <div className='card-text'>{oracleText}</div>
                {selectedCard.flavor_text ? <h3 className='card-flavor-text'>{selectedCard.flavor_text}</h3> : ''}
                {selectedCard.power || selectedCard.toughness ? <h3>{selectedCard.power} / {selectedCard.toughness}</h3> : ''}
                {selectedCard.loyalty ? <h3>Loyalty: {selectedCard.loyalty}</h3> : ''}
                <h4>Illustrated by - {selectedCard.artist}</h4>
            </div>
        </div>
    );
};

export default CardDetail;