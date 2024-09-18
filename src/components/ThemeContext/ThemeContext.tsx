import React, { useState, useEffect } from 'react';
import './ThemeContext.scss';

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggles between light and dark mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply the theme class to the body element when the theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className="theme-switcher">
            <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
            <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
    );
};

export default ThemeSwitcher;
