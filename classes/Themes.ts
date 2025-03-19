export enum Themes {
    Purple = '#4A4458',
    Blue = '#414F6C',
    Green = '#445853',
    Yellow = '#565844',
    Orange = '#584944',
    Red = '#664A4A',
}

export let currentTheme = Themes.Purple;

export const getCurrentTheme = () => {
    return currentTheme;
}

export const setCurrentTheme = (theme : string) => {
    for (const key of Object.keys(Themes)) {
        let value = Themes[key as keyof typeof Themes];
        if (theme == value){
            currentTheme = Themes[key as keyof typeof Themes];
        }
    }
}