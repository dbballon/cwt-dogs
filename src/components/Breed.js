import React, { useState, useEffect } from 'react'
import { getDogImage } from '../api'
import { useDispatch } from "react-redux";
import { addLike } from '../app/actions'


export const Breed = ({ name, likes, index }) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null)
    useEffect(() => {
        getDogImage(name)
            .then((data) => {
                if (data) {
                    setImage(data)
                }
            })
    }, [name])
    return (
        <div className={"breed-image"} style={{ backgroundImage: `url(${image})` }} onClick={() => { dispatch(addLike(index)) }}>
            <span className={"name"}>{name}</span>
            <p className={"likes"}>Likes: {likes}</p>
        </div>
    );
}
export default Breed