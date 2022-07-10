import {createContext} from "react";

export const SearchContext = createContext({
    searchCity: '', //puste wyszukiwanie domyslnie
    setSearchCity: (s: string) => {},
});
