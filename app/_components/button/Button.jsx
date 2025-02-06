

import './button.scss';


const Button = ({text, onClick, disabled}) => {
    return (
        <button 
            className='mainButton'
            onClick={onClick}
            disabled={disabled}>
                {`${text}`}
        </button>
    )
}

export default Button;