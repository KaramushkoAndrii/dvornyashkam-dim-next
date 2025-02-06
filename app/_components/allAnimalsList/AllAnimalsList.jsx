import { memo } from "react";

import AnimalCard from "../AnimalCard/AnimalCard";

import './allAnimalsList.scss';

const AllAnimalsList = ({list, onAnimalSelect}) => {


    return (
        <>
            <ul className="allAnnimals__list">
                {list.map((item) => (
                    <li key={item.id} onClick={() => onAnimalSelect(item)}>
                        {console.log('Rendering item with id:', item.id)}
                        <AnimalCard animal={item}/>
                    </li>
                ))}
            </ul>
            {console.log(list.length)}
        </>

    )
}

export default memo(AllAnimalsList);