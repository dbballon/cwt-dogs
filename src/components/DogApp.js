import React from 'react'
import DogSummary from './DogSummary'
import DogTable from './DogTable'


export const DogApp = () => {
    return (
        <div className={"dog-app"}>
            <div className={"tablet-sticky-header"}><h1>Dog Breeds App</h1></div>
            <DogSummary />
            <DogTable />
        </div>
    );
}
export default DogApp