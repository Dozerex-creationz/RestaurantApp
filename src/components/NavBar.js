import React from 'react'
import "./NavBar.css"

const NavBar = ({setFilter,uniqueList}) => {  


    return (
        <>
        <div className="nav">
        <div className="bar">   
        {
            uniqueList.map((curr)=>{
                return (
                   
                    <button className="menuItem" id={curr} onClick={()=>setFilter(curr)}>{curr}</button>
                    
                );
            })
        }
        </div>
        </div>
        </>
    )
}

export default NavBar
