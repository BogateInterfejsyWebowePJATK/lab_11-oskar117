import React from "react";
import ThumbRating from "./ThumbRating";
import Rating from "./Rating";
import {FaTrash} from "react-icons/fa"

export default function Photo({url, title, rating, dateAdded, stars, thumbsUp, thumbsDown, onRate = f => f, onThumbUp = f => f, onThumbDown = f => f, onRemove = f => f}) {

    const calculateAverage = () => {
        let sum = stars.reduce((a, b) => a + b, 0);
        let len = stars.length
        if (rating !== 0) {
            len++
            sum += rating
        }
        return (sum / len) || 0;
    }

    return (
        <section>
            <h1>{title}</h1><br/>
            <span>{dateAdded}</span><br/>
            <span>Current rating: {calculateAverage()}</span><br/>

            <img src={url} alt="Nie działa" width="378em"/><br/>
            <Rating
                selectedStars={rating}
                onRate={rating => onRate(url, rating)}
            /><br/>
            <ThumbRating onThumbDown={() => onThumbDown(url)} onThumbUp={() => onThumbUp(url)} thumbsUp={thumbsUp} thumbsDown={thumbsDown} />
            <button onClick={() => onRemove(url)}>
                <FaTrash />
            </button>

        </section>
    );
}