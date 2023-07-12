import { useEffect, useState } from "react";
import { createContext } from "react";
import { useWishlist } from "react-use-wishlist";


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode")))
    useEffect(()=>{
        localStorage.setItem("DarkMode", darkMode)
    },[darkMode])

    const [myData, setMyData] = useState([])

    const changeMood = () =>{
        setDarkMode((value)=> !value)
        // window.location.reload()
    }
    const data = JSON.parse(localStorage.getItem("User"));

    const [user, setUser] = useState({
        userName:"",
        password:""
    })
    const {items} = useWishlist()
    const myArray = [...new Map(items.map((item) => [item.id, item])).values()];

    return(
        <GlobalContext.Provider value={{darkMode, setDarkMode, changeMood, data, user, setUser, myArray, myData, setMyData}}>
            {children}
        </GlobalContext.Provider>
    )
}

