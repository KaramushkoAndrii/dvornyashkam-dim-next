
import { useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";


const AccordionItem = ({data, onClick, isOpen}) => {

    const itemRef = useRef(null)
    return (
        <li className="accordion__item">
            <button className="accordion__header" 
                onClick={() => onClick()}>
                    {data.title}
                    <IoIosArrowDropdown className={`accordion__arrow ${isOpen ? 'active' : ''}`}/>
            </button>
            <div className='accordion__collapse'
            style={isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}}>
                <div className="accordion__body" ref={itemRef}>{data.content}</div>
            </div>
        </li>
    )
}

export default AccordionItem;