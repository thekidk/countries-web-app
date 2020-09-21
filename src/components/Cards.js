import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Different Regions Around the World</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="/africa.jpg" 
                        text="Countries in Africa"
                        label ='Africa'
                        path='/africa'
                        />
                        <CardItem 
                        src='/americas.jpg' 
                        text="Countries in North & South America"
                        label ='Americas'
                        path='/americas'
                        />
                        <CardItem 
                        src="/europe.jpg" 
                        text="Countries in Europe"
                        label ='Europe'
                        path='/europe'
                        />
                        <CardItem 
                        src="/asia.jpg" 
                        text="Countries in Asia"
                        label ='Asia'
                        path='/asia'
                        />
                        <CardItem 
                        src="/oceania.jpg" 
                        text="Countries in Oceania"
                        label ='Oceania'
                        path='/oceania'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
