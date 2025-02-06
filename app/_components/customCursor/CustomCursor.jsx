import { useState, useEffect } from 'react';


import './customCursor.scss'


const CustomCursor = () => {

    const [position, setPosition] = useState({x: 0, y: 0});
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [])

    return (
        <div className={`custom-cursor ${isClicked ? 'clicked' : ''}`}
             style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
                pointerEvents: "none"
             }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                {/* <rect width="100" height="100" fill="#f4a090" rx="15" /> */}
                <path fill="#fff5e6" d="M50 70c10-10 20-5 25-20 0-10-10-15-15-15s-5 5-10 5-5-5-10-5-15 5-15 15c5 15 15 10 25 20z"/>
                <circle fill="#fff5e6" cx="35" cy="35" r="7" />
                <circle fill="#fff5e6" cx="65" cy="35" r="7" />
                <circle fill="#fff5e6" cx="45" cy="20" r="7" />
                <circle fill="#fff5e6" cx="55" cy="20" r="7" />
            </svg>

        </div>
    )
}


export default CustomCursor;