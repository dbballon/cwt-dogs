import React, { useEffect } from 'react'
import { getAllDogs } from '../api'
import Breed from './Breed'
import { setDogs } from '../app/actions'
import { useDispatch, useSelector } from "react-redux";

export const DogTable = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.dogs)
    useEffect(() => {
        getAllDogs()
            .then((data) => {
                if (data) {
                    dispatch(setDogs(Object.keys(data)))
                }
            })
    }, [dispatch])
    return (<div className={"breeds-table"}>
        {list && list.map((breed, i) => (
            <div className={"breed"} key={i}><Breed name={breed.name} likes={breed.likes} index={i} /></div>
        ))}

    </div>)
}
export default DogTable