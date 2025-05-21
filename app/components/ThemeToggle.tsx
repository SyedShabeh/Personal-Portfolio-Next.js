'use client';

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('light-mode', isLight);
    }, [isLight]);

    const toggleTheme = () => setIsLight(prev => !prev);

    return (
        <i
            className={`fas ${isLight ? 'fa-moon' : 'fa-sun'}`}
            onClick={toggleTheme}
            style={{
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: isLight ? '#000' : '#fff',
                userSelect: 'none'
            }}
            aria-label="Toggle theme"
            role="button"
            tabIndex={0}
        />
    );
};

export default ThemeToggle;
