import React from 'react';
import './CardList.css';

const CardList = ({ cardList, handleClick }) => {
    return (
        <div className='card-list'>
        {cardList.length > 0 ? <h2 className='results-amount'>Found {cardList.length} cards</h2> : ''}
            {cardList.map((card) => {
                return (
                    <div className='list-item' key={card.id} id={card.id} onClick={() => handleClick(card.id)}>
                        <div className='list-item-details'>
                            <h3>{card.name} {card.mana_cost ? `- ${card.mana_cost}` : ''}</h3>
                        </div>
                        <div className='list-item-details'>
                            <h4>{card.type_line} - {card.set_name}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList