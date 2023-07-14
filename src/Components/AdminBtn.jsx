import { GlobalContext } from '../Context/GlobalContext'
import React, { useContext, useState } from 'react'
import {BsArrowDownCircle} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {BiLogOutCircle} from 'react-icons/bi'
import {BiLogIn} from 'react-icons/bi'
import { Util } from '../Utils/Util'

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
        <div onClick={toggleOpen} className="click">{data.userName} <BsArrowDownCircle/></div>
        <ul className={open ? 'ul-dropdown' : ''}>
            <li onClick={logOut}>Log Out <span ><BiLogOutCircle/></span></li>
            <li className='dash'><NavLink to={'/dashboard'}>DashBoard</NavLink></li>
        </ul>
    </div>
       )
    }else{
       return <NavLink to={'/login'} className={"login"}><BiLogIn className="i mx-3" /></NavLink>
    }
 }
 return(
    <>
        {Btn()}
    </>
 )
}

export default AdminBtn