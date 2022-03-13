import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these AWESOME past events!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img-2.jpg'
                        text='Event 1 FILLER FILLER FILLER FILLER'
                        label="Reza's"
                        path='/sign-up'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        text='Event 2 FILLER FILLER FILLER FILLER'
                        label='Place 2'
                        path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-2.jpg'
                            text='Event 3 FILLER FILLER FILLER FILLER'
                            label='Place 3'
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Event 4 FILLER FILLER FILLER FILLER'
                            label='Place 4'
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Event 5 FILLER FILLER FILLER FILLER'
                            label='Place 5'
                            path='/sign-up'
                        />
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;