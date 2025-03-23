import React, { createContext, useContext, useState } from 'react';

export enum Themes {
    Purple = '#4A4458',
    Blue = '#414F6C',
    Green = '#445853',
    Yellow = '#565844',
    Orange = '#584944',
    Red = '#664A4A',
}

interface ThemeContextType {
    currentTheme: Themes;
    setCurrentTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children } : any) => {
    const [theme, setTheme] = useState<Themes>(Themes.Purple);

    const setCurrentTheme = (newTheme: string) => {
        for (const key of Object.keys(Themes)) {
            const value = Themes[key as keyof typeof Themes];
            if (newTheme === value) {
                setTheme(value);
                return;
            }
        }
    };

    return (
        <ThemeContext.Provider value={{ currentTheme: theme, setCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};