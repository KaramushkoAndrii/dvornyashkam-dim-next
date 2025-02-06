
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import AllAnimalsList from '../allAnimalsList/AllAnimalsList';
import Button from '../../components/button/Button';
import SearchFilter from '../searchFilter/SearchFilter';

import { FaDog } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";
import './animalsPage.scss';

const AnimalsPage = ({title, data = [], animal, isOpen}) => { 

    const { t } = useTranslation();

    const [visibleCards, setVisibleCards] = useState(4);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [filters, setFilters] = useState({
        age: '',
        size: '',
        gender: '',
        vaccine: false
    });

    const filteredData = useMemo(() => {
        return data
            .filter((animal) => {
                if(filters.age) {
                    const age = parseInt(animal.age, 10);
                    switch(filters.age) {
                        case '0-1': return age <=1;
                        case '1-3': return age >1 && age <=3;
                        case '4-6': return age >3 && age <=6;
                        case '7+': return age >= 7;
                        default: return true
                    }
                }

                return true;
            })

            .filter((animal) => {
                if(filters.size) {
                    const weight = parseInt(animal.size, 10);
                    switch(filters.size) {
                        case '0-15': return weight <= 15;
                        case '15-25': return weight > 15 && weight <=25;
                        case '25': return weight > 25;
                        default: return true
                    }
                }

                return true;
            })

            .filter((animal) => {
                return !filters.gender || animal.gender === filters.gender;
            })

            .filter((animal) => {
                return !filters.vaccine || animal.vaccine === filters.vaccine;
            });
    }, [data, filters]);

    const visibleData = useMemo(() => filteredData.slice(0, visibleCards), [filteredData, visibleCards]);


    const loadMoreAnimals = () => {
        setVisibleCards((prev) => prev + 4);
    }

    const handleAnimalSelect = useCallback((animal) => {
        setSelectedAnimal(animal)
    }, [])

    const handleCloseAside = () => {
        setSelectedAnimal(null)
    }

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setVisibleCards(4);
    };

    return (
        <>
            <h2>{t(`${title}`)}</h2>

            <SearchFilter onFilterChange={handleFilterChange}/>

            <section className="animalPage__content">
                <AllAnimalsList 
                    list={visibleData} 
                    onAnimalSelect={handleAnimalSelect}
                />
                <aside className={`animalPage__aside ${selectedAnimal ? 'open' : ''}`}>
                    {selectedAnimal && (
                        <div className="animalPage__aside-content">
                            <header>
                                <button className="animalPage__close" 
                                        onClick={handleCloseAside}>
                                        X
                                </button>
                            </header>
                            <section>
                                <ul className="imgContainer">
                                    {selectedAnimal.moreImg.map((img, indx) => (
                                        <li key={indx}><img src={img} alt={selectedAnimal.name} /></li>
                                    ))}
                                </ul>
                                <h3>{selectedAnimal.name}</h3>
                                <h3>{selectedAnimal.gender}</h3>
                                <h3>{selectedAnimal.age}</h3>
                                <div>
                                    <i> <FaDog  style={{fill: selectedAnimal.animals ? 'green' : 'red'}}/> </i>
                                    <i> <TbVaccine style={{fill: selectedAnimal.vaccine ? 'green' : 'red', stroke: selectedAnimal.vaccine ? 'green' : 'red'}}/> </i>
                                </div>
                                <footer>
                                    <Button text={t('buttons.house')} onClick={isOpen}/>
                                    <Button text={t('buttons.guard')} onClick={isOpen}/>
                                </footer>
                            </section>
                        </div>
                    )}
                </aside>
            </section>

            {visibleCards < data.length && (
                <button className="animalPage__more" onClick={loadMoreAnimals}>
                    {t(`buttons.${animal}`)}
                </button>
            )}
        </>
    )

}

export default AnimalsPage;