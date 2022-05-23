import React from 'react'
import { useSelector } from "react-redux";


export const DogSummary = () => {
    const dogs = useSelector(state => state.dogs)
    const summary = {}
    dogs.map(d => (
        summary[d.name] = summary[d.name] ?
            { likes: summary[d.name].likes + d.likes, images: summary[d.name].images + 1 } :
            { likes: d.likes, images: 1 }
    ))
    return (
        <ul className={"summary-list"}>{Object.entries(summary)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(x => (
                <li key={x[0]}>{x[0]} images {x[1].images}, likes {x[1].likes}</li>
            ))
        }</ul>
    );
}
export default DogSummary