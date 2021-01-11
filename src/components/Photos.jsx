import React from "react";
import Photo from "./Photo"

export default function Photos({photos_prop}) {

    const [photos, setPhotos] = React.useState(photos_prop)

    const onRating = (url, rating) => {
        const newPhotos = photos.map(photo => {
            if (photo.url === url) {
                photo.rating = rating
            }
            return photo
        });
        setPhotos(newPhotos);
    }

    const onThumbUp = (url) => {
        const newPhotos = photos.map(photo => {
            if (photo.url === url) {
                if (photo.currentThumb === 0) photo.thumbsUp++
                else if (photo.currentThumb === -1) {
                    photo.thumbsDown--
                    photo.thumbsUp++
                }
                photo.currentThumb = 1
            }
            return photo
        });
        setPhotos(newPhotos);
    }

    const onThumbDown = (url) => {
        const newPhotos = photos.map(photo => {
            if (photo.url === url) {
                if (photo.currentThumb === 0) photo.thumbsDown++
                else if (photo.currentThumb === 1) {
                    photo.thumbsDown++
                    photo.thumbsUp--
                }
                photo.currentThumb = -1
            }
            return photo
        });
        setPhotos(newPhotos);
    }

    const onRemove = (url) => {
        const newPhotos = photos.filter(photo => photo.url !== url);
        setPhotos(newPhotos);
    }

    const shuffle = () => {
        let temp = [...photos]
        temp.sort(() => Math.random() - 0.5)
        setPhotos(temp)
    }

    const sortByDate = () => {
        let temp = [...photos]
        temp.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
        setPhotos(temp)
    }

    const sortByTitle = () => {
        let temp = [...photos]
        temp.sort((a, b) => a.title.localeCompare(b.title))
        console.log(temp)
        setPhotos(temp)
    }

    return (
        <div>
            <div>
                <button onClick={sortByTitle}>Sortuj po tytule</button>
                <button onClick={sortByDate}>Sortuj po dacie</button>
                <button onClick={shuffle}>Losowanko</button>
            </div>
            {photos.map((photo, i) => {
                return <Photo key={i} {...photo} onRemove={onRemove} onRate={onRating} onThumbUp={onThumbUp} onThumbDown={onThumbDown}/>
            })}
        </div>
    );
}