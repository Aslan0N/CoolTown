import React, { useContext, useState } from 'react'
import { Util } from '../Utils/Util'
import { NavLink } from 'react-router-dom'
import {BiLogIn} from 'react-icons/bi'
import {BsArrowDownCircle} from 'react-icons/bs'
import { GlobalContext } from '../Context/GlobalContext'

const AdminBtn = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () =>{
        setOpen(!open)
    }

    // LogOut
    const logOut = () =>{
        localStorage.removeItem('User')
        window.location.reload();
    }
 const Btn = () =>{
    const {data} = useContext(GlobalContext)
    if(Util()){
       return (
        <div className="dropDown">
        <div className="click"><NavLink to={'/admin'}>{data.userName} <BsArrowDownCircle onClick={toggleOpen}/></NavLink></div>
        <ul className={open ? 'ul-dropdown' : ''}>
            <li onClick={logOut}>Log Out</li>
            <li><NavLink to={'/dashboard'}>DashBoard</NavLink></li>
        </ul>
    </div>
       )
    }else{
       return <NavLink to={'/login'}><BiLogIn className="i mx-3" /></NavLink>
    }
 }
 return(
    <>
        {Btn()}
    </>
 )
}

export default AdminBtn