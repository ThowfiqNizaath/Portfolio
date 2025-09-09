import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    //State
    const [isDarkMode, setIsDarkMode] = useState(false);


    //Fuctions
    const toggleTheme = () => {
           if(isDarkMode){
             setIsDarkMode(false)
             document.documentElement.classList.remove("dark")
             localStorage.setItem("theme", "light")
           }else{
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
           }
        }

    //useEffects


    //value
    const values = {
      isDarkMode,
      setIsDarkMode,
      toggleTheme,
    };
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export const userAppContext = () => useContext(AppContext)
