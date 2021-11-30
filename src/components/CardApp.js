import React,{useState} from 'react'
import "./CardApp.css"
import Menu from "../MenuAPI.js"
import NavBar from "./NavBar"
import MenuCard from "./MenuCard"



const CardApp = () => {
    const uList=[...new Set(
        Menu.map((curr)=>{
            return curr.category;
        })
    ),"All"]
    var categories="All Items";
    const [cat,setCat]=useState(categories);
    const [menuData,setMenuData]=useState(Menu);
    const [uniqueList,setUniqueList]=useState(uList);
    const setFilter=(categ)=>{  
        if(categ==="All"){
            setMenuData(Menu);
            setCat("All Items");        
        }
        else{
        const updatedList=Menu.filter((curr)=>{
            return curr.category===categ;
        });
        setCat(categ);   
        setMenuData(updatedList)
        }
    }
    return (
        <>
        <NavBar setFilter={setFilter} uniqueList={uniqueList}/>
        <MenuCard menuData={menuData} cat={cat}/>
        </>
    )
}

export default CardApp
