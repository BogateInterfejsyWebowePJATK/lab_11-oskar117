import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function ThumbRating({
                                       onThumbUp = f => f,
                                       onThumbDown = f => f,
                                       thumbsUp,
                                       thumbsDown,
                                   }) {
    return (
        <>
            <FaThumbsUp onClick={() => onThumbUp()} /><span>{thumbsUp}</span>
            <FaThumbsDown onClick={() =>onThumbDown()}/><span>{thumbsDown}</span>
        </>
    );
}
