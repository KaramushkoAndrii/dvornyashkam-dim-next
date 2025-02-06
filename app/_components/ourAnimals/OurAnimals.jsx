
import dogsDB from '../../data/dogsDB';
import catsDB from '../../data/catsDB';

import AnimalsList from '../animalsList/AnimalsList';

import './ourAnimals.scss';


const OurAnimals = ({isOpen}) => {
    return (
        <section className='animals'>
            <AnimalsList title={'lists-title.dogs'} dataList={dogsDB} btnText={'buttons.more-dogs'} src={'animals/dogs'} isOpen={isOpen}/>
            <AnimalsList title={'lists-title.cats'} dataList={catsDB} btnText={'buttons.more-cats'} src={'animals/cats'} isOpen={isOpen}/>
        </section>
    )
}

export default OurAnimals;