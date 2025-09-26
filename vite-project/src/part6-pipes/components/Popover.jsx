import './Popover.css';
import { useEffect, useState, useRef } from 'react';


export default function Popover({ content, className, children }) {
    const [isVisible, setIsVisible] = useState(false);
    const popoverRef = useRef(null);
    const triggerRef = useRef(null);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                popoverRef.current && !popoverRef.current.contains(event.target)
                && triggerRef.current && !triggerRef.current.contains(event.target)
            ) {
                setIsVisible(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="popover-container">
            <div
                ref={ triggerRef }
                className={ "popover-trigger " + className }
                onClick={ toggleVisibility }
            >
                { children }
            </div>
            { isVisible && (
                <div ref={ popoverRef } className={ "popover-content" }>
                    { content }
                </div>
            ) }
        </div>
    );
}
