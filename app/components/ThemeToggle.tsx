'use client';

import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";


const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('light-mode', isLight);
    }, [isLight]);

    const toggleTheme = () => setIsLight(prev => !prev);

    return isLight ? (
        <MdDarkMode 
            onClick={toggleTheme}
            style={{
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#000',
                userSelect: 'none',
                border: 'none',
                outline: 'none',
            }}
            aria-label="Toggle dark mode"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
        />
    ) : (
        <MdLightMode 
            onClick={toggleTheme}
            style={{
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#fff',
                userSelect: 'none',
                outline: 'none',
            }}
            aria-label="Toggle light mode"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
        />
    );
};

export default ThemeToggle;