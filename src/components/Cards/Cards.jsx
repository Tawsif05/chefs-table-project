import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Cards.css'

const Cards = ({handleData}) => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch("chefs.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="cards-container">
            {
                cards.map(card => <Card
                card={card} handleData={handleData} key={card.recipe_id}></Card>)
            }
        </div>
    );
};

export default Cards;