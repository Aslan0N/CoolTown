import { useEffect, useState } from "react";
import { createContext } from "react";


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode")))
    useEffect(()=>{
        localStorage.setItem("DarkMode", darkMode)
    },[darkMode])

    const changeMood = () =>{
        setDarkMode((value)=> !value)
        window.location.reload()
    }
    const data = JSON.parse(localStorage.getItem("User"));

    const [user, setUser] = useState({
        userName:"",
        password:""
    })

    return(
        <GlobalContext.Provider value={{darkMode, setDarkMode, changeMood, data, user, setUser}}>
            {children}
        </GlobalContext.Provider>
    )
}

